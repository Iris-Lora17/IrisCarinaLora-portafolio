// CAMBIAR ENTRE TEMA OSCURO Y CLARO

const botonTema = document.getElementById("themeToggle");

botonTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botonTema.textContent = "☾";
    } else {
        botonTema.textContent = "☀";
    }

});