import React from 'react';
import NearbyRoomsSuggestions from '../../components/pageComponents/Home/NearbyRoomsSuggestions';
import Hero from "../../components/pageComponents/Home/Hero";
import UploadYourService from '../../components/pageComponents/Home/UploadYourService';


function HomePage() {
    return (
        <div>
            <Hero />
            <UploadYourService />
            <NearbyRoomsSuggestions />     
        </div>
    )
}

export default HomePage
