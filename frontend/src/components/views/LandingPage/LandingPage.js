import {React,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  
 const navigate = useNavigate();

const onClickHandler = ()=>{
  axios.get('/api/users/logout').then(res=>{if(res.data.success)
  
  {navigate('/login') } else alert("로그아웃에 실패하였습니다.")
  })

}

  return (
    <div style={{display :'flex',justifyContent:'center',alignItems:'center' ,width:'100%',height:'100vh'}}>LandingPage
    <button onClick={onClickHandler}>로그아웃
    </button>
    
    </div>
  )
}
