import recipes from "./recipes.js";

/*
*filter ingredients from recipes 
*
*@return {Array}
*/
const filterIngredients =()=>{
  /* array contain all ingredients from recipes */
  const ingredients=new Array();
  /* array contain uniqe value of ingredients  (values with out reapt) */
  const uniqeIngredients=new Array();
  /* put all ingredients for each recipe in our array(ingredients) */
  recipes.forEach(element=>{
    const allIngredients=element.ingredients;
    allIngredients.forEach(ele=>{
      ingredients.push((ele.ingredient).toLowerCase());
    });
  });
/* filter ingredients and push to array uniqeIngredients */
  ingredients.forEach(ele=>{
    if(!uniqeIngredients.includes(ele)){
      uniqeIngredients.push(ele);
    }
  });

  return uniqeIngredients;
}

export default filterIngredients;