// import { useContext } from 'react'
// import { Information } from './Status'
// import MainImage from './MainImage'
// import Navigation from './Navigation'

const PlanetInfo = (props) => {
    // const { 
    //     showInfo, 
    //     planetData, 
    //     modal, 
    //     image,
    //     changeContent
    // } = useContext(Information)
    
    const iconLink = {
        "backgroundImage": `url(../resources/icon-source.svg)`,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
    }


    return (
    <main className={ !props.modal ? "main" : "main vanish"}>
        <section className="main--description">

            <div className="planet--image">
                {/* <MainImage props={{image, planetData}}/> */}
                {props.loadImage()}
            </div>

            <div className="info--container">

                <h1 className="main--title">
                    {props.name.toUpperCase()}
                </h1>

                <p className="text">
                    {props.content}
                </p>

                <p className="text">
                    Source :  <a className="text--link" href={props.source}>wikipedia <i className="link--icon" style={iconLink}></i></a> 
                </p>
            </div>

            <nav 
                className="navigation" 
                onClick={(e) => 
                    props.changeContent(e, props.name)
                }>
                    {/* <Navigation/> */}
                    {props.loadNavigation()}
            </nav>
        </section>

        


        <section className="main--data">

            <div className="data--container">
                <h4 className="data--title">
                    ROTATION TIME
                </h4>

                <p className="data--value">
                    {props.rotation}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    REVOLUCION TIME
                </h4>

                <p className="data--value">
                    {props.revolution}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    RADIOUS
                </h4>

                <p className="data--value">
                    {props.radius}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    AVERAGE TEMP.
                </h4>

                <p className="data--value">
                    {props.temperature}
                </p>

            </div>

        </section>


    </main>
  )
}


export default PlanetInfo
