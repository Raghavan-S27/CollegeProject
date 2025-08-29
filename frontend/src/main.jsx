import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from "./Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from "./Navigation.jsx";
import HomePage from "./HomePage.jsx";
import Profile from "./ProfilePages/Profile.jsx";
import UserProfile from "./ProfilePages/UserProfile.jsx";
import Appointments from "./Appointments/appointments.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navigation/>

  </StrictMode>,
)
