import React from 'react'

const PlanetInfo = () => {
  return (
    <main className="main">
        <section className="main--description">

            <div className="planet--image">
                <i/>
            </div>


            <div className="info--container">

                <h1 className="main--title">
                    MERCURY
                </h1>

                <p className="text">
                    Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
                </p>

                <p className="text">
                    Source :  <a class="text--link" href=".#">wikipedia <i class="link--icon"></i></a> 
                </p>
            </div>
        </section>


        <section className="main--data">

            <div className="data--container">
                <h4 className="data--title">
                    ROTATION TIME
                </h4>

                <p className="data--value">
                    58.6 DAYS
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    REVOLUCION TIME
                </h4>

                <p className="data--value">
                    87.97 DAYS
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    RADIOUS
                </h4>

                <p className="data--value">
                    2.439.7 KM
                </p>

            </div>

            <div className="data--container">
                <h4 className="data--title">
                    AVERAGE TEMP.
                </h4>

                <p className="data--value">
                    430°C
                </p>

            </div>

        </section>


    </main>
  )
}


export default PlanetInfo
