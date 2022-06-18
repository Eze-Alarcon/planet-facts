import { useState } from 'react'
import planets from '../data.json'
import Aside from "./Aside"


const Header = () => {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(prevState => !prevState)
    }

    const planet = planets.map((planet) => {
        return planet.name.toUpperCase()
    })

    // console.log(planet)
    
    return (
    <header className="header">

        <div className="header--top">
            <h1 className="title--mini">
                THE PLANETS
            </h1>

            <i onClick={handleModal}>
              {/* burger menu container */}  
            </i>
        </div>
        
        
        <div className={modal ? "header--bottom" : "header--bottom vanish"}>
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

        <aside className={ modal ? "header--aside" : "header--aside open"}>
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