let SkillsSection = document.querySelector("#skills");
SkillsSection.style.transform = "translateX(-100vw)";
setTimeout(() => {
    SkillsSection.classList.add('additional-class-sections');
    SkillsSection.style.transform = "translateX(0vw)";
}, 0010);
let arrowP = document.querySelectorAll(".arrow-container p");
arrowP.forEach((p , index) => {
    if(index == 0){
        p.addEventListener("click", () => {
            SkillsSection.style.transform = "translateX(100vw)";
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

