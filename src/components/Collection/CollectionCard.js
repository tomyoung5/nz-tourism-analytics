import React from "react";

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import IconButton from 'material-ui/IconButton';
import VerticalMenu from 'material-ui/svg-icons/navigation/more-vert';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { grey300 } from 'material-ui/styles/colors';

const styles = {
  paper: {
	margin: 8,
	display: 'inline-block',
	position: 'relative',
	cursor: 'pointer',
  },
  topLine: {
    margin: 10,
  },
  bottomLine: {
    margin: 10,
  },
  checkBox: {
    width: 24,
    display: 'inline-block',
  },
  star: {
    width: 24,
    display: 'inline-block',
    marginLeft:5,
  },
  starChecked: {
    fill: 'orange',
  },
  circle: {
  	border: '2px solid red',
  	color: 'red',
  	marginBottom: 10,
    borderRadius: '50%',
    float: 'left',
    minHeight: 50,
    minWidth: 50,
    position: 'relative',
  },
  circleSpan: {
    color: 'inherit',
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  permitsNumber: {
  	display: 'inline-block',
  	backgroundColor: grey300,
  	padding: 4,
  	fontSize: 14,
  	margin: '11px 15px',
  },
  verticalMenu : {
  	position: 'absolute',
  	top: 0,
  	right: 0,
  },
};

export default class CollectionCard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  render(){
    return(
      <Paper style={styles.paper}>
    
        {/*The Checkbox and Star*/}
        <div style={styles.topLine}>
          <Checkbox
            checked={this.props.checked}
            onTouchTap={this.props.handleCheckBoxClick}
            style={styles.checkBox}
          />
          <Checkbox
            checked={this.props.favourited}
            onTouchTap={this.props.handleFavouriteClick}
            style={styles.star}
            checkedIcon={<Star style={styles.starChecked} />}
            uncheckedIcon={<StarBorder />}
          />
        </div>

        {/*The Title, circle and permits*/}
        <div style={styles.bottomLine}>

          <div style={styles.title}>
            {this.props.name}
          </div>

          <div style={styles.circle}>
            <span style={styles.circleSpan}>
              5
            </span>
          </div>

          <span style={styles.permitsNumber}>
            Permits 27
          </span>
        </div>

        {/*Absolute positioned vertical menu*/}
        <IconButton 
          style={styles.verticalMenu}
          onTouchTap={this.handleTouchTap}
        >
          <VerticalMenu />
        </IconButton>
        
        
        <Popover
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{vertical:'center', horizontal:'middle'}}
          animated={true}
        >
          <Menu>
            <MenuItem primaryText="Example 1" />
            <MenuItem primaryText="Example 2" />
            <MenuItem primaryText="Example 3" />
          </Menu>
        </Popover>

      </Paper>
      );    

  }

}