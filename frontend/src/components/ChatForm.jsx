import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function ChatForm({handleAdd}) {
    const [text, setText] = useState('Hola')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setText('¿Hola?')
        const newChat = {
            text,
        }
        handleAdd(newChat)
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <Button type="submit" >¿Hola?</Button>

        </form>
    </Card>
  )
}

export default ChatForm