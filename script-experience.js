let ExperienceSection = document.querySelector("#experience");
ExperienceSection.style.transform = "translateX(-100vw)";
setTimeout(() => {
    ExperienceSection.classList.add('additional-class-sections');
    ExperienceSection.style.transform = "translateX(0vw)";
}, 0010);
let arrowP = document.querySelectorAll(".arrow-container p");
arrowP.forEach((p , index) => {
    if(index == 0){
        p.addEventListener("click", () => {
            ExperienceSection.style.transform = "translateX(100vw)";
        })
    }
    if(index == 1){
        p.addEventListener("click", () => {
            ExperienceSection.style.transform = "translateX(-100vw)";
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
        }, 3000);
      });
});

