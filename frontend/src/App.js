import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatItem from './components/ChatItem'
import ChatList from './components/ChatList'
import ChatData from './components/shared/ChatData'
import Header from './components/Header'

function App() {
  const [chat, setChat] = useState(ChatData)

  const addChat = (newChat) => {
    newChat.id = uuidv4()
    setChat([newChat, ...chat])
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <ChatList chat = {chat} />
    </div>
    </>
  )
}

export default App
