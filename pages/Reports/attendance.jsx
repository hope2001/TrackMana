import Layout from '@/components/Layout/layout';
import React from 'react'

const attendance = () => {
  return (
    <Layout>
    <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0">Attendance</h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <button
                    type="button"
                    className="btn btn-dark  w-sm-100 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editattendance">
                    <i className="bi bi-pencil-square mx-2"></i>Edit Attendance
                  </button>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <span className="dropdown-item">All</span>
                    </li>
                    <li>
                      <span className="dropdown-item">Today Absent</span>
                    </li>
                    <li>
                      <span className="dropdown-item">Week Absent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="atted-info d-flex mb-3 flex-wrap">
                    <div className="full-present me-2">
                      <i className="icofont-check-circled text-success me-1"></i>
                      {/* <i className="bi bi-check-circle text-success me-1"></i> */}
                      <span>Full Day Present</span>
                    </div>
                    <div className="Half-day me-2">
                      <i className="bi bi-clock-history text-warning me-1"></i>
                      <span>Half Day Present</span>
                    </div>
                    <div className="absent me-2">
                      <i className="bi bi-x-circle text-danger me-1"></i>
                      <span>Full Day Absence</span>
                    </div>
                    <div className="absent me-2">
                      <i className="bi bi-door-closed-fill text-dark"></i>
                      <span>Closed Day</span>
                    </div>

                    
                  </div>
                  <div className="table-responsive">
                    <table
                      className="table table-hover align-middle mb-0"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ paddingRight: "55px" }}>Employee</th>

                          {[1,2,3].map((item) => (
                            <th key={item.dayid}>
                              {" "}
                              {/* {item.fullday}  */}
                              {item.dayid}{" "}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        
                        {
                            [].map((data)=>(
                        <tr key={data.nom}>
                            <td>
                            <span className="fw-bold small"> {data.nom} </span>
                          </td>  
                            {
                                data.data.map((item)=>(
                            <td className=""  key={item.date +item.status} onClick={(item)=>(itemSender(item),setMtype("check_attend"))} data-bs-toggle="modal" data-bs-target="#editattendance">
                            {
                                item.status === "full" && <i className="bi bi-check-circle text-success"></i>
                            }
                            {
                                item.status === "half" && <i className="bi bi-clock-history text-warning"></i>
                            }
                            {
                                item.status === "nop" && <i className="bi bi-x-circle text-danger"></i>
                            }
                            {
                                item.status === "closed" && <i className="bi bi-door-closed-fill text-dark"></i>
                            }
                            {/* {item.status} */}
                          </td>
                                    ))
                            }
                            </tr>
                            ))
                        }
                          

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- Row End --> */}
        </div>
      </div>
    </Layout>
  )
}

export default attendance