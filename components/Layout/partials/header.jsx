import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ApiContext } from "@/src/controller/apiContext";
import { accountService, api } from "@/src/services";
import Loader from "./Loader";
import Topbar from "./Topbar";
function Header({
  toggleside,
  settoggleside,
  togglesetting,
  settogglesetting,
}) {
  const { companies, activecompany, setactivecompany, isLoading, loggedUser } =
    useContext(ApiContext);
    const [show, setshow]=useState(false)
  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          {/* <!-- header rightbar icon --> */}
          <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
            <div className="dropdown notifications">
              <a className="nav-link dropdown-toggle pulse"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="25px"
                  viewBox="0 0 38 38"
                >
                  <path
                    d="M36,34v-2h-2.98c-0.598-0.363-1.081-3.663-1.4-5.847c-0.588-4.075-1.415-9.798-4.146-13.723  C26.584,12.154,25.599,12,24.5,12c-3.646,0-5.576,1.657-7.106,4.086C15.089,19.746,14,30.126,14,33c0,2.757,2.243,5,5,5  c2.414,0,4.435-1.721,4.898-4H36z"
                    style={{ fill: "var(--primary-color)" }}
                    data-st="fill:var(--chart-color4);"
                  ></path>
                  <path
                    className="st0"
                    d="M33.02,32c-0.598-0.363-1.081-3.663-1.4-5.847c-0.851-5.899-2.199-15.254-9.101-17.604  C23.433,7.643,24,6.386,24,5c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,1.386,0.567,2.643,1.482,3.549  c-6.902,2.35-8.25,11.705-9.101,17.604C6.209,27.324,5.991,28.813,5.733,30h2.042c0.192-0.961,0.376-2.127,0.586-3.562  C9.36,19.501,10.73,10,19,10c8.27,0,9.64,9.501,10.641,16.442c0.386,2.636,0.682,4.394,1.108,5.558H2v2h12.101  c0.464,2.279,2.485,4,4.899,4c2.415,0,4.435-1.721,4.899-4H36v-2H33.02z M19,8c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3  S20.654,8,19,8z M19,36c-1.304,0-2.416-0.836-2.829-2h5.658C21.416,35.164,20.304,36,19,36z"
                  ></path>
                </svg>
                <span className="pulse-ring"></span>
              </a>
              <div
                id="NotificationsDiv"
                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0"
              >
                <div className="card border-0 w380">
                  <div className="card-header border-0 p-3">
                    <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                      <span>Notifications</span>
                      <span className="badge text-white">06</span>
                    </h5>
                  </div>
                  <div className="tab-content card-body">
                    <div className="tab-pane fade show active">
                      <ul className="list-unstyled list mb-0">
                        <li className="py-2 mb-1 border-bottom">
                          <a className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="/assets/images/xs/avatar1.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Chloe Walkerr
                                </span>{" "}
                                <small>2MIN</small>
                              </p>
                              <span className="">
                                Added New Task 2021-07-15{" "}
                                <span className="badge bg-success">Add</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="card-footer text-center border-top-0" href="#">
                    {" "}
                    View all notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a
                aria-label="dropdown"
                className="nav-link dropdown-toggle pulse"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img src="/assets/images/flag/GB.png" alt="" />
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
                <div className="card border-0">
                  <ul className="list-unstyled py-2 px-3">
                    <li>
                      <Link href="" className="">
                        <img src="/assets/images/flag/GB.png" alt="" />
                        {/* <img src="/assets/images/flag/GB.png" alt="" fill quality={60}/> */}
                        English
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="">
                        <img src="/assets/images/flag/DE.png" alt="" /> German
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="">
                        <img src="/assets/images/flag/FR.png" alt="" /> French
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="">
                        <img src="/assets/images/flag/IT.png" alt="" /> Italian
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="">
                        <img src="/assets/images/flag/RU.png" alt="" /> Russian
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dropdown companies-list ml-2 ml-sm-3 d-flex align-items-center">
              <a
                title="Your Companies"
                aria-label="companiesList"
                className="nav-link dropdown-toggle pulse p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <i className="bi bi-building-fill-gear text-primary h4"></i>
                {/* <img className="avatar lg rounded-circle Image-thumbnail" src="/assets/images/profile_av.svg" alt="profile" quality={60}/> */}
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                <div className="card border-0 w280">
                  {/* <div className="card-body pb-0">
                                            {/* <div className="d-flex py-1">
                                                <img className="avatar rounded-circle" src="/assets/images/profile_av.svg" alt="profile"  quality={60}/>
                                                <div className="flex-fill ms-3">
                                                    <p className="mb-0"><span className="font-weight-bold">John	Quinn</span></p>
                                                    <small className="">Johnquinn@gmail.com</small>
                                                </div>
                                            </div>
                                            <div>
                                                <hr className="dropdown-divider border-dark"/></div> 
                                        </div>*/}
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <YourCompanies
                      isLoading={isLoading}
                      companies={companies}
                      activecompany={activecompany}
                      setactivecompany={setactivecompany}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center">
              <a
                className="nav-link dropdown-toggle pulse p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <img
                  className="avata lg rounded-circle Image-thumbnail mx-2"
                  style={{ width: "40px", height: "40px" }}
                  src={
                    accountService.isLogged && loggedUser
                      ? api + loggedUser.picture
                      : "/assets/images/profile_av.svg"
                  }
                  alt="profile"
                  quality={60}
                />
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                <div className="card border-0 w280">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src={
                          accountService.isLogged && loggedUser
                            ? api + loggedUser.picture
                            : "/assets/images/profile_av.svg"
                        }
                        alt="profile"
                        quality={60}
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold text-wrap text-break">
                            {loggedUser && loggedUser.firstName}{" "}
                            {loggedUser && loggedUser.lastName}
                          </span>
                        </p>
                        <small className="text-wrap text-break">
                          {" "}
                          {loggedUser && loggedUser.email}{" "}
                        </small>
                      </div>
                    </div>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                    <Link
                      href=""
                      className="list-group-item list-group-item-action border-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="24px"
                        viewBox="0 0 38 38"
                        className="me-3"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M36.15,38H1.85l0.16-1.14c0.92-6.471,3.33-7.46,6.65-8.83c0.43-0.17,0.87-0.36,1.34-0.561  c0.19-0.08,0.38-0.17,0.58-0.26c1.32-0.61,2.14-1.05,2.64-1.45c0.18,0.48,0.47,1.13,0.93,1.78C15.03,28.78,16.53,30,19,30  c2.47,0,3.97-1.22,4.85-2.46c0.46-0.65,0.75-1.3,0.931-1.78c0.5,0.4,1.319,0.84,2.64,1.45c0.2,0.09,0.39,0.17,0.58,0.26  c0.47,0.2,0.91,0.391,1.34,0.561c3.32,1.37,5.73,2.359,6.65,8.83L36.15,38z M20,13v4h-2v-4H20z"
                          style={{ fill: "var(--primary-color)" }}
                          data-st={{ fill: "var(--chart-color4)" }}
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M21.67,17.34C21.22,18.27,20.29,19,19,19s-2.22-0.73-2.67-1.66l-1.79,0.891C15.31,19.78,16.88,21,19,21  s3.69-1.22,4.46-2.77L21.67,17.34z M15,10.85c-0.61,0-1.1,0.38-1.1,1.65s0.49,1.65,1.1,1.65s1.1-0.38,1.1-1.65S15.61,10.85,15,10.85  z M23,10.85c-0.61,0-1.1,0.38-1.1,1.65s0.489,1.65,1.1,1.65s1.1-0.38,1.1-1.65S23.61,10.85,23,10.85z M35.99,36.86  c-0.92-6.471-3.33-7.46-6.65-8.83c-0.43-0.17-0.87-0.36-1.34-0.561c-0.19-0.09-0.38-0.17-0.58-0.26c-1.32-0.61-2.14-1.05-2.64-1.45  c-0.521-0.42-0.7-0.8-0.761-1.29C26.55,22.74,28,19.8,28,17V4.56l-1.18,0.21C26.1,4.91,25.58,5,25.05,5  c-1.439,0-2.37-0.24-3.35-0.49C20.71,4.26,19.68,4,18.21,4c-1.54,0-2.94,0.69-3.83,1.9l1.61,1.18C16.5,6.39,17.31,6,18.21,6  c1.22,0,2.08,0.22,3,0.45C22.22,6.71,23.36,7,25.05,7c0.32,0,0.63-0.02,0.95-0.06V17c0,3.44-2.62,7-7,7s-7-3.56-7-7V6.29  C12.23,5.59,13.61,2,18.21,2c1.61,0,2.76,0.28,3.88,0.55C23.06,2.78,23.98,3,25.05,3C26.12,3,27.19,2.74,28,2.47V0.34  C27.34,0.61,26.17,1,25.05,1c-0.83,0-1.6-0.18-2.49-0.4C21.38,0.32,20.05,0,18.21,0c-5.24,0-7.64,3.86-8.18,5.89L10,17  c0,2.8,1.45,5.74,3.98,7.47c-0.06,0.49-0.24,0.87-0.76,1.29c-0.5,0.4-1.32,0.84-2.64,1.45c-0.2,0.09-0.39,0.18-0.58,0.26  c-0.47,0.2-0.91,0.391-1.34,0.561c-3.32,1.37-5.73,2.359-6.65,8.83L1.85,38h34.3L35.99,36.86z M4.18,36c0.81-4.3,2.28-4.9,5.24-6.12  c0.62-0.25,1.29-0.53,2-0.86c1.09-0.5,2.01-0.949,2.73-1.479c0.8-0.56,1.36-1.22,1.64-2.12C16.76,25.78,17.83,26,19,26  s2.24-0.22,3.21-0.58c0.28,0.9,0.84,1.561,1.64,2.12c0.721,0.53,1.641,0.979,2.73,1.479c0.71,0.33,1.38,0.61,2,0.86  c2.96,1.22,4.43,1.83,5.24,6.12H4.18z"
                        ></path>
                      </svg>
                      Profile Page
                    </Link>
                    <Link
                      onClick={() => (logout = accountService.logout())}
                      href=""
                      className="list-group-item list-group-item-action border-0"
                    >
                      <i className="bi bi-door-closed-fill text-danger h4"></i>
                      logout
                    </Link>
                    {/* <a href="security.html" className="list-group-item list-group-item-action border-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 32 32" className="me-3">
                                                    <path xmlns="http://www.w3.org/2000/svg"  d="M15.5,27.482C5.677,24.8,4.625,10.371,4.513,7.497C11.326,7.402,14.5,5.443,15.5,4.661  c0.999,0.782,4.174,2.742,10.986,2.836C26.375,10.371,25.323,24.8,15.5,27.482z" style="fill:var(--primary-color);" data-st="fill:var(--chart-color4);"></path>
                                                    <path xmlns="http://www.w3.org/2000/svg" className="st2" d="M14.13,21.5c-0.801,0-1.553-0.311-2.116-0.873c-0.57-0.57-0.883-1.327-0.881-2.132  c0.001-0.8,0.314-1.55,0.879-2.11c0.555-0.563,1.297-0.876,2.093-0.885c0.131-0.001,0.256-0.054,0.348-0.146l4.63-4.63  c0.388-0.38,0.879-0.583,1.416-0.583s1.028,0.203,1.42,0.587c0.373,0.373,0.58,0.875,0.58,1.413c0,0.531-0.207,1.03-0.584,1.406  l-4.64,4.641c-0.094,0.095-0.146,0.222-0.146,0.354c0,0.782-0.311,1.522-0.873,2.087C15.693,21.189,14.938,21.5,14.13,21.5z" ></path>
                                                    <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M15.5,4c0,0-2.875,3-11.5,3c0,0,0,18,11.5,21C27,25,27,7,27,7C18.375,7,15.5,4,15.5,4z M15.5,26.984  C6.567,24.43,5.217,11.608,5.015,7.965C11.052,7.797,14.213,6.15,15.5,5.251c1.287,0.899,4.448,2.545,10.484,2.713  C25.782,11.608,24.434,24.43,15.5,26.984z M22.27,10.37c-0.479-0.47-1.1-0.73-1.77-0.73s-1.29,0.261-1.77,0.73L14.1,15  c-0.92,0.01-1.79,0.37-2.44,1.03c-1.37,1.358-1.37,3.579,0,4.95c0.66,0.66,1.54,1.02,2.47,1.02c0.94,0,1.82-0.359,2.479-1.02  c0.66-0.66,1.021-1.53,1.021-2.44l4.64-4.64C22.74,13.43,23,12.81,23,12.14C23,11.47,22.74,10.84,22.27,10.37z M21.561,13.2  l-4.949,4.95c0.1,0.75-0.13,1.539-0.71,2.119C15.41,20.76,14.77,21,14.13,21c-0.64,0-1.28-0.24-1.76-0.73  c-0.98-0.979-0.98-2.56,0-3.539c0.49-0.489,1.12-0.729,1.76-0.729c0.12,0,0.24,0.01,0.36,0.03l4.949-4.95  c0.291-0.3,0.681-0.44,1.061-0.44s0.77,0.141,1.061,0.44C22.15,11.66,22.15,12.61,21.561,13.2z M19.79,12.14l0.71,0.7l-5.02,5.021  c0.27,0.56,0.18,1.238-0.29,1.699c-0.58,0.59-1.53,0.59-2.12,0c-0.58-0.58-0.58-1.529,0-2.119c0.47-0.461,1.16-0.562,1.71-0.291  L19.79,12.14z M16,11H9v-1h7V11z M14,13H9v-1h5V13z"></path>
                                                </svg>Security
                                            </a>
                                            <a href="tracker-setting.html" className="list-group-item list-group-item-action border-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" className="me-3">
                                                    <path xmlns="http://www.w3.org/2000/svg" d="M4,12c0-4.418,3.582-8,8-8s8,3.582,8,8s-3.582,8-8,8S4,16.418,4,12z" style="fill:var(--primary-color);" data-st="fill:var(--chart-color4);"></path>
                                                    <path xmlns="http://www.w3.org/2000/svg" style="opacity:0.7;" d="M12,17.25c-1.689,0-3.265-0.909-4.113-2.372l1.298-0.752C9.766,15.128,10.844,15.75,12,15.75  c1.162,0,2.244-0.628,2.823-1.639l1.301,0.746C15.279,16.333,13.699,17.25,12,17.25z M8.5,12c0.552,0,1-0.672,1-1.5S9.052,9,8.5,9  s-1,0.672-1,1.5S7.948,12,8.5,12z M15.5,12c0.552,0,1-0.672,1-1.5S16.052,9,15.5,9c-0.552,0-1,0.672-1,1.5S14.948,12,15.5,12z"></path>
                                                    <path xmlns="http://www.w3.org/2000/svg" className="st0" id="shock_x5F_color"  d="M4,6H2V2h4v2H4V6z M22,2h-4v2h2v2h2V2z M6,20H4v-2H2v4h4V20z M5,11H2v2h3V11z   M22,11h-3v2h3V11z M13,19h-2v3h2V19z M13,2h-2v3h2V2z M22,18h-2v2h-2v2h4V18z"></path>
                                                </svg>Tracker Setting
                                            </a>
                                            <a href="ui-elements/auth-signin.html" className="list-group-item list-group-item-action border-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" className="me-3">
                                                <rect xmlns="http://www.w3.org/2000/svg" className="st0" width="24" height="24" style="fill:none;;" fill="none"></rect>
                                                <path xmlns="http://www.w3.org/2000/svg"  d="M20,4c0-1.104-0.896-2-2-2H6C4.896,2,4,2.896,4,4v16c0,1.104,0.896,2,2,2h12  c1.104,0,2-0.896,2-2V4z" style="fill:var(--primary-color);" data-st="fill:var(--chart-color4);"></path>
                                                <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M15,6.81v2.56c0.62,0.7,1,1.62,1,2.63c0,2.21-1.79,4-4,4s-4-1.79-4-4c0-1.01,0.38-1.93,1-2.63V6.81  C7.21,7.84,6,9.78,6,12c0,3.31,2.69,6,6,6c3.31,0,6-2.69,6-6C18,9.78,16.79,7.84,15,6.81z M13,6.09C12.68,6.03,12.34,6,12,6  s-0.68,0.03-1,0.09V12h2V6.09z"></path>
                                                </svg>Signout
                                            </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="setting ms-2">
              <a
                onClick={() => settogglesetting(!togglesetting)}
                data-bs-toggle="modal"
                data-bs-target="#Settingmodal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30px"
                  height="30px"
                  viewBox="0 0 38 38"
                >
                  <path
                    d="M19,28c-4.964,0-9-4.04-9-9c0-4.964,4.036-9,9-9c4.96,0,9,4.036,9,9  C28,23.96,23.96,28,19,28z M19,16c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z"
                    style={{ fill: "var(--primary-color)" }}
                    data-st="fill:var(--chart-color4);"
                  ></path>
                  <path
                    className="st0"
                    d="M19,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S21.757,24,19,24z M19,16c-1.654,0-3,1.346-3,3  s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z M32,19c0-1.408-0.232-2.763-0.648-4.034l3.737-1.548l-0.766-1.848l-3.743,1.551  c-1.25-2.452-3.251-4.452-5.702-5.701l1.551-3.744l-1.848-0.765l-1.548,3.737C21.762,6.232,20.409,6,19,6  c-1.409,0-2.756,0.248-4.026,0.668l-1.556-3.756L11.57,3.677l2.316,5.592C15.416,8.462,17.154,8,19,8c6.065,0,11,4.935,11,11  s-4.935,11-11,11S8,25.065,8,19c0-3.031,1.232-5.779,3.222-7.771L9.808,9.816c-0.962,0.963-1.764,2.082-2.388,3.306l-3.744-1.551  l-0.765,1.847l3.738,1.548C6.232,16.238,6,17.592,6,19c0,1.409,0.232,2.763,0.648,4.034l-3.737,1.548l0.766,1.848l3.744-1.551  c1.25,2.451,3.25,4.451,5.701,5.7l-1.551,3.744l1.848,0.766l1.548-3.737C16.237,31.768,17.591,32,19,32s2.762-0.232,4.033-0.648  l1.549,3.737l1.848-0.766l-1.552-3.743c2.451-1.25,4.451-3.25,5.701-5.701l3.744,1.551l0.765-1.848l-3.736-1.548  C31.768,21.763,32,20.409,32,19z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- menu toggler --> */}
          <button
            role="button"
            aria-label="menu toggle"
            onClick={() => settoggleside(!toggleside)}
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainHeader"
          >
            <span className="fa fa-bars"></span>
          </button>

          {/* <!-- main menu Search--> */}
          <div className=" order-0 col-lg-4 col-md-6 col-sm-12 col-12 mb-3 mb-md-0 d-flex align-items-center">
            <a
              className="menu-toggle-option me-3 text-primary d-flex align-items-center"
              onClick={()=>setshow(!show) }
              title="Menu Option"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--secondary-color)"
                className="bi bi-ui-checks-grid"
                viewBox="0 0 16 16"
              >
                <path
                  style={{ fill: "var(--secondary-color)" }}
                  d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"
                />
              </svg>
            </a>
            <div className="main-search border-start px-3 flex-fill">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your search key word"
              />
              <div className="card border-0 shadow rounded-3 search-result slidedown">
                <div className="card-body text-start">
                  <small className="dropdown-header">Recent searches</small>
                  <div className="dropdown-item bg-transparent text-wrap my-2">
                    <Link className="badge bg-primary" href="">
                      Pixelwibes <i className="fa fa-search ms-1"></i>
                    </Link>
                    <Link className="badge bg-primary" href="">
                      Theme <i className="fa fa-search ms-1"></i>
                    </Link>
                    <Link className="badge bg-primary" href="">
                      Tracker <i className="fa fa-search ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- topmain menu --> */}
      <div className="container-xxl position-relative">
        <div className="row">
          <div className="col-md-12"> 
                <Topbar show={show} setshow={setshow}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
