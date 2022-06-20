import React from 'react'
import { useContext } from 'react'
import { Information } from './Status'

const Aside = ({name}) => {
    const { findPlanet } = useContext(Information)


    return (
    <div className="aside--container" key={name} onClick={() => findPlanet(name)}>
        <i className="aside--planet" data-planet={name.toLowerCase()}>
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