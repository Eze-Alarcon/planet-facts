import { useContext } from 'react'
import { Information } from './Status'

const PlanetInfo = () => {
    const { showInfo, planetData, modal, image } = useContext(Information)
    

    // setImage(() => ) 

    return (
    <main className={ !modal ? "main" : "vanish"}>
        <section className="main--description">

            <div className="planet--image">
                <div>
                    <img src={image} alt="Planet"/>
                </div>
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
