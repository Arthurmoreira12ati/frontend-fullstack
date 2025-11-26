const header = document.querySelector("header ul")

function init () {
    const user = JSON.parse(sessionStorage.getItem("user"))
   
    if (user) {
        header.innerHTML += `
            <li>Usuários : ${user.name}</li>
            <li><button id="logout">Sair</button></li>
        `
        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)

        return
    }

    header.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()

function logout() {
    sessionStorage.removeItem("user")
    alert("Você deslogou. até mais. volte mais vezes")
    window.location.reload()
}