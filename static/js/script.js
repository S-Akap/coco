// loader
const loaderElm = document.querySelector("#loader")
const loadingElm = document.querySelector("#loading")
function LoadingAnimation() {
  window.setTimeout(()=>{
    loadingElm.classList.toggle("fin");
    loadingElm.querySelectorAll(".loading-ellipse").forEach((elm)=>{
      elm.classList.toggle("fin");
    })
    loaderElm.classList.toggle("fin");
    window.setTimeout(HeroAnimation,1.0*1000);
  },3 * 1000);
};

// nav-menu
const menuBtnElm = document.querySelector(".menu-btn");
const navListElm = document.querySelector(".nav-list");
const navOverlayElm = document.querySelector(".nav-overlay");


menuBtnElm.addEventListener("click", ()=>{
  menuBtnElm.classList.toggle("active");
  navListElm.classList.toggle("active");
  navOverlayElm.classList.toggle("active");
});
navListElm.querySelectorAll("a[href]").forEach((elm)=>{
    elm.addEventListener("click", () => {
    menuBtnElm.classList.toggle("active");
    navListElm.classList.toggle("active");
    navOverlayElm.classList.toggle("active");
    return true;
  });
});

// top
const heroImgElm = document.querySelector(".hero-img")
function HeroAnimation() {
    heroImgElm.classList.toggle('fade-up-animation');
};

// motto
const mottoContentElm = document.querySelector("#motto .section-content");

// flow
const flow1FlowImgElm = document.querySelector("#flow1 .flow-img")
const flow1FlowCaptionElm = document.querySelector("#flow1 .flow-caption")
const flow2FlowImgElm = document.querySelector("#flow2 .flow-img")
const flow2FlowCaptionElm = document.querySelector("#flow2 .flow-caption")
const flow3FlowImgElm = document.querySelector("#flow3 .flow-img")
const flow3FlowCaptionElm = document.querySelector("#flow3 .flow-caption")
const flow4FlowImgElm = document.querySelector("#flow4 .flow-img")
const flow4FlowCaptionElm = document.querySelector("#flow4 .flow-caption")

// member
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



const memberTeamNameElm = document.querySelector(".member-team-name")
const memberTeamName = [
    {"teamName":"ふえきのり","number":"2"},
    {"teamName":"ピッコマ","number":"2"},
    {"teamName":"揚げもンズ","number":"3"},
    {"teamName":"いち","number":"3"},
    {"teamName":"とうふや","number":"4"},
    {"teamName":"ぱるくる","number":"4"},
    {"teamName":"なかよし第五公園","number":"1"},
    {"teamName":"くじら","number":"1"},
    {"teamName":"卓長とサポーター","number":"0"},
]



function onSlideChange(swiper) {
    memberTeamNameElm.innerHTML = "team " + memberTeamName[swiper.realIndex]["teamName"]
    memberTeamNameElm.setAttribute("background-status",memberTeamName[swiper.realIndex]["number"])
}
swiper.on("slideChange", onSlideChange);

// 
var scrollTargets = [
    {"elm":mottoContentElm, "className":["fade-up-animation"]},
    {"elm":heroImgElm, "className":["fade-up-animation"]},
    {"elm":flow1FlowImgElm, "className":["fade-in-animation"]},
    {"elm":flow1FlowCaptionElm, "className":["fade-left-animation","fade-up-animation"]},
    {"elm":flow2FlowImgElm, "className":["fade-in-animation"]},
    {"elm":flow2FlowCaptionElm, "className":["fade-right-animation","fade-up-animation"]},
    {"elm":flow3FlowImgElm, "className":["fade-in-animation"]},
    {"elm":flow3FlowCaptionElm, "className":["fade-left-animation","fade-up-animation"]},
    {"elm":flow4FlowImgElm, "className":["fade-in-animation"]},
    {"elm":flow4FlowCaptionElm, "className":["fade-right-animation","fade-up-animation"]},
];

var timeoutId ;
window.addEventListener( "scroll", ()=>{
    if ( timeoutId ) return ;

    timeoutId = setTimeout( function () {
        timeoutId = 0 ;
        var scroll = this.window.scrollY;
        var windowHeight = window.innerHeight;

        for(target of scrollTargets){
            var targetElm = target["elm"];
            var targetTop = targetElm.getBoundingClientRect().top;
            var targetBottom = targetElm.getBoundingClientRect().bottom;

            if (targetTop + scroll - windowHeight < scroll && scroll < targetBottom + scroll) {
                for(className of target["className"]){
                    targetElm.classList.add(className);
                }
            } else {
                for(className of target["className"]){
                    targetElm.classList.remove(className);
                }
            }
        }
    }, 500);
});

LoadingAnimation();
