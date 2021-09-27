import filterDropdown from "./searchInDropdown.js";
import advanceSearch from "./AdvanceSearch.js";
/**
  * filter appareils from array or recipes or result of search 
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
const filterAppareils=(array)=>{
  // array contain all appareils from paramter array 

  const appareils=new Array();

   // array contain uniqe value of appareils  (values with out reapt) 
  
  const uniqeAppareils=new Array();
  array.forEach(element=>{
    appareils.push((element.appliance).toLowerCase());
  });

  appareils.forEach(ele=>{
    if(!uniqeAppareils.includes(ele)){
      uniqeAppareils.push(ele);
    }
  });
  // create links of dropdown items  

  let appareilsHTML="";
  uniqeAppareils.forEach(element=>{
    appareilsHTML+=`<a href="#" class="dropdown-item item-appareil">${element}</a>`
  });
  const div=  document.querySelector(".appareil");
  div.innerHTML=appareilsHTML;

   // add event to items 
  
  const item=document.querySelectorAll(".item-appareil");
  item.forEach(ele=>{ele.addEventListener("click",()=>{advanceSearch(ele);})});

// search in input of appareils

  const input =document.querySelector(".appareil-input");
  const dropdownItems=document.querySelectorAll(".item-appareil");
  input.addEventListener("keyup",()=>{
  filterDropdown(input.value,dropdownItems);
});
}

export default filterAppareils;