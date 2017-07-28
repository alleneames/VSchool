let defaultState = {
    hits:[
        {
        name: "",
        location: "",
        price: 0,
        wanted: ""
        }
    ]
}

const MAINREDUCER = (state = defaultState, action)=>{
    if(action.type === "SET_DATA") {
        return {
            ...state,
            hits: action.hits
        }
    } else {
        return {
            ...state
        }
    }
}


export default MAINREDUCER