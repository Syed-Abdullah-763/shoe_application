const container = document.querySelector("#container");
const card = document.querySelector("#card");
// Popup
const info = document.querySelector(".info");
const sneakers = document.querySelector(".sneaker img");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

// Moving Animatio
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animation In 
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    
    //Popout
    info.style.transform = "translateZ(100px)";
    sneakers.style.transform = "translateZ(150px) rotateZ(-45deg)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(100px)";
});

// Animation Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5 ease-out";
    card.style.transition = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    info.style.transform = "translateZ(0px)";
    sneakers.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
