const suggestButton = document.querySelector(".suggestions");

let suggestionForName = [
    "bulbasaur","charmeleon","squirtle","metapod","kakuna",
    "pidgey","raticate","shuckle","ursaring","magcargo",
    "spearow","ekans","pikachu","sandslash","nidoqueen",
    "clefable","ninetales","jigglypuff","gloom","diglett"
];

let suggestionForType = [
    "normal","fighting","flying","rock","ghost",
    "steel","fire","water","grass","electric",
    "poison","ground","bug","psychic","ice",
    "dragon","dark","fairy"
];

let suggestionForColor = [
    "black","blue","brown","gray","green",
    "pink","purple","red","white","yellow"
];

let suggestionForGender = [
    "male","female","genderless"
];

let suggestionForShape = [
    "ball","squiggle","fish","arms","blob",
    "upright","legs","quadruped","wings","tentacles",
    "heads","humanoid","bug-wings","armor"
];

let suggestionForHabitat = [
    "cave","forest","grassland","mountain","rare",
    "rough-terrain","sea","urban","waters-edge"
];

let suggestionForAbility = [
    "stench","drizzle","speed-boost","static","volt-absorb",
    "battle-armor","sturdy","damp","limber","sand-veil",
    "water-absorb","oblivious","cloud-nine","compound-eyes","insomnia",
    "color-change","immunity","flash-fire","shield-dust","own-tempo"
];

let suggestionForEggGroup = [
    "monster","water1","bug","flying","ground",
    "fairy","plant","humanshape","water3","mineral",
    "water2","indeterminate","ditto","dragon","no-eggs"
];

let suggestionForGrowthRate = [
    "slow","medium","fast","medium-slow",
    "slow-then-very-fast","fast-then-very-slow"
];

function getSuggestions(filterName) {
    let suggestedArray = [];

    switch (filterName) {
        case "Type":
            for(let i=0; i<suggestionForType.length; i+=3) {
                suggestedArray.push(suggestionForType[Math.floor(Math.random() * 3) + i]);
            }
            return suggestedArray;

        case "Habitat":
            for(let i=0; i<suggestionForHabitat.length; i+=2) {
                if(i == 8) {
                    suggestedArray.push(suggestionForHabitat[i]);
                    break;
                }
                suggestedArray.push(suggestionForHabitat[Math.floor(Math.random() * 2) + i]);
            }
            return suggestedArray;

        case "Color":
            for(let i=0; i<suggestionForColor.length; i+=2) {
                suggestedArray.push(suggestionForColor[Math.floor(Math.random() * 2) + i]);
            }
            return suggestedArray;

        case "Shape":
            for(let i=0; i<suggestionForShape.length; i+=2) {
                suggestedArray.push(suggestionForShape[Math.floor(Math.random() * 2) + i]);
            }
            return suggestedArray;

        case "Gender":
            suggestedArray = [...suggestionForGender];
            return suggestedArray;

        case "Name":
            for(let i=0; i<suggestionForName.length; i+=4) {
                suggestedArray.push(suggestionForName[Math.floor(Math.random() * 4) + i]);
            }
            return suggestedArray;

        case "Ability":
            for(let i=0; i<suggestionForAbility.length; i+=4) {
                suggestedArray.push(suggestionForAbility[Math.floor(Math.random() * 4) + i]);
            }
            return suggestedArray;

        case "Egg Group":
            for(let i=0; i<suggestionForEggGroup.length; i+=3) {
                suggestedArray.push(suggestionForEggGroup[Math.floor(Math.random() * 3) + i]);
            }
            return suggestedArray;

        case "Growth Rate":
            suggestedArray = [...suggestionForGrowthRate];
            return suggestedArray;
    }
}

/*
    Removes the existing paras from the suggestion list, if any
    and adds in the new ones.
*/

function handleSuggestions(filterName) {
    if(paras) {
        for(para of paras) {
            para.parentNode.removeChild(para);
        }
    }

    let suggestedArray = getSuggestions(filterName);

    for(let i=suggestedArray.length - 1; i>=0; i--) {
        suggestButton.insertAdjacentHTML("afterend",
            `<p>${i+1}. ${suggestedArray[i]}</p>`
        );
    }
}

function handleError() {
    errorMessage.removeAttribute("hidden");
}