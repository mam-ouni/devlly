import {  Clock, Close, Cros, Delete, Search, Success } from '@/components/svg'
import { colors } from '@/styles/colors'
import React, { useEffect, useState } from 'react'
import Page from './CustomPagination'
import axios from 'axios'
import { Modal ,Box,Alert} from '@mui/material'
export default function Table() {
  const [loading,setLoading] = useState(true)
  const [appointment,setAppointment] = useState([])
  const [open,setOpen] = useState(false)
  const [appointment_modal,setAppointment_modal] = useState({})
  const [appointmentToDisplay,setAppointmentToDisplay] = useState([])
  const [searchTable,setSearchTable] = useState([])
  const [count,setCount] = useState(0)
  const [value,setValue] = useState(5)
  const [page,setPage] = useState(1)
  const [change,setChange] = useState({
    value : false,
    type: ''
  })
  const [search,setSearch] = useState('')
  const [alert,setAlert] = useState({
    open : false,
    msg : '',
    severity : '',
  })
  const handleChangePage = (event, value) => {
    setPage(value);
  }
  const GET = async () => {
    try {
      const response = await fetch('/api/getAppointment', {
        method: 'GET',
        credentials: 'include', // This is equivalent to axios' withCredentials: true
        headers: {
          'Content-Type': 'application/json',
        },
        cache :'no-store'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      setAppointment(data.result);
      setAppointmentToDisplay(data[0].slice((page - 1) * value, (page - 1) * value + value));
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const handleOpen = (item) => {
     setAppointment_modal(item)
     setOpen(true)
  }
  const sendMail = (item,type) => {
     console.log(item);
     console.log(type);
     axios({
        url : '/api/sendEmail',
        method : 'post',
        data : {type,gmail : item.email,date : formatDate(item.date) , time : item.time,name : item.name},
        withCredentials : true,
        responseType :'json'
     }).then((res)=>{
        console.log(res);
     }).catch(err => {
        console.log(err);
     })
  }
  const handleChange = (item,type)=>{ 
    console.log(item);
    axios({
        url : '/api/updateAppointment',
        method : 'post',
        data : {id : item.id_appointment,status : type},
        withCredentials : true,
        responseType : 'json'
     }).then(res => {
        console.log(res);
        GET()
        sendMail(item,type)
        setChange({value : false,type : ''})
        setOpen(false)
        setAlert({
            open : true,
            msg : `Appointment ${type === 'cancel' ? 'cancelled': type === 'confirm' ? "confirmed" : 'deleted'} successfully`,
            severity : 'success'
        })
        setTimeout(() => {
            setAlert(prev => ({
                ...prev,
                open : false
            }))
        }, 4000);
     }).catch(err => {
        console.log(err);
        setChange({value : false,type : ''})
        setOpen(false)
        setAlert({
            open : true,
            msg : `Operation failed : ${err.message}`,
            severity : 'error'
        })
        setTimeout(() => {
            setAlert(prev => ({
                ...prev,
                open : false
            }))
        }, 4000);
     })

     
  }
  /* get search appointment */ 
  const handleSearch = () => {

    const filteredAppointments = appointment.filter(app => 
        app.name.toLowerCase().includes(search.toLowerCase()) || 
        app.email.toLowerCase().includes(search.toLowerCase())
    );  
    setSearchTable(filteredAppointments); // Log the filtered results
};

  /* this part for useEffect*/ 
  useEffect(()=>{
    préGET()
  },[])
  useEffect(()=>{
    GET()
  },[loading])
  function préGET(){
    setLoading(false)
  }
  useEffect(()=>{
    if(searchTable.length === 0){
        setAppointmentToDisplay(appointment.slice((page - 1) * Number(value), ((page - 1) * Number(value)) + Number(value)))
    }else{
        setAppointmentToDisplay(searchTable.slice((page - 1) * Number(value), ((page - 1) * Number(value)) + Number(value)))
    }
  },[value,page,appointment,searchTable])
  useEffect(()=>{
     if(searchTable.length === 0){
        setCount(Math.ceil(appointment.length / value))
     }else{
        setCount(Math.ceil(searchTable.length / value))
     }
  },[appointment,value,search])
  useEffect(()=>{
    if(search !== ''){
        handleSearch()
    }else{
        setSearchTable([])
    }
  },[search])
  return (
    <section className='d-flex justify-content-center mt-4'>
        <div className='table_container'>
            <div className='table'>
                <div className='t_init d-flex align-items-center justify-content-between px-4 py-4'>
                    <h6 className='text-light d-flex gap-1 align-items-center' style={{marginBottom : '0px'}}>Upcoming Appointment</h6>
                    <div className='search d-flex gap-1 align-items-center px-2 w-25'>
                        <Search width={35} height={35} color={'rgba(255, 255, 255, 0.2)'}/>
                        <input type='search' placeholder='Search appointment' className='text-light w-100' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </div>
                </div>
                    <div className='thead text-uppercase d-flex align-items-center px-4 py-2' style={{color : colors.gray_con,backgroundColor : colors.thead_bg}}>
                        <div><input type="checkbox" name="" id="" /></div>
                        <div>
                            <p>ID</p>
                        </div>
                        <div>
                            <p>Date and time</p>
                        </div>
                        <div>
                            <p>user name</p>
                        </div>
                        <div>
                            <p>appointment subject</p>
                        </div>
                        <div>
                            <p>status</p>
                        </div>
                        <div>
                            <p>confirmation</p>
                        </div>
                    </div>
                    {
                        appointmentToDisplay.length === 0 || (search !== '' && searchTable.length === 0) ? (
                            <div className='d-flex justify-content-center align-items-center' style={{height : '375px'}}>
                              <small className='text-danger'>Empty list</small>
                            </div>
                    
                        ):(
                            appointmentToDisplay.map((appointmentItem,i) => (
                    <div key={appointmentItem.id_appointment} className='tr text-uppercase d-flex align-items-center px-4 py-2'>
                    <div>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <p style={{color : colors.gray_con}}>#{appointmentItem.id_appointment}</p>
                    </div>
                    <div>
                        <p style={{marginBottom: '0px'}}>{formatDate(appointmentItem.date)}</p>
                        <small style={{color : colors.gray_con}}>at {appointmentItem.time}</small>
                    </div>
                    <div>
                        <div className='d-flex gap-2 align-items-center w-100'>
                        {
                            (() => {
                            const commonStyle = {
                                width: "40px",
                                height: "40px",
                                backgroundColor: "rgb(255, 104, 71)",
                                borderRadius: '100%'
                            };
                            
                            if (appointmentItem.id_appointment % 5 === 0) {
                                return <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-03.webp" alt="Dr. Johnnie Kassulke" title="Dr. Johnnie Kassulke" draggable="false" loading="lazy" width="40" height="40" className="rizzui-avatar-img object-cover rounded-pill" style={commonStyle} />;
                            } else if (appointmentItem.id_appointment % 3 === 0) {
                                return <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp" alt="Dr. Marcos McGlynn" title="Dr. Marcos McGlynn" draggable="false" loading="lazy" width="40" height="40" className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover" style={commonStyle} />;
                            } else if (appointmentItem.id_appointment % 2 === 0) {
                                return <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-10.webp" alt="Dr. Omar Haag" title="Dr. Omar Haag" draggable="false" loading="lazy" width="40" height="40" className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover" style={commonStyle} />;
                            } else {
                                return <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="Dr. Susie Beatty" title="Dr. Susie Beatty" draggable="false" loading="lazy" width="40" height="40" className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover" style={commonStyle} />;
                            }
                            })()
                        }
                        <div className='w-100 d-flex flex-column'>
                            <p className='text-light text-capitalize w-100'>{appointmentItem.name}</p>
                            <small className='w-100 text-lowercase' style={{color : colors.gray_con}}>{appointmentItem.email}</small>
                            <small className='w-100' style={{color : colors.gray_con}}>{appointmentItem.number}</small>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-100'>
                        <p style={{color : colors.blue}}>{appointmentItem.subject}</p>
                        <small className='w-100' style={{color : colors.gray_con}}>{appointmentItem.typeM}</small>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex gap-1 py-1 align-items-center w-50 justify-content-center' style={{border : '1px solid rgba(255,255,255,0.2)',borderRadius : '10px'}}>
                        {appointmentItem.status === 'waiting' ? (
                            <Clock color={'orange'} width={15} height={15}/>
                        ) : (
                            appointmentItem.status === 'confirmed' ? (
                            <Success color={'green'} width={20} height={20}/>
                            ) : (
                            <Cros color={'red'} width={15} height={15}/>
                            )
                        )}
                        <p>{appointmentItem.status}</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex gap-3'>
                        <button onClick={() => handleOpen(appointmentItem)} className='btn text-light text-uppercase' style={{backgroundColor : colors.blue,border : "1px solid rgba(255,255,255,0.2)",borderRadius :'10px'}}>Detail</button>
                        </div>
                    </div>
                    </div>
                            ))
                        )
                    }
                <div className='tfoot px-3 py-3 d-flex justify-content-between align-items-center' style={{top : appointmentToDisplay.length <= 4 ? '100%' : '0px'}}>
                    <div className='text-light d-flex gap-1 align-items-center' style={{color : colors.gray_con}}>
                        <p style={{fontSize : "13px"}}>Row per page</p>
                        <select name="" id="" className='text-light rounded bg-dark' value={value} onChange={(e)=>setValue(e.target.value)}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <Page count = {count} page={page} handleChange={handleChangePage}/>
                </div>
            </div>
        </div> 
        <Modal onClose={()=>setOpen(false)} open = {open}>
            <Box className = 'table_modal text-light border'>
                 <div className='d-flex align-items-center justify-content-between'>
                    <h6>Appointment {appointment_modal.id_appointment}</h6>
                    <button className='btn' onClick={()=>setOpen(false)}>
                        <Close color={'black'} width={20} height={20}/>
                    </button>
                 </div>
                 <div className='d-flex flex-column'>
                    
                        <p>Name : {appointment_modal.name}</p>
                        <p>Email : {appointment_modal.email}</p>
                        <p>Number : {appointment_modal.number}</p>
                        <p>Type of meeting : {appointment_modal.typeM}</p>
                        <p>Subject : {appointment_modal.subject}</p>
                        <p>Date : {formatDate(appointment_modal.date)} at {appointment_modal.time}</p>
                        <p>Status : <b className='px-2 py-1 rounded border' style={{color : appointment_modal.status === 'confirmed' ? 'green' : appointment_modal.status === 'waiting' ? 'orange' : 'red'}}>{appointment_modal.status}</b></p>
                        <div>
                            <h6>Message : </h6>
                            <p  style={{marginBottom : '0px',maxHeight : '100px',overflowY : 'auto',width : '100%',wordWrap : 'break-word' , color : appointment_modal.msg === '' && 'red' ,fontSize :appointment_modal.msg === '' && '12px'}} className='rounded border px-2 py-1'>
                                {appointment_modal.msg !== '' ? appointment_modal.msg : 'Empty message'}
                            </p>
                        </div>
                 </div>
                 <div className='d-flex gap-4 justify-content-center mt-3'>
                 {
                        !change.value ? (
                            (appointment_modal.status === 'cancelled' || appointment_modal.status === 'confirmed') ? (
                                <button onClick={() => setChange({ value: true, type: 'delete' })} className='d-flex align-items-center justify-content-center btn btn-danger text-light  border rounded gap-1'>
                                    <Delete color={'white'} width={20} height={20} />Delete
                                </button>
                            ) : (
                                <>
                                    <button onClick={() => setChange({ value: true, type: 'cancel' })} className='btn btn-danger'>Refuse</button>
                                    <button onClick={() => setChange({ value: true, type: 'confirm' })} className='btn text-light' style={{ backgroundColor: colors.blue }}>Accept</button>
                                </>
                            )
                        ) : (
                            <>
                                <button onClick={() => setChange({ value: false, type: '' })} className='btn btn-danger fw-bold' style={{ fontSize: '13px' }}>Cancel</button>
                                <button onClick={() => handleChange(appointment_modal, change.type)} className='btn text-light fw-bold' style={{ backgroundColor: colors.blue, fontSize: '13px' }}>Confirm</button>
                            </>
                        )
                } 
                 </div>
            </Box>
        </Modal>
        {
            alert.open && (
                <Alert variant="filled" severity={alert.severity} className='alert'>
                    {alert.msg}
                </Alert>
            )
        }
    </section>
  )
}
