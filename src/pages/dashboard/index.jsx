import React from 'react'
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import One from '@/components/dashboard/section_one/section_one';
import Two from '@/components/dashboard/section_two/Two';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
export default function index() {
    const {data: session,status} = useSession()
    const router = useRouter()
    useEffect(()=>{
       if(status === 'loading') return
       if(!session) router.push('/login')
    },[session,status])
    if(status === 'loading'){
      return (
        <>
        <Head>
            <title>Geekfolio - Appointment</title>
        </Head>
        <Loader />
        <div style={{height : '700px'}} className='d-flex justify-content-cente align-items-center'>
            <h1>Loading...</h1>
        </div>
     </>
        
      )
    }
    if(!session){
       return (
        <>
        <Head>
            <title>Geekfolio - Appointment</title>
        </Head>
        <Loader />
        <div style={{height : '700px'}} className='d-flex justify-content-cente align-items-center'>
          <h1>Redirect to login</h1>
       </div>
     </>
       )
       
    }

  return (
     <>
        <Head>
            <title>Geekfolio - Appointment</title>
        </Head>
        <Loader />
        <main className='d-flex' style={{backgroundColor : 'rgb(17,17,17)'}}>
            <Two/>
            <One/>
        </main>
     </>
  )
}
