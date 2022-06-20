import React, { createContext, useState } from 'react'
import planetsInfo from '../data.json'

export const Information = createContext()


const Status = ({ children }) => {
    const [modal, setModal] = useState(false)
    const allData = planetsInfo
    const planetData = planetsInfo[0]

    

    const handleModal = () => {
        setModal(prevState => !prevState)
    }



    


  return (
    <Information.Provider value={{
        allData,
        planetData,
        modal,
        handleModal
    }}>
        { children }
    </Information.Provider>
  )
}

export default Status