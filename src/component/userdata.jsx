import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContextData } from '../context/get-user-context'

const Userdata = () => {

    const {userData,setUserData} = UserContextData()

    useEffect(()=>{
        const getData = ()=>{
            axios.get("https://641ff90182bea25f6df7bf9c.mockapi.io/youtube/users").then((response)=>{
                console.log(response,"hu hui")
                setUserData(response)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getData()
    },[])

  return (
    <div></div>
  )
}

export default Userdata
