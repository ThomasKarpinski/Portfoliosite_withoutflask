import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const shortAbout = document.querySelector(".shortAbout")

gsap.fromTo(shortAbout.children, {y:'+=100', opacity:0}, {y:0, opacity:1, stagger: 0.2, duration: 5,


    scrollTrigger: {
    trigger: 'section',
    start: 'top top',
    markers: true,
}}
);

document.querySelector(".shortAbout").style='color: red';