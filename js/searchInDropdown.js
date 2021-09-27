/**
  *search in Dropdown 
  *@param {string} inputValue
  *@param {NodeList}  dropdownItems
  *@return {void}
*/
const filterDropdown=(value,dropdownItems)=>{
  dropdownItems.forEach(element => {
    const txtValue=element.innerText.toLowerCase();
    /*display nodeList if text of element match Value of input */
    if(txtValue.includes(value.toLowerCase())){
      element.style.display="";
    }else{
      element.style.display="none";
    }
  });
}

export default filterDropdown;