function change() {
    const elemente = document.querySelector("#hambuger")

    if (elemente.checked) {
        let elemento = document.querySelector(".navContainer").style = "display:none"
    } else {
        let elemento = document.querySelector(".navContainer").style = "display:initial"

    }

}