document.querySelector("#search").addEventListener("click", function() {
    var id = document.querySelector("#pokemon-id").value
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + id);
    xhr.send(null);
    

    
    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if(xhr.readyState == DONE) {
            if(xhr.status == OK) {
                var data = JSON.parse(xhr.responseText);
                
                //pokemon output
                document.querySelector("#name-output").innerHTML = data.name;   
                document.querySelector("#weight-output").innerHTML = data.weight;
                //document.querySelector("#attack-output").innerHTML = #
                document.querySelector("#ability-output").innerHTML = data.abilities[0].ability.name; 
            } else {
                console.log("Err", xhr.status);
            }
        }
    };
});