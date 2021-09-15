import recipes from "./recipes.js";
import searchRecipes from "./searchRecipes.js";
/*
* filter Ustensiles from recipes 
*
* @return {void}  
*/
const filterUstensiles=()=>{
  /* array contain all Ustensiles from recipes */
  const ustensiles=new Array();
  /* array contain uniqe value of Ustensiles  (values with out reapt) */
  const uniqeUstensiles=new Array();
  /* if the user donsn't enter any word for search or charecter less from 3
   get all Ustensiles of recipes and push to ustensiles array */
  const searchInput=document.getElementById("searchBar");
  if((searchInput.value).length<3){
    recipes.forEach(element=>{
      const allUstensiles=element.ustensils;
      allUstensiles.forEach(ele=>{
        ustensiles.push(ele);
      });
    });
  /* else get ustensiles from recipes of search result and push to ustensiles*/
  }else{
    const searchResult=searchRecipes(searchInput.value);
    searchResult.forEach(element=>{
      const allUstensiles=element.ustensils;
      allUstensiles.forEach(ele=>{
        ustensiles.push((ele).toLowerCase());
      })
    })
  }
  /* filter Ustensiles and push to array uniqeUstensiles */
  ustensiles.forEach(element=>{
    if(!uniqeUstensiles.includes(element)){
      uniqeUstensiles.push(element);
    }
  });
    /* create link of dropdown item  */ 
  let ustensilesHTML="";
  uniqeUstensiles.forEach(element=>{
    ustensilesHTML+=`<a href="#" class="dropdown-item">${element}</a>`
  });
  document.querySelector(".ustensiles").innerHTML=ustensilesHTML;
}


export default filterUstensiles;