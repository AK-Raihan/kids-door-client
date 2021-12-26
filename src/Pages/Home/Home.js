import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Classes from '../Services/Classes/Classes';
import Teachers from '../Teachers/Teachers';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Classes></Classes>
            <Teachers></Teachers>
            <Contact></Contact>
        </div>
    );
};

export default Home;