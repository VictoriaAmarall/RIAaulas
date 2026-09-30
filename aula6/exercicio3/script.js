const inputTexto = document.querySelector("#inputTexto");
const btnEnviar = document.querySelector("#btnEnviar");
const resultado = document.querySelector("#resultado");


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    const cidade = inputTexto.value.trim();
    fetch("https://geocoding-api.open-meteo.com/v1/search?name="+ cidade)
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
    });

    });