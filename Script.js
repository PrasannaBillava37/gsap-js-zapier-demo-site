
//alert("Sorry for the inconvenience. This site is currently optimized for laptops and desktops only.");


//scroll cursor animation 
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


// Navbar animation
gsap.from(".scramble-link", {
  y: 10,
  opacity: 0,
  duration: 1,
});


// HeroButton animation
gsap.from("#buttonholder", {
  y: 40,
  opacity: 0,
  delay: 2,
  duration: 1,
});



//Hero content div  animation
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

//Certificate scrolltriger animation
 gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector("#certificate_holder");
    const scrollLength = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: "#section-certificate",
        start: "top top",
        end: "+=" + scrollLength,
        scrub:2,
        pin: true,
      }
    });

// svg animation for scroll indicator

//view cursor animation 

