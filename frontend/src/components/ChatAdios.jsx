import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function ChatAdios({handleAdd}) {
    const [text, setText] = useState('Adiós.')
    const [message, setMessage] = useState('')
    const role = 'adios'

    const handleTextChange  = (e) => {
      setMessage('')
    setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newChat = {
            text,
            role,
        }
        handleAdd(newChat)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input onChange={handleTextChange} 
        type="text" 
        placeholder = "¿Hola?"
        value = {text}
        />
        <Button type="submit" >Enviar</Button>
      </div>
    </form>
  )
}

export default ChatAdios