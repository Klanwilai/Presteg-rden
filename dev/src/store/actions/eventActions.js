export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        const firebase = getFirebase();
        const { image, ...eventData } = event;
        // console.log(eventData);
        // console.log(image);

        // Creates ref to the firebase storage
        const ref = firebase.storage().ref('event/' + image.name);
        
        // Uploads image
        ref.put(image).then((e) => {
    
            dispatch({ type: 'UPLOAD_IMAGE', image });
            // If image upload is successfull, add event to the database
            
            ref.getDownloadURL().then((url) => {

                dispatch({ type: 'GET_URL', url });

                firestore.collection('events').add({
                    ...eventData,
                    imageRef: 'event/' + image.name,
                    imageURL: url,
                    createdAt: new Date()
                }).then(() => {
                    dispatch({ type: 'CREATE_EVENT', event });
                }).catch((err) => {
                    dispatch({ type: 'CREATE_EVENT_ERROR', err });
                    // If adding the event fails, delete image
                    ref.delete().then((e) => {
                        dispatch({ type: 'DELETE_IMAGE', image });
                    }).catch((err) => {
                        dispatch({ type: 'DELETE_IMAGE_ERROR', err });
                    });
                });

            }).catch((err) => {
                dispatch({ type: 'GET_URL_ERROR', err });
                console.log("Something went wrong with getting the URL for the image, creation of the event failed");

                // If there's a problem with getting the URL, delete image
                ref.delete().then((e) => {
                    dispatch({ type: 'DELETE_IMAGE', image });
                }).catch((err) => {
                    dispatch({ type: 'DELETE_IMAGE_ERROR', err });
                });
            });
            
        }).catch((err) => {
            dispatch({ type: 'UPLOAD_IMAGE_ERROR', err });
            console.log("Something went wrong with uploading the event image, creation of event failed");
        });

    }
}

export const deleteEvent = (event) => {
    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const ref = firebase.storage().ref(event.imageRef);

        ref.delete().then((e) => {
            dispatch({ type: 'DELETE_IMAGE' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_IMAGE_ERROR', err });
        });

        firestore.collection('events')
        .doc(event.id)
        .delete().then(() => {
            dispatch({ type: 'DELETE_EVENT' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_EVENT_ERROR', err });
        });
        
    }
}