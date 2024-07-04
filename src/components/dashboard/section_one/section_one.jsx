import React ,{useEffect, useState} from 'react'
import Header from './header'
import { Arc, Calendar, Clock, Phone, Success } from '@/components/svg'
import { colors } from '@/styles/colors'
import Table from './appointment/Table'
import axios from 'axios'
export default function One({list,handleList}) {
  const [counts,setCounts] = useState({
     count : 0,
     waitingCount : 0,
     confirmedCount:0,
     canceledCount : 0,
     per1:0,
     per2:0,
     per3:0,
  })
  const GET = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/statistics', {
        method: 'GET',
        credentials: 'include', // This is equivalent to axios' withCredentials: true
        cache : 'no-store'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      setCounts(prev => ({
        ...prev,
        count: data.count,
        waitingCount: data.waitingCount,
        confirmedCount: data.confirmedCount,
        canceledCount: data.canceledCount,
      }));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  useEffect(()=>{
    GET()
  },[])
  useEffect(() => {
    if (counts.count > 0) {
      setCounts(prev => ({
        ...prev,
        per1: (prev.confirmedCount * 100 / prev.count).toFixed(2),
        per2: (prev.waitingCount * 100 / prev.count).toFixed(2),
        per3: (prev.canceledCount * 100 / prev.count).toFixed(2)
      }));
    }
  }, [counts.count]);
  useEffect(()=>{
    console.log(counts);
  },[counts])
  return (
    <section className='dashboardone' style={{ height: '100vh', overflowY: 'auto' ,position:'relative'}}>
        {
            list === 'appointment' ? (
                <>
                    <Header list = {list} handleList = {handleList}/>
                    <div style={{height : "80px"}}></div>
                    <div className='cons px-4 d-flex gap-4 flex-wrap flex-lg-nowrap'>
                        <div className="d-flex gap-4 w-100 w-lg-50 flex-wrap flex-sm-nowrap">
                        <div className='con d-flex flex-column gap-3 p-4' style={{backgroundColor : colors.green}}>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='bg-light p-2 d-flex align-items-center justify-content-center' style={{width : "40px",height : "40px",borderRadius : '10px'}}>
                                    <Calendar width={25} height={25} color={colors.green}/>
                                </div>
                                <div>
                                    <small style={{marginBottom :'0px'}} className='fw-bold'>Total Appointment</small>
                                    <p className='fw-bold text-light' style={{marginBottom :'0px'}}>{counts.count}</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='px-2 py-1 bg-light' style={{borderRadius :'15px'}}>
                                    <Arc width={20} height={20} color={colors.green}/>
                                </div>
                                <small className='d-flex align-items-center gap-2' style={{marginBottom : '0px'}}><b>+32.40%</b> Increased last month</small>
                            </div>
                        </div>
                        <div className='con d-flex flex-column gap-3 p-4' style={{borderRadius : '10px' ,color : colors.gray_con,border : `1px solid ${colors.gray_con}`}}>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='p-2 d-flex align-items-center justify-content-center' style={{width : "40px",height : "40px",borderRadius : '10px',backgroundColor : colors.green}}>
                                    <Success color={'white'} width={25} height={25}/>
                                </div>
                                <div>
                                    <small style={{marginBottom :'0px'}} className='fw-bold'>Scheduled Users</small>
                                    <p className='fw-bold text-light' style={{marginBottom :'0px'}}>{counts.confirmedCount}</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='px-2 py-1 bg-light' style={{borderRadius :'15px'}}>
                                    <Arc width={20} height={20} color={colors.green}/>
                                </div>
                                <small className='d-flex align-items-center gap-2' style={{marginBottom : '0px'}}><b>+{counts.per1}%</b> Increased last month</small>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex gap-4 w-100 w-lg-50 flex-wrap flex-sm-nowrap">
                        <div className='con d-flex flex-column gap-3 p-4' style={{borderRadius : '10px' ,color : colors.gray_con,border : `1px solid ${colors.gray_con}`}}>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='p-2 d-flex align-items-center justify-content-center' style={{width : "40px",height : "40px",borderRadius : '10px',backgroundColor : colors.green}}>
                                    <Clock color={'white'} width={25} height={25}/>
                                </div>
                                <div>
                                    <small style={{marginBottom :'0px'}} className='fw-bold'>Waiting List</small>
                                    <p className='fw-bold text-light' style={{marginBottom :'0px'}}>{counts.waitingCount}</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='px-2 py-1 bg-light' style={{borderRadius :'15px'}}>
                                    <Arc width={20} height={20} color={colors.green}/>
                                </div>
                                <small className='d-flex align-items-center gap-2' style={{marginBottom : '0px'}}><b>+{counts.per2}%</b> Increased last month</small>
                            </div>
                        </div>
                        <div className='con d-flex flex-column gap-3 p-4' style={{borderRadius : '10px' ,color : colors.gray_con,border : `1px solid ${colors.gray_con}`}}>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='p-2 d-flex align-items-center justify-content-center' style={{width : "40px",height : "40px",borderRadius : '10px',backgroundColor : colors.green}}>
                                    <Phone color={'white'} width={25} height={25}/>
                                </div>
                                <div>
                                    <small style={{marginBottom :'0px'}} className='fw-bold'>Canceled appointment</small>
                                    <p className='fw-bold text-light' style={{marginBottom :'0px'}}>{counts.canceledCount}</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='px-2 py-1 bg-light' style={{borderRadius :'15px'}}>
                                    <Arc width={20} height={20} color={colors.green}/>
                                </div>
                                <small className='d-flex align-items-center gap-2' style={{marginBottom : '0px'}}><b>+{counts.per3}%</b> Increased last month</small>
                            </div>
                        </div>
                        </div>
            
                    </div>
                    <Table/>
                </>
            ) : (
                <>
                    <Header list = {list} handleList = {handleList}/>
                    <div style={{height : "80px"}}></div>
                    <div style={{height : '655px'}} className='d-flex justify-content-center align-items-center'>
                        <h1>other page</h1>
                    </div>
                </>
            )
        }
        
    </section>
  )
}
