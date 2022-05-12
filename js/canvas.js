let windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
let windowWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

const canvas = document.getElementById('glCanvas');

function resize_handle() {
    windowHeight = canvas.getBoundingClientRect().height;
    windowWidth = canvas.getBoundingClientRect().width;
    canvas.height = windowHeight
    canvas.width = windowWidth;
}
