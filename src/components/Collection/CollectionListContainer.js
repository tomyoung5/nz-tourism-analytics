import { connect } from "react-redux";
import CollectionList from './CollectionList';


const mapStateToProps = (store) => {
    return {
        collections: store.collectionReducer.collections
    };
};


const CollectionListContainer = connect(
    mapStateToProps
)(CollectionList);

export default CollectionListContainer;