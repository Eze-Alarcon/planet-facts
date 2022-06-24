import React, { createContext, useEffect, useState } from 'react'
import planetsInfo from '../data.json'
import { findTags, findButtons } from './helpers'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ infoAbout, setInfoAbout ] = useState("overview")
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)


	const findPlanet = (id) => {
		let [planet] = allData.filter(planet => planet.name === id) 
		setPlanetData(() => planet)
		setInfoAbout(() => "overview")
		setModal((prevState) => !prevState)
	} 

	useEffect(() => {

		if (infoAbout === "overview") {
			setShowInfo(() => planetData.overview)
			setImage(() => planetData.images.planet)
			findTags(undefined, planetData.name)
		}

		if (infoAbout === "structure") {
			setShowInfo(() => planetData.structure)
			setImage(() => planetData.images.internal)
		}

		if (infoAbout === "geology") {
			setShowInfo(() => planetData.geology)
			setImage(() => planetData.images.geology)
		}

	}, [infoAbout, planetData])


    const handleModal = () => setModal(prevState => !prevState)

	const changeContent = (e, planet) => {
		let viewport = window.innerWidth < 768;

		if (e.target.dataset.value && viewport) {
			setInfoAbout(() => e.target.dataset.value)
			findTags(e.target, planet)
		} else {
			setInfoAbout(() => e.target.dataset.value)
			findButtons(e.target, planet)
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