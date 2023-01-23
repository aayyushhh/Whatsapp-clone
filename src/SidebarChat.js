import { Avatar } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import db from './firebase'
import "./SidebarChat.css"

function SidebarChat({id,name,pic,addNewChat}) {
    const[seed,setSeed] = useState('')
    const[message,setMessages] = useState('')
   
    useEffect(()=>{
      if (id){
        db.collection("rooms").doc(id).collection
        ('messages').orderBy('timestamp','desc').
        onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc) =>
          doc.data()
          ))
        ))
      }
    },[id]);

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat = ()=>{
        const roomName = prompt("please enter name for chat");
        const picURL = prompt("please enter image URL");
        if (roomName){
            // do some clever database stuff
            db.collection('rooms').add({
              name:roomName,
              pic:picURL
            })
        }
    }
  return !addNewChat ?(
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
      <Avatar src={pic}/>
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>{message[0]?.message}</p>
      </div>
    </div>
    </Link>
  ):(
    <div onClick={createChat} className='sidebarChat'>
        <h2>Add new Chat</h2>
    </div>
  )
  
}

export default SidebarChat
