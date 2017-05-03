export default function reducer(state={
    visibility:false
}, action) {
    switch(action.type) {
        case "TOGGLE_LEFT_MENU_VISIBILITY": {
            return {...state, visibility: !state.visibility};
        }
    }
    return state;
}