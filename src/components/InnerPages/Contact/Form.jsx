import React , {useState, useTransition} from 'react';
import {Alert} from '@mui/material'
import { useTranslation } from 'react-i18next';


const initValues =  {name :"" , email:"" , subject:"" , message:""}
const initState = {values :initValues}

const sendContactForm = async(data)=>
  fetch('/api/contact', {
    method :"POST" ,
    body : JSON.stringify(data),
    headers:{
      "Content-Type" : "application/json",
      Accept : "application/json"
    }
  })

function Form() {
  const {t} = useTranslation('en' , {useSuspense : false});
  const [alert,setAlert] = useState({
    open : false,
    msg : '',
    severity : '',
  })
  const [state , setState] = useState(initState)
  const {values} = state

  const handleChange = ({target}) =>setState((prev)=>({
    ...prev ,
    values : {
      ...prev.values  ,
      [target.name] : target.value
    }
  }))

  const handleSubmit = async()=>{
    let res = await sendContactForm(values)
    if (res.status ===200){
      setAlert({
        open : true,
        msg : `Message Sent`,
        severity : 'success'
    })
    setTimeout(() => {
        setAlert(prev => ({
            ...prev,
            open : false
        }))
    }, 4000);
    }else{
      setAlert({
        open : true,
        msg : `Failed To Send The Message`,
        severity : 'error'
    })
    setTimeout(() => {
        setAlert(prev => ({
            ...prev,
            open : false
        }))
    }, 4000);
    }
  }

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">{t('contact page.form.info.titles.one')}</h6>
              <h2 className="fz-50">{t('contact page.form.info.titles.two')}<br />{t('contact page.form.info.titles.three')}</h2>
              <p className="fz-15 mt-10">{t('contact page.form.info.paragraph')}</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="#0">+1 840 841 25 69</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="#0">Facebook</a>
                </li>
                <li className="mr-30">
                  <a href="#0">Twitter</a>
                </li>
                <li className="mr-30">
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          {
            alert.open && (
                <Alert style={{marginTop:'4vh' , width:"40vw"}} variant="filled" severity={alert.severity} className='alert'>
                    {alert.msg}
                </Alert>
            )
        }
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">    
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder={t('contact page.form.input.name')}
                        required="required" value={values.name} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder={t('contact page.form.input.email')} required="required" 
                      value={values.email} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder={t('contact page.form.input.subject')}
                      value={values.subject} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder={t('contact page.form.input.message')} rows="4" required="required"
                      value={values.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="mt-30">
                      <button onClick={handleSubmit} className="butn butn-md butn-bord radius-30">
                        <span className="text">{t('contact page.form.button')}</span>
                      </button>
                    </div>
                  </div>
                </div>    
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form