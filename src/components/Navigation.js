import { useContext } from 'react'
import { Information } from './Status'

const Navigation = () => {
    const { 
        activeClass,
    } = useContext(Information)


  return (
    <>
            <button type="button" 
                className="button--content" 
                data-value="overview"
                data-color={activeClass[0]}>
                <span className="number">01</span> OVERVIEW
            </button>
            <button type="button" 
                className="button--content"
                data-value="structure"
                data-color={activeClass[1]}>
                <span className="number">02</span> STRUCTURE
            </button>
            <button type="button" 
                className="button--content"
                data-value="geology"
                data-color={activeClass[2]}>
                <span className="number">03</span> SURFACE
            </button>
    </>
    )
}


export default Navigation