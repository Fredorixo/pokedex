let pokecache = {
    abilities: [
        {
          ability: {
            name: "static"
          }
        }
    ],
    base_experience: 112,
    height: 4,
    name: "pikachu",
    sprites: {
        other: {
            dream_world: {
                front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            }
        }
    },
    stats: [
        {
            base_stat: 35
        },
        {
            base_stat: 55
        },
        {
            base_stat: 40
        }
    ],
    types: [
        {
            type: {
                name: "electric"
            }
        }
    ],
    weight: 60
};

let pokemonName = "";
const section = document.querySelector(".cards");
const errorMessage = document.querySelector(".error");


function addDivToSection() {
    const newDiv = document.createElement("div");
    newDiv.classList.add(pokemonName);
    section.appendChild(newDiv);
}

function attachPokemonImage(image) {
    const newPic = document.createElement("img");
    newPic.setAttribute("src",image);
    newPic.setAttribute("width","200em");
    newPic.setAttribute("height","200em");
    document.querySelector(`.${pokemonName}`).appendChild(newPic);
}

function attachPokemonData(data,attribute) {
    const newPara = document.createElement("p");

    switch (attribute) {
        case "Height":
            newPara.innerHTML = `<span>Height: </span>${data} dm`;
            break;

        case "Weight":
            newPara.innerHTML = `<span>Weight: </span>${data} hg`;
            break;
    
        case "Stat":
            newPara.innerHTML = `<span>Stat: </span>${data}`;
            break;

        case "Ability":
            newPara.innerHTML = `<span>Ability: </span>${data}`;
            break;

        case "Name":
            newPara.innerHTML = `<span>Name: </span>${data}`;
            break;

        default:
            newPara.innerHTML = `${attribute}: ${data}`;
            break;
    }
    
    newPara.classList.add(attribute);
    document.querySelector(`.${pokemonName}`).appendChild(newPara);
}

function statSelector(attack,defense) {
    if(attack >= defense) {
        attachPokemonData("Attack","Stat");
        return;
    }

    attachPokemonData("Defense","Stat");
}

/*
    The setStatsBar helps in setting the width of the bar pertaining
    to a particular attribute, appropriately.
*/

function setStatsBar(stat,value) {
    let index = document.styleSheets[0].cssRules.length;

    if(stat == "EXP") {
        document.styleSheets[0].insertRule(`.${pokemonName} .${stat}:after { 
            content: '${value}';
            width : ${value/608 * 100}%;
        }`
        ,index);

        return;
    }

    if(stat == "HP") {
        document.styleSheets[0].insertRule(`.${pokemonName} .${stat}:after { 
            content: '${value}';
            width : ${value/255 * 100}%;
        }`
        ,index);

        return;
    }

    if(stat == "ATK") {
        document.styleSheets[0].insertRule(`.${pokemonName} .${stat}:after { 
            content: '${value}';
            width : ${value/190 * 100}%;
        }`
        ,index);

        return;
    }

    if(stat == "DEF") {
        document.styleSheets[0].insertRule(`.${pokemonName} .${stat}:after { 
            content: '${value}';
            width : ${value/250 * 100}%;
        }`
        ,index);

        return;
    }
}

function abilitySelector(abilities) {
    let ability = abilities[0].ability.name;

    for(let i=1; i<abilities.length; i++) {
        if(ability.length > abilities[i].ability.name.length) {
            ability = abilities[i].ability.name;
        }
    }

    attachPokemonData(ability,"Ability");
}

function typeConcat(types) {
    const newPara = document.createElement("p");
    newPara.textContent = "Type:";
    newPara.insertAdjacentHTML("beforeend",
        `<span>${types[0].type.name} ${iconify(types[0].type.name)}</span>`
    );
    
    if(types.length == 1) {
        newPara.classList.add("Type");
        document.querySelector(`.${pokemonName}`).appendChild(newPara);
        return;
    }

    for(let i=1; i<types.length; i++) {
        newPara.insertAdjacentHTML("beforeend",
            `<span>${types[i].type.name} ${iconify(types[i].type.name)}</span>`
        );
    }

    newPara.classList.add("Type");
    document.querySelector(`.${pokemonName}`).appendChild(newPara);
}

