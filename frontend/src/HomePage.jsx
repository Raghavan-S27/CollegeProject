import React from 'react';
import './CSSFolder/home.css';
import NavBar from "./HomePageComponents/NavBar.jsx";
import Hero from "./HomePageComponents/Hero.jsx";
import FeaturedDoctors from "./HomePageComponents/FeaturedDoctors.jsx";
import Footer from "./HomePageComponents/Footer.jsx";
import Overview from "./Overview/Overview.jsx";

const HomePage = () => {
    return (
        <>

        <Hero/>
            <Overview/>
            <FeaturedDoctors/>
        </>

    );
};

export default HomePage;