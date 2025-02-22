import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }
  function cambiarClave(evento){
    setClave(evento.target.value)
  }

  function ingresar(){
    
    if (usuario == 'admin' && clave == 'admin'){
      alert(`Ingreso correcto`)
    } else {
      alert(`Usuario o clave incorrecta`)
    }
  }  
  return (
    <>
    <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>  
    <input type="password" name="clave" id="clave " value={clave} onChange={cambiarClave}/>
    <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
