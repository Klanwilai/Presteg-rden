

export const createTimeline = (timeline) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        const { image, ...timelineData } = timeline;
        const ref = firebase.storage().ref('timeline/' + image.name);
        console.log(image);
        console.log(timelineData);

        ref.put(image).then((e) => {

            dispatch({ type: 'UPLOAD_IMAGE', image });

            ref.getDownloadURL().then((url) => {

                dispatch({ type: 'GET_URL', url });

                firestore.collection('timelines').add({
                    ...timelineData,
                    imageRef: 'timeline/' + image.name,
                    imageURL: url,
                    createdAt: new Date()
                }).then(() => {
                    dispatch({ type: 'CREATE_TIMELINE', timeline });
                }).catch((err) => {
                    dispatch({ type: 'CREATE_TIMELINE_ERROR', err });
                    // If adding the event fails, delete image
                    ref.delete().then((e) => {
                        dispatch({ type: 'DELETE_IMAGE', image });
                    }).catch((err) => {
                        dispatch({ type: 'DELETE_IMAGE_ERROR', err });
                    });
                });

            }).catch((err) => {
                dispatch({ type: 'GET_URL_ERROR', err });
                // IF getting URL fails, delete image
                ref.delete().then((e) => {
                    dispatch({ type: 'DELETE_IMAGE', image });
                }).catch((err) => {
                    dispatch({ type: 'DELETE_IMAGE_ERROR', err });
                });
            });

        }).catch((err) => {
            dispatch({ type: 'UPLOAD_IMAGE_ERROR', err });
        });
    }
}

export const addYear = (year) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        

        firestore.collection('years').add({
            year: year
        }).then((e) => {
            dispatch({ type: 'ADD_YEAR', year });
        }).catch((err) => {
            dispatch({ type: 'ADD_YEAR_ERROR', err });
        });

    }
}

export const deleteTimeline = (timeline) => {
    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const ref = firebase.storage().ref(timeline.imageRef);

        ref.delete().then((e) => {
            dispatch({ type: 'DELETE_IMAGE' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_IMAGE_ERROR', err });
        });

        firestore.collection('timelines')
        .doc(timeline.id)
        .delete().then(() => {
            dispatch({ type: 'DELETE_TIMELINE' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_TIMELINE_ERROR', err });
        });
        
    }
}

export const deleteYear = (year) => {
    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('years')
        .doc(year.id)
        .delete().then(() => {
            dispatch({ type: 'DELETE_YEAR' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_YEAR_ERROR', err });
        });
        
    }
}