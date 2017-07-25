(let search = (input)=> {
axios.get(`http://swapi.co/api/people/${input}`).then((response)=>{
    document.querySelector("#name").innerHTML = response.data.name;
    document.querySelector("#height").innerHTML = response.data.height;
    document.querySelector("#gender").innerHTML = response.data.gender;
})
};


document.querySelector("#search").addEventListener("keyup", (e)=>{
    console.log(e);
    if(e.key === "Enter") {
        search(e.target.value)
    }
});

