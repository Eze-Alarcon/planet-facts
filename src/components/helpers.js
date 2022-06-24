
// search = overview || structure || surface --> geology
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


    /* 
        Fallback por si se cambia de planeta o el valor es indefinido se ejecutara esta linea
    */

    if (search === undefined) {
        headerTypes[0].dataset.color = planet.toLowerCase()
        buttons[0].dataset.color = planet.toLowerCase()
    }
    
}



const imgAnimations = () => {

    const NECESARY = "animate__animated"

    const animations = {
        "leftInFade": "animate__fadeInLeft"
    }

    let [imgTag] = document.querySelectorAll("img")

    
    imgTag.classList = `${NECESARY} ${animations.leftInFade}`


    setTimeout(() => {
        imgTag.classList = ``
    }, 1500)
}


const spanAnimation = () => {

    const SpanClass = "geology--img"

    const NECESARY = "animate__animated"

    const animations = {
        "zoomIn": "animate__zoomIn",
        "delay": "animate__delay-1s"
    }

    return `${SpanClass} ${NECESARY} ${animations.zoomIn} ${animations.delay}`

}










export { findTags, imgAnimations, spanAnimation }