import * as React from 'react';
import  { io }  from 'socket.io-client';
import { v4 } from 'uuid';
import './sass/css/chat.css';
import Avatar, { genConfig } from 'react-nice-avatar'; 

const socket = io('http://localhost:3001')
socket.on('connect', ()=>console.log(socket.id))
socket.on('disconnect',()=>console.log('user disconnected'))

interface ChatMessageProps {
  userName : string
  message : string
  senderId : string
}

export function Chat () {
  const [chat, setChat] = React.useState<ChatMessageProps[]>([])
  // create a random avatar with react-nice-avatar
  const config = genConfig() 

  // useRef hook preserves an initial value. 
  // should preserve this since chat renders each time. 
  const avatar = React.useRef(
    <li>
      <Avatar  
      sex='man'
      style={{width : '3rem', height : '3rem'}} />
    </li>)

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault()
    const message = document.getElementById('message') as HTMLInputElement
    const userName = document.getElementById('userName') as HTMLInputElement

    if (message && userName) { // type guard
      // socket.emit(event name, event value) => event value can be anything. no limit.
      socket.emit('chat:send', { // this event name should be the same in server side
        userName : userName.value,
        message : message.value, 
        senderId : 'clientSender'
      })
    }
    message.value = "" // reinitialize input value
  }

  React.useEffect(() => {
    socket.on('chat:receive', ({userName, message, senderId}:ChatMessageProps) => {
      // prevent duplicated render
      if (senderId === 'serverSender') {
        console.log(message)
        setChat((prev) => ([
          ...prev, 
          {userName, message, senderId}
        ]))
      }
    })
  }, [])

  return (
    <div id='chatContainer'>

      <ul id="messages">
        <li id='avatar'>{avatar.current}</li>
        {chat.map((item) => {
          return ( <li key={v4()} className='chatMessage'> {item.userName} : {item.message} </li> ) })}
      </ul>

      <form id="form" onSubmit={handleSubmit}>
        {/* add functionality that disalbes user name input once decided */}
        <input
          required
          name='userName'
          id="userName" 
          type={'text'} 
          placeholder='Set user name' /> 
        <input
          required 
          name='message'
          id="message" 
          type={'text'} 
          placeholder={'Write something ...'}
          autoComplete='off' />
        <button>Send</button>
      </form>
    </div>
  );
}
