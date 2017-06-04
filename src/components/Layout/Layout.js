import React from "react";
import NavbarContainer from "../Navbar/NavbarContainer.js";
import LeftMenuContainer from "../LeftMenu/LeftMenuContainer.js";

import { BodyContainer } from 'material-ui-responsive-drawer'

const Layout = ({
    children
}) => (
    <div>
        <NavbarContainer />

        <BodyContainer style={{marginTop: 64}}>            
            <LeftMenuContainer />
            {children}
        </BodyContainer>
    </div>
);

export default Layout;