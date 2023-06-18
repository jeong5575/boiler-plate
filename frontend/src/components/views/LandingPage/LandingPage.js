import {React,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  
 const navigate = useNavigate();

const onClickHandlerLogout = ()=>{
  axios.get('/api/users/logout').then(res=>{if(res.data.success)
  
  {navigate('/login') } else alert("로그아웃에 실패하였습니다.")
  })

}


const onClickHandlerLogin = ()=>{
  axios.get('/api/users/login').then(res=>{if(res.data.success)
  
  {navigate('/') } else alert("로그인에 실패하였습니다.")
  })

}



const onClickHandlerRegister = ()=>{
  
  navigate('/register') 
 
}

  return (
    <div style={{display :'flex',justifyContent:'center',alignItems:'center' ,width:'100%',height:'100vh'}}>
    <button onClick={onClickHandlerLogin}>로그인</button>
    <button onClick={onClickHandlerLogout}>로그아웃</button>
    <button onClick={onClickHandlerRegister}>회원가입</button>
    </div>
  )
}
