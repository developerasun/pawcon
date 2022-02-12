import * as React from 'react';
import  { io }  from 'socket.io-client';

// NOT TESTED
export function Chat () {
  const [submit, setSubmit] = React.useState(false)

  const handleSubmit = (event : React.FormEvent ) => {
    event.preventDefault()
    setSubmit(true)
  }

  React.useEffect(() => {
    
    const socket = io()
    if (submit) {
      const message = document.getElementById('message') as HTMLInputElement
      const userName = document.getElementById('userName') as HTMLInputElement

      if (message && userName) { // type guard
        // socket.emit(event name, event value) => event value can be anything. no limit.
        socket.emit('chat', { // this event name should be the same in server side
          userName : userName,
          message : message.value 
        })
        message.value = "" // reinitialize input value
        setSubmit(false) // reinitialize form submission check value
      }
    }
  }, [ submit ])
  
  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" onSubmit={(event) => handleSubmit(event)}>
        {/* add functionality that disalbes user name input once decided */}
        <input id="userName" type={'text'} placeholder='Set user name' /> 
        <input id="message" type={'text'} autoComplete='off' /><button type='submit'>Send</button>
      </form>
    </div>
  );
}
