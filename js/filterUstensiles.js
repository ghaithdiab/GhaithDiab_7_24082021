import filterDropdown from "./searchInDropdown.js";
import advanceSearch from "./AdvanceSearch.js";
/**
  * filter Ustensiles from array or recipes or result of search 
  *
  * Cearte dropdown item 
  *
  * call function search advance on event click (dropdown item)
  * 
  * call function search inside dropdown 
  *
  *@param {Array} recipes 
  *
  *@return {void}
*/
const filterUstensiles=(array)=>{
  // array contain all Ustensiles from recipes 

  const ustensiles=new Array();

  // array contain uniqe value of Ustensiles  (values with out reapt) 
  const uniqeUstensiles=new Array();

  array.forEach(element=>{
    const allUstensiles=element.ustensils;
    allUstensiles.forEach(ele=>{
      ustensiles.push((ele).toLowerCase());
    })
  });

  ustensiles.forEach(element=>{
        if(!uniqeUstensiles.includes(element)){
          uniqeUstensiles.push(element);
        }
      });
// create links of dropdown items

      let ustensilesHTML="";
        uniqeUstensiles.forEach(element=>{
          ustensilesHTML+=`<a href="#" class="dropdown-item ustensiles-item">${element}</a>`
        });
        document.querySelector(".ustensiles").innerHTML=ustensilesHTML;
// add event to items 
        const item=document.querySelectorAll(".ustensiles-item");
        item.forEach(ele=>{ele.addEventListener("click",()=>{advanceSearch(ele);})});

  // search in input of ustensiles

    const input =document.querySelector(".ustensiles-input");
    const dropdownItems=document.querySelectorAll(".ustensiles-item");
    input.addEventListener("keyup",()=>{
    filterDropdown(input.value,dropdownItems);
  });
}


export default filterUstensiles;