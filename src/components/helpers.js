

const findTags = (select, planet) => {
    let [...tags] = document.querySelectorAll("nav > h3")

    for (let tag of tags) tag.dataset.color = false

    if (select !== undefined) select.dataset.color = planet.toLowerCase()
    else tags[0].dataset.color = planet.toLowerCase()


}



export { findTags }