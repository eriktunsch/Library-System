NProgress.set(0.0);
NProgress.set(0.8);
setTimeout(function() {
    NProgress.set(0.9);
}, 300);
window.addEventListener('load', function() {
    setTimeout(function() {
        NProgress.set(1.0);
    }, 500);
})