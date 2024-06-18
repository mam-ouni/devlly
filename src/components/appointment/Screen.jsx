

export default function Screen({values}) {
  return (
     <div className="screen py-2 px-3" style={{borderRadius : '15px'}}>
            <h5 className="text-center">Appointment</h5>
            <div className="d-flex mt-3 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">subject :</h6>
                <p>{values.subject}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">Email:</h6>
                <p>{values.email}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">Date :</h6>
                <p>{values.date+' in '+values.time}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">Number :</h6>
                <p>{values.number}</p>
            </div>
            <div className="d-flex mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">Type of meet :</h6>
                <p>{values.type}</p>
            </div>
            <div className="d-flex flex-column mt-1 gap-2 align-items-center">
                <h6 style={{marginBottom : '0px'}} className="text-capitalize">Message </h6>
                <p className="w-100" style={{height : '180px',overflowY : 'scroll'}}>
                  {
                    values.message
                  }
                </p>
            </div>
            <div style={{color : 'rgba(255,255,255,0.2)'}} className="d-flex text-end justify-content-end mt-1 gap-2 w-100 align-items-center px-3">
                    <small style={{marginBottom : '0px'}} className="text-capitalize">Name : </small>
                    <small>
                    {
                        values.name
                    }
                    </small>
            </div>
     </div>
  )
}
