import { useContext } from 'react'
import { Information } from './Status'
import MainImage from './MainImage'

const PlanetInfo = () => {
    const { 
        showInfo, 
        planetData, 
        modal, 
        image 
    } = useContext(Information)
    

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
                    Source :  <a className="text--link" href={showInfo.source}>wikipedia <i className="link--icon"></i></a> 
                </p>
            </div>
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
