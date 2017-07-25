let defaultState = {
    text: ""
}

const mainReducer = (state = defaultState, action)=> {
    if (action.type === "YODA_SPEAK") {
        return {
            ...state,
            text: action.text
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;