import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }
  function cambiarClave(evento){
    setClave(evento.target.value)
  }

  
  async function ingresar() {
    const peticion = await fetch('http://localhost:3001/login?usuario='+usuario+'&clave='+clave)
    if (peticion.ok){
      alert(`Ingreso correcto`)
      setLogueado(true)
    } else {
      alert(`Usuario o clave incorrecta`)
    }

    //if (usuario == 'admin' && clave == 'admin'){
    //  alert(`Ingreso correcto`)
    // setLogueado(true) 
    //  } else {
    //  alert(`Usuario o clave incorrecta`)
    //}
  }

  if (logueado){
    return <Conversor />
  }

  return (
    <>
    <h1>Inicio de sesión</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>  
      <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
      <button onClick={ingresar}>Ingresar</button>    
    </>
  )
}


export default App
