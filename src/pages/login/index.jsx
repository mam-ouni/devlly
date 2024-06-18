import React, { useEffect } from 'react'
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/appointment/Footer';
import Header from '@/components/login/Head';
import Login from '@/components/login/Login';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function index() {
  const style = {
      marginTop: '6rem',
      backgroundColor : '#1d1d1d'
  }
  const router = useRouter()
  const {data:session,status} = useSession()
  useEffect(()=>{
     if(status === 'loading') return
     if(session){
        router.push('/dashboard')
     }
  },[session,status])
  if(status === 'loading'){
    return (
        <>
        <Head>
            <title>Geekfolio - Appointment</title>
        </Head>
      <Loader />
      <Navbar mainBg />
      <div style={{height : '600px'}} className='d-flex justify-content-center align-items-center'>
        <h1>Loading...</h1>
      </div>
    </>
    )
  }
  if(session){
    return (
        <>
        <Head>
            <title>Geekfolio - Appointment</title>
        </Head>
      <Loader />
      <Navbar mainBg />
      <div style={{height : '600px'}} className='d-flex justify-content-center align-items-center'>
        <h1>redirect to dashboard</h1>
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
      <Navbar mainBg />
      <main className='container' style={style}>
        <Header/>
        <div className='form_container d-flex justify-content-center align-items-center w-100'>
            <Login/>
        </div>

      </main>
    </>
  )
}
