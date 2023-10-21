import { useState } from "react"
import Input from "./componentes/input"
// criar função onde desabilita o botão de gerar senha para que não gera uma segunda senha antes que a primeira seja copiada

function App() {

  const [password, setPassword] = useState("")

  const [copy, setCopy] = useState("Copiar")

  const [customSize, setCustomSize] = useState()

  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function gerar() {
    const caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * caracters.toLowerCase().length)
      newPassword += caracters[position]
    }
    setPassword(newPassword)
  }

  function copiar() {
    window.navigator.clipboard.writeText(password)
    setCopy("Copiado!!")
  }



  return (
    <div className="app">
      <h1>Gerador de senha </h1>
      <div>
        <label htmlFor="showInput">Customizar o tamanho</label>
        <input 
        type="checkbox"
        id="showInput"
        value={showInput}
        onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && (
      <div className="trocar">
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      )}
      <button onClick={gerar}>Gerar senha com {passwordSize} caracteres</button>
      <button onClick={copiar}>{copy}</button>

      <div>{password}</div>
    </div>
  )
}

export default App
