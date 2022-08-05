// import { useContext } from 'react'
// import { Information } from './Status'
// import Aside from "./Aside"
// import HeaderBottom from './HeaderBottom'
// import HeaderPlanets from './HeaderPlanets'


const Header = (props) => {
    // const { 
    //     allData, 
    //     planetData,
    //     modal, 
    //     handleModal, 
    //     changeContent,
    //     findPlanet 
    // } = useContext(Information)

    // const planet = props.allData.map((planet) => planet.name)

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
                {/* <HeaderBottom color={props.name}/> */}
                {props.loadHeaderBottom()}
        </nav>


        <nav 
            className="header--nav"
            onClick={(e) => props.findPlanet(e)}> 
            {
                // planet.map(item => {
                //     return <HeaderPlanets key={item} name={item}/>
                // })
                props.render1()
            }
        </nav>

       

        <aside className={ !props.modal ? "header--aside" : "header--aside open"}>
            {
                // planet.map((item) => {
                //     return <Aside 
                //         key={item} 
                //         name={item} 
                //         findPlanet={props.findPlanet}/>
                // })

                props.render2()
            }
        </aside>

    </header>
    ) 
}


export default Header