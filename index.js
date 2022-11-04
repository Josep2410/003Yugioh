const ygoDB = [
  {
    name: "dark magician", 
    monsterArt: "images/Monsters/darkMagician.png", 
    type: "vanilla", 
    level: "7",
    attribute: "dark",
    attack: 2500,
    defense: 2100, 
  },  
  {
    name: "dark magician girl", 
    monsterArt: "images/Monsters/DarkMagicianGirl.jpg", 
    type: "effect", 
    level: "6",
    attribute: "dark",
    attack: 2000,
    defense: 1700, 
  }

]

const container = document.querySelector(".container"); 
const levelContainer = document.querySelector(".level-container");

window.addEventListener('DOMContentLoaded', function(){
  displayCards(ygoDB);
  
})



function displayCards(db){
  let cardCatelog = db.map(function(card){
    
    return `<section class="card">
    <div class="image-container">
    <img src="${card.monsterArt}" alt="${card.name}" />
  </div>
  <div class="info-container vanilla-monsters">
    <div class="top-layer">
      <div class="level-container ">
      </div>
      <div class="attribute-container">
        <img src="images/icons/darkAttribute.png" alt="" />
      </div>
    </div>
    <div class="bottom-layer">
      <div class="attack">${card.attack}</div>
      <div class="defense">${card.defense}</div>
    </div>
  </div></section>`;
 
  })

  cardCatelog = cardCatelog.join("");
  container.innerHTML = cardCatelog;

}

function addLevels(level){
for(let i = 0; i < level; i++){
  const levelImg = document.createElement("img");
  levelImg.src = "images/icons/starLevel.png";
  levelContainer.append(levelImg);
}
}

