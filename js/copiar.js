const contenido = document.getElementById("caja-respuesta")
const btnCopy = document.getElementById("btn-copy")

btnCopy.addEventListener("click", e=> {
    contenido.select()
    document.execCommand("copy")
})