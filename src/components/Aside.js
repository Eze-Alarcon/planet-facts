import React from 'react'

const Aside = ({name}) => {

    return (
    <div className="aside--container" key={name}>
        <i className="aside--planet" data-planet={name}>
            {/* planet icon */}
        </i>
        <h3 className="aside--name">
            {name}                
        </h3>
        <i className="arrow">
            {/* arrow icon */}
        </i>
    </div>
    )
}


export default Aside