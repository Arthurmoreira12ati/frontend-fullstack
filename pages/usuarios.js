const main = document.querySelector("main")

async function buscarUsuarios() {
    const users = await fetch("https://backend-fullstack-dusky.vercel.app/").then((response) => response.json())
    
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