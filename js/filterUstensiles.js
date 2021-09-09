import filterAppareils from "./filterAppareils.js";
import recipes from "./recipes.js";

/*
* filter Ustensiles from recipes 
*
* @return {Array}  
*/
const filterUstensiles=()=>{
  /* array contain all Ustensiles from recipes */
  const ustensiles=new Array();
  /* array contain uniqe value of Ustensiles  (values with out reapt) */
  const uniqeUstensiles=new Array();
  /* put all Ustensiles for each recipe in our array(ustensiles) */
  recipes.forEach(element=>{
    const allUstensiles=element.ustensils;
    allUstensiles.forEach(ele=>{
      ustensiles.push(ele);
    });
  });
  /* filter Ustensiles and push to array uniqeUstensiles */
  ustensiles.forEach(element=>{
    if(!uniqeUstensiles.includes(element)){
      uniqeUstensiles.push(element);
    }
  });
 return uniqeUstensiles
}


export default filterUstensiles;