import recipes from "./recipes.js";
import searchRecipes from "./searchRecipes.js";
import filterDropdown from "./searchInDropdown.js";
/*
*filter ingredients from recipes 
*
*@return {void}
*/
const filterIngredients =()=>{
  /* array contain all ingredients from recipes */
  const ingredients=new Array();
  /* array contain uniqe value of ingredients  (values with out reapt) */
  const uniqeIngredients=new Array();
  /* if the user donsn't enter any word for search or charecter less from 3
   get all ingredints of recipes and push to ingredients array */
  const searchInput=document.getElementById("searchBar");
  if((searchInput.value).length<3){
    recipes.forEach(element=>{
      const allIngredients=element.ingredients;
      allIngredients.forEach(ele=>{
        ingredients.push((ele.ingredient).toLowerCase());
      });
    });
  /* else get ingredients from recipes of search result and push to ingredients*/
  }else{
    const searchResult=searchRecipes(searchInput.value);
    searchResult.forEach(element=>{
      const allIngredients=element.ingredients;
        allIngredients.forEach(ele=>{
          ingredients.push((ele.ingredient).toLowerCase());
        })
    })
  }
  
/* filter ingredients and push to array uniqeIngredients */
  ingredients.forEach(ele=>{
    if(!uniqeIngredients.includes(ele)){
      uniqeIngredients.push(ele);
    }
  });
  /* create link of dropdown item  */ 
  let ingredientHTML="";
  uniqeIngredients.forEach(element=>{
    ingredientHTML+=`<a href="#" class="dropdown-item item-ingredients">${element}</a>`
  });
  const div=  document.querySelector(".ingredient");
  div.innerHTML=ingredientHTML;

/* search in input of ingredient */ 
  const input =document.querySelector(".ingredient-input");
  const dropdownItems=document.querySelectorAll(".item-ingredients");
  input.addEventListener("keyup",()=>{
  filterDropdown(input.value,dropdownItems);
});
}

export default filterIngredients;