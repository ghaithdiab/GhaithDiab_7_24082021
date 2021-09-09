import recipes from "./recipes.js";

const filterAppareils=()=>{
  const appareils=new Array();
  const uniqeAppareils=new Array();

  recipes.forEach(element=>{
    appareils.push(element.appliance);
  });
  appareils.forEach(ele=>{
    if(!uniqeAppareils.includes(ele)){
      uniqeAppareils.push(ele);
    }
  });
  return uniqeAppareils;
}

export default filterAppareils;