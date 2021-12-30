import React from 'react'
import CrewContent from '../components/CrewContent';
import Navbar from '../components/Navbar';

const Crew = () => {
    return (
        <div className="bg-background3 bg-cover w-full text-white lg:h-screen overflow-hidden">
            <Navbar />
            <CrewContent />
        </div>
    )
}

export default Crew;
