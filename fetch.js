// Import the 'https' module for making HTTPS requests
const https = require('https');

// Function to fetch data from a given URL
function fetchData (url) {
    https.get (url, (response) => {
        let data = '';

        // Handle incoming data in chunks
        response.on( 'data', (chunk) => {   
            data += chunk;
        });

        // Handle the end of the response
        response.on('end', () => {
            // Parse the JSON response
            const pokemonData = JSON.parse(data);

            // Extract the names of the first 10 Pokémon
            const pokemonNames = pokemonData.results.slice(0, 10).map(pokemon => pokemon.name);
            
            // Display the names of the first 10 Pokémon
            console.log(pokemonNames);
        });
    }).on('error', (err) => {
        console.error('Error fetching data:', err);
    });
}

// Call the fetchData function with the URL of the Pokémon API  
fetchData('https://pokeapi.co/api/v2/pokemon');