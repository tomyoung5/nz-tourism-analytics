import { connect } from "react-redux";
//import Navbar from './Navbar.js';
import NavbarAppBar from './NavbarAppBar.js';
import { toggleLeftMenuVisibility } from '../../actions/NavbarActions';

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLeftMenu: () => {
            dispatch(toggleLeftMenuVisibility());
        }
    }
};

const NavbarContainer = connect(
    null,
    mapDispatchToProps,
)(NavbarAppBar);

export default NavbarContainer;