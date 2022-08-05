
// search = overview || structure || surface --> geology
// cambia el color de los tags y elimina los colores anteriores
const findTags = (search, planet) => {
    let [...headerTypes] = document.querySelectorAll(".header--bottom > h3")
    let [...headerPlanets] = document.querySelectorAll(".header--nav > h3")
    let [...buttons] = document.querySelectorAll(".navigation > button")
    
    for (let tag of headerTypes) tag.dataset.color = false
    for (let tag of headerPlanets) tag.dataset.color = false
    for (let button of buttons) button.dataset.color = false


    let [headerPlanet] = headerPlanets.filter(item => item.dataset.value === planet)
    headerPlanet.dataset.color = planet.toLowerCase()
    


    if (search !== undefined) {
        
        let [headerType] = headerTypes.filter(item => item.dataset.value === search)
        headerType.dataset.color = planet.toLowerCase()

        let [button] = buttons.filter(item => item.dataset.value === search)
        button.dataset.color = planet.toLowerCase()
    }


    // Fallback por si se cambia de planeta o el valor es indefinido se ejecutara esta linea

    if (search === undefined) {
        headerTypes[0].dataset.color = planet.toLowerCase()
        buttons[0].dataset.color = planet.toLowerCase()
    }
    
}


// agrega la animacion a la imagen del planeta usando animateCSS
const imgAnimations = () => {

    const NECESARY = "animate__animated"

    const ANIMATION = "animate__fadeInLeft"
    

    let imgTag = document.querySelector("img")

    imgTag.classList = ""

    imgTag.classList = `${NECESARY} ${ANIMATION}`


    setTimeout(() => {
        imgTag.classList = ``
    }, 1000)
}



export { findTags, imgAnimations }