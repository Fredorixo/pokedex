const getPokemonbyName = async (pokemonName) => {
    try {
        let pokemon= pokemonDictionary(pokemonName);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let data = await response.json();
        createPokemonCard(data);
        stopPokeballAnimation();
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

/*
    For Filters, we need to first map only those names into the pokemonNames array whose response
    is returned successfully by the pokemon end-point. For this purpose we use FlatMaps that help us
    filter those out.
*/

// For pokemonColour, the names returned where different from those registered with the pokemon end-point.

const getPokemonbyColour = async (pokemonColour) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${pokemonColour}`);
        let data = await response.json();

        let pokemonNames = data.pokemon_species.map(pokemon => pokemonDictionary(pokemon.name));

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

// For pokemonType, there was redundancy and also pokemons that had no svg or artwork representation.

const getPokemonbyType = async (pokemonType) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
        let data = await response.json();

        let pokemonNames = data.pokemon.flatMap(pokemon => skipPokemon(pokemon.pokemon.name));

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

const getPokemonbyAbility = async (pokemonAbility) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/ability/${pokemonAbility}`);
        let data = await response.json();

        let pokemonNames = data.pokemon.flatMap(pokemon => skipPokemon(pokemon.pokemon.name));

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

const getPokemonbyHabitat = async (pokemonHabitat) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${pokemonHabitat}`);
        let data = await response.json();

        let pokemonNames = data.pokemon_species.map(pokemon => {
            // Habitat Rare
            if(pokemon.name == "deoxys") {
                return "deoxys-normal";
            } else {
                return pokemon.name;
            }
        });

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

// For pokemonShape, the names returned where different from those registered with the pokemon end-point.

const getPokemonbyShape = async (pokemonShape) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-shape/${pokemonShape}`);
        let data = await response.json();

        let pokemonNames = data.pokemon_species.map(pokemon => pokemonDictionary(pokemon.name));

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

const getPokemonbyEggGroup = async (pokemonEggGroup) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/egg-group/${pokemonEggGroup}`);
        let data = await response.json();

        let pokemonNames = data.pokemon_species.map(pokemon => pokemonDictionary(pokemon.name));

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

// The pokemonNames returned are around 700, hence we choose only 50 random out of them.

const getPokemonbyGender = async (pokemonGender) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/gender/${pokemonGender}`);
        let data = await response.json();
        
        let pokemonNames = [];
        let index;

        switch (pokemonGender) {
            case "male":
                index = Math.floor(Math.random() * 694);
                break;

            case "female":
                index = Math.floor(Math.random() * 704);
                break;

            case "genderless":
                index = Math.floor(Math.random() * 72);
                break;
        }

        for(let i = index; i< index + 50; i++) {
            pokemonNames.push(
                pokemonDictionary(data.pokemon_species_details[i].pokemon_species.name)
            );
        }

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}

// Picking Randomly from Responses with Bigger Sets and as it is from Smaller Sets.

const getPokemonbyGrowthRate = async (pokemonGrowthRate) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/growth-rate/${pokemonGrowthRate}`);
        let data = await response.json();
        
        let pokemonNames = [];
        let index;

        switch (pokemonGrowthRate) {
            case "slow":
                index = Math.floor(Math.random() * 143);
                for(let i=index; i<index + 62; i++) {
                    pokemonNames.push(
                        pokemonDictionary(data.pokemon_species[i].name)
                    );
                }

                break;

            case "medium":
                index = Math.floor(Math.random() * 309);
                for(let i=index; i<index + 62; i++) {
                    pokemonNames.push(
                        pokemonDictionary(data.pokemon_species[i].name)
                    );
                }

                break;

            case "medium-slow":
                index = Math.floor(Math.random() * 159);
                for(let i=index; i<index + 62; i++) {
                    pokemonNames.push(
                        pokemonDictionary(data.pokemon_species[i].name)
                    );
                }

                break;
        
            default:
                pokemonNames = data.pokemon_species.map(pokemon => pokemonDictionary(pokemon.name));
                break;
        }

        let promises = pokemonNames.map(pokemonName => {
            return (
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                    stopPokeballAnimation();
                })
            );
        });

        let results = await Promise.allSettled(promises);
    } catch {
        handleError();
        stopPokeballAnimation();
    }
}