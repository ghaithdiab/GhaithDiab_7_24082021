import filterIngredients from "./filterIngredients.js";
import filterAppareils from "./filterAppareil.js";
import filterUstensiles from "./filterUstensiles.js";
import functionalityDropdownMenu from "./functionalityDropdownMenu.js";
import searchRecipes from "./searchRecipes.js";
import cartsBuilder from "./cartsBuilder.js";
import recipes from "./recipes.js";

functionalityDropdownMenu();
filterIngredients(recipes);
filterAppareils(recipes);
filterUstensiles(recipes);
cartsBuilder(recipes);

const searchInput=document.querySelector("#searchBar");
searchInput.addEventListener("keyup",()=>{
  
  filterIngredients(searchRecipes(searchInput.value));
  filterAppareils(searchRecipes(searchInput.value));
  filterUstensiles(searchRecipes(searchInput.value));
});
