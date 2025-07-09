import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './componemt/common/Foother';
import HomePage from './componemt/home/HomePg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './componemt/common/Foother';
import FindBookingPage from './componemt/booking_rooms/FindBookingPage';
import RoomDetailsPage from './componemt/booking_rooms/RoomDetailsPage';
import AllRoomPage from './componemt/booking_rooms/AllRoomPage';
import LoginPage from './componemt/auth/LoginPage';
import RegisterPage from './componemt/auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/rooms' element={<AllRoomPage />} />
            <Route path='/roon-details-book/:roomId' element={<RoomDetailsPage />} />
            <Route path='/find-booking' element={<FindBookingPage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;