import React, { createContext, useState } from 'react'
import planetsInfo from '../data.json'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)



	const findPlanet = (id) => {
		let [planet] = allData.filter(planet => planet.name === id) 
		setPlanetData(() => planet)
	} 
    

	// useEffect(= () )

	


    const handleModal = () => {
        setModal(prevState => !prevState)
    }


	const correctImage = (content) => {
		if (content === "overview") {
			setImage(() => planetData.images.planet)
		}

		if (content === "structure") {
			setImage(() => planetData.images.internal)
		}

		if (content === "geology") {
			setImage(() => planetData.images.geology)
		}
	}


	const changeContent = (e) => {
		if (e.target.dataset.value) {
			setShowInfo(() => planetData[e.target.dataset.value])
			correctImage(e.target.dataset.value)
		}
	}

    


  return (
    <Information.Provider value={{
        allData,
        planetData,
        modal,
		showInfo,
		image,
		changeContent,
		findPlanet,
        handleModal
    }}>
        { children }
    </Information.Provider>
  )
}

export default Status