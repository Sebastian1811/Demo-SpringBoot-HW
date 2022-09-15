import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function ChatForm({handleAdd}) {
    const [text, setText] = useState('¿Hola?')
    const [message, setMessage] = useState('')
    const role = 'hola'

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
      <h2> Ingresa los textos de saludo y despedida que deseas.</h2> 
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

export default ChatForm