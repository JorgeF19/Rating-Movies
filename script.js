const generos = [
  {
    accion_0: ["accion", "guerra", "disparos", "peleas", "explosiones"],
  },
  {
    autos_1: ["Autos", "carrera", "nascar", "formula 1", "f1"],
  },
  {
    miedo_2: [
      "terror",
      "miedo",
      "sangre",
      "fantasma",
      "ritual",
      "posesion",
      "gore",
      "asesinato",
    ],
  },
  {
    sci_fi_3: [
      "ciencia ficcion",
      "sci-fi",
      "espacio",
      "galaxias",
      "aliens",
      "dinosaurios",
      "Viajes en el tiempo",
      "monstruos",
      "kaijin",
    ],
  },
  {
    policiaco_4: [
      "Misterio",
      "policiaco",
      "asesinatos",
      "arrestos",
      "crimenes",
      "drogas",
    ],
  },
  {
    drama_5: ["drama", "romance", "dramatico"],
  },
  {
    aventura_6: ["Aventura", "secretos", "exploracion", "viajes"],
  },
  {
    comedia_7: ["comedia", "para reir", "risas", "chistes", "humor"],
  },
  {
    infantil_8: [
      "infantil",
      "niños",
      "animada",
      "animacion",
      "educativo",
      "familia",
    ],
  },
  {
    navidad_9: [
      "navidad",
      "noche buena",
      "navideña",
      "nieve",
      "santa",
      "santa claus",
    ],
  },
  {
    magia_10: ["magia", "hechizos", "brujas", "magos", "fantasia"],
  },
];
const pelis = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOuIGgx_g2owKrHfoLuEJiDsnqFM4tzq9QQ&s",
    h3: "Piratas del caribe",
    genero: [generos[6], generos[3], generos[0], generos[7]],
    edad: "PG",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_.jpg",
    h3: "Maze Runner Death Cure",
    genero: [generos[0], generos[3]],
    edad: "PG-13",
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/f1a1aa356c534cafa952493fa280e9b6a5888982bd8d375057a8f8a4ea6b16d6.jpg",
    h3: "El aprendiz del brujo",
    genero: [generos[3], generos[0]],
    edad: "PG",
  },
  {
    img: "https://th.bing.com/th/id/OIP.O_AvRUknCT9QzVcMGeNL1gAAAA?rs=1&pid=ImgDetMain",
    h3: "Sector 9",
    genero: [generos[3], generos[5], generos[10]],
    edad: "PG-13",
  },
  {
    img: "data:image/jpeg;base64,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",
    h3: "El origen de los guardianes",
    genero: [generos[8], generos[9]],
    edad: "PG",
  },
  {
    img: "data:image/jpeg;base64,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",
    h3: "El perfume",
    genero: [generos[5], generos[4]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/R.40aa53a27c0489db4df6f56a40d3fb29?rik=wJ1UnkR9%2fYknOg&pid=ImgRaw&r=0",
    h3: "Titanes del pacifico",
    genero: [generos[0], generos[3]],
    edad: "PG-13",
  },
  {
    img: "https://th.bing.com/th/id/OIP.hXwzmvJkXoRsNjFeREpomAHaLH?rs=1&pid=ImgDetMain",
    h3: "terrifier 2",
    genero: [generos[2]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/OIP.XvynnzW7dS6qYiV6WjNSpQHaLH?rs=1&pid=ImgDetMain",
    h3: "Terrifier 3",
    genero: [generos[2]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/R.858d0cd102516918e5ddea64dff8b622?rik=%2fq0cB17HD0IqZw&pid=ImgRaw&r=0",
    h3: "Halloween",
    genero: [generos[2], generos[4]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/OIP.xqPpiZzzM-MI2gZbHafzZgHaJ4?rs=1&pid=ImgDetMain",
    h3: "Viernes 13",
    genero: [generos[2], generos[4]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/OIP.x8LEQgbXa7G8J_cY4OLWdAHaJu?rs=1&pid=ImgDetMain",
    h3: "Tarzan",
    genero: [generos[8]],
    edad: "G",
  },
  {
    img: "https://th.bing.com/th/id/OIP.RVCwpcm2fEvACwC8EBBLfgHaLH?rs=1&pid=ImgDetMain",
    h3: "El stand de los besos",
    genero: [generos[5]],
    edad: "PG-13",
  },
  {
    img: "https://th.bing.com/th/id/OIP.Go4Gnynrx7NofR4jW3qLkQHaK-?rs=1&pid=ImgDetMain",
    h3: "Culpa mia",
    genero: [generos[5], generos[1]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/R.16f15e531ebb995ca4a98d7062c24545?rik=Dwr5aoIJCVZ8yg&pid=ImgRaw&r=0",
    h3: "Freddy Krueger",
    genero: [generos[2], generos[4]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/OIP.eNXDds5zlQzoK3MsUHxy0gHaLH?rs=1&pid=ImgDetMain",
    h3: "Lady Bird",
    genero: [generos[5]],
    edad: "PG-13",
  },
  {
    img: "https://th.bing.com/th/id/OIP.MY2Di9DNqjcRsMc4YgtmdgHaK-?rs=1&pid=ImgDetMain",
    h3: "Prisioneros",
    genero: [generos[4], generos[5]],
    edad: "R",
  },
  {
    img: "https://th.bing.com/th/id/OIP.oDxU_uxz1qOcQktrgQL0twHaK-?rs=1&pid=ImgDetMain",
    h3: "La sustancia",
    genero: [generos[5], generos[3], generos[2]],
    edad: "R",
  },
  {
    img: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/f2/e630a6a02a0179d1e1c505455194be1d_original.jpg?t=1716973432",
    h3: "Anora",
    genero: [generos[5], generos[7]],
    edad: "PG-13",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_FMjpg_UX1000_.jpg",
    h3: "Sr y Sra Smith",
    genero: [generos[0], generos[5], generos[7], generos[4]],
    edad: "PG-13",
  },
  {
    img: "https://www.planetadelibros.com.co/usuaris/libros/fotos/409/m_libros/408005_portada_moana-2-la-novela_disney_202409040141.jpg",
    h3: "Moana",
    genero: [generos[10], generos[8], generos[7]],
    edad: "G",
  },
];
const movieContent = document.getElementById("galeria");

const displayMovie = () => {
  pelis.forEach((movie) => {
    const content = document.createElement("div");

    content.className = "pelicula";
    content.classList.add(`${movie.edad}`);
    content.style.setProperty("--background-image", `url(${movie.img})`);

    content.innerHTML = `
      <img src="${movie.img}">
      <h3>${movie.h3}</h3>
      <div class="rating"></div>
      <p class="generos"></p>
      
    `;
    for (let i = 0; i < movie.genero.length; i++) {
      const generosObj = movie.genero[i];

      const generokey = Object.keys(generosObj);
      const generoValues = Object.values(generosObj);

      generokey.forEach((key, index) => {
        generoValues[index].forEach((genero) => {
          content.querySelector(
            ".generos"
          ).innerHTML += `<span>${genero}</span>`;
        });
      });
    }
    // content.style.backgroundImage = `url(${movie.img})`;
    movieContent.appendChild(content);
  });
};
displayMovie();
//------creacion de las estrellas--------
document.addEventListener("DOMContentLoaded", function () {
  const ratingContainers = document.querySelectorAll(".rating");
  const maxRating = 5;

  ratingContainers.forEach((container) => {
    for (let i = 1; i <= maxRating; i++) {
      const star = document.createElement("i");
      star.classList.add("bi", "bi-star-fill", "star");

      container.appendChild(star);
    }
    //------rellenado de estrellas-------
    const stars = container.querySelectorAll(".star");

    stars.forEach(function (star, index) {
      star.addEventListener("click", function () {
        for (let i = index; i >= index && i < maxRating; i++) {
          stars[i].classList.add("checked");
        }
        for (let i = index - 1; i < index && i >= 0; i--) {
          console.log(i);
          stars[i].classList.remove("checked");
        }
      });
    });
  });
});
//------llenado de generos en sidebar--------

document.addEventListener("DOMContentLoaded", function () {
  const generosContainer = document.getElementById("dropdown1");

  const allGeneros = generos
    .map((generosList) => Object.values(generosList).flat())
    .flat();
  const sortedGeneros = allGeneros.sort((a, b) => a.localeCompare(b));

  sortedGeneros.forEach((genero) => {
    const li = document.createElement("li");
    li.className = "dropdown-item";
    li.classList.add("bi", "bi-caret-right");
    li.innerHTML = " " + genero;
    generosContainer.appendChild(li);

    li.addEventListener("click", function () {
      const selectedValue = genero.toLowerCase();

      document.querySelectorAll(".pelicula").forEach((peli) => {
        const generosPelicula = peli.textContent;
        console.log(generosPelicula);
        if (generosPelicula.includes(selectedValue)) {
          peli.classList.remove("filtro");
        } else {
          peli.classList.add("filtro");
        }
      });
    });
  });
  const edadesArray = ["PG", "PG-13", "R", "G", "NC-17"];
  const edadesContainer = document.getElementById("dropdown2");
  for (let i = 0; i < edadesArray.length; i++) {
    const li = document.createElement("li");
    li.className = "dropdown-item";
    li.classList.add("bi", "bi-caret-right");
    li.innerHTML = " " + edadesArray[i];
    edadesContainer.appendChild(li);

    li.addEventListener("click", function () {
      const selectedValue = edadesArray[i].toLowerCase();

      document.querySelectorAll(".pelicula").forEach((peli) => {
        const edadPelicula = Array.from(peli.classList);
        console.log("texto de la peli: " + edadPelicula);
        console.log("valor a buscar" + selectedValue);
        for (let i = 0; i < edadPelicula.length; i++) {
          console.log(edadPelicula[i]);
          if (edadPelicula[i].toLowerCase() == selectedValue) {
            peli.classList.remove("filtro");
            break;
          } else {
            peli.classList.add("filtro");
          }
        }
      });
    });
  }
});

//------filtro de busqueda--------

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#searchBox")) {
    document.querySelectorAll(".pelicula").forEach((peli) => {
      peli.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? peli.classList.remove("filtro")
        : peli.classList.add("filtro");
    });
  }
});

//------sidebar y dropdowns--------
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.querySelectorAll(".dropdowncontent").forEach((content) => {
    content.classList.remove("active");
  });
}
function toggleDropdown(id) {
  if (document.getElementById(id).classList.contains("active")) {
    document.getElementById(id).classList.remove("active");
  } else {
    document.querySelectorAll(".dropdowncontent").forEach((content) => {
      content.classList.remove("active");
      document.getElementById(id).classList.add("active");
    });
  }
}

function clearfilter() {
  document.querySelectorAll(".pelicula").forEach((peli) => {
    peli.classList.remove("filtro");
  });
}
