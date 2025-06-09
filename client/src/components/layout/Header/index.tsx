import React, { useEffect } from 'react'
import Nav from './Nav'
import useSocketGlobal from 'hooks/globalState/useSocketGlobal'

function Header() {

  const {connect, socket}=useSocketGlobal();

  useEffect(()=>{
    if(!socket){
      connect()
    }
  },[])

  return (
    <div>
        <Nav/>
    </div>
  )
}

export default Header