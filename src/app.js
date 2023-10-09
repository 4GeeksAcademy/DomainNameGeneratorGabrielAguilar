/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#dominio").innerHTML = dominios();

  // Declaramos las listas de pronombres, adjetivos y sustantivos
  function dominios() {
    let pronouns = ["the", "our"];
    let adjectives = ["great", "big"];
    let nouns = ["jogger", "racoon"];

    // Creamos una matriz de nombres de dominio
    let domains = [];

    // Iteramos sobre las listas de pronombres, adjetivos y sustantivos
    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          // sumamos los valores para crear un nombre de dominio
          let dominios = "<br>" + pronoun + adjective + noun + ".com" + "</br>";

          // Agregamos el nombre de dominio a la matriz
          domains.push(dominios);
        }
      }
    }

    // Imprimimos la matriz de nombres de dominio
    console.log(domains);
    return domains;
  }
};
