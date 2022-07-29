let colors = document.querySelectorAll('.color')

// chance color from list 
colors.forEach(function (color) {
    color.addEventListener('click',function (){
        let colorCode = color.dataset.color
        document.documentElement.style.setProperty( '--primary-color',colorCode)
        localStorage.setItem('them',colorCode)
    })
});

// get color from localStorage 
let colorCodeLS = localStorage.getItem('them')
window.addEventListener("load" ,function () {
    document.documentElement.style.setProperty( '--primary-color',colorCodeLS)
    console.log(colorCodeLS);
    colorInput.value = colorCodeLS
})

// change color with color input
let colorInput= document.querySelector('input[type="color"]')
colorInput.addEventListener("input",function (e){
    document.documentElement.style.setProperty( '--primary-color',e.target.value)
    localStorage.setItem('them',e.target.value)
    
})