var menu = document.querySelector('.barra');
var menuBtn = document.querySelector(".barra button");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
});
var menuLink = document.querySelectorAll(".nav li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
}));


    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -210px 0px"
    };
const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
                return true;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);

            }
        });
    },
    appearOptions);
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });


       