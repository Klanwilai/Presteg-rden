export const updateContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();

        firestore.collection('contact').doc('xPrzvg4HVgQXbGTkmNNu').set({
            ...contact
        }).then(() => {
            dispatch({ type: 'UPDATE_CONTACT', contact });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_CONTACT_ERROR', err });
        });

    }
}