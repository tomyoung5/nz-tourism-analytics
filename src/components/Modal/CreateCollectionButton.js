import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import { showCreateCollectionModal } from '../../actions/ModalActions'

const style = {
  margin: 12,
};

const ButtonItem = ({handleClick}) => (
    <RaisedButton 
    	onClick={handleClick} 
    	label="Create Collection" 
    	primary={true}
        style={style}
    />
)

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {        
            dispatch(showCreateCollectionModal());
        }
    }
};

const CreateCollectionButton = connect(
    null,
    mapDispatchToProps
)(ButtonItem);

export default CreateCollectionButton;
