import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')


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

  function cambiartexto(evento){
    setTextoAVoz(evento.target.value)
  }
  function convertirTextoAVoz(){
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }
  function resultado(event){
    setVozATexto(event.results[0][0].transcript)
  }

  function grabarVozATexto(){
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
  }

  return (
    <>
    <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>  
    <input type="password" name="clave" id="clave " value={clave} onChange={cambiarClave}/>
    <button onClick={ingresar}>Ingresar</button>

    <br />
    <h2>Convertir de Texto a voz</h2>
    <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiartexto}/>
    <button onClick={convertirTextoAVoz}>Convertir</button>
    <h2>Convertir de Voz a texto</h2>
    <button onClick={grabarVozATexto}>Grabar</button>
    {vozATexto}
    </>
  )
}

export default App
