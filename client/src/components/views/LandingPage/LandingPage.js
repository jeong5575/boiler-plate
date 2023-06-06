import {React,useEffect} from 'react'
import axios from 'axios'

export default function LandingPage() {
 useEffect(() => {
   axios.get('/api/hello').then(respon=> console.log(respon.data))
 
   
 }, [])
 


  return (
    <div style={{display :'flex',justifyContent:'center',alignItems:'center' ,width:'100%',height:'100vh'}}>LandingPage</div>
  )
}
