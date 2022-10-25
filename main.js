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
  let domString = "";
  for (const student of firstYears) {
    domString += `<div class="student-cards">
      <h2 class="student-card-name">${student.name}</h2>
      <div class="student-card-house">
        <p class="student-house">${student.house}</p>
        <button class="btn btn-danger' id="delete--${student.id}">Expel!</button>
      </div>
    </div>`;
  };
  renderToDom("#student-cards", domString)
};

const firstYearsFilter = (array, studentHouse) => {
  const firstYearsArray = [ ];

  for (const student of array) {
    if (student.house === studentHouse)
      firstYearsArray.push(student);
  }
  return firstYearsArray
}

const form = document.querySelector("form")

const addNewStudent = (event) => {
  event.preventDefault();

  const newStudentObj = {
    id: firstYears.length + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("#house").value
  }
  firstYears.push(newStudentObj);
  cardsOnDom(firstYears);
  form.reset();
}

form.addEventListener("submit", addNewStudent)

const studentCards = document.querySelector("#student-cards");

studentCards.addEventListener("click", (event) => {

  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");

    const index = firstYears.findIndex(event => event.id === Number(id));
    firstYears.splice(index, 1);

    cardsOnDom(firstYears);
  }
});

//const startApp = () => {
  //cardsOnDom(firstYears);
  //events()
//}
//startApp();

const allFirstYears = document.querySelector("#allFirstYears")
const gryffindorButton = document.querySelector("#gryffindor")
const ravenclawButton = document.querySelector("#ravenclaw")
const hufflepuffButton = document.querySelector("#hufflepuff")
const slytherinButton = document.querySelector("#slytherin")

allFirstYears.addEventListener("click", () => {
  return cardsOnDom(firstYears)
});

gryffindorButton.addEventListener("click", () => {
  const gryffindorList = firstYearsFilter(firstYears, "Gryffindor");
  cardsOnDom(gryffindorList);
});

ravenclawButton.addEventListener("click", () => {
  const ravenclawList = firstYearsFilter(firstYears, "Ravenclaw");
  cardsOnDom(ravenclawList);
});

hufflepuffButton.addEventListener("click", () => {
  const hufflepuffList = firstYearsFilter(firstYears, "Hufflepuff");
  cardsOnDom(hufflepuffList);
});

slytherinButton.addEventListener("click", () => {
  const slytherinList = firstYearsFilter(firstYears, "Slytherin");
  cardsOnDom(slytherinList);
});