function iconify(pokemonType) {
    switch (pokemonType) {
        case "normal":
            return "<i class=\"far fa-star\"></i>";

        case "fighting":
            return "<i class=\"fas fa-fist-raised\"></i>";

        case "flying":
            return '<i class="fas fa-feather-alt"></i>';

        case "rock":
            return '<span class="material-icons-round">landscape</span>';

        case "ghost":
            return '<i class="fas fa-ghost"></i>';

        case "steel":
            return '<i class="fas fa-weight-hanging"></i>';

        case "fire":
            return '<i class="fas fa-burn"></i>';

        case "water":
            return '<i class="fas fa-tint"></i>';

        case "grass":
            return '<i class="fas fa-leaf"></i>';

        case "electric":
            return '<i class="fas fa-bolt"></i>';

        case "poison":
            return '<i class="fas fa-skull-crossbones"></i>';

        case "ground":
            return '<span class="material-icons-round">bubble_chart</span>';

        case "bug":
            return '<i class="fas fa-bug"></i>';

        case "psychic":
            return '<i class="fas fa-eye"></i>';

        case "ice":
            return '<i class="far fa-snowflake"></i>';

        case "dragon":
            return '<i class="fas fa-dragon"></i>';

        case "dark":
            return '<i class="fas fa-moon"></i>';

        case "fairy":
            return '<i class="fas fa-magic"></i>';
    }
}

function setBackgroundColor(pokemonType) {
    let card = document.querySelector(`.${pokemonName}`);

    switch (pokemonType) {
        case "normal":
            card.style.background = "linear-gradient(63.59deg, #C1C190 0%, #AAAA7C 98.96%)";
            card.style.color = "#4F4F00";
            break;

        case "fighting":
            card.style.background = "linear-gradient(63.59deg, #AC4F47 40.63%, #903028 100%)";
            card.style.color = "#FFC0BB";
            break;

        case "flying":
            card.style.background = "linear-gradient(63.59deg, #AE9EEC 0%, #8F79D3 100%)";
            card.style.color = "#230092";
            break;

        case "rock":
            card.style.background = "linear-gradient(63.59deg, #D8BC56 0%, #BBA441 100%)";
            card.style.color = "#4D3F00";
            break;

        case "ghost":
            card.style.background = "linear-gradient(63.59deg, #705898 0%, #644F88 100%)";
            card.style.color = "#F9D1FF";
            break;

        case "steel":
            card.style.background = "linear-gradient(63.59deg, #B1B1A9 0%, #9C9CA9 100%)";
            card.style.color = "#606060";
            break;

        case "fire":
            card.style.background = "linear-gradient(63.59deg, #F48B30 0%, #F4745B 100%)";
            card.style.color = "#4F1600";
            break;

        case "water":
            card.style.background = "linear-gradient(63.59deg, #7FB1E5 0%, #6890F0 100%)";
            card.style.color = "#00308A";
            break;

        case "grass":
            card.style.background = "linear-gradient(63.59deg, #ACEB67 0%, #7ACC51 100%)";
            card.style.color = "#215300";
            break;

        case "electric":
            card.style.background = "linear-gradient(63.59deg, #F8D233 0%, #EEEA6B 100%)";
            card.style.color = "#4A4300";
            break;

        case "poison":
            card.style.background = "linear-gradient(63.59deg, #BB61BB 54.17%, #A040A0 100%)";
            card.style.color = "#FFD0FF";
            break;

        case "ground":
            card.style.background = "linear-gradient(63.59deg, #E6CF6D 0%, #E0C068 100%)";
            card.style.color = "#433300";
            break;

        case "bug":
            card.style.background = "linear-gradient(63.59deg, #D3DC2F 0%, #C2CA3C 100%)";
            card.style.color = "#414500";
            break;

        case "psychic":
            card.style.background = "linear-gradient(63.59deg, #FA9AB6 0%, #F85B89 100%)";
            card.style.color = "#530018";
            break;

        case "ice":
            card.style.background = "linear-gradient(63.59deg, #98D8D8 0%, #63BDBD 100%)";
            card.style.color = "#004646";
            break;

        case "dragon":
            card.style.background = "linear-gradient(63.59deg, #9A71FF 0%, #8558F2 100%)";
            card.style.color = "#1E0067";
            break;

        case "dark":
            card.style.background = "linear-gradient(63.59deg, #9B775F 30.73%, #705848 100%)";
            card.style.color = "#FFEBDD";
            break;

        case "fairy":
            card.style.background = "linear-gradient(63.59deg, #F8A0E0 0%, #E271C3 100%)";
            card.style.color = "#50003A";
            break;
    }
}

