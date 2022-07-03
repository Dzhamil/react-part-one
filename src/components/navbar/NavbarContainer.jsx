import React from "react";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
        { (store) => {
                let state = store.getState();
                return  <Navbar navbarPanel={state.navbarPanel}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default NavbarContainer;