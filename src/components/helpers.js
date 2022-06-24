

const findTags = (select, planet) => {
    let tags = []
    let viewport = window.innerWidth < 768;

    if (viewport) {
        [...tags] = document.querySelectorAll(".header--bottom > h3")
    } else {
        [...tags] = document.querySelectorAll(".header--nav > h3")
    }

    for (let tag of tags) tag.dataset.color = false

    console.log("findTags activated:", {
        "select": select,
        "planet": planet,
        "tags": tags
    })

    if (select !== undefined) {
        select.dataset.color = planet.toLowerCase()
    }
    else if (planet !== undefined) {
        tags[0].dataset.color = planet.toLowerCase()
    }
}


const findButtons = (select, planet) => {
    let [...tags] = document.querySelectorAll(".navigation > button")

    for (let tag of tags) tag.dataset.color = false

    if (select !== undefined) {
        select.dataset.color = planet.toLowerCase()
    }
    else if (planet !== undefined) {
        tags[0].dataset.color = planet.toLowerCase()
    }
}



export { findTags, findButtons }