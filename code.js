let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {
  function formatearTexto(texto) {
    return texto
      .toLowerCase()
      .split(" ")
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ");
  }

  do {
    nombre = prompt("Ingrese su nombre");
  } while (nombre === null || nombre === "" || nombre.length < 3);
  
  nombre = formatearTexto(nombre);

  do {
    edad = prompt("Ingrese su año de nacimiento");
  } while (edad === null || edad === "" || isNaN(edad) || edad >= new Date().getFullYear() || edad < 1934);

  do {
    ciudad = prompt("Ingrese la ciudad en la que nació");
  } while (ciudad === null || ciudad === "" || ciudad.length < 3);
  
  ciudad = formatearTexto(ciudad);

  interesPorJs = confirm("¿Te apasiona programar?");

  datosPersona.nombre = nombre;
  datosPersona.edad = new Date().getFullYear() - parseInt(edad);
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesPorJs;
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  const datos = document.querySelector(".card-header")
  datos.innerHTML = `
    <h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
    <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
    <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
    <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs? "si" : "no"}</span></h3>
  `;
}

function recorrerListadoYRenderizarTarjetas() {
  const cards = document.querySelector("#fila")
  cards.innerHTML = ""
  listado.forEach(materia => {
    cards.innerHTML += `
      <div class="caja">
        <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      </div>    
    `;
  });
}

function alternarColorTema() {
  let sitio = document.getElementById("sitio");

  if (sitio.classList.contains("dark")) {
    sitio.classList.remove("dark");
    sitio.classList.add("light");
  } else {
    sitio.classList.remove("light");
    sitio.classList.add("dark");
  }
}

function mostrarTexto() {
  window.addEventListener("keydown", (evento) => {
    if (evento.key === "f") {
      const texto = document.querySelector("#sobre-mi");
      texto.classList.remove("oculto");
    }
  });
}

mostrarTexto();
