const card = document.querySelector(".card");
const logo = document.querySelector(".logo");
const front = document.querySelector(".front");

// window.load = flipAuto();
  
//   function flipAuto(){
//   card.classList.add("is-flipped");
// }

document.querySelector(".card-container").onclick = function() {
  
  if (card.classList.contains("is-flipped")) {
    card.classList.remove("is-flipped");
    front.style.display = 'block'
    
  } else {
    card.classList.add("is-flipped");
    front.style.display = 'none';
  }
  
}
