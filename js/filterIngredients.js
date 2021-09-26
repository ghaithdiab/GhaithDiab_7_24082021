import filterDropdown from "./searchInDropdown.js";
import advanceSearch from "./AdvanceSearch.js";
/*
* filter ingredients from array or recipes or result of search 
*
* Cearte dropdown item 
*
* call function search advance on event click (dropdown item)
* 
* call function search inside dropdown 
*
*@param{Array} recipes or result of search as an array 
*
*@return {void}
*/
const filterIngredients=(array)=>{
   /* array contain all ingredients from paramter array */
  
    const ingredients=new Array();
  
    /* array contain uniqe value of ingredients  (values with out reapt) */

    const uniqeIngredients=new Array();

    array.forEach(element => {
      const allIngredients=element.ingredients;
      allIngredients.forEach(ele=>{
        ingredients.push((ele.ingredient).toLowerCase());
      })
    });
    /* filter ingredients and push to array uniqeIngredients */

  ingredients.forEach(ele=>{
    if(!uniqeIngredients.includes(ele)){
      uniqeIngredients.push(ele);
      }
    })
    /* create links of dropdown items  */ 

  let ingredientHTML="";
  uniqeIngredients.forEach(element=>{
    ingredientHTML+=`<a href="#" class="dropdown-item item-ingredients">${element}</a>`
  });
  const div=  document.querySelector(".ingredient");
  div.innerHTML=ingredientHTML;

   /* add event to items */

  const item=document.querySelectorAll(".item-ingredients");
  item.forEach(ele=>{ele.addEventListener("click",()=>{advanceSearch(ele);})});

  /* search in input of ingredient */ 

  const input =document.querySelector(".ingredient-input");
  const dropdownItems=document.querySelectorAll(".item-ingredients");
  input.addEventListener("keyup",()=>{
  filterDropdown(input.value,dropdownItems);
});
}

export default filterIngredients;