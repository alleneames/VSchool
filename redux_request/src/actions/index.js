import axios from "axios";

export function loadColor() {
    return (dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            let color = "#" + response.data.new_color
            let colorName = response.data.colors[0].tags[0]
            colorName = colorName ? response.data.colors[0].tags[0].name : "red"
            dispatch(changeColor(color, colorName));
        });
    }
}


export function changeColor(color, name) {
    return {
        type: "CHANGE_COLOR",
        color: color,
        name: name
    }
}
