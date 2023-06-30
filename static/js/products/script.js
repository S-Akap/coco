// loader
const loaderElm = document.querySelector("#loader")
function LoadingAnimation() {
    window.setTimeout(()=>{
        loaderElm.classList.toggle('fin');
    }, 2 * 1000);
};

LoadingAnimation();