import { deleteBooking } from './BookingService';

const BookingCard = ({booking, removeBooking}) => {

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
    <button onClick={() => handleDelete()}> 🗑 </button>
    <hr />
    </>
  )
};

export default BookingCard;