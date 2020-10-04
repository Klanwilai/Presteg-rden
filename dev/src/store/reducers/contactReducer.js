
const contactReducer = (state = null, action) => {
    switch(action.type) {
        case 'UPDATE_CONTACT':
            console.log('updated contact', action.contact);
            return state;
        case 'UPDATE_CONTACT_ERROR':
            console.log('update contact error', action.err);
            return state;
        default:
            return state;
    }
}

export default contactReducer;