function YourCompanies({
  isLoading,
  companies,
  activecompany,
  setactivecompany,
}) {
  const act = (params) => {
    setactivecompany(params);
  };
  return (
    <div className="list-group m-2 bg-dak ">
      {isLoading ? (
        <Loader />
      ) : companies.length > 0 ? ( 
      <form >{
        companies.map((company, index) => (<div key={index}>
          <label
            htmlFor={`#id${company.id}-${index}`}
            onClick={() => (
              alert("company" + JSON.stringify(company)),
              setactivecompany(company.id),
              alert("activecompany" + JSON.stringify(activecompany)), console.log(company))}
            key={index}
            href=""
            style={{cursor:"pointer"}}
            className="list-group-ite list-group-item-actio d-flex justify-content-between align-items-center my-2"
          >
            <img
              className=" lg rounded-circle Image-thumbnail"
              src={api + company.logo}
              alt="profile"
              quality={60}
              style={{ width: "30px", height: "30px" }}
            />
            <span className="mx-2" style={{fontSize:"14px"}}>
              {company.label.toUpperCase()} ({company.id})
              <strong className="text-danger mx-1" style={{fontSize:"14px"}}>
                [&nbsp; {company.Employees.find(user => user.userId === accountService.getConnectedUserInfo().id).type}&nbsp;]
              </strong>{" "}
            </span>
            <span className="mx-2">
              {" "}
              <input
                type="radio"
                defaultChecked={index === 0}
                // defaultChecked={company.id === activecompany ? true : false}
                name="activecompany"
                id={`id${company.id}-${index}`}
              />
            </span>
          </label>
          <hr/></div>
        ))
      } </form>) : (
        <span className="p-3 font-weight-bold text-center alert-primary text-primary">
          Aucune entreprise disponible
        </span>
      )}
    </div>
  );
}

