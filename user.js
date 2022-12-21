let box = document.querySelector(".box")
let inputs = document.querySelectorAll(".input")
let form = document.querySelector(".form")
let modal = document.querySelector(".modal")
let changeUser = document.querySelector(".changeUser")
let inputchange = document.querySelectorAll(".input-change")
let close = document.querySelector(".close")
let arr = []
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  let obj = {}
  for(let i of inputs){/// input aylanadi  inputlargacha
    obj.id = arr.length + 1
    obj[i.name] = i.value

    i.value = ""

  }
  arr.push(obj)
  console.log(arr);
  render()
  localStorage.setItem("user1",JSON.stringify(arr))

})
/// bu ham array sifat object hisoblanadi ya'ni classList
function render() {
  box.innerHTML = ""
  for(let i of arr){
    let ul = document.createElement("ul")

    ul.innerHTML = `
    <li>${i.name}</li>
    <li>${i.phone}</li>
    <li>${i.age}</li>
    <li>
    <button class = "sil" id =${i.id} >Delete</button>
    
    </li>
    
    `
    box.append(ul)
    window.location.replace("/settings.html")
  }
}


