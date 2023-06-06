import {React,useEffect} from 'react'
import axios from 'axios'

export default function LandingPage() {
 useEffect(() => {
   axios.get('/api/hello').then(respon=> console.log(respon.data))
 
   
 }, [])
 


  return (
    <div>LandingPage</div>
  )
}
