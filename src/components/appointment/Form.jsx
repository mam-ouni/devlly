import React, { useState ,useEffect} from 'react'
import axios from 'axios';
export default function Form({values,handleValues,handleValuesOne,handleValuesTwo,handleValuesThree,handleAlert,alert}) {
  /* state */
  const [confirm,setConfirm] = useState(false)
  const [today,setToday] = useState('');
  /* to server */
  const send =async (e) => {
    e.preventDefault()
    setConfirm(false)
    if (
        values.name!== '' &&
        values.email!== '' &&
        values.subject!== '' &&
        values.type!== '' &&
        values.date!== '' &&
        values.time!== '' &&
        values.number!== ''
      ) {
        if(isValidEmail(values.email)){
          if(values.time === 'Select time of meeting' || values.type === 'Select type of meeting' || values.time === 'All appointment are maked'){
             handleAlert('error','open','select type and time of meeting','Error')
             setTimeout(() => {
               handleAlert('','close','','')
             }, 4000);
          }else{
              axios({
                url : 'http://localhost:3000/api/addAppointment',
                method : 'post',
                data : values,
                withCredentials : true,
                headers : {
                  'Content-Type' : 'application/json'
                }
            }).then((res)=>{
                console.log(res)
                getTime()
                handleValuesThree()
                handleAlert('success','open','Appointment added successfuly!','Success')
                setTimeout(() => {
                  handleAlert('success','close','')
                }, 4000);
            }).catch(err=>{
                console.log(err.message);
                handleAlert('error','open','Appointment failed','Error')
                setTimeout(() => {
                  handleAlert('error','close','')
                }, 4000);
            })
          }
           
        }else{
          handleAlert('error','open','Email invalid (exp : xzy@exemple.com)','Email Error')
            setTimeout(() => {
            handleAlert('','close','','')
            }, 4000);
        }
         
      }else{
        handleAlert('error','open','Empty value','Error')
        setTimeout(() => {
         handleAlert('','close','','')
        }, 4000);
      }
  }
  const getTime = async () => {
      try {
        const res = await axios.post(
          'http://localhost:3000/api/getTimes',
          { date: values.date },
          { withCredentials: true },
          
        );
        console.log(res.data);
        if(res.data.length > 0){
          res.data.forEach(item => {
             handleValuesOne(item)
          });
        }else{
            handleValuesTwo()
        }
        
        
      } catch (error) {
        console.log(error);
      }
  };
  
  /* handle */
  const handleConfirm = (e,type)=>{
      e.preventDefault()
      setConfirm(type)
  }
  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };
  /* useEffect */
  
  useEffect(() => {
    const todayDate = new Date();
    const formattedDate = todayDate.toISOString().split('T')[0];
    setToday(formattedDate);
  }, []);

  useEffect(()=>{
    getTime()
  },[values.date])
  return (
    <section className='form w-100 w-lg-50' style={{margin : alert.open ? '1rem 0px' : '3rem 0px'}}>
       <h6>Form</h6>
        <form id='contact-form' action="" className='d-flex flex-column gap-3'>
             <div className='d-flex gap-3 gap-sm-5 flex-wrap flex-sm-nowrap'>
                  <input style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className='w-sm-50 w-100 px-3 text-light' type="text" name='name' placeholder='Name' value={values.name} onChange={(e=>handleValues(e))}/>
                  <input style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className='w-sm-50 w-100 px-3 text-light' type="email" name='email' placeholder='Email' value={values.email} onChange={(e=>handleValues(e))}/>
            </div>
             <div className='d-flex gap-3 gap-sm-5 flex-wrap flex-sm-nowrap'>
                  <input style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className=' w-sm-50 w-100 px-3 text-light' type="text" name='subject' placeholder='Subject' value={values.subject} onChange={(e=>handleValues(e))}/>
                  <select style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className='w-sm-50 w-100 px-3 text-light' name="type" id="" value={values.type} onChange={(e=>handleValues(e))}>
                     <option defaultValue="">Select type of meeting</option>
                     <option className='text-capitalize' value="google meet">google meet</option>
                     <option className='text-capitalize' value="call number">Call Number</option>
                     <option className='text-capitalize' value="in telegram">In Telegram</option>
                  </select>
            </div>
            <div className='d-flex gap-3 gap-sm-5 flex-wrap flex-sm-nowrap'>
                <input min={today} type="date" name="date" id="" style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className='w-sm-50 w-100 px-3 text-light' value={values.date} onChange={(e=>handleValues(e))}/>
                {
                  values.date !== '' ? (
                    <select style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} className='w-sm-50 w-100 px-3 text-light' name="time" id="" value={values.time} onChange={(e=>handleValues(e))}>
                     {values.options.length !== 0 ?(
                        <option defaultValue="">Select time of meeting</option>
                     ):(
                      <option defaultValue="">All appointment are maked</option>
                     )}
                     {values.options.map((item,index)=>(
                        <option className='text-capitalize' value={item} key={index}>{item}</option>
                     ))}
                  </select>
                  ) : (
                     <div style={{backgroundColor : '#1d1d1d',borderRadius : "10px" ,border : '1px solid rgba(255, 255, 255, 0.2)'}} className='w-sm-50 w-100 px-3 text-light'>
                        <span style={{marginBottom : '0px' ,color : 'rgba(255, 255, 255, 0.2)',padding : '12px 0px'}}>Select time of meeting</span>
                     </div>
                  )
                }
            </div>
            <div className='last d-flex gap-sm-5 gap-3 flex-wrap-reverse flex-sm-nowrap'>
                  <div className='d-flex flex-column gap-3'>
                      <input 
                          type="text" 
                          name="number" 
                          id="" 
                          style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}} 
                          className='w-100 px-3 text-light'
                          placeholder='Number'
                          value={values.number}
                          onChange={e=>handleValues(e)} />
                         {
                           !confirm ? (
                             <button className='rounded py-2' onClick={(e)=>handleConfirm(e,true)}>Get Appointment</button>
                           ) : (
                             <div className='d-flex gap-3 flex-wrap flex-sm-nowrap'>
                               <button className='rounded py-2 w-sm-50 w-100' onClick={(e)=>handleConfirm(e,false)}>Cancel</button>
                               <button className='rounded py-2 w-sm-50 w-100' onClick={(e)=>send(e)}>Confirm</button>
                            </div>
                           )
                         }
                  </div>
                  <textarea 
                      name="message" 
                      id="" 
                      placeholder='Message' 
                      className='px-3 py-2 text-light' 
                      style={{backgroundColor : '#1d1d1d',borderRadius : "10px"}}
                      value={values.message}
                      onChange={(e)=>handleValues(e)}/>
            </div>
        </form>
    </section>
  )
}
