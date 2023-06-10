import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function Auth1 (SpecificComponent, option, adminRoute = null) {
  // null: 아무나, true: 로그인한 사람만, false: 로그인한 사람은 x
  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then(res => {
        console.log(res);
        // if (!res.payload.isAuth) {
        //   if (option) navigate('/login');
        //   // 로그인한 상태
        //   else {
        //     if (adminRoute && !res.payload.isAdmin) navigate('/');
        //     // 로그인하지 않은 상태
        //     else if (option === false) navigate('/');
        //   }
        // }
      });
    }, [dispatch, navigate]);

    return <SpecificComponent />;
  }

  return <AuthenticationCheck/>;
}




