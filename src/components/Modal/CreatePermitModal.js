import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
import { hideCreatePermitModal } from '../../actions/ModalActions'

const style = {
  width: '80%',
  maxWidth: 'none',
};

class CreatePermitModal extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.props.closeModal}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create A Permit"
          actions={actions}
          modal={true}
          open={true}
          contentStyle={style}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    closeModal: () => dispatch(hideCreatePermitModal())
  };
} 

//Need to use null to replace mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(CreatePermitModal);
