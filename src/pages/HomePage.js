import React from 'react';
import NavBar from '../components/HomePageComponents/NavBar';
import SearchBar from '../components/HomePageComponents/SearchBar';
import RandomVideoSugessions from '../components/HomePageComponents/RandomVideoSugessions';
import Footer from '../components/HomePageComponents/Footer';

function HomePage() {
    return (
        <div>
            <NavBar />
            <SearchBar />
            <RandomVideoSugessions />
            <Footer />
        </div>
    )
}

export default HomePage
