const initialState = {
  modalType: null,
}

export default function Modal2Reducer(state = initialState, action) {
  switch (action.type) {    
    case 'SHOW_MODAL':
      return {...state, modalType: action.modalType}
    case 'HIDE_MODAL':
      return {...state, modalType: null}
    default:
      return state
  }
}