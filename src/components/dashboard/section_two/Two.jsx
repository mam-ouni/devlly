import React from 'react'
import { colors } from '@/styles/colors'
import { Calendar, CalendarTwo } from '@/components/svg'
export default function Two({list,handleList}) {
  
  return (
    <section className='dashboardtwo d-none d-xl-block' style={{ height: '100vh', overflowY: 'auto' }}>
      <div className='px-2 py-4 mx-4'>
        <h3 className='d-flex align-items-center gap-1'>Geekfolio 
            <lord-icon
                src="https://cdn.lordicon.com/fmjvulyw.json"
                trigger="hover"
                style={{width:"30px",height:"30px"}}>
            </lord-icon></h3>
      </div>
      <ul style={{paddingLeft: '0px'}} className=''>
        <li onClick={()=>handleList('appointment')}>
            <span style={{display : list === 'appointment' ? 'block' : 'none'}}></span>
            <div className='d-flex align-items-center gap-2 mx-4 px-2 mt-2 py-2 rounded' style={{color : list === 'appointment' ? colors.blue : colors.gray_con}}>
                <Calendar width={20} height={20} color={list === 'appointment' ? colors.blue : colors.gray_con}/>
                Appointment
            </div>
        </li>
        <li onClick={()=>handleList('other')}>
            <span style={{display : list !== 'appointment' ? 'block' : 'none'}}></span>
            <div className='d-flex align-items-center gap-2 mx-4 px-2 mt-2 py-2 rounded' style={{color : list !== 'appointment' ? colors.blue : colors.gray_con}}>
                <Calendar width={20} height={20} color={list !== 'appointment' ? colors.blue : colors.gray_con}/>
                other
            </div>
        </li>
        
      </ul>
    </section>
  )
}
