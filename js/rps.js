// Select index.html properties which we need to use
const DFCBTN = document.querySelector("#difficulty");
const DFCS = document.querySelector("#difficultys");
const DFCSBTN = document.querySelector("#difficultys button");

// Want to be sure buttons are created once
let buttonsCreated = false;

function selectDifficulty() {
  createDifficultyButtons();
}

// Create difficulty buttons function
const createDifficultyButtons = () => {
  if (!buttonsCreated) {
    let normalDifficulty = document.createElement("span");
    let hardcoreDifficulty = document.createElement("span");
    normalDifficulty.classList.add("button");
    hardcoreDifficulty.classList.add("button", "hardcore");
    normalDifficulty.innerHTML = "Normal";
    normalDifficulty.setAttribute("id", "normalbtn");
    hardcoreDifficulty.innerHTML = "Hardcore";
    hardcoreDifficulty.setAttribute("id", "hardcorebtn");
    DFCS.append(normalDifficulty);
    DFCS.append(hardcoreDifficulty);

    buttonsCreated = true;
  }
};

document.querySelectorAll("#difficultys button").forEach((item) => {
  let btn = item.parentNode;
  item.addEventListener("click", () => {
    removeElement(btn);
  });
});

// Function to remove element
const removeElement = (element) => element.remove();
