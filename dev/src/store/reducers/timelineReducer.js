const timelineReducer = (state = null, action) => {
    switch(action.type) {
        case 'ADD_YEAR':
            console.log('added year', action.year);
            return state;
        case 'ADD_YEAR_ERROR':
            console.log('add year error', action.err);
            return state;
        case 'DELETE_YEAR':
            console.log('deleted year');
            return state;
        case 'DELETE_YEAR_ERROR':
            console.log('delete year error', action.err);
            return state;
        case 'CREATE_TIMELINE':
            console.log('timeline created', action.timeline);
            return state;
        case 'CREATE_TIMELINE_ERROR':
            console.log('create timeline error', action.err);
            return state;
        case 'DELETE_TIMELINE':
            console.log('timeline deleted');
            return state;
        case 'DELETE_TIMELINE_ERROR':
            console.log('delete timeline error', action.err);
            return state;
        default:
            return state;
    }
}

export default timelineReducer;