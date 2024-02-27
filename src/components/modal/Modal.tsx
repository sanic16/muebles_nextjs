'use client'
import { FaTimes } from 'react-icons/fa'
import './modal.css'
import useModalContext from '@/context/modal-context'
import { useState } from 'react'

const Modal = () => {
  const { isModalOpen, closeModal } = useModalContext()  
  const [showSignupForm, setShowSignupForm] = useState(true)
  return (
    <>
        { isModalOpen && (
            <>
                <div id='backdrop' onClick={closeModal}></div>
                <div className='forms-wrapper'>
                    <span className='show-hide-forms x-btn' onClick={closeModal}>
                        <FaTimes />
                    </span>
                    <div className='show-btns-wrapper'>
                        <button className={`show-form-btn ${showSignupForm && 'show-signup-form'}`} onClick={() => setShowSignupForm(true)}>
                            Registrarse
                        </button>
                        <button className={`show-form-btn ${!showSignupForm && 'show-login-form'}`} onClick={() => setShowSignupForm(false)}>
                            Iniciar Sesión
                        </button>
                    </div>
                    {
                        showSignupForm ? (
                            <form className='signup-form'>
                                <h3 className='form-heading'>
                                    Registrarse
                                </h3>
                                <div className='fullname-inputs-wrapper'>
                                    <input type="text" placeholder='Nombre' />
                                    <input type="text" placeholder='Apellido' />
                                </div>
                                <input type="text" className='form-input' placeholder='Nombre de Usuario' />
                                <input type="email" className='form-input' placeholder='Correo Electrónico' />
                                <input type="password" className='form-input' placeholder='Contraseña' />
                                <input type="submit" value="Registrarse" className='form-btn' />
                            </form>
                        ) : (
                            <form className='login-form'>
                                <h3 className='form-heading'>
                                    Iniciar Sesión
                                </h3>
                                <input type="email" className='form-input' placeholder='Correo Electrónico' />
                                <input type="password" className='form-input' placeholder='Contraseña' />
                                <input type="submit" value="Iniciar Sesión" className='form-btn' />
                            </form>
                        )
                    }
                    
                </div>

            </>
        )}
    </>
  )
}

export default Modal
