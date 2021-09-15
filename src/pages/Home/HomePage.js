import React from 'react';
import NearbyRoomsSuggestions from '../../components/pageComponents/Home/NearbyRoomsSuggestions';
import Hero from "../../components/pageComponents/Home/Hero";
import SearchBar from "../../components/molecules/searchBar";


function HomePage() {
    return (
        <div>
            <Hero />
            <NearbyRoomsSuggestions />
            
        </div>
    )
}

export default HomePage
