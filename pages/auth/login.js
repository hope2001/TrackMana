import Link from "next/link";
import Authlayout from "./Authlayout";
import { useRef, useState, useEffect, useContext } from "react";
import countries from "../../data/country-code";
import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";
// import {useRouter} from "react"
import { api, appkey } from "@/src/services/apip";
import { accountService } from "@/src/services/accountServices";
import { ApiContext } from "@/src/controller/apiContext";

function Login() { 
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState("");
  const [showpwd, setshowpwd] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [toggletab, settoggletab] = useState("email");
  const Router = useRouter()
  const {age, showToastMessage } = useContext(ApiContext);

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

  useEffect(() => setErrMsg(errMsg), [errMsg]);

  const handleLogin = async (data) => {
    // e.preventDefault();
    let body;

    if (data.email !== undefined) {
      body = {
        appKey: appkey,
        email: data.email,
        password: data.password,
        device: device,
      };
    } else {
      body = {
        appKey: appkey,
        phone: data.phone_indicative + "" + data.phone,
        password: data.password,
        device: device,
      };
    }
    accountService
      .login(body)
      .then((res) => {
        // Sauvegarde du token et envoi vers le dashboard
        console.log(res.data);
        console.warn(res);
        accountService.saveToken(res.data.access_token);
        console.log('pushing');
        // showToastMessage("Logged with Success", "success")
        // * reset the inputs fields
        resetField("password");
        resetField("email");
        resetField2("phone_indicative");
        resetField2("phone");
        resetField2("password");
        console.log(Router);
        Router.push("/");
        
      })
      .catch((error) => {
         if(error.response) console.error(error.response.data.message);
         if(error.response) alert(error.response.data.message) 
        });
        
  };

  return (
    <Authlayout>
      <div className="row g-0 border border-secondary rounded-3 mt-2 mt-md-0">
        <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100 bg-secondary py-2 py-md-0">
          <div className="d-flex flex-column p-2">
            <h1 className="text-light">Login page</h1>
            <span>
              Bienvenue! Connectez vous avec votre Email, Numéro téléphonique ou QR code

            </span>
            <ul className="nav nav-pills mt-4" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    toggletab === "email" ? " active" : " "
                  } `}
                  data-bs-toggle="tab"
                  role="tab"
                  onClick={() => settoggletab("email")}
                >
                  Email
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    toggletab === "phone" ? " active" : " "
                  } `}
                  data-bs-toggle="tab"
                  role="tab"
                  onClick={() => settoggletab("phone")}
                >
                  Mobile
                </a>
              </li>
            </ul>
            <div className="tab-content mt-4 mb-3">
              <div
                className={`tab-pane fade ${
                  toggletab === "email" ? " show active " : " "
                }} `}
                id="Email"
              >
                <div className="card">
                  <div className="card-body p-4">
                    <form key={1} onSubmit={handleSubmit(handleLogin)}>
                      <div className="mb-3">
                        <label className="form-labuserdeviceel fs-6 ">
                          Addresse Mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email", {
                            required: true,
                          })}
                        />
                        {errors.email && (
                          <p className="text-danger">Champ obligatoire</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Mot de passe</label>{" "}
                        <i
                          onClick={() => setshowpwd(!showpwd)}
                          className={
                            showpwd
                              ? "bi bi-eye-slash px-3 pb-2"
                              : "px-3 pb-2 bi bi-eye"
                          }
                        ></i>
                        <input
                          type={showpwd ? "password" : "text"}
                          className="form-control"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                        />
                        {errors.password && (
                          <p className="text-danger">
                           Le mot de passe est obligatoirement composé de 8 lettres minimun{" "}
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
                        Se Connecter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  toggletab === "phone" ? " show active " : " "
                }} `}
                id="Mobile"
              >
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
                            <p className="text-danger">Numéro de téléphone requis</p>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Mot de passe</label>{" "}
                        <i
                          onClick={() => setshowpwd(!showpwd)}
                          className={
                            showpwd
                              ? "bi bi-eye-slash px-3 pb-2"
                              : "px-3 pb-2 bi bi-eye"
                          }
                        ></i>
                        <input
                          {...register2("password", {
                            required: true,
                            minLength: 8,
                          })}
                          type={showpwd ? "password" : "text"}
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
              Mot de passe oublié?
            </Link>
            <Link
              href="/auth/register"
              title="Register"
              className="text-primary text-decoration-underline"
            >
              S'inscrire
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
            <h4>Se connecter via QR code</h4>
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

export default Login;
