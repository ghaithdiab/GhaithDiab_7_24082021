import recipes from "./recipes.js";
import filterIngredients from "./filterIngredients.js";
import filterAppareils from "./filterAppareils.js";
import filterUstensiles from "./filterUstensiles.js";
import functionalityDropdownMenu from "./functionalityDropdownMenu.js";


functionalityDropdownMenu();
/* creat link for each ingredient and append it to dropdown menu*/
const ingredientsDiv=document.querySelector('.ingredient');
const uniqeIngredients=filterIngredients();

uniqeIngredients.forEach(element=>{
  const createLink=document.createElement("a");
  createLink.setAttribute("class","dropdown-item");
  createLink.setAttribute("href","#");
  createLink.innerText=element;
  ingredientsDiv.appendChild(createLink);
});
/* creat link for each appareils and append it to dropdown menu*/

const appareilDiv=document.querySelector('.appareil');
const uniqeAppareil=filterAppareils();
uniqeAppareil.forEach(element=>{
  const createLink=document.createElement("a");
  createLink.setAttribute("class","dropdown-item");
  createLink.setAttribute("href","#");
  createLink.innerText=element;
  appareilDiv.appendChild(createLink);
});
/* creat link for each Ustensiles and append it to dropdown menu*/

const ustensileslDiv=document.querySelector('.ustensiles');
const uniqeUstensiles=filterUstensiles();
uniqeUstensiles.forEach(element=>{
  const createLink=document.createElement("a");
  createLink.setAttribute("class","dropdown-item");
  createLink.setAttribute("href","#");
  createLink.innerText=element;
  ustensileslDiv.appendChild(createLink);
})
