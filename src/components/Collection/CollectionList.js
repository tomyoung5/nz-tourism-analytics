import React, { PropTypes } from 'react';
import { fetchCollections, toggleCheckBoxAtStore, toggleFavouriteAtStore } from '../../actions/CollectionActions.js';
import CollectionCard from './CollectionCard.js';

class CollectionList extends React.Component
{

    mappedCollections(collections) {
        return collections.map((collection) => {
            const toggleCheckBox = (id) => {
                return () => {
                    this.props.dispatch(toggleCheckBoxAtStore(id));
                };
            };

            const toggleFavourite = (id) => {
                return () => {
                    this.props.dispatch(toggleFavouriteAtStore(id));
                };
            };
            return (
                 <CollectionCard 
                    key={collection.id}
                    name={collection.name} 
                    checked={collection.checked}
                    favourited={collection.favourited}
                    handleCheckBoxClick={toggleCheckBox(collection.id)}
                    handleFavouriteClick={toggleFavourite(collection.id)}
                />
                )
        });
    }

    /*
    Run before rendering - This calls an action via dispatch()
    */
    componentDidMount() {
        this.props.dispatch(fetchCollections());
    }

    render() {
        return (            
            <div>                            
                {this.mappedCollections(this.props.collections)}            
            </div>
        );
    }
}

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired
};

export default CollectionList;
