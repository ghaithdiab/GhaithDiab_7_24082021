import recipes from "./recipes.js";
import cartsBuilder from "./cartsBuilder.js";

/** 
  * search in recipes 
  * @param {string} inputValue
  * @return {array} recipes
*/
const searchRecipes=(txtSearchBar)=>{
  // transfer letters to small 
  txtSearchBar=txtSearchBar.toLowerCase();

// create array contain result of search
  const searchResult=[];

// search start whene user entre more from 2 character
  if(txtSearchBar.length >= 3){
    for(let recipe=0;recipe<recipes.length;recipe++){
      if(recipes[recipe].name.toLowerCase().includes(txtSearchBar)
      ||recipes[recipe].ingredients.find(ele=>ele.ingredient.toLowerCase().includes(txtSearchBar))
      ||recipes[recipe].description.toLowerCase().includes(txtSearchBar)){
        searchResult.push(recipes[recipe]);
      }
    }
   // no result found 
    if(searchResult.length==0){
      let paragraph="";
      paragraph+=`<p>« Aucune recette ne correspond à votre critère… vous pouvez
      chercher « tarte aux pommes », « poisson », etc.</p>`;
      document.getElementById("carts").innerHTML=paragraph;
      return searchResult;
    }else{
     // build carts
      cartsBuilder(searchResult);
      return searchResult;
    }
  }else{
    cartsBuilder(recipes);
    return recipes;
  }
}
export default searchRecipes;