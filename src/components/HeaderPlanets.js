const HeaderPlanets = ({name}) => {

    return (
    <h3 
        key={name}
        className="subtitle--big" 
        data-value={name}
        data-color={name.toLowerCase()}>
        {name.toUpperCase()}
    </h3>
    )
}

export default HeaderPlanets