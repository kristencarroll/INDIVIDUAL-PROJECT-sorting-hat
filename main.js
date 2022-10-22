//Initialize an array of objects that represent first year students
const firstYears = [
  {
    id: 1,
    name: "Kristen",
    house: "Hufflepuff"
  },
  {
    id: 2,
    name: "Jack",
    house: "Gryffindor",
  },
  {
    id: 3,
    name: "Alma",
    house: "Ravenclaw",
  },
  {
    id: 4,
    name: "Jackson",
    house: "Slytherin",
  }
];
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv =document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (firstYears) => {
  let domString = "";
  for (const student of firstYears) {
    domString += `<div class="card" style="width: 18rem;">
    <h5 class="card-title">${student.name}</h5>    
    <img src=${student.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
        <p class="card-text">${student.house}</p>
        <button class="btn btn-danger" id="delete--${student.id}">Expel!</button>
        </div>
      </div>`;
    };
    renderToDom("#app",domString);
  };

  const enterFormChamber = document.querySelector("#welcome-card")

  enterFormChamber.addEventListener("click", () => {
    return cardsOnDom(firstYears)
  });
