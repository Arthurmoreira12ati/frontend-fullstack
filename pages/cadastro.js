const button = document.querySelector("button")
button.addEventListener("click", sendUser)

async function sendUser(event) {
    event.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const age = document.querySelector("#age").value

    if (name === "" || email === "" || password === "" || age === "") {
        alert("Preencha todas as informações!")
        return
    }

    const user = {
        name,
        email,
        age,
        password
    }

    const response = await fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)

    window.location.href = "../index.html"
}