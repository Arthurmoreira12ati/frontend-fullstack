const main = document.querySelector("main")

async function buscarUsuarios() {
    const users = await fetch("http://localhost:3333").then((response) => response.json())
    
    users.map(user => {
        main.innerHTML += `
            <section>
                <h2>Nome: ${user.name}</h2>
                <p>Idade: ${user.age}</p>
                <p>E-mail: ${user.email}</p>
            </section>
        `
    })
}

buscarUsuarios()