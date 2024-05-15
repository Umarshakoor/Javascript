fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokimonName").value.toLocaleLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok) {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        console.log('data', data.sprites.front_default)
        const pokemonSprite = data.sprites.front_default;
        console.log('pokemonSprite', pokemonSprite);
        const imgElement = document.getElementById("pokemonSprite");
        console.log('img', imgElement);

        imgElement.src = pokemonSprite
        imgElement.style.display = "block";
    }
    catch (error) {
        console.log(error);
    }
}







