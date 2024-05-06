import React from 'react'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'
import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
  return (
    <div className='login-page'>
        <SingleRouteHeader name={"Login"} arr={<></>} sname={<></>}/>
        <LoginForm/>
    </div>
  )
}

export default Login