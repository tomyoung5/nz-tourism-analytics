import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TimeLine from 'material-ui/svg-icons/action/timeline';

import styles from './NavbarAppBar.scss';

const NavbarAppBar = ({toggleLeftMenu}) => (
    
    <AppBar
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