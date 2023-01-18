import { deleteBooking, putBooking } from './BookingService';

const BookingCard = ({booking, removeBooking, updateBooking }) => {

  const handleUpdate = () => {
    const updatedBooking = {...booking};
    updatedBooking.checked_in = !updatedBooking.checked_in;
    putBooking(updatedBooking)
      .then((data) => {
        updateBooking(data);
      })
  }

  const handleDelete = () => {
    deleteBooking(booking._id)
      .then(() => {
          removeBooking(booking._id)
      })
  };

  return (
    <>
    <p>Customer name: {booking.name}</p>
    <p>Customer email: {booking.email}</p>
    <p>Checked in? {booking.checked_in ? 'true' : 'false'}</p>
    <button onClick={() => handleUpdate()}>Check {booking.checked_in ? 'Out' : 'In'}</button>
    <button onClick={() => handleDelete()}> 🗑 </button>
    <hr />
    </>
  )
};

export default BookingCard;