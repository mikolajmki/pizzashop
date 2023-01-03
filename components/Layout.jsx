import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";

export default function Layout(props){
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    )
};