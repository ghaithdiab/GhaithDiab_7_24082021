import recipes from "./recipes.js";
import searchRecipes from "./searchRecipes.js";
import filterDropdown from "./searchInDropdown.js";

/*
* filter appareils from recipes 
*
* @return {void}  
*/
const filterAppareils=()=>{
  /* array contain all appareils from recipes */
  const appareils=new Array();
   /* array contain uniqe value of appareils  (values with out reapt) */
  const uniqeAppareils=new Array();
/* if the user donsn't enter any word for search or charecter less from 3
   get all appareils of recipes and push to appareils array */
const searchInput=document.getElementById("searchBar");
if((searchInput.value).length<3){
  recipes.forEach(element=>{
    appareils.push(element.appliance);
  });
  /* else get appareils from recipes of search result and push to appareils*/
}else{
  const searchResult=searchRecipes(searchInput.value);
  searchResult.forEach(element=>{
    appareils.push((element.appliance).toLowerCase());
  })
}
  /* filter appareils and push to array uniqeAppareils */
  appareils.forEach(ele=>{
    if(!uniqeAppareils.includes(ele)){
      uniqeAppareils.push(ele);
    }
  });
    /* create link of dropdown item  */ 
  let appareilsHTML="";
  uniqeAppareils.forEach(element=>{
    appareilsHTML+=`<a href="#" class="dropdown-item appareil-items">${element}`
  });
  document.querySelector(".appareil").innerHTML=appareilsHTML;

  /* search in input of Appareil */ 
  const input =document.querySelector(".appareil-input");
  const dropdownItems=document.querySelectorAll(".appareil-items");
  input.addEventListener("keyup",()=>{
  filterDropdown(input.value,dropdownItems);
});
}

export default filterAppareils;