

const findTags = (selected, planet) => {
    let tags = []
    let viewport = window.innerWidth < 768;

    if (viewport) {
        [...tags] = document.querySelectorAll(".header--bottom > h3")
    } else {
        [...tags] = document.querySelectorAll(".header--nav > h3")
    }

    for (let tag of tags) tag.dataset.color = false

    console.log("findTags activated:", {
        "select": selected,
        "planet": planet,
        "tags": tags
    })

    if (selected !== undefined) {
        selected.dataset.color = planet.toLowerCase()
    }
    else if (planet !== undefined) {
        tags[0].dataset.color = planet.toLowerCase()
    }
}


const findButtons = (selected, planet) => {
    let [...tags] = document.querySelectorAll(".navigation > button")

    for (let tag of tags) tag.dataset.color = false

    if (selected !== undefined) {
        selected.dataset.color = planet.toLowerCase()
    }
    else if (planet !== undefined) {
        tags[0].dataset.color = planet.toLowerCase()
    }
}



export { findTags, findButtons }