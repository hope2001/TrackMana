import Link from "next/link";
import Authlayout from "./Authlayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import countries from "../../data/country-code";
import { useRouter } from "next/router";
import { accountService } from "@/src/services/accountServices";


function Register() {
  const [companitabvisible, setcompanitabvisible] = useState(false);
//   const [getindicatif, setgetindicatif] = useState("");
  const [contact, setcontact] = useState("");
  const [Message, setMessage] = useState("");
  const [Password, setPassword] = useState("");
  const [Pwderr, setPwderr] = useState(false);
  const [showPwd, setshowPwd] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,resetField,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const role = ["CEO", "CTO", "CFO", "Manager", "Worker"];

  let body 

  const handleRegistration = async (data,e) => {
    e.preventDefault();
    console.log(data);
    if(data.company_label === undefined){
        body = {
            firstName: data.firstname,
            lastName: data.lastname,
            gender: data.gender,
            email: data.email,
            phone: data.phone_indicative +""+ data.phone,
            password: data.password,
            role: data.user_role,}
    }else{
        body = {
            firstName: data.firstname,
            lastName: data.lastname,
            gender: data.gender,
            email: data.email,
            phone: data.phone_indicative + data.phone,
            password: data.password,
            role: data.user_role,
            company: {
                label: data.company_label,
                description: data.company_description,
                ein: data.company_ein,
                rccm: data.company_rccm,
                ifu: data.company_ifu

            }}
    }
    await accountService.register(body)
    .then(response => {
        console.log(response.data)
        console.log(response.status)
        resetField('firstname');
        resetField('lastname');
        resetField('gender');
        resetField('email');
        resetField('phone_indicative');
        resetField('phone');
        resetField('password');
        resetField('user_role');
        if(response.status === 200){
          router.push('/auth/login')
        }
        
    })
    .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
        console.error(error.response.data);    // ***
        console.error(error.response.status);  // ***
        console.error(error.response.headers);
        if(error.response.status === 404){
          alert("system error occur 404 Not Found")
        }


    });


  };
  const passDigital = new RegExp(/^([^0-9, S]*)$/);
  return (
    <Authlayout>
      <div className="row g-0 border border-secondary rounded-3 mt-2 mt-md-0">
        <div className="col-lg-6 d-flex justify-content-center align-items-center  bg-secondary py-2 py-md-0">
          <div className="d-flex flex-column p-2">
            <h1 className="">Create Your Account</h1>

            <div className="tab-content mt-4 mb-3">
              <div className="tab-pane fade show active" id="Email">
                <div className="card">
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="mb-3">
                        <label className="form-label fs-6">Firstname</label>
                        <input
                          {...register("firstname", {
                            required: true,
                            pattern: passDigital,
                          })}
                          type="text"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Lastname</label>
                        <input
                          {...register("lastname", {
                            required: true,
                            pattern: passDigital,
                          })}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <span className="form-label fs-6">Gender</span>
                        <div className="form-check">
                          <input
                            {...register("gender")}
                            className="form-check-input"
                            value="1"
                            type="radio"
                            name="gender"
                            id="flexRadioDefault1"
                          />
                          <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                          <input
                            {...register("gender")}
                            className="form-check-input"
                            value="0"
                            type="radio"
                            name="gender"
                            id="flexRadioDefault2"
                          />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Mobile</label>
                        <div className="input-group mb-3">

                          <input
                            {...register("phone_indicative")}
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
                            {...register("phone")}
                            onChange={(e) => setcontact(e.target.value)}
                            value={contact}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6">Email address</label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className="form-control"
                        />
                      </div>
                      <div className={Pwderr? "alert-warning p-4 my-2":""}>
                        {Pwderr && (
                          <small className="text-danger">
                            Password & Confirm password must be same !
                          </small>
                        )}
                        <div className="mb-3">
                          <label className="form-label fs-6">Password</label>{" "}
                          <i
                            onClick={() => setshowPwd(!showPwd)}
                            className={
                              +showPwd
                                ? "bi bi-eye-fill h4 mx-4 pb-2 btn btn-sm "
                                : "bi bi-eye-slash-fill h4 mx-4 pb-2 btn btn-sm "
                            }
                          ></i>
                          <input
                            {...register("password", { required: true })}
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPwd ? "text" : "password"}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fs-6">
                            {" "}
                            Confirm password
                          </label>
                          <input
                            onBlur={(e) =>
                              e.target.value === Password
                                ? setPwderr(false)
                                : setPwderr(true)
                            }
                            type={showPwd ? "text" : "password"}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        {/* {JSON.stringify(errors, null, 2)} */}
                        {/* {...errors} */}
                      </div>
                      <div className="mb-3">
                        <label
                          onClick={() =>
                            setcompanitabvisible(!companitabvisible)
                          }
                          className=" btn-sm btn btn-dark fs-6"
                        >
                          Create company
                        </label>
                      </div>
                      {companitabvisible && (
                        <div className="alert-warning shadow-sm p-4 mb-2 rounded">
                          <div className="mb-3">
                            <label className="form-label fs-6">Label</label>
                            <input
                              {...register("company_label")}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fs-6">
                              Description
                            </label>
                            <input
                              {...register("company_description")}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fs-6">EIN</label>
                            <input
                              {...register("company_ein")}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label fs-6">RCCM</label>
                            <input
                              {...register("company_rccm")}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fs-6">IFU</label>
                            <input
                              {...register("company_ifu")}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label fs-6">Role</label>
                            <select
                              {...register("user_role")}
                              className="form-select "
                              id="inputGroupSelect02"
                            >
                              <option> Select your Role</option>
                              {role.map((role) => (
                                <option key={role} value={role}>
                                  {" "}
                                  {role}{" "}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                      {/* disabled={!isValid} */}
                      {/* <div className="mb-3">
                                                        <label className="form-label fs-6">Referral ID</label>
                                                        <input type="text" className="form-control"/>
                                                    </div> */}
                      <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2"
                      >
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="tab-pane fade" id="Mobile">
                                        <div className="card">
                                            <div className="card-body p-4">
                                           
                                            </div>
                                        </div>
                                    </div> */}
            </div>
            <Link className="text-primary" href="/auth/signin" title="Login">
              Already registered?{" "}
              <span className="text-primary text-decoration-underline">
                Log In
              </span>
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

export default Register;
