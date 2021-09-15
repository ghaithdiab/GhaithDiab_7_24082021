const cartsBuilder=(arr)=>{
  let carts="";
  arr.forEach(element=>{
    carts+=`
      <div class="col-4">
        <div class="cart">
          <div class="photo"></div>
          <div class="info">
            <div class="info-recipe">
              <h6>${element.name}</h6>
              <div class="time">
                <i class="far fa-clock"></i>
                <span class="nmb-min">${element.time} min</span>
              </div>
            </div>
            <div class="info-desc">
              <div class="ingredients-recipes">
                ${element.ingredients.map((ele)=>{
                  let quantity="";
                  let unit="";
                  typeof ele.quantity==="undefined" ? quantity ="" :quantity=ele.quantity;
                  typeof ele.unit==="undefined"? unit="" : unit=ele.unit;
                  return `<span>${ele.ingredient}: ${quantity} ${unit}</span>`
                }).join(" ")
              }
              </div>
              <div class="desc">
                <p>${element.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  });
  document.getElementById("carts").innerHTML=carts;
}
export default cartsBuilder;