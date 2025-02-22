import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')
  
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

    return(
      <>
        <br />
        <h2>Convertir de Texto a voz</h2>
        <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiartexto}/>
        <button onClick={convertirTextoAVoz}>Convertir</button>
        
        <h2>Convertir de Voz a texto</h2>
        <button onClick={grabarVozATexto}>Grabar</button>
        {vozATexto}
      </>
    );
  
}


export default Conversor
