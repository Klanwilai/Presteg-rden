

const eventReducer = (state = null, action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            console.log('created event', action.event);
            return state;
        case 'CREATE_EVENT_ERROR':
            console.log('create event error', action.err);
            return state;
        case 'DELETE_EVENT':
            console.log('event deleted');
            return state;
        case 'DELETE_EVENT_ERROR':
            console.log('delete event error', action.err);
            return state;
        default:
            return state;
    }
}

export default eventReducer;