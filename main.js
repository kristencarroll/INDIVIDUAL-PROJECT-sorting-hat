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

const voldemortsArmy = [];
const studentHouses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender;
};

const firstYearsCardsOnDom = (firstYears) => {
  let domString = "";
  
  for (const student of firstYears) {
    domString += `<div class="student-cards">
      <h2 class="student-card-name">${student.name}</h2>
      <div class="student-card-house">
        <p class="student-house">${student.house}</p>
        <button class="btn btn-danger' id="delete--${student.id}">Expel!</button>
      </div>
    </div>`;
  }
  renderToDom("#cards", domString);
}

const voldemortsArmyCardsOnDom = (firstYears) => {
  let domString = "";
  
  for (const student of firstYears) {
    domString += `<div class="student-cards">
      <h2 class="student-card-name">${student.name}</h2>
      <div class="student-card-house">
        <p class="student-house">${student.house}</p>
        <button class="btn btn-danger' id="delete--${student.id}">Expel!</button>
      </div>
    </div>`;
  }
  renderToDom("#cards", domString);
}

const formOnDom = () => {
  const domString = ` <div class="form-floating mb-3">
  <input type="text" class="form-control" id="name" placeholder="Name" required>
  <label for=""floatingInput>Name</label>
</div>
<button type="submit" class="btn btn-success" id="form-submit">Sort!</button>`;

renderToDom("#form", domString);
}

const formStarter = () => {
  const domString = `<form>
  <button type="button" class="btn btn-info" id="sort-student">Sort!</button>
</form>`

renderToDom("#form", domString);
}


const firstYearsFilter = (array, studentHouse) => {
  const firstYearsArray = [ ];

  for (const student of array) {
    if (student.house === studentHouse)
      firstYearsArray.push(student);
    }
  return firstYearsArray
}


const formLogic = () => {

  const form = document.querySelector("#form")

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newStudentObj = {
      id: firstYears.length + 1,
      name: document.querySelector("#name").value,
      house: studentHouses[Math.floor(Math.random() * studentHouses.length)],
    };
  
    firstYears.push(newStudentObj);
    firstYearsCardsOnDom(firstYears);
  
    
    form.reset();
  })
}
//form.addEventListener("submit", addNewStudent)
const buttonClickAddForm = () => {
  document.querySelector("#enter-button").addEventListener('click', formOnDom);
}

const expelStudent = () => {  
  const studentCards = document.querySelector("#cards");

  studentCards.addEventListener("click", (event) => {

  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");

    const index = firstYears.findIndex(event => event.id === Number(id));
    
    const expelledStudent = firstYears.splice(index, 1);

    voldemortsArmy.push(expelledStudent[0]);

    
    
    firstYearsCardsOnDom(firstYears);
    voldemortsArmyCardsOnDom(voldemortsArmy)
    }
  })
};
expelStudent();



const allFirstYears = document.querySelector("#allFirstYears")
const gryffindorButton = document.querySelector("#gryffindor")
const ravenclawButton = document.querySelector("#ravenclaw")
const hufflepuffButton = document.querySelector("#hufflepuff")
const slytherinButton = document.querySelector("#slytherin")

allFirstYears.addEventListener("click", () => {
  return firstYearsCardsOnDom(firstYears)
});

gryffindorButton.addEventListener("click", () => {
  const gryffindorList = firstYearsFilter(firstYears, "Gryffindor");
  firstYearsCardsOnDom(gryffindorList);
});

ravenclawButton.addEventListener("click", () => {
  const ravenclawList = firstYearsFilter(firstYears, "Ravenclaw");
  firstYearsCardsOnDom(ravenclawList);
});

hufflepuffButton.addEventListener("click", () => {
  const hufflepuffList = firstYearsFilter(firstYears, "Hufflepuff");
  firstYearsCardsOnDom(hufflepuffList);
});

slytherinButton.addEventListener("click", () => {
  const slytherinList = firstYearsFilter(firstYears, "Slytherin");
  firstYearsCardsOnDom(slytherinList);
});

const startApp = () => {
  firstYearsCardsOnDom(firstYears);
  formStarter();
  buttonClickAddForm();
  formLogic();
  
}
startApp();
