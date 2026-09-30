// const botao = document.querySelector("#btnBuscar");
// const loading = document.querySelector("#loading");
const resultado = document.querySelector("#resultado");

    resultado.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro HTTP: " + response.status);
            }

            return response.json();
        })
        .then(posts => {
            posts.forEach(post => {
                resultado.innerHTML += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
        })
        .catch(erro => {
            resultado.innerHTML = `<p>Erro ao realizar a requisição. <br>${erro.message}</p>`;
        });
