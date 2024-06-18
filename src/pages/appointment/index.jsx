import React, { useEffect, useState} from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/appointment/Footer';
import Header from '@/components/appointment/Header';
import Form from '@/components/appointment/Form';
import Screen from '@/components/appointment/Screen';
import Alert from '@/components/appointment/Alert';
function PageContact() {
  const style = {
    marginTop: '6rem',
    backgroundColor : '#1d1d1d'
  }
  const [defaultTimes,setDefaultTimes] = useState(['9:00 to 10:00','12:00 to 13:00',"16:00 to 17:00","21:00 to 22:00"])
  const [values , setValues] = useState({
    name : '',
    email : '',
    subject : '',
    type : '',
    date : '',
    time : '',
    number : '',
    message: '',
    options : ['9:00 to 10:00','12:00 to 13:00',"16:00 to 17:00","21:00 to 22:00"]
 })
  const [alert,setAlert] = useState({
      title : '',
      open : false,
      success : true,
      msg : '',
  })

  const handleValues = (e)=>{
     if(e.target.name == 'number'){
         if(!isNaN(Number(e.target.value))){
            setValues(prev =>({
               ...prev,
               number : e.target.value
            }))
         }
     }else{
      if(e.target.name == 'time'){
         if(values.date !== ''){
            setValues(prev =>({
              ...prev,
              [e.target.name] : e.target.value
            }))
         }
      }else{
        setValues(prev =>({
          ...prev,
          [e.target.name] : e.target.value
        }))
      }
      
     }
  }
  const handleValuesOne = (item)=>{
    setValues(prev => {
      const updatedTime = [...prev.options]; // Make a copy of the current time array
      const itemTime = item.time; // Extract the time property from the item
      const itemIndex = updatedTime.indexOf(itemTime); // Find the index of the item time in the array
      console.log(itemTime,itemIndex);
      if (itemIndex !== -1) {
        updatedTime.splice(itemIndex, 1); 
      }
  
      return {
        ...prev,
        options: updatedTime
      };
    });
  }
  const handleValuesTwo = ()=>{
    setValues(prev => ({
      ...prev,
      options : defaultTimes
    }))
  }
  const handleValuesThree = ()=>{
    setValues((prev) => ({
      name: '',
      email: '',
      subject: '',
      type: '',
      date: '',
      time: '',
      number: '',
      message: '',
      options : ['9:00 to 10:00','12:00 to 13:00',"16:00 to 17:00","21:00 to 22:00"]
    }));
  }
  const handleAlert = (type,method,msg,title)=>{
    if(method === 'open'){
      if(type === 'success'){
        setAlert(prev => ({
           ...prev,
           open : true,
           success : true,
           msg : msg,
           title : title
        }))
      }else{
        setAlert(prev => ({
          open : true,
          success : false,
          msg : msg,
          title : title
       }))
      }
    }else{
       setAlert(prev =>({
         ...prev,
         open : false,
       }))
    }
    
  }
  useEffect(()=>{
    console.log(values);
  },[values])
  return (
    <>
      <Head>
        <title>Geekfolio - Appointment</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main style={style} className='appointment container d-flex gap-3 mb-3 flex-wrap flex-lg-nowrap'>
          <div>
            <Header alert={alert}/>
            {
            alert.open && (
            <Alert msg={alert.msg} success={alert.success} title = {alert.title}/>
             )
            }
            <Form 
              values={values} 
              handleValues={handleValues} 
              handleValuesOne={handleValuesOne} 
              handleValuesTwo={handleValuesTwo} 
              handleValuesThree = {handleValuesThree} 
              handleAlert = {handleAlert}
              alert = {alert}
              />
              
          </div>
            <Screen values = {values}/>
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;