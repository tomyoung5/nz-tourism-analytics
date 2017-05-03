

export function showCreateCollectionModal(){
	return {
		type: 'SHOW_MODAL',
		modalType: 'CREATE_COLLECTION_MODAL'
	}
}

export function hideCreateCollectionModal(){
	return {
		type: 'HIDE_MODAL',
		modalType: 'CREATE_COLLECTION_MODAL'
	}
}


export function showCreatePermitModal(){
	return {
		type: 'SHOW_MODAL',
		modalType: 'CREATE_PERMIT_MODAL'
	}
}

export function hideCreatePermitModal(){
	return {
		type: 'HIDE_MODAL',
		modalType: 'CREATE_PERMIT_MODAL'
	}
}
