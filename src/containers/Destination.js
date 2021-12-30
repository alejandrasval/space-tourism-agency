import React from 'react'
import DestinationContent from '../components/DestinationContent';
import Navbar from '../components/Navbar';

const Destination = () => {
    return (
        <div className="bg-background2 bg-cover w-full text-white lg:h-screen overflow-hidden">
            <Navbar />
            <DestinationContent />
        </div>
    )
}

export default Destination;
