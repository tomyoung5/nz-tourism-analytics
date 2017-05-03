import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';

const styles = {
  cross: {
    cursor: 'pointer',
    color: '#303030',
    marginTop: 12,
  },
};

const LeftMenu = ({visibility, toggleLeftMenu}) => (
    <Drawer open={visibility}>
        <AppBar 
            iconElementRight={<CloseIcon style={styles.cross} />}
            showMenuIconButton={false}
            onRightIconButtonTouchTap={toggleLeftMenu}

        />
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
    </Drawer>
);

export default LeftMenu;
