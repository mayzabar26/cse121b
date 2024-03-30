/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

//empty global array
let templeList;

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        //creating the article element
        const articleElement = document.createElement("article");

        //creating the h3 element 
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        //creating the img element with src, alt, url and location
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        //appending h3 and img to the article element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        //appending article element to the global templesElement variable
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = function() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = () => {
    reset();

    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
        
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(templeList);
    }
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", filterTemples);
getTemples();