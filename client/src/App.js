
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

  const removeBooking = (index) => {
    const newBookings = [...bookings]
    newBookings.splice(index, 1)
    setBookings(newBookings)
  };

  return (
    <>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} removeBooking={removeBooking} />
    </>
  );
}

export default App;
