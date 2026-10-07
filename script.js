async function buscarUsuarios() {
    const area = document.getElementById("usuarios");
    area.innerHTML = "Carregando...";
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const usuarios = await resposta.json();
        area.innerHTML = "";
        usuarios.forEach(usuario => {
            area.innerHTML += `
                <div class="card">
                    <h2>${usuario.name}</h2>
                    <p>${usuario.email}</p>
                    <p> ${usuario.address.city}</p>
                    <p> ${usuario.company.name}</p>
                </div>
            `;
        });
    } catch (erro) {
        area.innerHTML =
            " Não foi possível carregar os usuários.";
    }
}
