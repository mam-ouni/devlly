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
  const login = async (e) => {
    e.preventDefault();
  
    const res = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: '/dashboard',
    });
  
    if (res.error) {
      // Handle error
      console.error('Login failed:', res.error);
    } else {
      // Redirect to the callback URL on successful login
      router.push(res.url);
    }
  };
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
