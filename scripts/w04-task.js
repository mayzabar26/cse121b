/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mayza Costa Barbosa",
    photo: "images/mayza.jpg",
    favoriteFoods: [
        "Pizza",
        "French Fries",
        "Açai",
        "Lasagna",
        "Feijoada",
        "Ice Cream",
        "Spaghetti"
    ],

    hobbies: [
        "Reading",
        "Drawing",
        "Listening to music",
        "Watching movies and series"
    ],

    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "São Luís, MA",
        length: "7 years",
    },
    {
        place: "São José de Ribamar, MA",
        length: "19 years",
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */ 
// Defining the event using createElement method
document.body.onload = function(){
    let dlElement = document.getElementById("places-lived");

    //Creating the dl and dd elements
    myProfile.placesLived.forEach(function(place) {
        let dtElement = document.createElement("dt");
        dtElement.textContent = place.place;

        let ddElement = document.createElement("dd");
        ddElement.textContent = place.length;

        //Adding the text node to the created element
        dlElement.appendChild(dtElement);
        dlElement.appendChild(ddElement);
    });
};