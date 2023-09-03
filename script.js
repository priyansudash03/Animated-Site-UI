function inti(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

inti();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+5+"px"
    crsr.style.top = dets.y+5+"px"
})

gsap.from(".page1 h1, .page1 h2",{
    y:10,
    rotate:10,
    opacity: 0,
    delay:0.1,
    duration:0.7

})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start: "top 27%",
        end:"top 0",
        scrub:2
    }
})



tl.to(".page1 h1",{
    x:-100,
},"same")
tl.to(".page1 h2",{
    x:100,  
},"same")
tl.to(".page1 video",{
    width:"90%"
},"same")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start: "top -95%",
        end:"top -130%",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor: "#fff",
    
})


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start: "top -315%",
        end:"top -340%",
        scrub:3
    }
})
tl3.to(".main",{
    backgroundColor: "#0F0D0D",
    
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image")
        crsr.style.width = "450px"
        crsr.style.height = "350px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        var att=elem.getAttribute("data-image")
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var navEle = document.querySelectorAll(".nav h4")
var purple = document.querySelector(".purple")
navEle.forEach(function(h){
    h.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"

    })
    h.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"

    })
})