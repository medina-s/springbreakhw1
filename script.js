// let people = document.getElementsByClassName(".people");
// let planets = document.getElementsByClassName(".planets");
// let spaceships = document.getElementsByClassName('.spaceships');
// let species = document.getElementsByClassName(".species");
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
    while(people.firstChild){
        people.removeChild(people.firstChild)
    }
    while(planets.firstChild){
        planets.removeChild(planets.firstChild)
    }
    while(spaceships.firstChild){
        spaceships.removeChild(spaceships.firstChild)
    }
    while(species.firstChild){
        species.removeChild(species.firstChild)
    }
    for (p of data.results){
        let name = document.createElement("p");
        name.innerHTML = p.name;
        people.appendChild(name);
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
        displayResults2 (data);
    })
}

function displayResults2(data){
    while(people.firstChild){
        people.removeChild(people.firstChild)
    }
    while(planets.firstChild){
        planets.removeChild(planets.firstChild)
    }
    while(spaceships.firstChild){
        spaceships.removeChild(spaceships.firstChild)
    }
    while(species.firstChild){
        species.removeChild(species.firstChild)
    }
    for (p of data.results){
        let plan = document.createElement("p");
        plan.innerHTML = p.name;
        planets.appendChild(plan);
    }
}

// Starships activating part

let starshipsSearchButton = document.getElementById ("starshipsSearch")
starshipsSearchButton.addEventListener ('click', starshipsSearch)

function starshipsSearch(){
    fetch("https://swapi.dev/api/starships")
    .then((res)=> res.json())
    .then (function(data){
        console.log(data);
        displayResults3 (data);
    })
}
function displayResults3(data){
    while(people.firstChild){
        people.removeChild(people.firstChild)
    }
    while(planets.firstChild){
        planets.removeChild(planets.firstChild)
    }
    while(spaceships.firstChild){
        spaceships.removeChild(spaceships.firstChild)
    }
    while(species.firstChild){
        species.removeChild(species.firstChild)
    }
    for (p of data.results){
        let space = document.createElement("p");
        space.innerHTML = p.model;
        spaceships.appendChild(space);
    }
}

// Species activating part

let speciesSearchButton = document.getElementById ("speciesSearch")
speciesSearchButton.addEventListener ('click', speciesSearch)

function speciesSearch(){
    fetch("https://swapi.dev/api/species")
    .then((res)=> res.json())
    .then (function(data){
        console.log(data);
        displayResults4 (data);
    })
}
function displayResults4(data){
    while(people.firstChild){
        people.removeChild(people.firstChild)
    }
    while(planets.firstChild){
        planets.removeChild(planets.firstChild)
    }
    while(spaceships.firstChild){
        spaceships.removeChild(spaceships.firstChild)
    }
    while(species.firstChild){
        species.removeChild(species.firstChild)
    }
    for (p of data.results){
        let specie = document.createElement("p");
        specie.innerHTML = p.name;
        species.appendChild(specie);
    }
}

// Adding pagination

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}//5

function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber)
}//5
