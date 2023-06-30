// loader
const loaderElm = document.querySelector("#loader")
function LoadingAnimation() {
    window.setTimeout(()=>{
        loaderElm.classList.toggle('fin');
    }, 3 * 1000);
};

LoadingAnimation();