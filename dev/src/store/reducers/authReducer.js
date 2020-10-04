const initState = {
    authError: null

};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return { ...state, 
            authError: null }
        case 'LOGIN_ERROR':
            console.log('Login failed', action.err);
            return { ...state,
            authError: 'Logn failed' }
        case 'SIGNOUT_SUCCESS':
                return state;
        default:
            return state;
    }
}

export default authReducer;