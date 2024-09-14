const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let circul= document.querySelectorAll(".circle")



let count = 1


next.addEventListener("click", () =>{
    count++;
    if (count > circul.length) {
        count = circul.length;
    }
    update()
});

prev.addEventListener("click", () =>{
    count--;
    if(count < 1){
        count= 1;
    }
    update()
});



function update(){
    circul.forEach((circul,index) => {
        if(index< count){
            circul.classList.add("active") 
        }else{  
            circul.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circul.length - 1)) * 100 + '%';
    console.log(actives.length-1);
    console.log(circul.length-1)

    if (count === 1) {
        prev.disabled = true;
    } else if (count === circul.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }


}