
import { useState, useEffect } from "react";

import './App.css';

import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import { getBookings } from "./BookingService";

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    })

  }, [])

  const addBooking = (booking) => {
    const newBookings = [...bookings, booking]
    setBookings(newBookings)
  }

  const removeBooking = (id) => {
    const newBookings = [...bookings]
    const indexToDel = newBookings.map(s => s._id ).indexOf(id)
    newBookings.splice(indexToDel, 1)
    setBookings(newBookings)
  };

  const updateBooking = (booking) => {
    const newBookings = [...bookings];
    const indexToUpdate = newBookings.map(b => b._id ).indexOf(booking._id);
    newBookings[indexToUpdate] = booking;
    setBookings(newBookings);
  };
  

  return (
    <>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} removeBooking={removeBooking} updateBooking={updateBooking}/>
    </>
  );
}

export default App;
