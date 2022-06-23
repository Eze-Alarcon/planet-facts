import React, { createContext, useEffect, useState } from 'react'
import planetsInfo from '../data.json'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ infoAbout, setInfoAbout ] = useState("overview")
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)

	/* Corresponden al estado del header */
	const [ activeClass, setActiveClass ] = useState([planetData.name.toLowerCase(), false, false])



	const findPlanet = (id) => {
		let [planet] = allData.filter(planet => planet.name === id) 
		setPlanetData(() => planet)
		setInfoAbout(() => "overview")
		setModal((prevState) => !prevState)
	} 

	useEffect(() => {

		let id = planetData.name.toLowerCase()

		if (infoAbout === "overview") {
			setShowInfo(() => planetData.overview)
			setImage(() => planetData.images.planet)
			setActiveClass(() => [id, false, false])
		}

		if (infoAbout === "structure") {
			setShowInfo(() => planetData.structure)
			setImage(() => planetData.images.internal)
			setActiveClass(() => [false, id, false])
		}

		if (infoAbout === "geology") {
			setShowInfo(() => planetData.geology)
			setImage(() => planetData.images.geology)
			setActiveClass(() => [false, false, id])
		}

	}, [infoAbout, planetData])


    const handleModal = () => setModal(prevState => !prevState)

	const changeContent = (e) => {
		if (e.target.dataset.value) {
			setInfoAbout(() => e.target.dataset.value)
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