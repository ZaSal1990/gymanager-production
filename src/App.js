import './App.scss';
import Booking from './components/component_booking/Booking';
import GymCapacity from './components/component_capacity/GymCapacity';
import Navigation from './components/Navigation';
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BulletinBoardProvider from './providers/BulletinBoardProvider';
import { loginButtonContext } from './providers/LoginButtonProvider';
import ContactUs from './components/component_contact/ContactUs';

function App() {

  const { user } = useContext(loginButtonContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        {user !== "" && <BulletinBoardProvider>
          <Routes>
            <Route path='/' element={<GymCapacity />} />
            <Route path='/book' element={<Booking />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
        </BulletinBoardProvider>}
      </div>
    </BrowserRouter>
  );
}

export default App;
