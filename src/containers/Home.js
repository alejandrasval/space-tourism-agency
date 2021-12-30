import React from 'react'
import HomeContent from '../components/HomeContent';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="bg-background1 bg-cover w-full text-white lg:h-screen overflow-hidden">
            <Navbar />
            <HomeContent />
        </div>
    )
}

export default Home;
