const loggedReducer = (state = false, action) => {
    switch(action.type){
        case "loginout":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;