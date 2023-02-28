import Link from "next/link";
import Layout from '@/components/Layout/layout';
import Loader from '@/components/Layout/partials/Loader';
import { TicketsService } from './../../src/services/Projects/ticketsServices';
import { useContext, useEffect, useState } from 'react';
import { RequestToResponse } from '@/src/controller/requestParser';
import { ApiContext } from '@/src/controller/apiContext';
import AddTickets from '@/components/tickets/AddTickets';
import EditTickets from '@/components/tickets/EditTicket';
import {useRouter} from 'next/router'
import TrashTickets from "@/components/tickets/TrashTicket";
function Tickets() {
    const Router = useRouter()
    const [ticketisLoading, setticketisLoading] = useState(true)
    const [toggleAdd, settoggleAdd] = useState(false)
    const [toggleEdit, settoggleEdit] = useState(false)
    const [toggleTrash, settoggleTrash] = useState(false)
    const [ticketList, setticketList] = useState([])
    const [ticketItem, setticketItem] = useState([])
    const { showToastMessage } = useContext(ApiContext);


    const modalForEdit = (data)=>{
      // alert(JSON.stringify(data))
        setticketItem(data) ;
      settoggleEdit(true)
    }
    const modalForDelete = (data)=>{
      // alert(JSON.stringify(data))
        setticketItem(data) ;
      settoggleTrash(true)
    }
    const toDetails= (ticket)=>{
      localStorage.setItem('TicketDetail', JSON.stringify(ticket))
      Router.push('/tickets/ticketdetail')
    }

    useEffect(()=>{
      let body ={};
      (async () => {
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await TicketsService.getAllTickets(body));
        console.warn("ticketsL", resultStatus, result, errorStatus, errorMessage);
    
        if (result !== null && resultStatus === "OK") {
          setticketList(result), setticketisLoading(false);
        }
        else if( errorStatus > 200){
          showToastMessage(errorMessage, "error")
        }
        else{
          showToastMessage("Something bad happen !!!", " warning")
        }
      })();
    },[])
    return ( 
        <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0">Ticket List </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    onClick={() => settoggleAdd(true)}
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add
                    Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="dtable"
                    className="table table-hover table-striped align-middle mb-0"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th> Ticket </th>
                        <th>Libelé</th>
                        <th> Project</th>
                        <th>Description</th>
                        <th> Created by</th>
                        <th> Assigned to</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody  style={{ width: "100%" }}>
                      {ticketisLoading ? (
                        <tr className=" w-100 mx-auto">
                          <td colSpan="8" className="d-flex justify-content-center">
                            <Loader />
                          </td>
                        </tr>
                      ) : (
                        ticketList.map((ticket, index) => (
                          <tr key={index}>
                            <td>
                             #TC-{ticket.id}
                            </td>
                            <td>{ticket.label}</td>
                            <td>{ticket.Project.label}</td>
                            <td> <span className='btn btn-sm btn-warning' onClick={()=>{toDetails(ticket)}} >View details</span> </td>
                            <td>{ticket.creator.lastName + " " +ticket.creator.firstName }</td>
                            <td>{ticket.target.lastName + " " +ticket.target.firstName }</td>
                            <td>{ticket.status}</td>
                            <td>
                              {/* suspensionComment */}
                              {ticket.deletedAt === null && (
                                <span className="badge bg-success">Active</span>
                              )}
                              {ticket.deletedAt === "suspended" && (
                                <span className="badge bg-warning">
                                  Suspended
                                </span>
                              )}
                              {ticket.deletedAt !== null && (
                                <span className="badge bg-danger">
                                  Inactive
                                </span>
                              )}
                            </td>
                            <td>
                              <div
                                className="btn-group small"
                                role="group"
                                aria-label="Basic outlined example"
                              >
                                <button
                                  role="button"
                                  id={`${index}btned`}
                                  type="button"
                                  className="btn btn-sm btn-outline-light border-dark"
                                  // data-bs-toggle="modal"
                                  onClick={() => modalForEdit(ticket)}
                                >
                                  <i className="bi bi-pen text-success"></i>
                                </button>
                                <button
                                  role="button"
                                  id={`${index}btndel`}
                                  type="button"
                                  className="btn btn-sm btn-outline-dark deleterow"
                                  onClick={() => modalForDelete(ticket)}
                                >
                                  <i className="bi bi-trash text-danger"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {/* {isLoading ? <Loader /> : ""} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <AddTickets toggleAdd={toggleAdd} settoggleAdd={settoggleAdd} />
    <EditTickets toggleEdit={toggleEdit} data={ticketItem} settoggleEdit={settoggleEdit} />
    <TrashTickets toggleTrash={toggleTrash} data={ticketItem} settoggleTrash={settoggleTrash} />
    </Layout>
     );
}

export default Tickets;