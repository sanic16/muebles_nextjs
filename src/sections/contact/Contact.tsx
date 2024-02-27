import './contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <h1 className='contact-heading'>
            Únete a nosotros y disfruta de los mejores productos
        </h1>
        <form className='contact-form'>
            <input type="text" className='contact-input' placeholder='Ingresa tu Eamil'/>
            <input type="submit" className='contact-btn' value={'Registrarse'}/>
        </form>
    </section>
  )
}

export default Contact