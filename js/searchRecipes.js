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
    for(let recipe=0;recipe<recipes.length;recipe++){
      if(recipes[recipe].name.toLowerCase().includes(txtSearchBar)
      ||recipes[recipe].ingredients.find(ele=>ele.ingredient.toLowerCase().includes(txtSearchBar))
      ||recipes[recipe].description.toLowerCase().includes(txtSearchBar)){
        searchResult.push(recipes[recipe]);
      }
    }
    /* build html carts  */
    cartsBuilder(searchResult);
    return searchResult;
  }else{
    cartsBuilder(recipes);
    return recipes;
  }
}
export default searchRecipes;