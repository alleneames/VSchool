 //loop through the data
 //create a template for each enemy
 //fill in the appropriate info
 var createHitBox = function (name, image) {
     var colmd4 = document.createElement("div");
     colmd4.setAttribute("class", "col-md-4");

     var hitBox = document.createElement("div");
     hitBox.setAttribute("class", "hit-box");
     hitBox.style.background = "url('" + image + "')";
     hitBox.style.backgroundSize = "cover";
     hitBox.style.backgroundPosition = "center";
     
     var nameBox = document.createElement("div");
     nameBox.setAttribute("class", "name");
     nameBox.innerHTML = name;
     
     hitBox.appendChild(nameBox);
     colmd4.appendChild(hitBox);
     document.querySelector("#hit-list").appendChild(colmd4);
 }

 axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
     var data = response.data;
     for(var i = 0; i < data.length; i++) {
         createHitBox (data[i].name, data[i].image);
     }
     
     //createHitBox("Skinny Pete", "https://nypdecider.files.wordpress.com/2014/08/skinny-pete-the-italian-job.png");

 }).catch(function (err) {
     console.log(err);
 });
