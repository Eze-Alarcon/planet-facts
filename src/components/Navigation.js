const Navigation = () => {

  return (
    <>
        <button type="button" 
            className="button--content" 
            data-value="overview"
            data-color={"mercury"}>
            <span className="number">01</span> OVERVIEW
        </button>
        <button type="button" 
            className="button--content"
            data-value="structure"
            data-color={false}>
            <span className="number">02</span> STRUCTURE
        </button>
        <button type="button" 
            className="button--content"
            data-value="geology"
            data-color={false}>
            <span className="number">03</span> SURFACE
        </button>
    </>
    )
}


export default Navigation