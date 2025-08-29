import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from "./Navigation.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
     <Navigation/>
   
    </BrowserRouter>

  </StrictMode>,
)
