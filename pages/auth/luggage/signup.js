import Link from "next/link";
import { useState } from "react";
import Authlayout from "../Authlayout";
import { useForm } from 'react-hook-form'
// import { data } from "jquery";
import Toast from "../../components/auth/Toast";

function Signup() {
    const [companitabvisible, setcompanitabvisible] = useState(false)
    const [getindicatif, setgetindicatif] = useState("");
    const [contact, setcontact] = useState("")
    const [Message, setMessage] = useState("")
    const [Password, setPassword] = useState("")
    const [Pwderr, setPwderr] = useState(false)
    const [showPwd, setshowPwd] = useState(false)
    const { handleSubmit, register , formState:{isValid, errors} } = useForm({ mode: 'onChange'})
    const role = ["CEO", "CTO", "CFO", "Manager","Worker"]
    const handleRegistration = async (data)=>{

        console.log(data);

        // try {
        //     console.log(data);
        //     let res = await fetch("https://ttapi.bourjon.com/users", {
        //       method: "PUT",
        //       body: JSON.stringify(
        //         {
        //             firstName: data.firstname,
        //             lastName: data.lastname,
        //             gender: data.gender,
        //             email: data.email,
        //             phone: data.phone,
        //             password: data.password,
        //             role: data.user_role,
        //             company: {
        //                 label: data.company_label,
        //                 description: data.company_description,
        //                 ein: data.company_ein,
        //                 rccm: data.company_rccm,
        //                 ifu: data.company_ifu
                        
        //             }}
        //       )
        //         ,
        //       headers:{
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json'
        //       },
        //     });
        //     let resJson = await res.json();
        //     if (res.ok) {
        //       setMessage("User created successfully");
        //       console.log("User created succesfully");
        //       alert("User created succesfully");
        //     //   e.target.reset();
        //     } else {
            
        //       setMessage("Some error occured");
        //     //   <Toast> {Message} </Toast>
        //     //   console.log("some errors occured");

        //     console.log('here');
        //      console.log(JSON.stringify(res));
        //     //   alert("error occured");
        //     }
        //   } catch (err) {
        //     console.log(err);
        //     console.log(err.message);
        //     alert("error occured");

        //   }
        }
    const passDigital = new RegExp(/^([^0-9, S]*)$/);
    return ( 
        <Authlayout>
        <div className="row g-0 border border-secondary rounded-3 mt-2 mt-md-0">
                    

                    <div className="col-lg-6 d-flex justify-content-center align-items-center  bg-secondary py-2 py-md-0">
                            <div className="d-flex flex-column p-2">
                                <h1 className="">Create Your Account</h1>
                                {/* <span className="text-light">Register with your email or mobile</span> */}
                                {/* <ul className="nav nav-pills mt-4" role="tablist">
                                    <li class="nav-item
    const [Message, setMessage] = useState("")"><a className="nav-link active" data-bs-toggle="tab" href="#Email" role="tab">Email</a></li>
                                    <li class="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Mobile" role="tab">Mobile</a></li>
                                </ul> */}
                                <div className="tab-content mt-4 mb-3">
                                    <div className="tab-pane fade show active" id="Email">
                                        <div className="card">
                                            <div className="card-body p-4">
                                                <form onSubmit={handleSubmit(handleRegistration)}>
                                                <div className="mb-3">
                                                        <label className="form-label fs-6">Firstname</label>
                                                        <input {...register('firstname',{required : true, pattern : passDigital} )} type="text" class="form-control" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Lastname</label>
                                                        <input {...register('lastname',{required : true, pattern : passDigital})} type="text" class="form-control"/>
                                                    </div>
                                                    <div className="mb-3">
                                                    <span className="form-label fs-6">Gender</span>
                                                    <div class="form-check">
                                                        <input {...register('gender')} className="form-check-input" value="1" type="radio" name="gender" id="flexRadioDefault1"/>
                                                        <label className="form-check-label" >
                                                            Male
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <input {...register('gender')} className="form-check-input" value="0" type="radio" name="gender" id="flexRadioDefault2"/>
                                                        <label class="form-check-label" >
                                                            Female
                                                        </label>
                                                        </div>
                                                    </div>
                                                    Password  <div className="mb-3">
                                                    <label className="form-label fs-6">Mobile</label>
                                                    <div className="input-group mb-3">
                                                        {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91 India</button>
                                                        <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">+376 Andora</a></li>
                                                        <li><a className="dropdown-item" href="#">+61 Australia</a></li>
                                                        <li><a className="dropdown-item" href="#">+55 Brazil</a></li>
                                                        </ul> */}
                                                        <select {...register('phone_indicative')} onChange={(e)=>(setgetindicatif(e.target.value))} className="form-select " id="inputGroupSelect02">
                                                            <option value="+376">+376 Andora</option>
                                                            <option value="+61">+61 Australia</option>
                                                            <option value="+55">+55 Brazil</option>
                                                        </select>
                                                        <input {...register('phone')} onChange={(e)=>(setcontact(e.target.value))} value={ contact}  type="text" className="form-control"/>
                                                    </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Email address</label>
                                                        <input {...register('email',{required : true})} type="email" class="form-control"/>
                                                    </div>
                                                    <div className={Pwderr && "alert-warning p-4 my-2"}>
                                                    { Pwderr && <small className="text-danger">Password & Confirm passwor must be same !</small>}
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Password</label> <i onClick={()=>(setshowPwd(!showPwd))} className={ + showPwd? "bi bi-eye-fill h4 mx-4 pb-2 btn btn-sm " : "bi bi-eye-slash-fill h4 mx-4 pb-2 btn btn-sm "} ></i>
                                                        <input {...register('password',{required : true})} value={Password} onChange={(e)=>(setPassword(e.target.value))} type={showPwd? "text":"password"} className="form-control" required/>
                                                    </div>
                                                    <div className="mb-3"> 
                                                        <label className="form-label fs-6"> Confirm password</label>
                                                        <input onBlur={(e)=>(( e.target.value === Password )? setPwderr(false): setPwderr(true)  )} type={showPwd? "text":"password"} className="form-control" required/>
                                                    </div></div>
                                                    <div>
                                                    {/* {JSON.stringify(errors, null, 2)} */}
                                                    {/* {...errors} */}
                                                    </div>
                                                    <div className="mb-3">
                                                        <label onClick={()=>(setcompanitabvisible(!companitabvisible))} className=" btn-sm btn btn-dark fs-6">Create company</label>
                                                    </div>
                                                    {companitabvisible && <div className="alert-warning shadow-sm p-4 mb-2 rounded">
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Label</label>
                                                        <input {...register('company_label')} type="text" className="form-control"/>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Description</label>
                                                        <input {...register('company_description')} type="text" className="form-control"/>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">EIN</label>
                                                        <input {...register('company_ein')} type="text" className="form-control"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">RCCM</label>
                                                        <input {...register('company_rccm')} type="text" className="form-control"/>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">IFU</label>
                                                        <input {...regPasswordister('company_ifu')} type="text" className="form-control"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Role</label>
                                                        <select {...register('user_role')} className="form-select " id="inputGroupSelect02">
                                                        <option > Select your Role</option>
                                                            { role.map((role)=>(
                                                                
                                                                <option key={role} value={role}> {role} </option>
                                                            ))
                                                                }
                                                        </select>
                                                         </div>
                                                                 
                                                    </div>}
                                                    {/* disabled={!isValid} */}
                                                    {/* <div className="mb-3">
                                                        <label className="form-label fs-6">Referral ID</label>
                                                        <input type="text" className="form-control"/>
                                                    </div> */}
                                                    <button type="submit" disabled={!isValid}  className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Create Account</button>
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
                                <Link className="text-primary" href="/auth/signin" title="Login">Already registered? <span class="text-primary text-decoration-underline">Log In</span></Link>
                            </div>
                        </div>



                    <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center auth-h100">
                        <div className="qr-block text-center">
                            <img src="/assets/images/qr-code.png" alt="#" className="img-fluid my-4"/>
                            <h4>Log in with QR code</h4>
                            <p>Scan this code with the <span className="text-primary">timetracker mobile app</span><br/> to log in instantly.</p>
                        </div>
                    </div>
                </div> 
    </Authlayout>
     );
}

export default Signup;