let defaultState = {
    names: ""
}

const mainReducer = (state= defaultState, action)=> {
    if(action.type === MAKE_NAME) {
        let namesArr = [action.names.name1, action.names.name2, action.names.name3];
        let randomNum = Math.floor(Math.random() * namesArr.length);
        return {
            ...state,
            names: namesArr[randomNum]
        }
        } else {
            return{
            ...state
            }
        }
    }

export default mainReducer