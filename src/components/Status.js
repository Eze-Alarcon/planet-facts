import React, { createContext, useEffect, useState } from 'react'
import planetsInfo from '../data.json'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)

	/* Corresponden al estado de la clase active en el header */
	const [ activeClass, setActiveClass ] = useState([planetData.name.toLowerCase(), false, false])



	const findPlanet = (id) => {
		let [planet] = allData.filter(planet => planet.name === id) 
		setPlanetData(() => planet)
		setShowInfo(() => planet.overview)
		correctImage("overview", planet)
		setModal((prevState) => !prevState)
	} 

	

	// useEffect(() => {
	// 	let id = planetData.name.toLowerCase()
	// 	if (modal === false) setActiveClass(() => [id, false, false])
	// }, [planetData, showInfo, modal])

    const handleModal = () => setModal(prevState => !prevState)


	const correctImage = (content, planet = planetData) => {

		let id = planetData.name.toLowerCase()

		if (content === "overview") {
			setImage(() => planet.images.planet)
			setActiveClass(() => [id, false, false])
		}

		if (content === "structure") {
			setImage(() => planet.images.internal)
			setActiveClass(() => [false, id, false])
		}

		if (content === "geology") {
			setImage(() => planet.images.geology)
			setActiveClass(() => [false, false, id])
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
		activeClass,
		changeContent,
		findPlanet,
        handleModal
    }}>
        { children }
    </Information.Provider>
  )
}

export default Status