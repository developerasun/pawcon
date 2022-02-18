import * as React from 'react';
import  { io }  from 'socket.io-client';

const socket = io('http://localhost:3001')
socket.on('connect', ()=>console.log(socket.id))
socket.on('disconnect',()=>console.log('user disconnected'))

interface ChatMessageProps {
  userName : string
  message : string
}

export function Chat () {
  const [submit, setSubmit] = React.useState(false)
  const [chat, setChat] = React.useState<ChatMessageProps>()

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault()
    setSubmit(true)
    
    const message = document.getElementById('message') as HTMLInputElement
    const userName = document.getElementById('userName') as HTMLInputElement
    const messages = document.getElementById('messages') as HTMLUListElement

    if (message && userName) { // type guard
        // socket.emit(event name, event value) => event value can be anything. no limit.
        socket.emit('chat', { // this event name should be the same in server side
          userName : userName.value,
          message : message.value 
        })
      }
    
    // DELETE this : render chat in front end (can't render other sockets)
    setChat({
      userName : userName.value,
      message : message.value
    })
    messages.innerHTML += `<li><p>${userName.value} : ${message.value}</p></li>`
    
    // FIX this : render chat messages from server data
    // socket.on('chat', (data : ChatMessageProps) => {
    //   messages.innerHTML += `<li><p>${data.userName} : ${data.message}</p></li>`
    // })
    // reinitialize input value
    message.value = "" 
  }  
  return (
    <div>
      {submit ? <ul id="messages"></ul> : "No chat for now"}
      
      <form id="form" onSubmit={(event) => handleSubmit(event)}>
        {/* add functionality that disalbes user name input once decided */}
        <input 
          disabled={submit ? true : false}
          required
          id="userName" 
          type={'text'} 
          placeholder='Set user name' /> 
        <input
          required 
          id="message" 
          type={'text'} 
          placeholder={'Type message'}
          autoComplete='off' />
        <button>Send</button>
      </form>
    </div>
  );
}
