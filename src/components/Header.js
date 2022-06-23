import { useContext } from 'react'
import Aside from "./Aside"
import HeaderBottom from './HeaderBottom'
import { Information } from './Status'


const Header = () => {
    const { 
        allData, 
        planetData,
        modal, 
        // activeClass,
        handleModal, 
        changeContent,
        findPlanet 
    } = useContext(Information)

    const planet = allData.map((planet) => planet.name)

    return (
    <header className="header">

        <div className="header--top">
            <h1 className="header--title">
                THE PLANETS
            </h1>

            <i onClick={handleModal} className={!modal ? "" : "open"}>
              {/* burger menu container */}  
            </i>
        </div>
        
        <nav 
        className={ !modal ? "header--bottom" : "vanish"} 
        onClick={(e) => changeContent(e, planetData.name)}>
            <HeaderBottom color={planetData.name}/>
        </nav>

        {/* <nav 
        className={ !modal ? "header--bottom" : "vanish"} 
        onClick={(e) => changeContent(e)}>
            <HeaderBottom activeClass={activeClass}/>
        </nav> */}

       

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