import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
import { hideCreateCollectionModal } from '../../actions/ModalActions'


class CreateCollectionModal extends React.Component{

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
          title="Create A Collection"
          actions={actions}
          modal={true}
          open={true}
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
    closeModal: () => dispatch(hideCreateCollectionModal())
  };
} 

//Need to use null to replace mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(CreateCollectionModal);
