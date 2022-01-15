import TextField from "@material-ui/core/TextField"
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react"
import Map from "./map"

//map 화면 구성 메시지 받고, socket연결
function Soket() {

  const uName = sessionStorage.getItem('name');
  const uEmail = sessionStorage.getItem('email');
  const pName = sessionStorage.getItem('pName');
  const pAge = sessionStorage.getItem('pAge');
  const pGender = sessionStorage.getItem('pGender');
  const pBreed = sessionStorage.getItem('pBreed');
  const pMeet = sessionStorage.getItem('pMeet');

  const infoUser = [uName, pName, pAge, pGender, pBreed, pMeet]
    
  const [state, setState] = useState({ name: infoUser, message: "", message2: "" })
  const [chat, setChat] = useState([{}])

  const socketRef = useRef()

  //소켓연결, 메시지 전송
  useEffect(() => {
    //socketRef.current = io.connect("http://localhost:4000") //소켓 연결 시도
    socketRef.current = io.connect("http://172.16.101.124:4000") //소켓 연결 시도
    socketRef.current.on("message", ({ name, message, message2 }) => {
      setChat([...chat, { name, message, message2 }])
    })
    return () => socketRef.current.disconnect()
  },
    [chat]
  )

  //text변경
  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  //message submit   / current.emit
  const onMessageSubmit = (e) => {
    const { name, message, message2 } = state
    socketRef.current.emit("message", { name, message, message2 })
    e.preventDefault()
  }

  //App function return 
  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="latitude"
          />
        </div>
        <div>
          <TextField
            name="message2"
            onChange={(e) => onTextChange(e)}
            value={state.message2}
            id="outlined-multiline-static"
            variant="outlined"
            label="longitude"
          />
        </div>
        <button>Send Location</button>
      </form>
      <div>
        {/* <h1>Chat Log</h1>
        {renderChat()} */}
      </div>
      <div>
        <Map chat={chat[chat.length - 1]} />
      </div>
    </div>
  )
}
export default Soket;