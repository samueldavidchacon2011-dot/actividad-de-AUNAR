document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // EVENTO 1: click en el botón "Entra"
    // =========================================================
    const botonSaludo = document.getElementById("btn-saludo");

    botonSaludo.addEventListener("click", function () {
        alert("holaaa.");
    });


    // =========================================================
    // EVENTO 2: click en el título principal
    // =========================================================
    const tituloPrincipal = document.getElementById("titulo-principal");

    tituloPrincipal.addEventListener("click", function () {
        tituloPrincipal.textContent = "¡Página interactiva con 5 eventos!";
        tituloPrincipal.style.color = "#2a9d8f";
    });


    // =========================================================
    // EVENTO 3: mouseover (cuando el mouse entra en el párrafo)
    // =========================================================
    const textoDestacado = document.getElementById("texto-destacado");

    textoDestacado.addEventListener("mouseover", function () {
        textoDestacado.style.backgroundColor = "#1d3557"; // Cambia a azul oscuro
    });


    // =========================================================
    // EVENTO 4: mouseout (cuando el mouse sale del párrafo)
    // =========================================================
    textoDestacado.addEventListener("mouseout", function () {
        textoDestacado.style.backgroundColor = "#e63946"; // Regresa al rojo original
    });


    // =========================================================
    // EVENTO 5: dblclick (doble clic rápido sobre la foto de perfil)
    // =========================================================
    const fotoPerfil = document.getElementById("foto-perfil");

    fotoPerfil.addEventListener("dblclick", function () {
        fotoPerfil.style.border = "4px solid #2a9d8f"; // Cambia el borde de la foto a verde turquesa
        alert("¡Hiciste doble clic en tu foto de perfil!");
    });

});