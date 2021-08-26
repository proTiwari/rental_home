import React from 'react';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import NearbyRoomsSuggestions from '../../components/pageComponents/Home/NearbyRoomsSuggestions';
import Hero from "../../components/pageComponents/Home/Hero";
import NavBar from "../../components/molecules/navbar/NavBar";


function HomePage() {
    return (
        <div>
            <Hero />
            <NearbyRoomsSuggestions />
            
        </div>
    )
}

export default HomePage
