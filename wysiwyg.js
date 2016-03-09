
//Create a DOM element for each of the objects inside the container. 
//Style your person elements however you like.

//define varibles for input box , people object, the cards to be built
var inputBox = document.getElementById("textBox");
var infoForPeople = document.getElementById("famousPeople");
var cards = document.getElementsByClassName("person");

//buld array of objects for the cards
var cardsforDom = [
  {
    title: "Merchant",
    name: "Harland David Sanders",
    bio: "Looking for Hot Chicken",
    image: "img src=img/Colonel-Sanders.jpg",
    lifespan: {
      birth: 1890,
      death: 1980
    }
  },

  {
    title: "Artist",
    name: "David Lee Roth",
    bio: "I am not Van Halen",
    image: "img src=img/DavidLeeRoth.jpeg",
    lifespan: {
      birth: 1951,
      death: "not yet"
    }
  },

  {
    title: "Sailor",
    name: "Popeye",
    bio: "Kicking Bluto's butt for cans of spinach",
    image: "img src=img/Popeye.png",
    lifespan: {
      birth: 1919,
      death: 1994
    }
  },

  {
    title: "Vee Jay",
    name: "Down Town Julie Brown",
    bio: " WUBBA WUBBA WUBBA",
    image: "img src=img/JulieBrown.jpeg",
    lifespan: {
      birth:1963,
      death:"not yet" 
    }
  }
]
console.log("array of objects", cardsforDom );

//function that builds a card for output the DOM from the array of people provided
function buildCard(infoForPeople, cardsforDom) {
  console.log("im Here in Build Card");
  //string to hold info for DOM  target
  var populateStringFromArray ="";
  for (var i = 0; i < cardsforDom.length; i++) {
    console.log(populateStringFromArray);
    //build the input for the dom  - person header section paragraph footer
    populateStringFromArray += "<person class='person'> <header>" + 
    cardsforDom[i].title +": " +
    cardsforDom[i].name +"</header> <section>" + "<p>" +
    cardsforDom[i].bio + "</p> <" + 
    cardsforDom[i].image + "/>" + "</section> <footer>"+
    cardsforDom[i].lifespan.birth + " - " +
    cardsforDom[i].lifespan.death + "</footer> </person>"; 
  }
  
  infoForPeople.innerHTML += populateStringFromArray;
};

//build the cards.. pass in information array and the dom target
buildCard(infoForPeople, cardsforDom);


// requirement 8. When you click on one of the person elements, 
//a dotted border should appear around it.
function watchTheCardsForInput() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      // Unselects all boxes after click and before the new one is added
      for (var j = 0; j < cards.length; j++) {
          cards[j].classList.remove("dottedBorder");
      }
      //"this" targets cards which is the Constructor
      this.classList.toggle("dottedBorder"); 
      console.log("THIS", this );
      // Requirement 9. When you click on one of the person elements, 
      //the text input should immediately gain focus so that you
      //can start typing.
      inputBox.focus();
        });
    }
}
watchTheCardsForInput();









  










