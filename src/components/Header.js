import planets from '../data.json'
import Aside from "./Aside"


const Header = () => {
    
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

            <i>
              {/* burger menu container */}  
            </i>
        </div>
        
        
        <div className="header--bottom">
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

        <aside className="header--aside">
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