let user= JSON.parse(localStorage.getItem("user1"))
let box = document.querySelector(".box3")
for(let i of user){
  let li = document.createElement("li")
  li.innerHTML = `
  <li class = "text">Ismingiz:${i.name}</li>
  <li class = "text">Familyangiz:${i.phone}</li>
  <li class = "text">Yoshingiz:${i.age}</li>
  `
  box.append(li)
}

let home = document.querySelector(".home")
home.addEventListener("click",(e)=>{
  window.location.replace("/index.html")
})