//Initialize an array of objects that represents first year students
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
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (firstYears) => {
  let domString = `<div class="student=form">
    <input type="text" class="form-control" id="name placeholder="Name" required>
    <label for="floatingInput">Name</label>
  </div>`;
  for (const student of firstYears) {
    domString += `<div class="student-cards">
      <h2 class="student-card-name">${student.name}</h2>
      <div class="student-card-house">
        <p class="student-house">${student.house}</p>
        <button class="btn btn-danger' id="delete--${student.id}">Expel!</button>
      </div>
    </div>`;
  };
  renderToDom("#form", domString)
};

const sortingFormButton = document.querySelector("#enter-button")

sortingFormButton.addEventListener("click", () => {
  //console.log("Something")
  return cardsOnDom(firstYears)
});
