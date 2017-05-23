import React from "react";
import { browserHistory } from 'react-router'; 

//Material UI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import LocationPin from 'material-ui/svg-icons/communication/location-on';
import Home from 'material-ui/svg-icons/action/home';

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

    linkTo = (url) => {
        this.props.toggleLeftMenu()
        browserHistory.push(url);        
    };

    render(){
        const { visibility, toggleLeftMenu } = this.props
        return(
            <Drawer 
                open={visibility}
                docked={false}
                onRequestChange={toggleLeftMenu}
                >
                <AppBar 
                iconElementRight={<CloseIcon style={styles.cross} />}
                showMenuIconButton={false}
                onRightIconButtonTouchTap={toggleLeftMenu}
                />

                <List>
                    <ListItem primaryText="Home" onTouchTap={() => this.linkTo('/')} leftIcon={<Home />} />
                </List>
                <Divider />
                <List>
                    <ListItem primaryText="Auckland" onTouchTap={() => this.linkTo('auckland')} leftIcon={<LocationPin />} />
                    <ListItem primaryText="Waikato" onTouchTap={() => this.linkTo('waikato')} leftIcon={<LocationPin />} />
                    <ListItem primaryText="Wellington" onTouchTap={() => this.linkTo('wellington')} leftIcon={<LocationPin />} />
                    <ListItem primaryText="West Coast" onTouchTap={() => this.linkTo('west-coast')} leftIcon={<LocationPin />} />
                    <ListItem primaryText="Queenstown" onTouchTap={() => this.linkTo('queenstown')} leftIcon={<LocationPin />} />
                </List>
            </Drawer>
        )
    }

}

export default LeftMenu;
