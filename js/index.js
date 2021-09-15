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
filterUstensiles();
cartsBuilder(recipes);
const searchInput=document.getElementById("searchBar");
searchInput.addEventListener("keyup",()=>{
  searchRecipes(searchInput.value);
  filterIngredients();
  filterAppareils();
  filterUstensiles();
});
