//Links nav menu activated
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

//Activate Items Oraçamento
const filterProduct = new URLSearchParams(location.search);

function activateProduct(item) {
  const elementCheck = document.getElementById(item);
  if (elementCheck) {
    elementCheck.checked = true;
  }
}

filterProduct.forEach(activateProduct);

//Frequent questions show/hide
const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventQuestions(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventQuestions);
