document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navbar");
    let abrir = document.querySelector(".menu-abrir");
    let cerrar = document.querySelector(".menu-cerrar");
    let all= document.querySelector("body");

    abrir.addEventListener("click", () => {
        nav.classList.toggle("navbar-visible");
         all.style.margin = '0';
        all.style.height = '100%';
        all.style.overflow = 'hidden';
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("navbar-visible");
        all.style.margin = '';
        all.style.height = '';
        all.style.overflow = '';
    });
});
