import React,{useState} from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
export default function Login() {
  const router = useRouter()
  const [values,setValues] = useState({
    email : '',
    password : '',
  })
  const handleValues = (e) => {
    setValues(prev => ({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }
  const login = (e) => {
    console.log(values);
    e.preventDefault()
    signIn('credentials',{
        email : values.email,
        password : values.password,
        redirect : false,
    }).then(res => {
        if(res.status === 200){
            router.push('/dashboard')
        }
    }).catch(err => {
        console.log(err);
    })
    
  }
  return (
       <form action='' className='Login_form px-3 py-3'>
           <h4>Login</h4>
           <div className='d-flex gap-4 flex-column'>
             <input type="email" className='text-light px-3' name="email" placeholder='Email' id="" value={values.email} onChange={(e)=>handleValues(e)}/>
             <input type="password" className='text-light px-3' name="password" placeholder='Password' id=""  value = {values.password} onChange={(e)=>handleValues(e)}/>
           </div>
           <button className='mt-4 rounded btn btn-light text-dark w-100' onClick={(e)=>login(e)}>Login</button>
       </form>
  )
}