function createPokemonCard(pokemon) {
    pokecache = {...pokemon};
    pokemonName = pokemon.name;

    addDivToSection();
    attachPokemonData(pokemon.height,"Height");
    attachPokemonData(pokemon.weight,"Weight");
    attachPokemonData(pokemon.name,"Name");
    statSelector(pokemon.stats[1].base_stat,pokemon.stats[2].base_stat);
    abilitySelector(pokemon.abilities);

    typeConcat(pokemon.types);
    setBackgroundColor(pokemon.types[0].type.name);

    /*
        Since the Pokemon API doesn't have an svg image for every pokemon, hence
        a fallback has been created regarding those pokemons which don't have an svg image, to
        fetch the png alternative.
    */

    if(pokemon.sprites.other.dream_world.front_default) {
        attachPokemonImage(pokemon.sprites.other.dream_world.front_default);
    } else {
        attachPokemonImage(pokemon.sprites.other["official-artwork"].front_default);
    }

    attachPokemonData("","HP");
    attachPokemonData("","ATK");
    attachPokemonData("","DEF");
    attachPokemonData("","EXP");

    setStatsBar("HP",pokemon.stats[0].base_stat);
    setStatsBar("ATK",pokemon.stats[1].base_stat);
    setStatsBar("DEF",pokemon.stats[2].base_stat);
    setStatsBar("EXP",pokemon.base_experience ? pokemon.base_experience : 100);
}

// Showing a default pokemon as Pikachu

createPokemonCard(pokecache);


// pokemonDictionary for pokemons that have been incorrectly named.

function pokemonDictionary(pokemonName) {
    switch (pokemonName) {
        // Colour Blue
        case "wishiwashi":
            return "wishiwashi-solo";

        case "zacian":
            return "zacian-hero";

        case "eiscue":
            return "eiscue-ice";

        case "meowstic":
            return "meowstic-male";

        case "thundurus":
            return "thundurus-incarnate";

        // Colour Black
        case "giratina":
            return "giratina-altered";

        // Colour Gray
        case "urshifu":
            return "urshifu-single-strike";

        // Colour Brown
        case "aegislash":
            return "aegislash-shield";

        case "landorus":
            return "landorus-incarnate";

        case "pumpkaboo":
            return "pumpkaboo-average";

        case "minior":
            return "minior-red-meteor";

        case "gourgeist":
            return "gourgeist-average";

        case "lycanroc":
            return "lycanroc-midday";

        // Colour Purple
        case "toxtricity":
            return "toxtricity-amped";

        case "indeedee":
            return "indeedee-male";

        // Colour White
        case "meloetta":
            return "meloetta-aria";

        // Colour Yellow
        case "mimikyu":
            return "mimikyu-disguised";

        case "keldeo":
            return "keldeo-ordinary";

        // Colour Green
        case "wormadam":
            return "wormadam-plant";

        case "shaymin":
            return "shaymin-land";

        case "basculin":
            return "basculin-red-striped";

        case "tornadus":
            return "tornadus-incarnate";

        // Color Red
        case "darmanitan":
            return "darmanitan-standard";

        case "deoxys":
            return "deoxys-normal";

        case "oricorio":
            return "oricorio-baile";

        case "zamazenta":
            return "zamazenta-hero"
    
        default:
            return pokemonName;
    }
}

function skipPokemon(pokemonName) {
    switch (pokemonName) {
        // Type Fairy
        case "floette-eternal":

        // Type Poison
        case "eternatus-eternamax":

        // Type Electric
        case "pikachu-cosplay":
        case "vikavolt-totem":

        // Type Water
        case "greninja-battle-bond":

        // Type Fire
        case "darmanitan-zen-galar":

        // Type Steel
        case "magearna-original":

        // Type Ghost
        case "mimikyu-busted":
        case "mimikyu-totem-busted":

        // Type Normal
        case "gumshoos-totem":

        // Type Flying
        case "minior-violet":
        case "minior-indigo":
        case "minior-blue":
        case "minior-yellow":
        case "minior-orange":
        case "minior-violet-meteor":
        case "minior-indigo-meteor":
        case "minior-blue-meteor":
        case "minior-green-meteor":
        case "minior-yellow-meteor":
        case "minior-orange-meteor":
        case "minior-green":
            return [];
    
        default:
            return [pokemonName];
    }
}