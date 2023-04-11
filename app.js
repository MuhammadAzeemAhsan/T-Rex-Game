const person=document.querySelector('.person');
const box=document.querySelector('.box');
let scoreBox=document.querySelector('.score-box');
let score=0;



window.addEventListener('click',function(){
    if(person.classList!="animate"){
        person.classList.add("animate");
    }
    setTimeout(() => {
        person.classList.remove("animate");
    }, 500);
})

window.addEventListener('click',function(){
    var personTop=parseInt(window.getComputedStyle(person).getPropertyValue("top"));
    var boxLeft=parseInt(window.getComputedStyle(box).getPropertyValue("left"));
    if(boxLeft>0 && boxLeft<60 && personTop>=340){
    }
    else{
        score+=1;
        scoreBox.innerHTML=`score=${score}`;
        
    }
})

// function jump(){
//     if(person.classList!="animate"){
//         person.classList.add("animate");
//     }
   
//     setTimeout(() => {
//         person.classList.remove("animate");
//     }, 500);
// }

var checkDead= setInterval(function(){
    
    var personTop=parseInt(window.getComputedStyle(person).getPropertyValue("top"));
    var boxLeft=parseInt(window.getComputedStyle(box).getPropertyValue("left"));
    if(boxLeft>0 && boxLeft<60 && personTop>=340){
        box.style.animation="none";
        box.style.display="none";
        alert("Your score = " + (score-1) + ". Reload the game");
    }
},10);