export const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, islogin: true, user: action.payload.user };
        case "LOGOUT":
            return { ...state, islogin: false, user: null };
        default:
            return state;
    }
};

