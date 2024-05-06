import React, { useState } from 'react'
import SiteIcon from '../../images/site-logo.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")
    const [loading, setLoading] = useState(false)

    let navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        setLoading(true)
        let user = {
            username,
            password
        }
        axios
            .post("https://fakestoreapi.com/auth/login", user)
            .then(res => {
                toast.success("Successfully logged in")
                localStorage.setItem("x-auth-token", res.data.token)
                navigate("/admin")
            }) 
            .catch(err => {
                console.log("err>>>", err);
                toast.error("Username or Password is incorrect")
            })
            .finally(() => {
                setLoading(false)
            })
        }
  return (
    <div className='loginForm-section'>
        <div className="container">
            <div className="loginForm-section__content">
                <form onSubmit={handleLogin}>
                    <div className='form-img'>
                        <img src={SiteIcon} alt="site icon" />
                    </div>
                    <div className="loginForm__input">
                        <label htmlFor="username">Username*</label>
                        <input onChange={e => setUsername(e.target.value)} value={username} name='username' id='username' required type="text" placeholder='Enter Your Username'/>
                    </div>
                    <div className="loginForm__input">
                        <label htmlFor="password">Password*</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} name='email' id='password' required type="password" placeholder='Enter Your Password'/>
                    </div>
                    <div className="loginForm__action">
                        <div>
                            <input name='check' id='check' type="checkbox" />
                            <label htmlFor="check">Remember Me</label>
                        </div>
                        <button type='button'>Forgot Password?</button>
                    </div>
                    <div className="loginForm__submit">
                        <button disabled={loading} type='submit'>{loading ? "Loading..." : "Login"}</button>
                        <button type='button'>Signup?</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm