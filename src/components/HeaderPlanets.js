const HeaderPlanets = ({name}) => {

    let shortcut = name.toLowerCase()

    return (
    <h3 
        key={name}
        className="subtitle--big" 
        data-value={shortcut}
        data-color={shortcut}>
        {name.toUpperCase()}
    </h3>
    )
}

export default HeaderPlanets