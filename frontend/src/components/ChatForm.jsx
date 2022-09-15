import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function ChatForm({handleAdd, msgrole}) {
    const [text, setText] = useState('¿Hola?')
    const [message, setMessage] = useState('')
    const role = msgrole

    const handleSubmit = (e) => {
        setText( role === 'hola' ? '¿Hola?' : 'Adiós.')
        e.preventDefault()
        const newChat = {
            text,
            role,
        }
        handleAdd(newChat)
    }

  return (
    <div className="centered" >
        <form onSubmit={handleSubmit}>
        <Button type="submit" version='secondary'>{text}</Button>
        </form>
    </div>
  )
}

export default ChatForm