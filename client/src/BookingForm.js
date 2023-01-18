import { useState } from "react";
import { postBooking } from "./BookingService";

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: false
    })

    const onChange = (e) => {
        const newFormData = {...formData};
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onCheckboxChange = (e) => {
        const newFormData = {...formData};
        newFormData.checked_in = e.target.checked
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checked_in: false
        });
    }

    return (
        <form onSubmit={onSubmit} id="booking-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    required />
            </div>
            <div className="formWrap">
                <label htmlFor="checked_in">Checked-In:</label>
                <input
                    onChange={onCheckboxChange}
                    type="checkbox"
                    id="checked_in"
                    name="checked_in"
                    value={formData.checked_in}/>
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    )
};




export default BookingForm;