let slides=document.querySelectorAll("div img")
let slideIndex=0;
let slideInterval;
function slideShow(index){
    slides.forEach((slide,i)=>{
        if(i===index){
            slide.style.display="block";
        }
        else{
            slide.style.display="none"
        }
    })
}


function startSlideShow(){
slideInterval=setInterval(()=>{
slideIndex=(slideIndex+1) % slides.length
slideShow(slideIndex)
console.log(slideIndex)
},2000)

}
function slideStop(){
    clearInterval(slideInterval)
}

function toggleShow(){
 if(slideInterval){
  slideStop();
  slideInterval=null
 }
 else{
    startSlideShow()
 }
}

function previousShow() {
    slideStop();
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
    
    slideShow(slideIndex);
}

 function nextShow(){
    slideStop()
    slideIndex=(slideIndex+1) % slides.length
slideShow(slideIndex)
 }


slideShow(slideIndex)








