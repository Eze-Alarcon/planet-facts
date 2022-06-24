
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
        console.log("search", search)
        
        let [headerType] = headerTypes.filter(item => item.dataset.value === search)
        headerType.dataset.color = planet.toLowerCase()
        console.log("headerType: ",headerType)

        let [button] = buttons.filter(item => item.dataset.value === search)
        button.dataset.color = planet.toLowerCase()
        console.log("button: ", button)   
    }


    /* 
        Si se cambia de planeta o el valor es indefinido se ejecutara esta linea
    */

    if (search === undefined) {
        headerTypes[0].dataset.color = planet.toLowerCase()
        buttons[0].dataset.color = planet.toLowerCase()
    }
    
}



export { findTags }