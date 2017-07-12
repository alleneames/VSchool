let defaultState = {
    counter: 0
}

const mainReducer = (state = defaultState, action)=> {
    if(action.type === "ADD" ) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type === "SUB") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;