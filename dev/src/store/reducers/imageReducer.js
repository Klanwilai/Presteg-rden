

const imageReducer = (state = null, action) => {
    switch(action.type) {
        case 'UPLOAD_IMAGE':
            console.log('uploaded image', action.image);
            return state;
        case 'UPLOAD_IMAGE_ERROR':
            console.log('upload image error', action.err);
            return state;
        case 'DELETE_IMAGE':
            console.log('image deleted');
            return state;
        case 'DELETE_IMAGE_ERROR':
            console.log('delete image error', action.err);
            return state;
        case 'GET_URL':
            console.log('URL gotten', action.url);
            return state;
        case 'GET_URL_ERROR':
            console.log('Did not get URL', action.err);
            return state;
        default:
            return state;
    }
}

export default imageReducer;