import './SignUp.css'
import React, { useEffect, useState } from 'react'
import { BiShow, BiHide, BiArrowBack } from 'react-icons/bi'
import { SpinnerCircularSplit } from 'spinners-react'
import './SignUpMobile.css'
import axios from'axios'
import { useNavigate } from 'react-router-dom'
    
function SignUp() {
  const nav = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [profileName, setProfileName] = useState("")
  const [errorMsg, setErrorMsg] = useState({error:false, msg:"", type:""})
  const [passwordShow, setPasswordShow] = useState(false)
  const [confirmPasswordShow, setConfimPasswordShow] = useState(false)
  const [host, setHost] = useState(false)
  const[loading, setLoading] = useState(false)


  // const urll = "https://eflexshop.onrender.com/user"
  //  axios.get(urll)
  // .then((res)=>console.log(res.data))


  const url = "https://creativents-on-boarding.onrender.com/api/signup"
  // axios.get(url)
  // .then((res)=>console.log(res))
  // console.log({firstName, lastName, email, password,profileName, confirmPassword});
  const userData = {firstName, lastName, password, email}

  const signUpUser = (e) => {
    e.preventDefault()
    // if(!email){
    //   setErrorMsg({error:true, type:"email", msg:"Please input your Email"})
    // }
    // else if(!firstName){
    //   setErrorMsg({error:true, type:"firstname", msg:"Please input your First Name"})
    // }
    // else if(!lastName){
    //   setErrorMsg({error:true, type:"lastname", msg:"Please input your Last Name"})
    // }
    // else if(!password){
    //   setErrorMsg({error:true, type:"password", msg:"Please input your Password"})
    // }
    // else if(password !== confirmPassword){
    //   setErrorMsg({error:true, type:"confirmpassword", msg:"password does not match"})
    // }
    // else if(!host){
    //   setErrorMsg({error:true, type:"host", msg:"Please input your Host Username"})
    // }

    // else {
      axios.post(url,userData)
        .then(res=> {
            console.log(res)
        })
        .catch((err)=>{
            console.log(err.response.data.errors)
        })
    // }

    


  }


  return (
    <div className='SignUp'>
        <section className='input_SignUp'>
          <div className='SignUp_logo'>
            <BiArrowBack className='back_Arrow'/>
            <img src="./src/assets/LogoC.png" alt="" />
            <span>Sign In</span>
          </div>
          <div className='user_Auth_signUp'>
            <h1>Sign <span> Up</span> with us!</h1>
            <form className='SignUp_Auth'  onSubmit={signUpUser}>
              <label className='SignUp_Labels'>Email</label>
              <input type="text" className='signUpInputs' style={{border: errorMsg.type === "email" && errorMsg.error?"1px solid rgb(255, 178, 29)":null}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
              {
                errorMsg.type === "email"?<h5  style={{fontSize:"10.5px"}}>{errorMsg.msg}</h5>: null
              }
              <div className='names'>
              <article>
              <label>FirstName</label>
              <input type="text" className='UserName' style={{border: errorMsg.type === "firstname" && errorMsg.error?"1px solid rgb(255, 178, 29)":null}} value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              {
                errorMsg.type === "firstname" ?<h5>{errorMsg.msg}</h5>: null
              }
              </article>
              <article>
              <label>LastName</label>
              <input type="text" className='UserName' style={{border: errorMsg.type === "lastname"?"1px solid rgb(255, 178, 29)":null}} value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
              {
              errorMsg.type === "lastname"?<h5>{errorMsg.msg}</h5>: null
              }
              </article>
              </div>
              <label className='SignUp_Labels'>Password</label>
              <input type={passwordShow?"password":"text"} className='signUpInputs' style={{border: errorMsg.type === "password"?"1px solid rgb(255, 178, 29)":null}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
              {
                errorMsg.type === "password" ?<h5>{errorMsg.msg}</h5>: null
              }
                   {
                   passwordShow? <BiShow  className='password_Visibility_SignUp' onClick={()=>setPasswordShow(!passwordShow)}/>
                   :<BiHide  className='password_Visibility_SignUp' onClick={()=>setPasswordShow(!passwordShow)}/>
                   }
              <label className='SignUp_Labels'>Confirm Password</label>
              <input type={confirmPasswordShow?"password":"text"} value={confirmPassword} className='signUpInputs' style={{border: errorMsg.type === "confirmpassword"?"1px solid rgb(255, 178, 29)":null}}  onChange={(e)=>setConfirmPassword(e.target.value)}/>
              {
                errorMsg.type === "confirmpassword"?<h5>{errorMsg.msg}</h5>: null
              }
                   {
                   confirmPasswordShow? <BiShow  className='Cpassword_Visibility_SignUp' onClick={()=>setConfimPasswordShow(!confirmPasswordShow)}/>
                   :<BiHide  className='Cpassword_Visibility_SignUp' onClick={()=>setConfimPasswordShow(!confirmPasswordShow)}/>
                   }
              {
                host?
                <>
                  <label className='SignUp_Labels'>Profile Name</label>
                    <input type="text" className='signUpInputs' style={{border: errorMsg.type === "host"?"1px solid rgb(255, 178, 29)":null}} value={profileName} onChange={(e)=>setProfileName(e.target.value)}/>
                    {
                errorMsg.type === "host"?<h5>{errorMsg.msg}</h5>: null
                    }
                </>: null
              }
              <div className='auth_Action_signUp'>
              <div className='reg_Host'>
              <input type="checkbox"  onClick={()=>setHost(!host)}/ > Register as a Host
              </div>
              <button className='SignUp_Btn'>Sign up</button>
              <SpinnerCircularSplit  enabled={loading?true:false}/>
              <p>Already have an account? <a style={{cursor:"pointer"}} onClick={()=>nav('/login')}>Log in</a></p>
              </div>
            </form>
          </div>
        </section>
        <section className='image_LogIn'>
        </section>
     </div>
  )
}

export default SignUp