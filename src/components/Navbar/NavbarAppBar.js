import React from "react";
import FlatButton from 'material-ui/FlatButton';
import TimeLine from 'material-ui/svg-icons/action/timeline';

import { ResponsiveAppBar } from 'material-ui-responsive-drawer'

import styles from './NavbarAppBar.scss';

const NavbarAppBar = ({toggleLeftMenu}) => (

    <ResponsiveAppBar
        title={
                <div>
                    <span>Tourism NZ Analytics</span>
                    <TimeLine className="timeline"/>
                </div>
                }        
        titleStyle={{textAlign: 'center', fontWeight: 'bold'}}
    />
);

export default NavbarAppBar;