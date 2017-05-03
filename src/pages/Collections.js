import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import CollectionListContainer from '../components/Collection/CollectionListContainer.js';

import ModalRoot from '../components/Modal/ModalRoot';
import CreateCollectionButton from '../components/Modal/CreateCollectionButton';
import CreatePermitButton from '../components/Modal/CreatePermitButton';

const style = {
  margin: 12,
};

const Collections = () => (
    <div>
    	<ModalRoot />
    	
    	<RaisedButton label="Default" style={style} />
	    <CreateCollectionButton />
	    <CreatePermitButton />

        <CollectionListContainer />

        
    </div>
);

export default Collections;