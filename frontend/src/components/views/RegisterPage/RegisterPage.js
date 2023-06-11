import React ,{useState}from 'react'
import {useDispatch} from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(props) {


  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // const handleNavigation = () => {
  //   navigate('/login'); // Navigate to the '/login' page
  // };
  
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  
  
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
  if(Password !== ConfirmPassword ){
   return alert("비밀번호가 일치하지 않습니다.")
  }
  
    let body = {email : Email,password:Password,name:Name}
  
    dispatch(registerUser(body))
    .then(res=>{
      if (res.payload.success){navigate('/login')}
      else {alert('failed to sign up')}
    })
  };
  

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="password" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>

  )
}
