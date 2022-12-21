let buyall = document.querySelector(".buy")
let home = document.querySelector(".Home")
let orderCount = document.querySelector(".woofc-count-number")
let count = 0
function renderProduct() {
    box.innerHTML = ""
    products.forEach((item) => {

        let li = document.createElement("li")
        li.classList.add("products__item") // biz lini classiga  products__item degan classni qo'shdik buda HTMLda style berganmiz
        li.innerHTML = ` 
     
      <div class="products__img">
               <img src="${item.img}" alt="img">
      </div>
      <div class="products__content">
            <h4 class = "products__title">${item.name}</h4>  
            <p class = "products__text">${item.text}</p> 
            <p><mark>${item.price} so'm</mark></p>  
            <p class = "skidka"><del>${item.price + 25000} so'm</del></p>  <br>        
            <div class="background-one">
  <div class="link-container">
 
 <button class = "btn korzinka-btn link-one add button-92" id=${item.id}>Buy product</button>
 


  </div>

</div>
<div class="background-three link-container">
            <button  class = "btn  link-three delete" id=${item.id} >Delete</button>
</div>
        
            
          
      </div>

            
          
      </div>

      `
        box.appendChild(li)


    })

}
renderProduct()




let total = document.querySelector(".total")

box.addEventListener("click", (e) => { // bunda btn korzinkachasini bosak id sini chiqarib beradi.
    if (e.target.className.includes("korzinka-btn")) {

        count += 1
        orderCount.textContent = count
        
    
        let produc = products.find(el => el.id == e.target.id)
        let arr =  [] || JSON.parse(localStorage.getItem("products")) 
       if (!arr.find(el => el.id == produc.id)) {
        arr.push(produc)
       }else{
        alert("avval qo'shilgan")
       }
        


    }
    

    localStorage.setItem("products",JSON.stringify(arr))


})



buyall.addEventListener("click", function (e) {
    let mahsulot = JSON.parse(localStorage.getItem("products"))
    function renderBuy() {
        box.innerHTML = ""
        mahsulot.forEach((item) => {

            let li = document.createElement("li")
            li.classList.add("products__item") // biz lini classiga  products__item degan classni qo'shdik buda HTMLda style berganmiz
            li.innerHTML = ` 
     
      <div class="products__img">
               <img src="${item.img}" alt="img">
      </div>
      <div class="products__content">
            <h4 class = "products__title">${item.name}</h4>  
            <p>${item.text}</p> 
            <p><mark>${item.price} so'm</mark></p>            
            <div class="background-three link-container">
            <button  class = "btn korzinka-btn link-three delete" id=${item.id} >Delete</button>
</div>
        
            
          
      </div>

      `
            box.appendChild(li)




        })

    }

    renderBuy()
})

home.addEventListener("click", (e) => {
    renderProduct(products)
})








