import { useContext } from 'react'
import Aside from "./Aside"
import HeaderBottom from './HeaderBottom'
import { Information } from './Status'
import HeaderPlanets from './HeaderPlanets'


const Header = () => {
    const { 
        allData, 
        planetData,
        modal, 
        handleModal, 
        changeContent,
        findPlanet 
    } = useContext(Information)

    const planet = allData.map((planet) => planet.name)

    const iconMenu = {
        "backgroundImage": `url('../assets/icon-hamburger.svg')`,
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

            <i onClick={handleModal} className={!modal ? "" : "open"} style={iconMenu}>
              {/* burger menu container */}  
            </i>
        </div>
        
        <nav
        className={ !modal ? "header--bottom" : "vanish"} 
        onClick={(e) => changeContent(e, planetData.name)}>
            <HeaderBottom color={planetData.name}/>
        </nav>

        <nav 
        className="header--nav"
        onClick={(e) => findPlanet(e)}> 
            {
                planet.map(item => {
                    return <HeaderPlanets key={item} name={item}/>
                })
            }
        </nav>

       

        <aside className={ !modal ? "header--aside" : "header--aside open"}>
            {
                planet.map((item) => {
                    return <Aside 
                        key={item} 
                        name={item} 
                        findPlanet={findPlanet}/>
                })
            }
        </aside>

    </header>
    ) 
}


export default Header