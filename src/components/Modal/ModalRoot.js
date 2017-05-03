import React from "react";
import { connect } from "react-redux";

//Import the modals
import CreateCollectionModal from './CreateCollectionModal.js'
import CreatePermitModal from './CreatePermitModal.js'

//Array of the Modals
const MODAL_COMPONENTS = {
  'CREATE_COLLECTION_MODAL': CreateCollectionModal,
  'CREATE_PERMIT_MODAL': CreatePermitModal
  /* other modals */
}


const ModalRoot = ({ modalType }) => {
  //if there is no modal type
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal />
}


export default connect(
  state => state.modalReducer
)(ModalRoot)
