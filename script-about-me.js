let aboutMeSection = document.querySelector(".about-me-section");
aboutMeSection.style.transform = "translateX(-100vw)";
setTimeout(() => {
    aboutMeSection.classList.add('additional-class-sections');
    aboutMeSection.style.transform = "translateX(0vw)";
}, 0010);
let arrowP = document.querySelectorAll(".arrow-container p");
arrowP.forEach((p , index) => {
    if(index == 0){
        p.addEventListener("click", () => {
            aboutMeSection.style.transform = "translateX(100vw)";
        })
    }
    if(index == 1){
        p.addEventListener("click", () => {
            aboutMeSection.style.transform = "translateX(-100vw)";
        })
    }
})
let links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetUrl = this.href;
        
        setTimeout(function() {
          window.location.href = targetUrl;
        }, 2000);
      });
});
