let paras;
const burgerIcon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");

const input = document.querySelector("input");
const buttons = document.querySelectorAll(".select_menu button");
const filterButton = buttons[0];
const randomButton = buttons[11];
const recentButton = buttons[12];
const pokeball = document.querySelector(".pokeball");
const pokeballButton = document.querySelector(".pokeball__button");


input.addEventListener("keypress",keys => {
    errorMessage.setAttribute("hidden","");

    if(keys.key == "Enter") {

        // Check if the input field is empty, if it is, then return.

        if(!input.value.trim()) {
            return;
        }

        // Pokeball Shaking Animation

        pokeball.style.animation = "shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite";
        pokeballButton.style.animation = "blink 1.25s ease-in-out infinite alternate";

        /*
            If the pokemon name is called, instead of appending a new pokemon to the
            existing list, the previous ones are removed to add a new ones.
        */

        // Check if a child inside the cards section exists
        // and if it does, then removes it to place a new ones.

        while(section.firstChild) {
            section.removeChild(section.firstChild);
        }

        switch (input.placeholder) {
            case "Search by Type":
                getPokemonbyType(input.value.toLowerCase());
                break;
        
            case "Search by Habitat":
                getPokemonbyHabitat(input.value.toLowerCase());
                break;
        
            case "Search by Color":
                getPokemonbyColour(input.value.toLowerCase());
                break;
        
            case "Search by Shape":
                getPokemonbyShape(input.value.toLowerCase());
                break;
        
            case "Search by Gender":
                getPokemonbyGender(input.value.toLowerCase());
                break;
        
            case "Search by Name":
                getPokemonbyName(input.value.toLowerCase());
                break;
        
            case "Search by Ability":
                getPokemonbyAbility(input.value.toLowerCase());
                break;

            case "Search by Egg Group":
                getPokemonbyEggGroup(input.value.toLowerCase());
                break;

            case "Search by Growth Rate":
                getPokemonbyGrowthRate(input.value.toLowerCase());
                break;
        }  
    }
});

/* 
    The selected value from the select options disappears from the list
    and based on the selection, the placeholder value of the input bar changes.
*/

/*
    Toggle Filter & Suggestion Button to hide or display its sub elements
*/

// Hides all sub elements for Filter by default.

for(let i=1; i<10; i++) {
    buttons[i].setAttribute("hidden","");
}
filterButton.classList.remove("filters");

// Show suggestions for Name by default but hidden

handleSuggestions("Name");
paras = document.querySelectorAll(".select_menu p");
for(let i=0; i<paras.length; i++) {
    paras[i].setAttribute("hidden","");
}

    // For Sub buttons inside filterButton

for(let i=1; i<10; i++) {
    buttons[i].addEventListener("click",(e) => {
        handleSuggestions(buttons[i].textContent);
        paras = document.querySelectorAll(".select_menu p");

        // Change the Placeholder of Input tag accordingly.
        input.placeholder = `Search by ${buttons[i].textContent}`;

        // Hide Sub Filter Buttons after they are clicked.
        for(let i=1; i<10; i++) {
            buttons[i].setAttribute("hidden","");
        }
        filterButton.classList.remove("filters");
    })
}


filterButton.addEventListener("click",() => {
    if(buttons[1].hasAttribute("hidden")) {
        for(let i=1; i<10; i++) {
            buttons[i].removeAttribute("hidden");
        }
        filterButton.classList.add("filters");
    } else {
        for(let i=1; i<10; i++) {
            buttons[i].setAttribute("hidden","");
        }
        filterButton.classList.remove("filters");
    }
});

suggestButton.addEventListener("click",() => {
    if(paras) {
        if(paras[0].hasAttribute("hidden")) {
            for(let i=0; i<paras.length; i++) {
                paras[i].removeAttribute("hidden");
            }
        } else {
            for(let i=0; i<paras.length; i++) {
                paras[i].setAttribute("hidden","");
            }
        }
    }
});

randomButton.addEventListener("click",() => {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    input.value = "";
    let randomNumber = Math.floor(Math.random() * 898) + 1;

    getPokemonbyName(randomNumber)
});

recentButton.addEventListener("click",() => {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    input.value = "";
    if(pokecache) {
       createPokemonCard(pokecache);
    }
});

/*
    When the Pokeball is clicked, the the shaking animation is played and when the animation
    completes, the animation is removed, so that when it is clicked again, the animation can be
    re-applied.
*/

pokeball.addEventListener("click",() => {
    errorMessage.setAttribute("hidden","");

    // Check if the input field is empty. White spaces not allowed

    if(!input.value.trim()) {
        return;
    }

    pokeball.style.animation = "shake 1.25s cubic-bezier(.36,.07,.19,.97) 1";
    pokeballButton.style.animation = "blink 1.25s ease-in-out 1 alternate";

    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    switch (input.placeholder) {
        case "Search by Type":
            getPokemonbyType(input.value.toLowerCase());
            break;
    
        case "Search by Habitat":
            getPokemonbyHabitat(input.value.toLowerCase());
            break;
    
        case "Search by Color":
            getPokemonbyColour(input.value.toLowerCase());
            break;
    
        case "Search by Shape":
            getPokemonbyShape(input.value.toLowerCase());
            break;
    
        case "Search by Gender":
            getPokemonbyGender(input.value.toLowerCase());
            break;
    
        case "Search by Name":
            getPokemonbyName(input.value.toLowerCase());
            break;
    
        case "Search by Ability":
            getPokemonbyAbility(input.value.toLowerCase());
            break;

        case "Search by Egg Group":
            getPokemonbyEggGroup(input.value.toLowerCase());
            break;

        case "Search by Growth Rate":
            getPokemonbyGrowthRate(input.value.toLowerCase());
            break;
    }
});

// For Smooth Functioning

pokeball.addEventListener("animationend",() => {
    pokeball.style.animation = "";
    pokeballButton.style.animation = "";
});

function stopPokeballAnimation() {
    pokeball.style.animation = "";
    pokeballButton.style.animationIterationCount = 1;
}

// Burger Icon for Sidebar

burgerIcon.addEventListener("click",() => {
    sidebar.classList.toggle("faze-in");

    if(burgerIcon.style.color == "white") {
        burgerIcon.style.color = "#e83e34";
    } else {
        burgerIcon.style.color = "white";
    }
});