import recipes from "./recipes.js";
import filterIngredients from "./filterIngredients.js";
import filterAppareils from "./filterappareils.js";
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
