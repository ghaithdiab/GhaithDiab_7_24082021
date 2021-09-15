import filterIngredients from "./filterIngredients.js";
import filterAppareils from "./filterAppareil.js";
import filterUstensiles from "./filterUstensiles.js";
import functionalityDropdownMenu from "./functionalityDropdownMenu.js";
import searchRecipes from "./searchRecipes.js";
import cartsBuilder from "./cartsBuilder.js";
import recipes from "./recipes.js";


functionalityDropdownMenu();
filterIngredients();
filterAppareils();
/* creat link for each Ustensiles and append it to dropdown menu*/

const ustensileslDiv=document.querySelector('.ustensiles');
const uniqeUstensiles=filterUstensiles();
uniqeUstensiles.forEach(element=>{
  const createLink=document.createElement("a");
  createLink.setAttribute("class","dropdown-item");
  createLink.setAttribute("href","#");
  createLink.innerText=element;
  ustensileslDiv.appendChild(createLink);
});
cartsBuilder(recipes);
const searchInput=document.getElementById("searchBar");
searchInput.addEventListener("keyup",()=>{
  searchRecipes(searchInput.value);
  filterIngredients();
  filterAppareils();
});
