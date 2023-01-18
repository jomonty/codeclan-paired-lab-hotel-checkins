const BookingCard = ({booking, removeBooking}) => {
    return (
        <>
        <p>Customer name: {booking.name}</p>
        <p>Customer email: {booking.email}</p>
        <p>Checked in? {booking.checkedIn}</p>
        <button onClick={() => removeBooking(booking._id)}> 🗑 </button>

        </>
    )
};

export default BookingCard;