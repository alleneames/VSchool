import axios from "axios";

export function loadEvents() {
    return(dispatch)=> {
        return axios.get("http://localhost:8080/hotel/events").then((response)=> {
            dispatch(setEvents(response.data.data));
        }).catch((err)=> {
            throw err;
        });
    }
}

export function loadGuests(token) {
    return(dispatch)=> {
        return axios.get("http://localhost:8080/hotel/guests", {headers: {Authorization: `Bearer ${token}`}}).then((response)=>{
            dispatch(setGuests(response.data.data));
        }).catch((err)=> {
            throw err;
        });
    }
}

export function setEvents(data) {
    return {
        type: "SET_EVENTS",
        data
    }
}

export function setGuests(data) {
    return {
        type: "SET_GUESTS",
        data
    }
}

export function login(username, password) {
    return(dispatch)=> {
        return axios.post("http://localhost:8080/auth/login", {username, password}).then((response)=> {
            dispatch(setToken(response.data.token));
        }).catch((err)=> {
            alert("username or password was incorrect");
            throw err;
        })
    }
}

export function setToken(token) {
    return{
        type: "SET_TOKEN",
        token
    }
}

export function signup(username, password) {
    return(dispatch)=> {
        return axios.post("http://localhost:8080/auth/signup", {username, password}).then((response)=> {
            alert("Your account has been created!")
        }).catch((err)=> {
            alert("That username is taken already!");
            throw err;
        })
    }
}