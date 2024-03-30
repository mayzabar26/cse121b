/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList;
//let templeList = [];

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
        imgElement.src = temple.imageURL;
        imgElement.alt = temple.location;

        //appending h3 and img to the article element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        //appending article element to the global templesElement variable
        const templesElement = document.getElementById("temples");
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeList = await response.json();
    displayTemples(templeList);
}


/* reset Function */
const reset = function() {
    const templesElement = document.getElementById("temples");
    templesElement.innerHTML = "";
};

/* filterTemples Function */


getTemples();

/* Event Listener */
