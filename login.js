

let form = document.querySelector(".form") 
let inputs = document.querySelectorAll(".input") 

form.addEventListener("submit",(e)=>{ 
  e.preventDefault()
  let user = {} 
  for(let i of inputs){ 
    if (i.value) { 
      user[i.name] = i.value
      i.value = "" 
     
    }
  if (Object.keys(user).length > 1) { 
    localStorage.setItem("user",JSON.stringify(user))  
 
      window.location.replace("/index.html")

  }
  }

})




