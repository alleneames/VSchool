let defaultState = {
    events: [],
    guests: [],
    token: ""
}

const mainReducer = (state = defaultState, action)=> {
    if(action.type === "SET_EVENTS") {
        return {
            ...state,
            events: action.data
        }
    } else if(action.type === "SET_GUESTS") {
        return {
            ...state,
            guests: action.data
        }
    } else if(action.type === "SET_TOKEN") {
        console.log(action.token);
        return {
            ...state,
            token: action.token
        }
    } else {
        return {
            ...state
        }
    }

}

export default mainReducer;