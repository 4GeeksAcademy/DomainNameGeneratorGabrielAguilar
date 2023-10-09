import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

window.onload = generateExcuse();

function getElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  return `${getElement(who)} ${getElement(action)} ${getElement(
    what
  )} ${getElement(when)}`;
}

const excuseElement = document.getElementById("excuse");

const randomExcuse = generateExcuse();
excuseElement.textContent = randomExcuse;
