

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");
let total = document.querySelector(".total")
let cartArr = []

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function () {
        if (this.classList.contains("active")) return;

        this.classList.add("active");

        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }

        handleTransition(this, text);
        activeButton = this;

    });


});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" ||
            !item.classList.contains("active")) return;

        text.classList.add("active");

    });

}
import { products } from "./data.js";
let ring = 0
let box = document.querySelector(".box")
function renderProduct() {
    box.innerHTML = ""
    for (let item of products) {
        let li = document.createElement("li")
        li.innerHTML = `
        
      
            <div class="background-one">
  <div class="link-container">
  <div class="products__img">
  <img src="${item.img}" alt="img">

</div>
<div class="products__content">
<h4 class = "products__title">${item.name}</h4>  
<p class = "products__text">${item.text}</p> 
<p><mark>${item.price} so'm</mark></p>  
<p class = "skidka"><del>${item.price + 25000} so'm</del></p>  <br>  
<button class = "btn korzinka-btn link-one add button-92" id=${item.id}>Buy product</button>
<img class = "delete" id=${item.id} src="./img/delete.png" alt="img">

 
  </div>

</div>
        `
        box.append(li)
    }
}
let natija =  0

renderProduct()
let price = document.querySelector(".woofc-count-number")
let order = 0
box.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.className.includes("add")) {
        let produc = products.find(el => el.id == e.target.id)

        natija += produc.price
        
            
         let num =  JSON.parse(localStorage.getItem("number")) || []
        num.push(produc)
          localStorage.setItem("number", JSON.stringify(num))

           total.innerHTML = `All:${natija}`
        console.log(natija);
        let arr = JSON.parse(localStorage.getItem("products")) || []
        if (!arr.find(el => el.id == e.target.id)) {
            arr.push(produc)
        }

        localStorage.setItem("products", JSON.stringify(arr))
        order += 1
        price.innerHTML = order 
       
    }
    else if(e.target.className == "delete"){
            
            for(let i = 0; i < products.length;i++){
                if(e.target.id == products[i].id){
                  products.splice(i,1) 
                  console.log(products);
                }
            }
         
    }
    renderProduct()

})
let korzinka = document.querySelector(".korzinka")
let home = document.querySelector(".Home")
let clear = document.querySelector(".Clear")
korzinka.addEventListener("click",(e)=>{

     clear.classList.add("block")
    function renderBuy() {
        let mahsulot = JSON.parse(localStorage.getItem("products"))
        let num = JSON.parse(localStorage.getItem("number"))
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
 
            
      </div>

      `      
        
    
            box.appendChild(li)
           
        })
       
    }
   
    renderBuy()
})

home.addEventListener("click",(e)=>{
    renderProduct(products)
   clear.classList.remove("block")

})

clear.addEventListener("click",(e)=>{
  for(let i of products){
    i.ring = 0
  }
    box.innerHTML = ""
    localStorage.removeItem("products")
    order = 0
        price.innerHTML = order 
        total.innerHTML = ""
})





function render() {
    if (!(localStorage.getItem("user"))) {
      window.location.replace("/login.html")
    }
  }
  let btn = document.querySelector(".btn") 
  btn.addEventListener("click",()=>{
    localStorage.removeItem("user")
    render()
  })
  render()
  
let box2 = document.querySelector(".box2")
  let out = document.querySelector(".out")
  out.addEventListener("click",(e)=>{ 
    box.innerHTML = ""
    let li = document.createElement("li")
    li.innerHTML = `
    <img class="user-img" src="https://secure.webtoolhub.com/static/resources/icons/set108/b5cdab07.png" alt="user">
    
    <button class="out2">Log out</button>`

    box.append(li)
        for(let i of products){
          if (e.target.className = "out2") {
            window.location.replace("/login.html")
          }
        }
  })



let user = document.querySelector(".user")
user.addEventListener("click",(e)=>{
  window.location.replace("/user.html")
})