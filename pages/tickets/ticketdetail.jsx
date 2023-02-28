import Layout from "@/components/Layout/layout";
import {useEffect, useState} from 'react'
import Link from "next/link";
import { parse } from 'html-react-parser';
function TicketDetails() {
        const [details, setdetails] = useState({})
    useEffect(()=>{
       setdetails(JSON.parse(localStorage.getItem('TicketDetail'))) 
        // setdetails(parse(details))
   },[])
    return ( 
        <Layout>
     <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0">Ticket Detail </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <Link
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    href="/tickets"
                  >
                    <i className="bi bi-caret-left me-2 fs-6"></i>Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="card mb-3">
                <div className="card-body">
                <h3 className="mb-5 text-secondary">Tickets: {details.id}</h3>
                <h4 className="mb-3"> {details.label} </h4>
                <div>
                <div dangerouslySetInnerHTML={{ __html: details.description }} />
                    
                </div>

                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
                <div className="card-body">
                <ul className="list-group">      
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Created:
                                    <span className=""></span>
                                </li>
                               
                            </ul>
                  {/* {isLoading ? <Loader /> : ""} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </Layout>
     );
}

export default TicketDetails;