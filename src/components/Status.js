import React, { createContext, useState } from 'react'
import planetsInfo from '../data.json'

export const Information = createContext()


const Status = ({ children }) => {
    const [modal, setModal] = useState(false)
    const allData = planetsInfo
    const planetData = planetsInfo[0]
	const [ showInfo, setShowInfo ] = useState(planetData.overview)
	const [ image, setImage ] = useState(planetData.images.planet)

    

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
        handleModal
    }}>
        { children }
    </Information.Provider>
  )
}

export default Status