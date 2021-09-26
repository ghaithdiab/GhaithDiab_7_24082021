import cartsBuilder from "./cartsBuilder.js";
import searchRecipes from "./searchRecipes.js";
import filterIngredients from "./filterIngredients.js";
import filterAppareils from "./filterAppareil.js";
import filterUstensiles from "./filterUstensiles.js";

/* array contain all tags that user selected*/

let tagsSelected=[];

const tagsContainer=document.querySelector("#tags-contanier");
const searchInput=document.querySelector("#searchBar");
/*
* create html tag element and filter result search advance and delete html tag in case close tag
*
*@param{ele} item user clicked 
*
*@ return {void}
*/
const advanceSearch=(ele)=>{
  /* array cotain result search whene user clicik on tag */

  let resultSearchAdvance=[];
  /* create tag html if there is no tags selected befor or the tags are not existe*/

  if(tagsSelected.length===0 ||!tagsSelected.includes(ele.innerText)){
    let tagHTML="";
      tagHTML+=`<div class="tag">
        ${ele.innerText}
      <button class="close-tag">
        <i class="far fa-times-circle"></i>
      </button>
    </div>`
    tagsContainer.innerHTML+=tagHTML;
    /* add tag to array */ 

    tagsSelected.push((ele.innerText).toLowerCase());
    const searchResult=searchRecipes(searchInput.value);
    /* search tags selected in ingredients or appliance or ustensils*/ 

    searchResult.forEach(recipe=>{
        if(tagsSelected.every(e=>recipe.ingredients.find(v=>v.ingredient.toLowerCase().includes(e))
        || recipe.appliance.toLowerCase().includes(e)
        ||recipe.ustensils.find(u=>u.toLowerCase().includes(e)))){
        /* add results to array */

            resultSearchAdvance.push(recipe);
        /* refilter dropdowns after click on tag  */

            filterIngredients(resultSearchAdvance);
            filterAppareils(resultSearchAdvance);
            filterUstensiles(resultSearchAdvance);
            cartsBuilder(resultSearchAdvance);
        }
    });
    /* close dropdown after user click on tag */ 
    document.querySelectorAll(".dropdown-content").forEach(v=>v.classList.remove("show"));
    document.querySelectorAll(".dropdown-toggle").forEach(e=>e.style.display="block");
  }
  /* Close tags*/

  const divTag=document.querySelectorAll('.close-tag');
  divTag.forEach(element=>{
    element.addEventListener('click',()=>{
      resultSearchAdvance=[];
      /* remove html tag when user close tag */ 

      element.parentElement.remove();
      /*delete teg from array when user close tag  */

      tagsSelected.splice(tagsSelected.indexOf((element.parentElement.textContent).trim()),1);
      /*   research tags selected in ingredients or appliance or ustensils*/ 

      const searchResult=searchRecipes(searchInput.value);
      searchResult.forEach(recipe=>{
          if(tagsSelected.every(e=>recipe.ingredients.find(v=>v.ingredient.toLowerCase().includes(e))
          || recipe.appliance.toLowerCase().includes(e)
          ||recipe.ustensils.find(u=>u.toLowerCase().includes(e)))){
            /* add results to array */ 

              resultSearchAdvance.push(recipe);
              /* refilter dropdowns after click on tag */
              
              filterIngredients(resultSearchAdvance);
              filterAppareils(resultSearchAdvance);
              filterUstensiles(resultSearchAdvance);
              cartsBuilder(resultSearchAdvance);
          }
      })
    })
  })
}
export default advanceSearch;