import React from "react";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
       <Header headerPanel={props.state.headerPanel} />
    );
}

export default HeaderContainer;