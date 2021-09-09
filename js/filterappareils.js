import recipes from "./recipes.js";

/*
* filter appareils from recipes 
*
* @return {Array}  
*/
const filterAppareils=()=>{
  /* array contain all appareils from recipes */
  const appareils=new Array();
   /* array contain uniqe value of appareils  (values with out reapt) */
  const uniqeAppareils=new Array();
/* put all appareils for each recipe in our array(appareils) */
  recipes.forEach(element=>{
    appareils.push(element.appliance);
  });
  /* filter appareils and push to array uniqeAppareils */
  appareils.forEach(ele=>{
    if(!uniqeAppareils.includes(ele)){
      uniqeAppareils.push(ele);
    }
  });
  return uniqeAppareils;
}

export default filterAppareils;