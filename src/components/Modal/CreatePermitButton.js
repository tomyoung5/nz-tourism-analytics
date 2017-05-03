import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import { showCreatePermitModal } from '../../actions/ModalActions'

const style = {
  margin: 12,
};

const ButtonItem = ({handleClick}) => (
    <RaisedButton 
    	onClick={handleClick} 
    	label="Create Permit" 
    	secondary={true}
        style={style}
    />
)

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(showCreatePermitModal());
        }
    }
};

const CreatePermitButton = connect(
    null,
    mapDispatchToProps
)(ButtonItem);

export default CreatePermitButton;