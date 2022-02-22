import * as React from 'react';
import  { io }  from 'socket.io-client';
import { v4 } from 'uuid';

const socket = io('http://localhost:3001')
socket.on('connect', ()=>console.log(socket.id))
socket.on('disconnect',()=>console.log('user disconnected'))

interface ChatMessageProps {
  userName : string
  message : string
}

export function Chat () {
  const [submit, setSubmit] = React.useState(false)
  const [chat, setChat] = React.useState<ChatMessageProps[]>([])

  // fix infinite render bug
  React.useEffect(() => {
    if (submit) {
      const messages = document.getElementById('messages') as HTMLUListElement
      socket.on('chat', (data:ChatMessageProps) => {
        if (messages) { // type guard
          setChat(prev => {
            return [...prev, { 
              userName : data.userName,
              message : data.message 
            }]
          })
          // const li = messages.appendChild(document.createElement('li'))
          // li.innerText = `${data.userName} : ${data.message}`
          // messages.innerHTML += `<li><p>${data.userName} : ${data.message}</p></li>`
        }
      })
    }

    window.addEventListener('unload', () => { 
      // disconnect socket when user leaves page
      socket.disconnect()
    })
  }, [submit])

  React.useEffect(() => {
    const message = document.getElementById('message') as HTMLInputElement
    const userName = document.getElementById('userName') as HTMLInputElement
    if (message && userName) { // type guard
        // socket.emit(event name, event value) => event value can be anything. no limit.
        socket.emit('chat', { // this event name should be the same in server side
          userName : userName.value,
          message : message.value 
        })
      }
    message.value = "" // reinitialize input value
  })

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault()
    setSubmit(!submit)
  }    

  return (
    <div>
      <ul id="messages">{chat.map((item) => {
        return <li key={v4()}>{item.userName} : {item.message}</li>
      })}</ul>

      {/* {chat} */}
      
      <form id="form" onSubmit={(event) => handleSubmit(event)}>
        {/* add functionality that disalbes user name input once decided */}
        <input 
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
