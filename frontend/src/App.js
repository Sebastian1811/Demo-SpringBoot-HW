import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatList from './components/ChatList'
import ChatData from './components/shared/ChatData'
import ChatForm from './components/ChatForm'
import Header from './components/Header'

function App() {
  const [chat, setChat] = useState('') //ChatData

  const addChat = (newChat) => {
    newChat.id = uuidv4()
    setChat([newChat, ...chat])
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <ChatForm handleAdd={addChat} msgrole={'hola'} />
      <ChatForm handleAdd={addChat} msgrole={'adios'} />
      <ChatList chat = {chat} />
      
    </div>
    </>
  )
}

export default App
