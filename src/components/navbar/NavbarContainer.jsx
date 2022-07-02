import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    return (
        <Navbar navbarPanel={props.state.navbarPanel}/>
    );
}

export default NavbarContainer;