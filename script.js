
// People activating part

let peopleSearchButton = document.getElementById("peopleSearch")
peopleSearchButton.addEventListener("click",peopleSearch)

function peopleSearch(){
    fetch("https://swapi.dev/api/people") 
    .then((res) => res.json())
    .then(function(data){
        console.log(data);
        displayResults(data);
    })
} 
function displayResults(data){
    while(results.firstChild){
        results.removeChild(results.firstChild)
    }       
    for (p of data.results){
        let name = document.createElement("p");
        name.innerHTML = p.name;
        results.appendChild(name);
    }
}

// Planet activating part

let planetsSearchButton = document.getElementById("planetsSearch")
planetsSearchButton.addEventListener("click",planetSearch)

function planetSearch(){
    fetch("https://swapi.dev/api/planets")
    .then((res)=> res.json())
    .then(function(data){
        console.log(data);
        displayResults (data);
    })
}

// Starships activating part

let starshipsSearchButton = document.getElementById ("starshipsSearch")
starshipsSearchButton.addEventListener ('click', starshipsSearch)

function starshipsSearch(){
    fetch("https://swapi.dev/api/starships")
    .then((res)=> res.json())
    .then (function(data){
        console.log(data);
        displayResults (data);
    })
}

// Species activating part

let speciesSearchButton = document.getElementById ("speciesSearch")
speciesSearchButton.addEventListener ('click', speciesSearch)

function speciesSearch(){
    fetch("https://swapi.dev/api/species")
    .then((res)=> res.json())
    .then (function(data){
        console.log(data);
        displayResults (data);
    })
}

