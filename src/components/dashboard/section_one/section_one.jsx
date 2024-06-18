import React ,{useEffect, useState} from 'react'
import Header from './header'
import { Arc, Calendar, Clock, Phone, Success } from '@/components/svg'
import { colors } from '@/styles/colors'
import Table from './appointment/Table'
import axios from 'axios'
export default function One() {
  const [counts,setCounts] = useState({
     count : 0,
     waitingCount : 0,
     confirmedCount:0,
     canceledCount : 0,
     per1:0,
     per2:0,
     per3:0,
  })
  const GET = ()=>{
    axios({
        url : 'http://localhost:3000/api/statistics',
        method : 'get',
        withCredentials : true,
        responseType : 'json'
    }).then((res)=>{
        setCounts(prev => ({
            ...prev,
            count : res.data.count,
            waitingCount : res.data.waitingCount,
            confirmedCount : res.data.ConfirmedCount,
            canceledCount : res.data.canceledCount,
        }));
    }).catch(err => {
        console.log(err);
    })
  }
  useEffect(()=>{
    GET()
  },[])
  useEffect(()=>{
    if(counts.count > 0){
        setCounts(prev => ({
            ...prev,
            per1 : (counts.confirmedCount * 100/counts.count).toFixed(2),
            per2 : (counts.waitingCount * 100/counts.count).toFixed(2),
            per3 : (counts.canceledCount * 100 / counts.count).toFixed(2)
        }))
    }
  },[counts])
  return (
    <section className='dashboardone'>
        <Header/>
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
    </section>
  )
}
