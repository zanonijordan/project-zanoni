window.sr = ScrollReveal({ reset: true });


sr.reveal('.intro-img', {duration: 2000});
sr.reveal('.text-intro', {duration: 2500});
sr.reveal('.p-intro', {duration: 4000});

sr.reveal('#ale-lado', {duration: 2000});
sr.reveal('.aboutMe-description-text', {duration: 2500});
sr.reveal('.list-aboutMe', {duration: 4000});

/* --initial position */
let mainLocation = window.pageYOffset;
let menu = document.querySelector("#menu");

/* --event scroll */
window.addEventListener("scroll", function() {
    /* --show the location every time you scroll*/

    /* --where we are now */
    let currentOffSet = window.pageYOffset;

    /* --condition to hide or show the menu */
    if(mainLocation >= currentOffSet) {
        /* --if it is greater or equal it is displayed */
        menu.style.top = "0px";
    } else {
        /* --otherwise we hide it by adding a negative top */
        menu.style.top = "-105px";
    }
    /* --we update the main location */
    mainLocation = currentOffSet;
});
