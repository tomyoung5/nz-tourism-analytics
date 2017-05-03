import React from "react";
import NavbarContainer from "../Navbar/NavbarContainer.js";
import LeftMenuContainer from "../LeftMenu/LeftMenuContainer.js";

const Layout = ({
    children
}) => (
    <div>
        <NavbarContainer />
        <LeftMenuContainer />
        {children}
    </div>
);

export default Layout;