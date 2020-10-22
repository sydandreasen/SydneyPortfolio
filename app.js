window.addEventListener("load", () => {
  if (window.innerWidth < 700) {
    // have on mobile mode
    document.getElementById("nav").classList.add("navBar-mobile");
    document.getElementById("nav").classList.remove("navBar-wide");
  }
  // shouldn't need else because defaults to wide mode
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    // mobile mode
    document.getElementById("nav").classList.add("navBar-mobile");
    document.getElementById("nav").classList.remove("navBar-wide");
  } else {
    // wide mode
    document.getElementById("nav").classList.remove("navBar-mobile");
    document.getElementById("nav").classList.add("navBar-wide");
  }
});

// setup for scroll animations
const controller = new ScrollMagic.Controller();

// animation to occur for element, with time, and action

// animations not reliant on scroll position
// about section
// pictures
let tl1 = new TimelineMax();
tl1.from(".about .content-column .picture", 0.3, { x: 1000 });
const s1 = new ScrollMagic.Scene({
  triggerElement: ".about-title",
  triggerHook: "onEnter",
})
  .setTween(tl1)
  .addTo(controller);
// about title
let tl2 = new TimelineMax();
tl2.from(".about-title", 0.5, { x: -200 });
const s2 = new ScrollMagic.Scene({
  triggerElement: ".about-title",
  triggerHook: "onEnter",
})
  .setTween(tl2)
  .addTo(controller);
// contact info
let tl6 = new TimelineMax();
tl6.from(".contact-links", 0.5, { scale: 0 });
const s6 = new ScrollMagic.Scene({
  triggerElement: ".contact-links",
  triggerHook: "onEnter",
})
  .setTween(tl6)
  .addTo(controller);
// projects section
let tl3 = new TimelineMax();
tl3.from(".projects-title", 0.5, { x: -200 });
const s3 = new ScrollMagic.Scene({
  triggerElement: ".projects-title",
  triggerHook: "onEnter",
})
  .setTween(tl3)
  .addTo(controller);
// internship section
let tl4 = new TimelineMax();
tl4.from(".internship-title", 0.5, { x: -200 });
const s4 = new ScrollMagic.Scene({
  triggerElement: ".internship-title",
  triggerHook: "onEnter",
})
  .setTween(tl4)
  .addTo(controller);
// research section
let tl5 = new TimelineMax();
tl5.from(".research-title", 0.5, { x: -200 });
const s5 = new ScrollMagic.Scene({
  triggerElement: ".research-title",
  triggerHook: "onEnter",
})
  .setTween(tl5)
  .addTo(controller);
