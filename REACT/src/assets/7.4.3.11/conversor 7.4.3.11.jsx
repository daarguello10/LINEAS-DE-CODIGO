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
        <h1>CONVERSOR TTS & STT</h1>
        <h3>Convertir de Texto a voz</h3>
        <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiartexto}/>
        <button onClick={convertirTextoAVoz}>Convertir</button>
        
        <h3>Convertir de Voz a texto</h3>
        <button onClick={grabarVozATexto}>Grabar</button>
        <input type="text" name="" id="" value={vozATexto} />
      </>
    );
  
}


export default Conversor
