import recipes from "./recipes.js";
import cartsBuilder from "./cartsBuilder.js";

/*
* search in recipes 
*
* @ param{txtsearchBar} value of input 
*
* @return {array} or searchRasult  or all recipes
*/
const searchRecipes=(txtSearchBar)=>{
  /* transfer letters to small */
  txtSearchBar=txtSearchBar.toLowerCase();

/* create array contain result of search */ 
  const searchResult=[];

/* search start whene user entre more from 2 character*/
  if(txtSearchBar.length >= 3){
    recipes.forEach(element=>{
      /* search in name or ingredients or description of recipes*/
      if(element.name.toLowerCase().includes(txtSearchBar)
      ||element.ingredients.find(ele=>ele.ingredient.toLowerCase().includes(txtSearchBar))
      ||element.description.toLowerCase().includes(txtSearchBar)){
      /* add recipes to search result if it found */
        searchResult.push(element);
      }
    });
    /* build html carts  */
    cartsBuilder(searchResult);
    return searchResult;
  }else{
    cartsBuilder(recipes);
    return recipes;
  }
}
export default searchRecipes;