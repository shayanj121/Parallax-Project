const head = document.querySelector('.head')
const menu = document.querySelector('.menu')
const but = document.querySelector('.but')
const but1 = document.querySelector('.but1')
const img = document.querySelector('.img')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const marq = document.querySelector('.marq')
const parag = document.querySelector('.parag')
const para = document.querySelectorAll('.para')
const box = document.querySelectorAll('.box')

window.addEventListener('scroll', ()=>{
    let st = window.scrollY
    // console.log(st);
    
    let temp = 1 - Number(st/1000) 
    if (temp > 0) {
        
        head.style.marginTop = ''+st+'px'
        head.style.transform = 'rotateZ('+st/100+'deg) scale('+temp+')'
    }
    let paragoff = parag.offsetTop
    // console.log(paragoff);
    let temp1 = (st - paragoff)/5
    // console.log(temp1);
    
    if (temp1 > 0) {
        
        parag.style.transform = 'translateX(-'+temp1+'px)'
    }
    box.forEach((val, index) => {
        const offset = val.offsetTop;
        const temp = (st - offset) / 5;
    
        const transformValue = Math.max(temp, 0);
    
        const paraH2 = para[index];
        if (paraH2) {
          paraH2.style.transform = `translateX(-${transformValue}px)`;
        }
      });
    
})

but.addEventListener('click', ()=>{
    menu.style.display = 'flex'
    setTimeout(() => {
    menu.style.height = '1000px'
    menu.style.opacity = '1'
    }, 200);

})
but1.addEventListener('click', ()=>{
    menu.style.opacity = '0'    
    setTimeout(() => {
        menu.style.height = '0'
        menu.style.display = 'none'
        
    }, 300);
    
   

})
let currentIndex = 0;
const images = ['image/1.webp', 'image/8.webp', 'image/7.webp']
const imagess = ['image/1.webp', 'image/5.webp', 'image/6.webp']
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}, 500);
let Index = 0;
const color = ['#afa55d', '#325a59','#39223c']
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    Index = (Index + 1) % color.length;
    img1.src = imagess[currentIndex];
    img2.src = imagess[currentIndex];
    marq.style.backgroundColor = color[Index];
}, 500);
const colors = ['#afa55d', '#2261a9','#4a4648' ,'#39223c', '#e11e3e','#325a59']
let indoxx = 0;
setInterval(() => {
    indoxx = (indoxx + 1) % colors.length;
    head.style.backgroundColor = colors[indoxx];
}, 4100);

