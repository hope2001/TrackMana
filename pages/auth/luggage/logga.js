import Link from "next/link";
import Authlayout from "../Authlayout";
import { useRef, useState, useEffect, useContext } from "react";
import countries from "../../../data/country-code";
import axios from "axios";

import { useForm } from "react-hook-form";
import appKey from "../../src/services/env";
import api from "../../src/services/api";
import Router from "next/router";

import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import Toast from "../../components/auth/Toast";
import { accountService } from "../../src/services/account_service";

function Signin() {

  const [email, setEmail] = useState("");
  const [device, setDevice] = useState("");
  const [showpwd, setshowpwd] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid, errors },
    resetField,
  } = useForm({ mode: "onChange" });

  const {
    handleSubmit: handleSubmit2,
    register: register2,
    formState: { isDirty: isDirty2, isValid: isValid2, errors: errors2 },
    resetField: resetField2,
  } = useForm({ mode: "onChange" });


  useEffect(() => {
    setDevice(window.navigator.appCodeName);
  }, []);

  useEffect(()=>(
    setErrMsg(errMsg)
  ),[errMsg])


  const handleLogin = async (data) => {
    // e.preventDefault();
    let body;

    if (data.email !== undefined) {
      body = {
        appKey: appKey,
        email: data.email,
        password: data.password,
        device: device,
      };
    } else {
      body = {
        appKey: appKey,
        phone: data.phone_indicative + "" + data.phone,
        password: data.password,
        device: device,
      };
    }
    accountService.login(body)
            .then(res => {
                // Sauvegarde du token et envoi vers le dashboard
                accountService.saveToken(res.data.access_token)
                // navigate('/admin', {replace: true})
                resetField("password");
                resetField("email");
                resetField2("phone_indicative");
                resetField2("phone");
                resetField2("password");
                Router.push("/")
            })
            .catch(error => console.log(error))
    // console.log(body);
    // console.log(api);
    // axios
    //   .post(api + "/auth/login", body, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => {
    //     let token = response.data.access_token;
    //     console.log(token);
    //     Cookies.set("TTracker_currentUser", JSON.stringify(token));
    //     var decoded = jwt_decode(token);

    //     resetField("password");
    //     resetField("email");
    //     if (response.ok) {
    //     }
    //     resetField2("phone_indicative");
    //     resetField2("phone");
    //     resetField2("password");
    //     Router.push("/");
    //   })
    //   .catch((error) => {
    //     console.log("catch");

    //     alert(errMsg)
    //     console.log(error);
    //   });
  };

  return (
    <Authlayout>
      <div className="row g-0 border border-secondary rounded-3 mt-2 mt-md-0">
        <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 bg-secondary py-2 py-md-0">
          <div className="d-flex flex-column p-2">
            <h1>Account Login</h1>
            <span>
              Welcome back! Log In with your Email, Phone number or QR code
            </span>
            {/* <span className="w-25 overflow" > {(Cookies.get("TTracker_currentUser"))} </span> */}
            <ul className="nav nav-pills mt-4" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#Email"
                  role="tab"
                >
                  Email
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Mobile"
                  role="tab"
                >
                  Mobile
                </a>
              </li>
            </ul>
            <div className="tab-content mt-4 mb-3">
              <div className="tab-pane fade show active" id="Email">
                <div className="card">
                  <div className="card-body p-4">
                    <form key={1} onSubmit={handleSubmit(handleLogin)}>
                      <div className="mb-3">
                        <label className="form-labuserdeviceel fs-6 ">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email", {
                            required: true,
                          })}
                        />
                        {errors.email && (
                          <p className="text-danger">This is required</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Password</label> <i onClick={()=>(setshowpwd(!showpwd))} className={showpwd? "bi bi-eye p-2": " p-2 bi bi-slash-eye"}></i>
                        <input
                          type="password"
                          className="form-control"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                        />
                        {errors.password && (
                          <p className="text-danger">
                            password required and must be 8 characters at least{" "}
                          </p>
                        )}
                      </div>
                      {/* {
                       errMsg!== undefined && errMsg[0] === 4 ?(<div className="alert-danger text-danger p-2 rounded shadow-sm text-center fw-bolder"> Credentials error</div>): (errMsg[0] === 2 ? <div className="alert-success text-success p-2 rounded shadow-sm text-center fw-bolder"> Loggin Success</div>:( errMsg[0] === 5 ? <div className="alert-warning text-warning p-2 rounded shadow-sm text-center fw-bolder"> System error</div>: ''))}
                      */}
                      <button
                        type="submit"
                        className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2"
                        disabled={!isValid}
                      >
                        log in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Mobile">
                <div className="card">
                  <div className="card-body p-4">
                    <form key={2} onSubmit={handleSubmit2(handleLogin)}>
                      <div className="input-group mb-3">
                        <label className="form-label fs-6">Mobile</label>
                        <div className="input-group mb-3">
                          <input
                            {...register2("phone_indicative", { minLength: 2 })}
                            className="form-control"
                            list="datalistOptions"
                            id="exampleDataList"
                            placeholder="Country code !!!"
                          />

                          <datalist id="datalistOptions">
                            {countries.map((country) => (
                              <option
                                key={country.code}
                                value={country.dial_code}
                              >
                                {country.name + " " + country.dial_code}
                              </option>
                            ))}
                          </datalist>
                          <input
                            {...register2("phone", { required: true })}
                            type="text"
                            className="form-control"
                          />
                          {errors2.phone && (
                            <p className="text-danger">phone number required</p>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Password</label>
                        <input
                          {...register2("password", {
                            required: true,
                            minLength: 8,
                          })}
                          type="password"
                          className="form-control"
                        />
                        {errors2.password && (
                          <p className="text-danger">
                            password required and must be 8 characters at least
                          </p>
                        )}
                      </div>
                      {/* 
                      <p>{isDirty2 && "dirty"}</p>.status
                     <p>{isValid2 && "valid"}</p> 
                     */}
                      <button
                        disabled={!isValid2}
                        type="submit"
                        className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2"
                      >
                        log in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/auth/resetpwd"
              title="Reset password"
              className="text-primary text-decoration-underline"
            >
              Forgot password?
            </Link>
            <Link
              href="/auth/register"
              title="Register"
              className="text-primary text-decoration-underline"
            >
              Register now
            </Link>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center auth-h100">
          <div className="qr-block text-center">
            <img
              src="/assets/images/qr-code.png"
              alt="#"
              className="img-fluid my-4"
            />
            <h4>Log in with QR code</h4>
            <p>
              Scan this code with the{" "}
              <span className="text-primary">timetracker mobile app</span>
              <br /> to log in instantly.
            </p>
          </div>
        </div>
      </div>
    </Authlayout>
  );
}

export default Signin;
