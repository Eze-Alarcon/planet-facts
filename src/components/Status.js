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
		setShowInfo(() => planet.overview)
		correctImage("overview", planet)
		setModal((prevState) => !prevState)
	} 
	


    const handleModal = () => setModal(prevState => !prevState)


	const correctImage = (content, planet = planetData) => {
		if (content === "overview") setImage(() => planet.images.planet)

		if (content === "structure") setImage(() => planet.images.internal)

		if (content === "geology") setImage(() => planet.images.geology)
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