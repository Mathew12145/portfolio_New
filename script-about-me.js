let aboutMeSection = document.querySelector(".about-me-section");
aboutMeSection.style.transform = "translateX(-100vw)";
setTimeout(() => {
    aboutMeSection.classList.add('additional-class-about-me-section');
    aboutMeSection.style.transform = "translateX(0vw)";
}, 0010);

