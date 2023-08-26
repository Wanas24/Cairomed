import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../Config/Firebase'
function Register() {
const [email,setemail]=useState('')
const [password,setpasssword]=useState('')
const [errMsg,seterrMsg]=useState('')
const [successMsg,setsuccessMsg]=useState('')

console.log(auth?.currentUser?.email);
    async function Register(e){
        e.preventDefault();
        console.log(email,password)
        try{
        await createUserWithEmailAndPassword(auth,email,password);
        seterrMsg('')
        setsuccessMsg('email created successfully')
        }catch(err){
            console.error(err)
            setsuccessMsg('')
            seterrMsg("Faild")
        }
    }

   

    
  return (
    <>
    <h2 className='text-center mt-5'>Register form</h2>
        <form onSubmit={Register} className='form-control container mt-3'>
          <label htmlFor="" >Email</label>
          <input onChange={(e)=>setemail(e.target.value)} type="email" className='form-control'/>
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setpasssword(e.target.value)}type="password" className='form-control'/>
          <button type='submit' className='btn btn-success mt-3'>Register </button>
          {/* <button onClick={logout} className='btn btn-danger mt-3'>Logout</button> */}
          <p className='text-danger'>{errMsg}</p>
          <p className='text-success'>{successMsg}</p>
        </form>
    </>
  )
}

export default Register