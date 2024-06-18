import React from 'react'
import { Close } from '../svg'

export default function Alert({msg,success,title}) {
  return (
     <div className='my_alert rounded-top'>
        <div className='px-3 py-1 d-flex justify-content-between text-light align-items-center'>
            <div className='d-flex flex-column'>
                <h6 style={{marginBottom : '0px',color : success ? 'rgb(121, 202, 0)' : 'rgb(255, 54, 54)',textShadow: success ? '0px 0px 5px rgb(121, 202, 0)':'0px 0px 5px rgb(255, 54, 54)'}}>{title}</h6>
                <small style={{marginBottom : '0px'}}>{msg}</small>
            </div>
            <Close width={15} height={15} color={'gray'}/>
        </div>
        <div style={{backgroundColor : success ? 'rgb(121, 202, 0)' : 'rgb(255, 54, 54)',boxShadow : success ? '0px 0px 5px rgb(121, 202, 0)':'0px 0px 5px rgb(255, 54, 54)'}}>
        </div>
     </div>
  )
}
