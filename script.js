let gsaptl =gsap.timeline();

gsaptl.to(".image img",{
    width:"100%",
    height:"100%",
    delay:1,
    duration:0.5
})
gsaptl.from(".text",{
    y:-100,
    opacity:0,
    duration:0.5,
})
gsaptl.from("nav i",{
    y:-60,
    opacity:0,
    duration:0.5,
})
gsaptl.from(".btn button",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.4
})

let allh1= document.querySelectorAll(".page2 h1");
function splitfun(allh1){
allh1.forEach((value)=>{
    let cluter="";
    let innerv =value.innerText
    let sv =innerv.split("");
    sv.forEach((elem)=>{
        cluter +=`<span>${elem}</span>`
    })
    value.innerHTML =cluter;
    // console.log(value)
})
}
splitfun(allh1);
    gsaptl.to(".page2 h1 span",{
        color:"#E3E3C4",
        stagger:0.2,
        // opacity:0.8,
        scrollTrigger:{
            trigger:".page2 h1",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 0%",
            scrub:true
        }
    })


let page3h1 = document.querySelectorAll(".page3 h1");
splitfun(page3h1);

gsaptl.to(".page3 h1 span",{
    color :"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page3 h1",
        scroll:"body",
        // markers:true,
        scrub:true,
        end :"top 50%",
        start:"top 70%"
    }
})

let page4h1 =document.querySelectorAll(".page4 h1")
splitfun(page4h1);

gsaptl.to(".page4 h1 span",{
    color :"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page4 h1",
        scroll:"body",
        // markers:true,
        scrub:true,
        end :"top 50%",
        start:"top 70%"
    }
})
gsaptl.to(".page5 .image-box-1 ",{
x:-250,
duration:0.5,
scrollTrigger:{
    trigger:".page5",
    scroll:"body",
    // markers:true,
    scrub:true,
    end :"top 40%",
    start:"top 70%"
}
})
gsaptl.to(".page5 .image-box-2 ",{
    x:250,
    duration:0.5,
    scrollTrigger:{
        trigger:".page5",
        scroll:"body",
        scrub:true,
        end :"top 40%",
        start:"top 70%"
    }
    })