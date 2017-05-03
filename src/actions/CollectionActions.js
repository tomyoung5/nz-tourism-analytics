//axios is an ajax library
import axios from 'axios';

//Goes to the config.js file to get global variable
import { baseUrl } from '../config.js';


export function fetchCollections() {
    return function(dispatch) {
        axios.get(baseUrl+"/api/collections") //Chose the method to go to server and attach correct url
            .then((response) => {
                dispatch({type: "FETCH_COLLECTIONS_DONE", payload: response.data}) //Goes to the permitReducer..
            })            
            .catch((err) => {
                dispatch({type: "FETCH_COLLECTIONS_ERROR", payload: err})	//If there is an error
            });
    }
}


export function toggleCheckBoxAtStore(id){
	return {
		type: 'TOGGLE_COLLECTION_CHECKBOX',
		collectionId: id
	}
}

export function toggleFavouriteAtStore(id){
	return {
		type: 'TOGGLE_COLLECTION_FAVOURITE',
		collectionId: id
	}
}
