window.onload = function() {
    
    var navButtons = document.querySelectorAll('.nav-link');
    
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            var goToSection = this.getAttribute('href');
            var sectionElement = document.querySelector(goToSection);
            
            if (sectionElement) {
                sectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
};

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 170) {
        navbar.classList.add("shrink");
    } else if (window.scrollY < 50) {
        navbar.classList.remove("shrink");
    }
});