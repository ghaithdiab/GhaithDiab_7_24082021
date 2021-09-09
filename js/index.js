import recipes from "./recipes.js";
import filterIngredients from "./filterIngredients.js";
import functionalityDropdownMenu from "./functionalityDropdownMenu.js";


functionalityDropdownMenu();

const ingredientsDiv=document.querySelector('.ingredient');
const uniqeIngredients=filterIngredients();
/* creat link for each ingredient and append it to dropdown menu*/
uniqeIngredients.forEach(element=>{
  const createLink=document.createElement("a");
  createLink.setAttribute("class","dropdown-item");
  createLink.setAttribute("href","#");
  createLink.innerText=element;
  ingredientsDiv.appendChild(createLink);
});