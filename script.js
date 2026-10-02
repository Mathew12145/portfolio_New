let elementsSkipPhotoSection = document.querySelectorAll(".skip-photo-section p");
let gallery = document.querySelector(".gallery");
let ActualSlideIDX = 0;
//Dla pierwszego
elementsSkipPhotoSection.forEach((p, index) => {
    if(index == 0){
        p.innerHTML = "&#9632";
    }
});
let currentSlide = 0;
function changeSlide(){
    currentSlide+= 1;
    ActualSlideIDX += 1;
    let offset = currentSlide * -100;
    gallery.style.transform = `translateX(${offset}vw)`;
    if(currentSlide === 3){
        ActualSlideIDX = 0;
        currentSlide = 0;
        gallery.style.transform = `translateX(0vw)`;

    }
    if(ActualSlideIDX == 0){
        elementsSkipPhotoSection[0].innerHTML = '&#9632';
        elementsSkipPhotoSection[1].innerHTML = '&#9633';
        elementsSkipPhotoSection[2].innerHTML = '&#9633';
    }
    if(ActualSlideIDX == 1){
        elementsSkipPhotoSection[0].innerHTML = '&#9633';
        elementsSkipPhotoSection[1].innerHTML = '&#9632';
        elementsSkipPhotoSection[2].innerHTML = '&#9633';
    }
    if(ActualSlideIDX == 2){
        elementsSkipPhotoSection[0].innerHTML = '&#9633';
        elementsSkipPhotoSection[1].innerHTML = '&#9633';
        elementsSkipPhotoSection[2].innerHTML = '&#9632';
    }
}
setInterval(changeSlide, 5000);