import recipes from "./recipes.js";
import cartsBuilder from "./cartsBuilder.js";
const searchRecipes=(txtSearchBar)=>{
  txtSearchBar=txtSearchBar.toLowerCase();
  const searchResult=[];
  if(txtSearchBar.length >= 3){
    recipes.forEach(element=>{
      if(element.name.toLowerCase().includes(txtSearchBar)
      ||element.ingredients.find(ele=>ele.ingredient.toLowerCase().includes(txtSearchBar))
      ||element.description.toLowerCase().includes(txtSearchBar)){
        searchResult.push(element);
      }
    });
    cartsBuilder(searchResult);
  }else{
    cartsBuilder(recipes);
  }
  return searchResult;
}
export default searchRecipes;