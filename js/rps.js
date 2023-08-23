// Select index.html properties which we need to use
const DFCBTN = document.querySelector("#difficulty");
const DFCS = document.querySelector("#difficultys");

// Want to be sure buttons are created once
let buttonsCreated = false;

function selectDifficulty() {
  createDifficultyButtons();
}

// Create difficulty buttons function
const createDifficultyButtons = () => {
  if (!buttonsCreated) {
    let normalDifficulty = document.createElement("button");
    let hardcoreDifficulty = document.createElement("button");
    normalDifficulty.classList.add("button");
    hardcoreDifficulty.classList.add("button", "hardcore");
    normalDifficulty.innerHTML = "Normal";
    hardcoreDifficulty.innerHTML = "Hardcore";
    DFCS.append(normalDifficulty);
    DFCS.append(hardcoreDifficulty);

    buttonsCreated = true;
    removeDifficultyButtons();
  }
};

const removeDifficultyButtons = () => {
  document.querySelectorAll("#difficultys button").forEach((item) => {
    item.addEventListener("click", removeElement(item));
  });
};

// Function to remove element
const removeElement = (element) => element.remove();
