
messages = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte.Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração ?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu"
]

let randomNumber = Math.floor(Math.random() * 10)

const bntOpenCookie = document.querySelector("#bntOpenCookie")

const bntNewCookie = document.querySelector("#bntNewCookie")

const message = document.querySelector("span")

const window1 = document.querySelector(".window1")

const window2 = document.querySelector(".window2")

bntOpenCookie.addEventListener('click', handleOpenCookie)
bntNewCookie.addEventListener('click', handleNewCookie)


function handleOpenCookie(event) {
    event.preventDefault() // nao enviar o formulario
    toggleScreen()


}

function handleNewCookie() {
    message.innerText = messages[randomNumber]
    randomNumber = Math.floor(Math.random() * 10)
    toggleScreen()
}



function toggleScreen() {
    window1.classList.toggle("hide")
    window2.classList.toggle("hide")
}