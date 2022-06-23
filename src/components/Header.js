import { useContext } from 'react'
import Aside from "./Aside"
import { Information } from './Status'


const Header = () => {
    const { 
        allData, 
        modal, 
        activeClass,
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
        
        
        <div 
            className={ !modal ? "header--bottom" : "header--bottom vanish"} 
            onClick={(e) => changeContent(e)}>
                <h3 
                    className={"subtitle--big"} 
                    data-value="overview"
                    data-color={activeClass[0]}>
                    OVERVIEW
                </h3>
                <h3 
                    className={"subtitle--big"}  
                    data-value="structure"
                    data-color={activeClass[1]}>
                    STRUCTURE
                </h3>
                <h3 
                    className={"subtitle--big"}  
                    data-value="geology"
                    data-color={activeClass[2]}>
                    SURFACE
                </h3>
        </div>

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