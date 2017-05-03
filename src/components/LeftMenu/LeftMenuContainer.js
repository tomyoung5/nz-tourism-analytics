import { connect } from "react-redux";
import LeftMenu from './LeftMenu.js';
import { toggleLeftMenuVisibility } from '../../actions/NavbarActions';

const mapStateToProps = (state) => {
    return {
        visibility: state.leftMenu.visibility
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLeftMenu: () => {
            dispatch(toggleLeftMenuVisibility());
        }
    }
};

const LeftMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);

export default LeftMenuContainer;