const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click' , () =>{
    currentActive++;
    if(currentActive > circles.length){
        // don't allow currentActive being bigger than circle length  
        currentActive = circles.length;
    }
    update();
})
// prev button
prev.addEventListener('click' , () =>{
    currentActive--;
    if(currentActive < 1){ 
        currentActive = 1;
    }
    update();
})



// update 
function update(){
    // entries return two value 1- number of index 2- element value
    for(let [idx , circle] of circles.entries()){
        if (idx < currentActive) {
            // others circles being active one by one 
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    }
    // show blue width by  button's active state
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + '%'); 





    // manage buttons
    // in 1 step
    if(currentActive === 1){
        prev.disabled = true;
        // in 4 step
    }else if(currentActive === circles.length){
        next.disabled = true;
        // between 1-4
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}