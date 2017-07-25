let defaultState = {
    color: "blue",
    name: ""
}

const mainReducer = (state = defaultState, action)=> {
console.log(action)
    if(action.type === "CHANGE_COLOR") {
        if(action.color === "#") {
            return{
                ...state,
                color: "red",
                name: action.name
            }
        }else {
            return {
            ...state,
            color: action.color,
            name: action.name
            
            
        }
        }
   
    } else {
        return {
        ...state
    }
}
}

export default mainReducer;