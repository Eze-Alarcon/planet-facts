import { useContext } from 'react'
import Aside from "./Aside"
import { Information } from './Status'


const Header = () => {
    const { allData, modal, handleModal } = useContext(Information)



    const planet = allData.map((planet) => {
        return planet.name
    })

    // console.log(planet)
    
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
        
        
        <div className={ !modal ? "header--bottom" : "header--bottom vanish"}>
            <h3 className="subtitle--big">
                OVERVIEW
            </h3>
            <h3 className="subtitle--big">
                STRUCTURE
            </h3>
            <h3 className="subtitle--big">
                SURFACE
            </h3>
        </div>

        <aside className={ !modal ? "header--aside" : "header--aside open"}>
            {
                planet.map((item) => {
                    return <Aside key={item} name={item}/>
                })
            }
        </aside>

    </header>
    ) 
}


export default Header