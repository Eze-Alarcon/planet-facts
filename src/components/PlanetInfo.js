import { useContext } from 'react'
import { Information } from './Status'
import MainImage from './MainImage'
import Navigation from './Navigation'

const PlanetInfo = () => {
    const { 
        showInfo, 
        planetData, 
        modal, 
        image,
        changeContent
    } = useContext(Information)
    
    const iconLink = {
        "backgroundImage": `url('../assets/icon-source.svg')`,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
    }


    return (
    <main className={ !modal ? "main" : "vanish"}>
        <section className="main--description">

            <div className="planet--image">
                <MainImage props={{image, planetData}}/>
            </div>

            <div className="info--container">

                <h1 className="main--title">
                    {planetData.name.toUpperCase()}
                </h1>

                <p className="text">
                    {showInfo.content}
                </p>

                <p className="text">
                    Source :  <a className="text--link" href={showInfo.source}>wikipedia <i className="link--icon" style={iconLink}></i></a> 
                </p>
            </div>

            <nav className="navigation" onClick={(e) => changeContent(e, planetData.name)}>
                <Navigation/>
            </nav>
        </section>

        


        <section className="main--data">

            <div className="data--container">
                <h4 className="data--title">
                    ROTATION TIME
                </h4>

                <p className="data--value">
                    {planetData.rotation}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    REVOLUCION TIME
                </h4>

                <p className="data--value">
                    {planetData.revolution}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    RADIOUS
                </h4>

                <p className="data--value">
                    {planetData.radius}
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    AVERAGE TEMP.
                </h4>

                <p className="data--value">
                    {planetData.temperature}
                </p>

            </div>

        </section>


    </main>
  )
}


export default PlanetInfo
