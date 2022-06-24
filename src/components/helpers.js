

const findTags = (select, planet) => {
    let [...tags] = document.querySelectorAll(".header--bottom > h3")

    for (let tag of tags) tag.dataset.color = false

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