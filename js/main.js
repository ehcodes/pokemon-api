document.getElementById("clickMe").onclick = makeReq;

function makeReq(){
  var userName = document.getElementById("userName").value;
  var request = new XMLHttpRequest();
  request.open('GET', '/api?pokemon='+userName, true);

  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("pokemonName").innerHTML = data.name
        document.getElementById("pokemonType").innerHTML = data.type
        document.getElementById("pokemonNumber").innerHTML = data.number
        document.getElementById("pokemonAnimal").innerHTML = data.animal
        document.getElementById("pokemonPhoto").innerHTML = data.photo
      } else {


      }
    };

    request.onerror = function() {

    };

    request.send();
}
