const https = require( 'https');

// Function to fetch Pokémon data by name with a promise
function fetchPokemon (pokemonName) {
return new Promise ((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            if (response.statusCode === 200) {
                const pokemonData = JSON.parse(data);
                resolve(pokemonData); // Resolve with the Pokémon data
              } else {
                reject (new Error(`Failed to fetch data. Status code: ${response.statusCode}`)); // Reject with an error message
            }
        });
    }).on('error', (err) => {
        reject(err); // 
    });
});
}


fetchPokemon('pikachu')
.then(pokemon => {
    console.log("Pokémon data fetched successfully:", pokemon);
    // Process the Pokémon data as needed e.g. extract the abilities
    const abilities = pokemon.abilities.map(ability => ability.ability.name);
    console.log("Abilities:", abilities);

    // Return a new value for the next .then()
    return pokemon.types.map(type => type.type.name);   
})
.then(types => {
    console.log("Types:", types);
})
.catch(error => {
  console.error("Error fetching Pokémon data:", error);
}); 