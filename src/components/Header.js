import { useContext } from 'react'
import Aside from "./Aside"
import Navigation from './Navigation'
import { Information } from './Status'


const Header = () => {
    const { 
        allData, 
        modal, 
        handleModal, 
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
        
        <Navigation/>
       

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