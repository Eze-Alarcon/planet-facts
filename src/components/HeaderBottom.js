const HeaderBottom = ({activeClass}) => {

  return (
    <>
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
    </>
    )
}


export default HeaderBottom