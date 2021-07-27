const container=document.getElementsByClassName("container");
const slides=document.getElementsByClassName("slides");
const next= document.getElementById("next");
const prev=document.getElementById("prev");
let slideId;

let slide = document.getElementsByClassName("slide");
let index=0;

const firstClone= slideA.cloneNode(true);
const lastClone= slide[slide.length-1].clonenode(true); 

// document.getElementById("slides").appendChild(firstClone);

firstClone.id ="first-clone";
lastClone.id="last-clone";

slides.append(firstClone);
slides.prepend(lastClone);

const slideWidth= slide[index].clientWidth;
slides.style.transform= "translateX("+(-slideWidth*index)+"px)";

const getSlides=()=>document.getElementsByClassName("slide");

const startSlide= ()=>{
    slideId=setInterval(()=>{
        index++;
        slides.style.transform= "translateX("+(-slideWidth*index)+"px)";
        slides.style.transition="0.7s";
    },3000)
}

slides.addEventListener("transitionend",()=>{
    slide = getSlides();
   if(slide[index].id===firstClone.id){
    slides.style.transition="none";
    index=1;
    slides.style.transform= "translateX("+(-slideWidth*index)+"px)";
   }
   if(slide[index].id===lastClone.id){
    slides.style.transition="none";
    index= slide.length-2;
    slides.style.transform= "translateX("+(-slideWidth*index)+"px)";
   }
});

const moveToNextSlide=()=>{
    slide = getSlides();
    if (index >= slide.length-1) return;
    index++;
        slides.style.transform= "translateX("+(-slideWidth*index)+"px)";
        slides.style.transition="0.7s";
}
const moveToPrevSlide=()=>{
    if (index<= 0)return
    slide = getSlides();
    if (index >= slide.length-1) return;
    index--;
        slides.style.transform= "translateX("+(-slideWidth*index)+"px)";
        slides.style.transition="0.7s";
}


container.addEventListener("mouseenter",()=>{
    clearInterval(slideId);
});
container.addEventListener("mouseleave", startSlide);
next.addEventListener("click", moveToNextSlide);
prev.addEventListener("click", moveToPrevSlide);

startSlide();