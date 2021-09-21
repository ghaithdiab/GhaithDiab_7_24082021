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
const item=document.querySelectorAll(".dropdown-item");
const tagsContainer=document.querySelector("#tags-contanier");
item.forEach(element=>{
  element.addEventListener('click',()=>{
    let tagHTML="";
    tagHTML+=`<div class="tag">
      ${element.innerText}
    <button class="close-tag">
      <i class="far fa-times-circle"></i>
    </button>
  </div>`
  tagsContainer.innerHTML+=tagHTML;
  const divTag=document.querySelectorAll('.close-tag');
  divTag.forEach(ele=>{
    ele.addEventListener('click',()=>{
      ele.parentElement.remove();
  })
  })
  });
});
const searchInput=document.getElementById("searchBar");
searchInput.addEventListener("keyup",()=>{
  searchRecipes(searchInput.value);
  filterIngredients();
  filterAppareils();
  filterUstensiles();
});
