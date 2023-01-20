import axios from "axios";
import { useEffect, useState } from "react";
// import api from "../../src/services/api";
import styles from '../../styles/toggle.module.css'
import { useForm } from "react-hook-form";
import  Router  from "next/router";
import {api } from "@/src/services/apip";
import { RequestToResponse } from "@/src/controller/requestParser";
import { employeeService } from '@/src/services';
import { Loader } from '@/components/Layout/partials/Loader';


function Editemployee({toggleEdit,settoggleEdit, forEdit}) {
    const empltype= ["CEO", "CFO", "CTO", "Manager", "Worker"]
    const [actionmessage, setactionmessage] = useState([])
    const [emplstatus, setemplstatus] = useState(false)
    const [specdata, setspecdata] = useState([])
    const [isLoading, setisLoading] = useState(true);

    // let body = { "ids": [id]  };

    const { register, handleSubmit, formState: { errors }, formState } = useForm({ mode: "onChange" });

  
    useEffect(()=>{
        setspecdata(forEdit)
        console.log("foeEdit ++++++>>>>",forEdit);  
        console.log("specdata ++++++>>>>",specdata);  
    },[forEdit, toggleEdit])

    const onSubmit = async data => {
        alert(JSON.stringify(data, null, 4))
       let body = {
            employeeId: data.ID,
            description: data.description,
            label: data.companyLabel,
            // type: data.type
        }
        // console.log("body",body);

        if (data) {
        // console.log(body);
        employeeService.updateEmployee(body)
        .then((res) => {
            console.log("----++++> data");
            console.log(res);
            alert("Modifié avec success");
            setactionmessage(["Modification Effectuée", 'yes', res.statusText, res.status])
            Router.push("/employee")
    
        })
        .catch((error) => {
            setactionmessage(["Echec de Modification" , "no", error.response.data.message, error.status])
            console.error(error.response.data.message);
            // return error.message;
        });
        } else {
        alert("There is an error");
        }
    };
    return ( 
        <div className={`modal fade  ${toggleEdit? "show fade d-block": "d-none"}`} style={{background:"rgba(0, 0, 0, 0.7)"}} id="editemp" tabIndex={-1 } aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <form onSubmit={handleSubmit(onSubmit)} className="modal-content rounded">
            
                <div className="modal-header">
                    <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Edit Employee  </h5>
                    <button  onClick={()=>(settoggleEdit(!toggleEdit))} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> 
               <span className="d-none"> {JSON.stringify(specdata, null, 3)}
                {JSON.stringify(forEdit, null, 3)} </span>

                    {
                        specdata.map((data)=>(
                <div key={data.User.firstName} className="modal-body">
                <>

                <div className="row g-3 mb-3">
                    <div className="col-sm-6">
                        <label  className="form-label">Employee Name </label>
                        <input  value={data.User.firstName+" "+data.User.lastName} disabled type="text" className="form-control" id="exampleFormControlInput877" placeholder="Explain what the Project Name"/>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Employee Company </label>
                        <input {...register("companyLabel")} defaultValue={data.label}  type="text" className="form-control" id="exampleFormControlInput977" placeholder="Explain what the Project Name"/>
                    </div>
                    </div>
                    <div className="deadline-form">
                            <div className="row g-3 mb-3">
                                <div className="col-2">
                                    <label  className="form-label"> ID</label>
                                    <input {...register("ID")} defaultValue={data.id} type="text"  className="form-control" id="exampleFormControlInput" placeholder="User id"/>
                                </div>
                                <div className="col">
                                    <label  className="form-label">Email</label>
                                    <input disabled value={data.User.email} type="email" className="form-control" id="exampleFormControlInput47" placeholder="User email"/>
                                </div>
                                <div className="col">
                                    <label  className="form-label">Phone</label>
                                    <input disabled value={data.User.phone} type="text" className="form-control" id="exampleFormControlInput777" placeholder="User phone"/>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label  className="form-label">Department</label>
                                    <select className="form-select" aria-label="Default select Project Category">
                                        <option >Web Development</option>
                                        <option value="1">It Management</option>
                                        <option value="2">Marketing</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label  className="form-label">Designation</label>
                                    <select className="form-select" aria-label="Default select Project Category">
                                        <option >UI/UX Design</option>
                                        <option value="1">Website Design</option>
                                        <option value="2">App Development</option>
                                        <option value="3">Quality Assurance</option>
                                        <option value="4">Development</option>
                                        <option value="5">Backend Development</option>
                                        <option value="6">Software Testing</option>
                                        <option value="7">Website Design</option>
                                        <option value="8">Marketing</option>
                                        <option value="9">SEO</option>
                                        <option value="10">Other</option>
                                    </select>
                                </div>
                            </div>
                        
                    </div> 
                    <div className="row g-3 mb-3">
                    <div className="col-sm-6">
                        <label  className="form-label">Title</label>
                                    <select {...register("type")} className="form-select" aria-label="Default select title">
                                        {
                                            empltype.map((type)=>(
                                                <option key={type} value={type} >{type}</option>
                                            ))
                                        }    
                                    </select>
                                    </div>
                    <div className="col-sm-3">
                        <label  className="form-label">Avatar</label>
                        <img alt="userprofil" className="d-flex" src={api+ data.User.picture} width="60px" height="60px" />
                         </div>
                    <div className="col-sm-3">
                        <label  className="form-label">Status</label>
                        {/* <input disabled value={data.suspensionComment == null ? "Active" : "Inactive"} type="checkbox" className="form-control" id="exampleFormControlInput977" placeholder="Explain what the Project Name"/> */}
                        {/* <!-- Rounded switch --> */}
                        <div className="form-control p-0 border-0" style={{boxSizing:"border-box"}}>
                    <label className={styles.switch + "  mt-1"}>
                    <input type="checkbox" onClick={()=>(setemplstatus(!emplstatus))} value={emplstatus}/>
                    <span className={styles.slider +" round"}></span>
                    </label></div>
                    </div>
                    </div>
                    {!!emplstatus &&<div className="mb-3">
                                <label htmlFor="#exampleFormControlInput277" className="form-label">Status comment</label>
                                <input {...register("statusComment")} type="text" className="form-control" id="exampleFormControlInput277" placeholder="status comment"/>
                            </div>}
                    <div className="mb-3">          
                        <label  className="form-label">Description (optional)</label>
                        <textarea {...register("description")} defaultValue={data.description} className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                    </div> 
                    <div className="table-responsive">
                        {/* <table className="table table-striped custom-table">
                            <thead>
                                <tr>
                                    <th>Project Permission</th>
                                    <th className="text-center">Read</th>
                                    <th className="text-center">Write</th>
                                    <th className="text-center">Create</th>
                                    <th className="text-center">Delete</th>
                                    <th className="text-center">Import</th>
                                    <th className="text-center">Export</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-bold">Projects</td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked/>
                                    </td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked/>
                                    </td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked/>
                                    </td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" checked/>
                                    </td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" checked/>
                                    </td>
                                    <td className="text-center">
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" checked/>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="fw-bold">Tasks</td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input  onChange={()=>(0)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" checked/>
                    
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="fw-bold">Chat</td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" checked/>
                    
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="fw-bold">Estimates</td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault21" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault23" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input  onChange={()=>(0)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault24" checked/>
                    
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="fw-bold">Invoices</td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault25" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault26"/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault27" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault28"/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault29" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault30" checked/>
                    
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="fw-bold">Timing Sheets</td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault31" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault32" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input  onChange={()=>(0)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault34" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input  onChange={()=>(0)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault35" checked/>
                    
                                    </td>
                                    <td className="text-center">
                    
                                        <input onChange={()=>(0)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault36" checked/>
                    
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                    <div className=" position-scroll d-flex justify-content-end">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button> */}
                    </div>
                    </>
                </div>))}
                <div className="modal-footer">
                    { actionmessage.length === ""&& '' }
                    { actionmessage[1] ==="yes"&& <div className="col-sm-6 mx-auto p-3 alert-success text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                    { actionmessage[1] ==="no"&& <div className="col-sm-6 mx-auto p-3 alert-danger text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                {/* </div> */}
                    <button type="button" className="btn btn-secondary" onClick={async()=> {if(window !== undefined){Router.reload(window.location.pathname)}}} data-bs-dismiss="modal">Done</button>
                    <button type="submit" className="btn btn-primary">Edit</button>
                    {/* <button type="button" className="btn btn-primary">Create</button> */}
                </div> 
            </form>  
        </div>
    </div>
     );
}

export default Editemployee;