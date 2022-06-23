import { useContext } from 'react'
import { Information } from './Status'

const Navigation = () => {
    const { 
        modal, 
        activeClass,
        changeContent, 
    } = useContext(Information)


  return (
    <nav 
        className={ !modal ? "nav" : "vanish"} 
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
    </nav>
    )
}


export default Navigation