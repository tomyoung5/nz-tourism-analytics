import React from "react";
import { Link, browserHistory } from 'react-router'; 

//Material UI
import { ResponsiveDrawer } from 'material-ui-responsive-drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import LocationPin from 'material-ui/svg-icons/communication/location-on';
import Home from 'material-ui/svg-icons/action/home';
import Calculator from 'material-ui/svg-icons/hardware/keyboard';

import Logo from './logo.png';


const styles = {
  cross: {
    cursor: 'pointer',
    color: '#303030',
    marginTop: 12,
  },
};

class LeftMenu extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        const { visibility, toggleLeftMenu } = this.props
        return(
            <ResponsiveDrawer>
                
                <AppBar 
                    showMenuIconButton={false} 
                    title={<img style={{width: '100%', marginTop: 9}} src={Logo}/>}
                    titleStyle={{textAlign: 'center'}}
                    />

                {/*<Link to={'/'}>Home</Link>*/}
                <List>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<Home />}>
                            Home
                        </ListItem>
                    </Link>
                </List>
                <Divider />

                <List>
                    <Link to={'spend_calculator'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<Calculator />}>
                            Spend Calculator
                        </ListItem>
                    </Link>
                </List>
                <Divider />

                <List>
                    <Link to={'national'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            National
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link  to={'auckland'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            Auckland
                        </ListItem>
                    </Link>
                    <Link  to={'waikato'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            Waikato
                        </ListItem>
                    </Link>
                    <Link  to={'wellington'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            Wellington
                        </ListItem>
                    </Link>
                    <Link  to={'west-coast'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            West Coast
                        </ListItem>
                    </Link>
                    <Link  to={'queenstown'} style={{textDecoration: 'none'}}>
                        <ListItem leftIcon={<LocationPin />}>
                            Queenstown
                        </ListItem>
                    </Link>
                </List>
            </ResponsiveDrawer>
        )
    }

}

export default LeftMenu;
