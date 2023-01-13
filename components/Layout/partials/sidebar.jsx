import React from 'react'
import Link from "next/link";
import { useState } from "react";

function Sidebar({toggleside}) {
  const [tinibar, settinibar] = useState(false)
    return ( 
        // <!-- sidebar -->
        <div className={`sidebar px-4 py-4 py-md-5 me-0 ${toggleside? " open ":""} ${tinibar? " sidebar-mini ":""}`}>
            <div className="d-flex flex-column h-100">

                <Link href="/" className="mb-0 brand-icon">
                    <span className="logo-icon">
                        <i className="icofont-stopwatch fs-2"></i>
                    </span>
                    <span className="logo-text">Time-Tracker</span>
                </Link>

                {/* <!-- Menu: main ul --> */}
                <ul className="menu-list flex-grow-1 mt-3">
                    <li><Link className="m-link active" href="/"><i className="icofont-home fs-5"></i> <span>Dashboard</span></Link></li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-report" href="#">
                            <i className="icofont-chart-pie fs-5"></i><span>Reports</span><span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                        </a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul className="sub-menu collapse" id="menu-report">
                            <li><Link className="ms-link" href="/attendance">Attendance</Link></li>
                            <li><Link className="ms-link" href="/hourstrack">Hours Tracked</Link></li>
                            <li><Link className="ms-link" href="/timeline">Timeline</Link></li>
                            <li><Link className="ms-link" href="/employee-logs">Employee Logs</Link></li>
                        </ul>
                    </li>
                    <li><Link className="m-link" href="screencasts.html"><i className="icofont-computer fs-5"></i> <span>Screencasts</span></Link></li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-order" href="#">
                            <i className="icofont-tasks fs-5"></i> <span>Projects</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                        </a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul className="sub-menu collapse" id="menu-order">
                            <li><Link className="ms-link" href="/projectlist">Project List</Link></li>
                            <li><Link className="ms-link" href="/employee">Employee</Link></li>
                            <li><Link className="ms-link" href="/task.html">Task Progress</Link></li>
                            <li><Link className="ms-link" href="/tickets">Ticket List</Link></li>
                            <li><Link className="ms-link" href="/ticket-detail">Ticket Details</Link></li>
                            <li><Link className="ms-link" href="/timesheet">Timesheet</Link></li>
                        </ul>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-company" href="#">
                            <i className="icofont-home fs-5"></i> <span>Companies</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                        </a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul className="sub-menu collapse" id="menu-company">
                            <li><Link className="ms-link" href="/companies/companiesList">My Companies</Link></li>
                            <li><Link className="ms-link" href="/companies/validations">Validations</Link></li>
                            <li><Link className="ms-link" href="/companies/departement">Departements</Link></li>
                        </ul>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#app" href="#">
                            <i className="icofont-code-alt fs-5"></i> <span>App</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                        </a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul className="sub-menu collapse" id="app">
                            <li><Link className="ms-link" href="/calendar">Calandar</Link></li>
                            <li><Link className="ms-link" href="/chat"> Communication</Link></li>
                        </ul>
                    </li>
                    <li className="divider mt-2 py-2 text-uppercase"><small>Ready UI</small></li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#app" href="#">
                            <i className="bi bi-home fs-5"></i> <span>Auth</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                        </a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul className="sub-menu collapse" id="app">
                            <li><Link className="ms-link" href="/auth/login">Login</Link></li>
                            <li><Link className="ms-link" href="/auth/register"> Register</Link></li>
                            <li><Link className="ms-link" href="/auth/login"> Rlog2</Link></li>
                            <li><Link className="ms-link" onClick={(e)=>(e.preventDefault())} href="/"> Logout</Link></li>
                        </ul>
                    </li>
                    
                </ul>
                
                {/* <!-- Menu: menu collepce btn --> */}
                <button type="button" onClick={()=>(settinibar(!tinibar))} className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><i className="icofont-bubble-right"></i></span>
                </button>

            </div>
        </div>          
     );
}

export default Sidebar;