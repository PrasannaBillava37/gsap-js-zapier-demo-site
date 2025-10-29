
//code for hamburger menu
const hamburger = document.getElementById('hamburger');
    const navlink = document.getElementById('navlink');

    hamburger.addEventListener('click', () => {
      navlink.classList.toggle('active');
    });

//code for form need to avoid zapier API success page show
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(() => {
      // ✅ Show a thank-you popup (or redirect instead)
      alert("Thank you! Your message has been sent.");
      // OR redirect:
      // window.location.href = "thankyou.html";
    })
    .catch(() => {
      alert("Oops! Something went wrong.");
    });
  });


// Gsap code for scroll cursor animation 
let main=document.querySelector(".main")
let cursor=document.querySelector("#cursor")
let point =document.getElementById("point")
let point_01=document.getElementById("point_01")
main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    ease:"back.out"
  })
})
point.addEventListener("mouseenter",function(){
  cursor.innerHTML="View More"
  gsap.to(cursor,{
    scale:4
  })
})
point.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
  gsap.to(cursor,{
    scale:1
  })
})
point_01.addEventListener("mouseenter",function(){
  cursor.innerHTML="View More"
  gsap.to(cursor,{
    scale:4
  })
})
point_01.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
  gsap.to(cursor,{
    scale:1
  })
})


// GSAP code for Navbar animation(scramble-text)
gsap.from(".scramble-link", {
  y: 10,
  opacity: 0,
  duration: 1,
});


// GSAP HeroButton animation
gsap.from("#buttonholder", {
  y: 40,
  opacity: 0,
  delay: 2,
  duration: 1,
});



//GSAP Hero content div  animation
document.fonts.ready.then(() => {
  gsap.set(".Hero_content", { opacity: 1 });

  let split = SplitText.create(".Hero_content", {
    type: "words",
    aria: "hidden",
  });

  gsap.from(split.words, {
    opacity: 0,
    duration: 1,
    ease: "sine.out",
    stagger: 0.1,
  });
});

//GSAP Certificate scrolltriger animation only for laptop viewport
 gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById("#section-certificate #certificate_holder");
    const scrollLength = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollLength,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#section-certificate ",
        start: "top 0%",
        end: "bottom 10%",
        scrub:2,
        pin: true,
      }
    });









