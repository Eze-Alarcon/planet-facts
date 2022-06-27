import React from 'react'
import { useContext } from 'react'
import { Information } from './Status'

const Aside = ({name}) => {
    const { findPlanet } = useContext(Information)

    const iconArrow = {
        "backgroundImage": `url(../resources/icon-chevron.svg)`,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
    }


    return (
    <div className="aside--container" key={name} onClick={() => findPlanet(name)}>
        <i className="aside--planet" style={iconArrow} data-planet={name.toLowerCase()}>
            {/* planet icon */}
        </i>
        <h3 className="aside--name">
            {name.toUpperCase()}                
        </h3>
        <i className="arrow">
            {/* arrow icon */}
        </i>
    </div>
    )
}


export default Aside