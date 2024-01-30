gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".scroll .panel");
let container = document.querySelector('.container')

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    duration: 6,
    scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: true,
        end: `+=${container.offsetWidth}`
    }
});

gsap.registerPlugin(ScrollTrigger);

let sections2 = gsap.utils.toArray(".scroll2 .panel2");
let container2 = document.querySelector('.container2')

gsap.to(sections2, {
    xPercent: -100 * (sections2.length - 1),
    ease: "none",
    duration: 6,
    scrollTrigger: {
        trigger: ".scroll2",
        pin: true,
        scrub: true,
        end: `+=${container2.offsetWidth}`
    }
});