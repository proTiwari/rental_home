import React from 'react';
import NavBar from '../components/HomePageComponents/NavBar';
import SearchBar from '../components/HomePageComponents/SearchBar';
import RandomVideoSugessions from '../components/HomePageComponents/RandomVideoSugessions';


function HomePage() {
    return (
        <div>
            <NavBar />
            <SearchBar />
            <RandomVideoSugessions />
            
        </div>
    )
}

export default HomePage
