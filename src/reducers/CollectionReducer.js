export default function reducer(state={
    //Array in the store that holds the permits
    collections: [],
}, action) {
    switch(action.type) {

        case "FETCH_COLLECTIONS_DONE": {
            //For each item in the collections array add the property popoverVisibility and set it to false
            let withVisibility = action.payload.map((collection) => {
                collection.popoverVisibility = false;
                collection.checked = false;
                collection.favourited = false;
                return collection;
            })
            return {...state, collections: withVisibility};
        }
        
        case "TOGGLE_COLLECTION_CHECKBOX": {
            const newCollections = state.collections.map((collection) => {
                if (collection.id === action.collectionId) {
                    collection.checked = !collection.checked;
                }
                return collection;
            });

            return {...state, collections: newCollections};
        }

        case "TOGGLE_COLLECTION_FAVOURITE": {
            const newCollections = state.collections.map((collection) => {
                if (collection.id === action.collectionId) {
                    collection.favourited = !collection.favourited;
                }
                return collection;
            });

            return {...state, collections: newCollections};
        }
        
    }
    return state;
}
