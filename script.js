

let toogle_btn = document.querySelector('.toogle_btn')
let toggle = document.querySelector('.toggle')
let ative = document.querySelector('.active')
let big_price = document.querySelectorAll('.big_price')
let arrMonth = [19.99, 24.99, 39.99]
let arrAnnual = [199.99, 249.99, 399.99]

let bool = true
toogle_btn.addEventListener('click', ()=>{

  if(bool === true){
    bool = false
    toggle.style.left = '3px'
    big_price.forEach((e, i)=> e.textContent = arrAnnual[i])
  }else{
    bool = true
    toggle.style.left = '21px'
    big_price.forEach((e, i)=> e.textContent = arrMonth[i])

  }


})