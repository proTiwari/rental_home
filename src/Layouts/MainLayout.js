import React from "react";
import NavBar from "../components/molecules/navbar/NavBar";
import Footer from "../components/molecules/footer/Footer";

function MainLayout(props) {
    const { children } = props

    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout