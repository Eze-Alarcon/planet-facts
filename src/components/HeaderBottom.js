const HeaderBottom = ({color}) => {

  return (
    <>
        <h3 
            className="subtitle--big" 
            data-value="overview"
            data-color={color.toLowerCase()}>
            OVERVIEW
        </h3>
        <h3 
            className="subtitle--big"  
            data-value="structure"
            data-color={false}>
            STRUCTURE
        </h3>
        <h3 
            className="subtitle--big"  
            data-value="geology"
            data-color={false}>
            SURFACE
        </h3>
    </>
    )
}


export default HeaderBottom
