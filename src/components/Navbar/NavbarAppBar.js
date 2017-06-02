import React from "react";
import FlatButton from 'material-ui/FlatButton';
import TimeLine from 'material-ui/svg-icons/action/timeline';

import { ResponsiveAppBar } from 'material-ui-responsive-drawer'

import styles from './NavbarAppBar.scss';

const NavbarAppBar = ({toggleLeftMenu}) => (
    
    <ResponsiveAppBar
        title={
                <div>
                    <span>New Zealand Tourism Analytics</span>
                    <TimeLine className="timeline"/>
                </div>
                }
        onLeftIconButtonTouchTap={toggleLeftMenu}
        titleStyle={{textAlign: 'center'}}
    />
);

export default NavbarAppBar;