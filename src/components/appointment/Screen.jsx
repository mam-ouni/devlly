import { useTranslation } from 'react-i18next'

export default function Screen({values}) {
    const {t} = useTranslation('en' , {useSuspense : false});
  return (
     <div className="screen py-2 px-3" style={{borderRadius : '15px'}}>
            <h5 className="text-center">{t('appo page.screen.title')}</h5>
            <div className="d-flex mt-3 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.subject')} :</h6>
                <p>{values.subject}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.email')}:</h6>
                <p>{values.email}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.date')} :</h6>
                <p>{values.date+t('appo page.screen.in')+values.time}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.number')} :</h6>
                <p>{values.number}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.type')} :</h6>
                <p>{values.type}</p>
            </div>
            <div className="d-flex flex-column mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.message')} </h6>
                <p className="w-100" style={{height : '180px',overflowY : 'scroll'}}>
                  {
                    values.message
                  }
                </p>
            </div>
            <div style={{color : 'rgba(255,255,255,0.2)'}} className="d-flex text-end justify-content-end mt-1 gap-2 w-100 align-items-center px-3">
                    <small style={{marginBottom : '0px'}} className="text-capitalize">{t('appo page.screen.name')} : </small>
                    <small>
                    {
                        values.name
                    }
                    </small>
            </div>
     </div>
  )
}
