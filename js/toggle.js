let darkMode = document.getElementById("darkMode")
let modoOscuro



if(localStorage.getItem("modoOscuro")){
    modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
}
else{
    // se setea por primera vez
    localStorage.setItem("modoOscuro", false)
    modoOscuro = false
}
darkMode.addEventListener("click", ()=>{
    document.body.classList.toggle("darkMode")

    if (modoOscuro == false){
        darkMode.innerText = `Dark Mode`
        darkMode.className = ("btn btn-dark")
        modoOscuro = true
        localStorage.setItem("modoOscuro", modoOscuro)

    }
    else if (modoOscuro == true){
        darkMode.innerText = `Light Mode`
        darkMode.className = ("btn btn-light")
        modoOscuro = false
        localStorage.setItem("modoOscuro", modoOscuro)
    }
})