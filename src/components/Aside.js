import React from 'react'

const Aside = ({name}) => {
    const changePLanet = (name) => {
        console.log(name)
    }


    return (
    <div className="aside--container" key={name} onClick={() => changePLanet(name)}>
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