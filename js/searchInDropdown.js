/*
* search in Dropdown 
*
*@return {void}
*/
const filterDropdown=(value,dropdownItems)=>{
  dropdownItems.forEach(element => {
    const txtValue=element.innerText.toLowerCase();
    if(txtValue.includes(value.toLowerCase())){
      element.style.display="";
    }else{
      element.style.display="none";
    }
  });
}

export default filterDropdown;