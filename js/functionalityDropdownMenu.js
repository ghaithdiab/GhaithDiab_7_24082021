/**
  * open and close dropdown menu for Ingredients and Appareils and Ustensiles
  *
  *@return {void}
*/
const functionalityDropdownMenu=()=>{
  const btn=document.querySelectorAll(".dropdown-toggle");
const dropdownContent=document.querySelectorAll('.dropdown-content');
btn.forEach(element=>{
  element.addEventListener("click",(e)=>{
    if(e.target.getAttribute("data-type")==="Ingredients"){
      dropdownContent[0].classList.toggle("show");
      dropdownContent[1].classList.remove("show");
      dropdownContent[2].classList.remove("show");
      element.style.display="none";
      btn[1].style.display="block";
      btn[2].style.display="block";
    }else if(e.target.getAttribute("data-type")==="Appareils"){
      dropdownContent[0].classList.remove("show");
      dropdownContent[1].classList.toggle("show");
      dropdownContent[2].classList.remove("show");
      element.style.display="none";
      btn[0].style.display="block";
      btn[2].style.display="block";
      e.target.classList.toggle("show-btn");
    }else if(e.target.getAttribute("data-type")==="Ustensiles"){
      dropdownContent[0].classList.remove("show");
      dropdownContent[1].classList.remove("show");
      dropdownContent[2].classList.toggle("show");
      element.style.display="none";
      btn[0].style.display="block";
      btn[1].style.display="block";
    }
  })
});

const btnCloseDropdown=document.querySelectorAll('.btn-advance');
btnCloseDropdown.forEach(element=>{
  element.addEventListener("click",()=>{
    dropdownContent.forEach(ele=>{
      ele.classList.remove("show");
      btn.forEach(s=>{
        s.style.display="block";
      })
    });
  })
});
}

export default functionalityDropdownMenu;