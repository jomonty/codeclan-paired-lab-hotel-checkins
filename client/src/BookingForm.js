import { useState } from "react";
import { postBooking } from "./BookingService";

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false,
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
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
            checkedIn: false,
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
                <label htmlFor="checkedIn">Checked-In:</label>
                <input
                    type="checkbox"
                    id="checkedIn"
                    name="checkedIn"
                    value={formData.checkedIn} />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    )
};




export default BookingForm;