// Oefening 1:

let changecolor = function(event){ // variabel voor de functie gemaakt
  let number = document.getElementById("character"); // variabel voor de toewijzing van de html div
  switch (parseInt(event.key)) { // switch - functie zodat er meerdere "ifs / else" kunnen gemaakt worden
    case 0: // wanneer "0" zal worden ingetypt zal de achtergrond van de div rood worden.
      number.style.backgroundColor="#ff0000"; // kleur toewijzen aan variabel nummer (html-div)
      break;
    case 1:
      number.style.backgroundColor="#ff00f5";
    break;
    case 2:
      number.style.backgroundColor="#0a00ff";
    break;
    case 3:
      number.style.backgroundColor="#00ebff";
    break;
    case 4:
    number.style.backgroundColor="#00ff33";
    break;
    case 5:
    number.style.backgroundColor="#f5ff00";
    break;
    case 6:
    number.style.backgroundColor="#ffcc00";
    break;
    case 7:
    number.style.backgroundColor="#e08181";
    break;
    case 8:
    number.style.backgroundColor="#998d8d";
    break;
    case 9:
    number.style.backgroundColor="#000000";
    break;
  }
}

window.addEventListener ("keypress", changecolor); // functie zodat wanneer de keypress (toets zal worden ingedrukt) de kleur gewijzigd zal worden.

// Oefening 2:

let boven = document.getElementById("up"); // variabel voor ID "up"
let beneden = document.getElementById("down"); // variabel voor ID "down"
let links = document.getElementById("left"); // variabel voor ID "left"
let rechts = document.getElementById("right"); // variabel voor ID "right"

let addClass = function(event){ // class aanmaken
switch (event.key) {
  case "ArrowUp":
    boven.classList.add("bye");
    break;
  case "ArrowDown":
    beneden.classList.add("bye");
  break;
  case "ArrowLeft":
    links.classList.add("bye");
  break;
  case "ArrowRight":
    rechts.classList.add("bye");
    break;
}
}

let removeClass = function(event){ // class verwijderen
switch (event.key) {
  case "ArrowUp":
    boven.classList.remove("bye");
    break;
  case "ArrowDown":
    beneden.classList.remove("bye");
  break;
  case "ArrowLeft":
    links.classList.remove("bye");
  break;
  case "ArrowRight":
    rechts.classList.remove("bye");
    break;
}
}

window.addEventListener("keydown", addClass);
window.addEventListener("keydown", removeClass);