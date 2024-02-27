'use client'
import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {}
})

export const ModalContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => setIsModalOpen(false)
    const openModal = () => setIsModalOpen(true)

    return(
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal
            }}
        >
            { children }
        </ModalContext.Provider>
    )
}

const useModalContext = () => useContext(ModalContext)
export default useModalContext