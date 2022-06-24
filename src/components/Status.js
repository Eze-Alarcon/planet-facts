import React, { createContext, useEffect, useState } from 'react'
import planetsInfo from '../data.json'
import { findTags } from './helpers'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ infoAbout, setInfoAbout ] = useState("overview")
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)


	const findPlanet = (id) => {

		if (id.target?.localName === "nav") return

		let viewport = window.innerWidth < 768;

		if (viewport) {
			let [planet] = allData.filter(planet => planet.name === id) 
			setPlanetData(() => planet)
			setInfoAbout(() => "overview")
			setModal((prevState) => !prevState)
		} 
		else {
			let [planet] = allData.filter(planet => planet.name === id.target.dataset.value)
			setPlanetData(() => planet)
			setInfoAbout(() => "overview")
			findTags(undefined, id.target.dataset.value)
		}
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
			findTags(e.target.dataset.value, planet)
		} else {
			setInfoAbout(() => e.target.dataset.value)
			findTags(e.target.dataset.value, planet)
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