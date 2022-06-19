import React, { createContext, useState } from 'react'
import planetInfo from '../data.json'

export const Information = createContext(false)


const Status = ({ children }) => {
    const [modal, setModal] = useState(false)
    const data = planetInfo


    const handleModal = () => {
        setModal(prevState => !prevState)
    }

  return (
    <Information.Provider value={{
        data,
        modal,
        handleModal
    }}>
        { children }
    </Information.Provider>
  )
}

export default Status