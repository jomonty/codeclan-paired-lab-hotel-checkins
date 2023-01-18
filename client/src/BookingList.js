import BookingCard from './BookingCard';

const BookingList = ({bookings, removeBooking, updateBooking }) => {
    if (!bookings) return <h2>Loading</h2>
    const bookingList = bookings.map((booking) => {
        return (
            <BookingCard booking={booking} removeBooking={removeBooking} key={booking._id} updateBooking={updateBooking} />
        )
    });
    return (
        <>
            {bookingList}
        </>
    )
}

export default BookingList;