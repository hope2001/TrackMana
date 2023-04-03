import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;

const Sock = () => {
  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/server');
    socket = io()
    let a=0
    socket.on('connect', () => {
      console.log('connected')
      console.log(++a)
    })

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  )
}

export default Sock;