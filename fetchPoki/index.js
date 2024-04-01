/* fetch("https://pokeapi.co/api/v2/pokemon/blastoise")
    .then(Response => {
        if (!Response.ok) {
            throw new Error("HTTP error " + Response.status);
        }
        return Response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.error(error);
    }); */
fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokimonName").value.toLocaleLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok) {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_defualt;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite
        imgElement.style.display = "block";
    }
    catch (error) {
        console.log(error);
    }
}