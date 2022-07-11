import React, { createContext, useEffect, useState } from 'react'
import planetsInfo from '../data.json'
import { findTags, imgAnimations } from './helpers'

export const Information = createContext()


const Status = ({ children }) => {
	const allData = planetsInfo
    const [ planetData, setPlanetData ] = useState(planetsInfo[0])
	const [ infoAbout, setInfoAbout ] = useState("overview")
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)
    const [modal, setModal] = useState(false)
	// firstTry es para ayudar con el manejo de modal
	const [firstTry, setFirstTry] = useState(true)


	// Funcion para cambiar de planeta y cambiar los datos (luego el use efect actualizara la informacion en pantalla)
	const findPlanet = (id) => {

		if (id.target?.localName === "nav" 
		|| id.target?.dataset?.value === planetData.name) return

		let viewport = window.innerWidth < 768;

		imgAnimations()
		
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
			findTags("overview", id.target.dataset.value)
		}

	} 


	// dependiendo de la informacion seleccionada, se actualizaran los datos en pantalla
	useEffect(() => {

		if (infoAbout === "overview") {
			setShowInfo(() => planetData.overview)
			setImage(() => planetData.images.planet)
			findTags("overview", planetData.name)
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


	// Helper: Su funcion es evitar que el modal aparezca si la pantalla es mayor a 768px
	function resizeFunction() {
		if (window.innerWidth > 768) {
			setModal(() => false) 
			setFirstTry(() => true)
			window.removeEventListener('resize', resizeFunction)
		}
	}

	// Manejador del modal para abrir y cerrar
    const handleModal = () => {
		if (firstTry === true) {
			setFirstTry(() => false)
			setModal(prevState => !prevState)
			window.addEventListener('resize', resizeFunction)
		} 
		else {
			setModal(prevState => !prevState)
		} 
	}

	// cambiar colores de tags, botones y agregar la animacion del planeta 
	const changeContent = (e, planet) => {
		if (e.target.dataset.value === undefined 
			|| e.target.dataset.value === infoAbout) return
		
		let viewport = window.innerWidth < 768;

		
		if (e.target.dataset.value && viewport) {
			setInfoAbout(() => e.target.dataset.value)
			findTags(e.target.dataset.value, planet)
		} else {
			setInfoAbout(() => e.target.dataset.value)
			findTags(e.target.dataset.value, planet)
		}
		
		imgAnimations(e.target.dataset.value)
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