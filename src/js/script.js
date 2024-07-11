const img = document.querySelector("#container-img img")
const btnCor = document.querySelectorAll(".btn-cor")
const btnVerde = btnCor[0]
const btnSilver = btnCor[1]
const btnGolden = btnCor[2]
const btnGrafite = btnCor[3]
const btnAzul = btnCor[4]


btnVerde.addEventListener("click", () => {
    img.src = "src/img/iphone_green.jpg"
})

btnSilver.addEventListener("click", () => {
    img.src = "src/img/iphone_silver.jpg"
})

btnGolden.addEventListener("click", () => {
    img.src = "src/img/iphone_golden.jpg"
})

btnGrafite.addEventListener("click", () => {
    img.src = "src/img/iphone_grafite.jpg"
})

btnAzul.addEventListener("click", () => {
    img.src = "src/img/iphone_blue.jpg"
})


function bloquearScroll(event) {
    event.preventDefault();
}

function desabilitaScroll(){
    window.addEventListener("touchmove", bloquearScroll, {passive:false})

}

desabilitaScroll()