const peliculas = {
  "nuestra-tierra": {
    titulo: "Nuestra tierra",
    director: "Lucrecia Martel",
    datos: "ARGENTINA · 2026 · 112'",
    genero: "DRAMA",
    fecha: "10 Diciembre · 18:30",
    lugar: "Cine Doré",
    imagen: "img/nuestra tierra.jpeg",
    trailer: "https://youtu.be/jmeBnEns89A?si=EIlYgforzyASlU-D",
  },
  "the-presidents-cake": {
    titulo: "The president's cake",
    director: "Hasan Hadi",
    datos: "IRAQ · 2025 · 95'",
    genero: "DRAMA",
    fecha: "11 Diciembre · 21:00",
    lugar: "Cine Doré",
    imagen: "img/the presidents cake.jpg",
    trailer: "https://youtu.be/EIhlE3lfu6w?si=7821dLj-OGjxzO5E",
  },
  ariel: {
    titulo: "Ariel",
    director: "Lois Patiño",
    datos: "ESPAÑA · 2025 · 88'",
    genero: "EXPERIMENTAL",
    fecha: "12 Diciembre · 19:00",
    lugar: "Cine Doré",
    imagen: "img/ariel.jpg",
    trailer: "https://youtu.be/-PIwY7JWVgI?si=oMw2zmpOaqgGRlPN",
  },
  "anoche-conquiste-tebas": {
    titulo: "Anoche conquisté Tebas",
    director: "Gabriel Azorín",
    datos: "ESPAÑA · 2025 · 97'",
    genero: "DRAMA",
    fecha: "8 Diciembre · 20:30",
    lugar: "Cine Doré",
    imagen: "img/anoche conquisté tebas.jpg",
    trailer: "https://youtu.be/d6NlZ8L2XxY?si=yRO1H3Ols7U7ug0f",
  },
  "silent-friend": {
    titulo: "Silent Friend",
    director: "Ildikó Enyedi",
    datos: "HUNGRÍA · 2025 · 112'",
    genero: "FANTASÍA",
    fecha: "7 Diciembre · 18:00",
    lugar: "Cine Doré",
    imagen: "img/silent friend.jpg",
    trailer: "https://youtu.be/72SfEyxoZrA?si=yrexqJJ9DLd02nWn",
  },
  "blue-moon": {
    titulo: "Blue Moon",
    director: "Richard Linklater",
    datos: "EE. UU. · 2026 · 104'",
    genero: "DRAMA",
    fecha: "9 Diciembre · 20:00",
    lugar: "Cine Doré",
    imagen: "img/blue moon.jpg",
    trailer: "https://youtu.be/qo7gRHip0lI?si=qC4elTnQRQRKVrQ1D-",
  },
  aftersun: {
    titulo: "Aftersun",
    director: "Charlotte Wells",
    datos: "REINO UNIDO · 2023 · 102'",
    genero: "DRAMA",
    fecha: "6 Diciembre · 19:00",
    lugar: "Cine Doré",
    imagen: "img/aftersun.jpg",
    trailer: "https://youtu.be/vXKcWRu8K_U?si=cnAZGdF1k8QbnS2j",
  },
  "drive-my-car": {
    titulo: "Drive My Car",
    director: "Ryūsuke Hamaguchi",
    datos: "JAPÓN · 2021 · 179'",
    genero: "DRAMA",
    fecha: "7 Diciembre · 16:00",
    lugar: "Cine Doré",
    imagen: "img/drive my car.jpg",
    trailer: "https://youtu.be/6BPKPb_RTwI?si=idTvEb5CyBUK3ctP",
  },
  "anatomia-de-una-caida": {
    titulo: "Anatomía de una caída",
    director: "Justine Triet",
    datos: "FRANCIA · 2023 · 151'",
    genero: "DRAMA / THRILLER JUDICIAL",
    fecha: "8 Diciembre · 17:30",
    lugar: "Cine Doré",
    imagen: "img/anatomia-de-una-caida.jpg",
    trailer: "https://youtu.be/Qg_2qB_Q7Pc?si=HbhaBSolQumyDTZp",
  },
  "past-lives": {
    titulo: "Past Lives",
    director: "Celine Song",
    datos: "COREA DEL SUR · 2023 · 106'",
    genero: "DRAMA ROMÁNTICO",
    fecha: "9 Diciembre · 18:00",
    lugar: "Cine Doré",
    imagen: "img/past lives.jpg",
    trailer: "https://youtu.be/kA244xewjcI?si=LgGwgKMfUDqOsYBe",
  },
  creatura: {
    titulo: "Creatura",
    director: "Elena Martín Gimeno",
    datos: "ESPAÑA · 2023 · 112'",
    genero: "DRAMA",
    fecha: "10 Diciembre · 20:30",
    lugar: "Cine Doré",
    imagen: "img/creatura.jpg",
    trailer: "https://youtu.be/VJiO1brjtkc?si=vfbsyiPSr4vq1qm6",
  },
  "24-siete": {
    titulo: "24 Siete",
    director: "Santiago Ráfales",
    datos: "ESPAÑA · 2023 · 28'",
    genero: "DRAMA ADOLESCENTE",
    fecha: "11 Diciembre · 17:00",
    lugar: "Cine Doré",
    imagen: "img/247.jpg",
    trailer: "https://youtu.be/CTmkhskrXIY?si=CtBtFgAcQXl1_nC3",
  },
  "aunque-es-de-noche": {
    titulo: "Aunque es de noche",
    director: "Guillermo García López",
    datos: "ESPAÑA · 2023 · 16'",
    genero: "DRAMA SOCIAL",
    fecha: "11 Diciembre · 17:45",
    lugar: "Cine Doré",
    imagen: "img/aunque es de noche.jpeg",
    trailer: "https://youtu.be/CJqWScaOlgM?si=GzC5j1xp4yDTrPIu",
  },
  "la-quimera": {
    titulo: "La quimera",
    director: "Alice Rohrwacher",
    datos: "ITALIA · 2023 · 130'",
    genero: "DRAMA",
    fecha: "12 Diciembre · 21:00",
    lugar: "Cine Doré",
    imagen: "img/la quimera.jpeg",
    trailer: "https://youtu.be/pN1c2f0P3RQ?si=ty2JB3K18vKSYLdm",
  },
  midsommar: {
    titulo: "Midsommar",
    director: "Ari Aster",
    datos: "ESTADOS UNIDOS · 2019 · 147'",
    genero: "TERROR FOLCLÓRICO / DRAMA",
    fecha: "12 Diciembre · 23:00",
    lugar: "Cine Doré",
    imagen: "img/midsommar.jpeg",
    trailer: "https://youtu.be/3LPZ4agE75Y?si=1p59O1wi8SsYQXwU",
  },
  titane: {
    titulo: "Titane",
    director: "Julia Ducournau",
    datos: "FRANCIA · 2021 · 108'",
    genero: "THRILLER",
    fecha: "12 Diciembre · 23:30",
    lugar: "Cine Doré",
    imagen: "img/titane.jpg",
    trailer: "https://youtu.be/ryx4DmlcZFU?si=XOA9QruIWmg7irRy",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const peliSeleccionada = parametros.get("id");

  if (peliSeleccionada && peliculas[peliSeleccionada]) {
    const peli = peliculas[peliSeleccionada];

    if (document.getElementById("peli-img")) {
      document.getElementById("peli-img").src = peli.imagen;
      document.getElementById("peli-img").alt = peli.titulo;
    }
    if (document.getElementById("peli-titulo"))
      document.getElementById("peli-titulo").textContent = peli.titulo;
    if (document.getElementById("peli-director"))
      document.getElementById("peli-director").textContent = peli.director;
    if (document.getElementById("peli-datos"))
      document.getElementById("peli-datos").textContent = peli.datos;
    if (document.getElementById("peli-genero"))
      document.getElementById("peli-genero").textContent = peli.genero;
    if (document.getElementById("peli-fecha"))
      document.getElementById("peli-fecha").textContent = peli.fecha;
    if (document.getElementById("peli-lugar"))
      document.getElementById("peli-lugar").textContent = peli.lugar;
    if (document.getElementById("peli-trailer"))
      document.getElementById("peli-trailer").href = peli.trailer;
  }

  const precios = {
    general: 8.0,
    reducida: 6.0,
  };

  const selectTipo = document.getElementById("tipo");
  const selectCantidad = document.getElementById("cantidad");
  const elementoTotal = document.getElementById("precio-total");

  function calcularTotal() {
    const tipoSeleccionado = selectTipo.value;
    const cantidadSeleccionada = parseInt(selectCantidad.value, 10);

    if (tipoSeleccionado && !isNaN(cantidadSeleccionada)) {
      const precioUnitario = precios[tipoSeleccionado] || 0;
      const total = precioUnitario * cantidadSeleccionada;

      elementoTotal.textContent = total.toFixed(2).replace(".", ",") + " €";
    } else {
      elementoTotal.textContent = "0,00 €";
    }
  }

  if (selectTipo && selectCantidad && elementoTotal) {
    selectTipo.addEventListener("change", calcularTotal);
    selectCantidad.addEventListener("change", calcularTotal);
  }

  // Formulario
  const formulario = document.querySelector(".formulario-compra");
  const modal = document.getElementById("modal-confirmacion");
  const btnCerrarModal = document.getElementById("cerrar-modal");
  const btnAceptarModal = document.getElementById("btn-aceptar-modal");

  if (formulario && modal) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const tipoText = selectTipo.options[selectTipo.selectedIndex].text;
      const cantidad = selectCantidad.value;
      const total = elementoTotal.textContent;
      const tituloPeli = document.getElementById("peli-titulo")
        ? document.getElementById("peli-titulo").textContent
        : "Película";

      document.getElementById("resumen-pelicula").textContent = tituloPeli;
      document.getElementById("resumen-nombre").textContent = nombre;
      document.getElementById("resumen-email").textContent = email;
      document.getElementById("resumen-tipo").textContent = tipoText;
      document.getElementById("resumen-cantidad").textContent = cantidad;
      document.getElementById("resumen-total").textContent = total;

      modal.classList.remove("hidden");
    });

    function ocultarModal() {
      modal.classList.add("hidden");
      formulario.reset();
      if (elementoTotal) elementoTotal.textContent = "0,00 €";
      window.location.href = "index.html";
    }

    if (btnCerrarModal) btnCerrarModal.addEventListener("click", ocultarModal);
    if (btnAceptarModal)
      btnAceptarModal.addEventListener("click", ocultarModal);

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        ocultarModal();
      }
    });
  }

  // D. Carrusel
  const pista = document.getElementById("carrusel-pista");

  if (pista) {
    const listaKeys = Object.keys(peliculas);

    function crearHtmlTarjeta(key) {
      const peli = peliculas[key];
      const esCreatura = key === "creatura";
      return `
        <article class="tarjeta" data-id="${key}">
          <div class="imagen">
            ${esCreatura ? '<span class="etiqueta">Nueva</span>' : ""}
            <img src="${peli.imagen}" alt="${peli.titulo}" />
            <div class="triangulo"></div>
          </div>
          <div class="info">
            <h3 class="titulo">${peli.titulo}</h3>
            <p class="director">${peli.director}</p>
            <p class="datos">${peli.datos}</p>
            <p class="genero">${peli.genero}</p>
            <div class="linea-separadora"></div>
            <div class="pie-tarjeta">
              <a href="compra.html?id=${key}" class="btn-comprar">COMPRAR ENTRADAS</a>
              <span class="precio">${esCreatura ? "7,00 €" : "8,00 €"}</span>
            </div>
          </div>
          <div class="troquelado-inferior"></div>
        </article>
      `;
    }

    const htmlOriginal = listaKeys.map((key) => crearHtmlTarjeta(key)).join("");
    pista.innerHTML = htmlOriginal + htmlOriginal;

    const tarjetas = Array.from(pista.children);
    const totalPeliculas = listaKeys.length;

    let indiceActual =
      listaKeys.indexOf("creatura") !== -1 ? listaKeys.indexOf("creatura") : 0;

    function moverCarrusel(sinTransicion = false) {
      if (tarjetas.length === 0) return;

      const anchoTarjeta = 340;
      const gap = 40;
      const paso = anchoTarjeta + gap;

      const anchoPantalla = window.innerWidth;
      const centroPantalla = anchoPantalla / 2;
      const centroTarjeta = paso * indiceActual + anchoTarjeta / 2;
      const desplazamiento = centroPantalla - centroTarjeta;

      if (sinTransicion) {
        pista.style.transition = "none";
      } else {
        pista.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
      }

      pista.style.transform = `translateX(${desplazamiento}px)`;

      tarjetas.forEach((tarjeta, index) => {
        if (index === indiceActual) {
          tarjeta.classList.add("tarjeta-destacada-centro");
        } else {
          tarjeta.classList.remove("tarjeta-destacada-centro");
        }
      });
    }

    setTimeout(() => moverCarrusel(), 50);
    window.addEventListener("resize", () => moverCarrusel(true));

    setInterval(() => {
      indiceActual++;
      moverCarrusel();

      if (indiceActual >= totalPeliculas) {
        setTimeout(() => {
          indiceActual = 0;
          moverCarrusel(true);
        }, 800);
      }
    }, 4000);
  }
});
