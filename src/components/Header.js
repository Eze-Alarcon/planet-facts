const Header = (props) => {

    const iconMenu = {
        "backgroundImage": `url(../resources/icon-hamburger.svg)`,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
    }
    

    return (
    <header className="header">

        <div className="header--top">

            <h1 className="header--title">
                THE PLANETS
            </h1>

            <i onClick={props.handleModal} className={!props.modal ? "" : "open"} style={iconMenu}>
              {/* burger menu container */}  
            </i>

        </div>
        
        
        <nav
            className={ !props.modal ? "header--bottom" : "vanish"} 
            onClick={(e) => props.changeContent(e, props.name)}>
                {props.loadHeaderBottom()}
        </nav>


        <nav 
            className="header--nav"
            onClick={(e) => props.findPlanet(e)}> 
            {props.planet.map(props.render1)}
        </nav>


        <aside className={ !props.modal ? "header--aside" : "header--aside open"}>
            {props.planet.map(props.render2)}
        </aside>

    </header>
    ) 
}


export default Header