import React from "react";
import Header from "./Header";
import StoreContext from "../../StoreContext";

const HeaderContainer = () => {
    return (
        <StoreContext.Consumer>
        { (store) => {
                let state = store.getState();
                return <Header headerPanel={state.headerPanel} />
            }
        }
        </StoreContext.Consumer>
    );
}

export default HeaderContainer;