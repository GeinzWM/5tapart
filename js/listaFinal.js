var finalImg = [
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },
    {
        imagen: "img/modelo.jpg",

    },

];

var contenedorLista = document.getElementById("lista-finalid")

finalImg.forEach(lista => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="productolosta">
    <img src="${lista.imagen}" alt="${lista.titulo}" class="lista-finalimg">
    </div>
    `;
    contenedorLista.appendChild(li)
})