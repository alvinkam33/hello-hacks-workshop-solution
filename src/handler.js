import {
  createPeople,
  readPeople,
  updatePeople,
  deletePeople
} from "./people.js";

const showResult = document.getElementById("result");
const createPeopleForm = document.getElementById("createPeopleForm");
const readPeopleForm = document.getElementById("readPeopleForm");
const updatePeopleForm = document.getElementById("updatePeopleForm");
const deletePeopleForm = document.getElementById("deletePeopleForm");

createPeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = createPeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});

readPeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = readPeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});

updatePeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = updatePeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});

deletePeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = deletePeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});
