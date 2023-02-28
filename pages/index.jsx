import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/layout'
import { useContext, useState, useRef } from 'react'

import axios from 'axios';
import { ApiContext, withApi } from '@/src/controller/apiContext'
import { useEffect } from 'react';
import { RequestToResponse } from '@/src/controller/requestParser'
import { accountService, employeeService } from '@/src/services'
import { CompanieServices } from './../src/services/Companies/companies_services';
// import Shooter from '@/src/actions/shoot'
import html2canvas from 'html2canvas';

const inter = Inter({ subsets: ['latin'] })

 function Home() {
  // if (typeof document !== undefined) {
  //   const {name,age,happyBirthday,showToastMessage} = useContext(ApiContext)
  //   console.warn(name, age);
  // }
 
 
  const {age, name, happyBirthday, activecompany} = useContext(ApiContext);
  const [test, settest] = useState(true);
  const [image, setimage] = useState('');
  const [person, setperson] = useState([])

 const handleScreenshot = () => {
  html2canvas(document.body).then((canvas) => {
    const dataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    setimage(dataUrl)
    downloadLink.download = 'my-screenshot.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
  };
 useEffect(() => {
  (async ()=>{

})()
 }, []);


  return (
<Layout><div className='d-flex btn-info btn' onClick={()=>''}>test {} </div>

  <div className='d-flex p-4'> {name } {age} <button onClick={()=>happyBirthday()} className='btn btn-info '> <i className='bi bi-home'></i>  Incrr age</button> </div>
<button className='btn btn-primary' onClick={()=>(settest(!test))}>Toggle</button>
<div className={`bg-danger col-6 p-4 ${test? "d-flex": "d-none"}`}>
  opened lorem cvdlkjdljcljc <br/> {activecompany}
</div>
<button onClick={()=> handleScreenshot()}>Take Screenshot</button>
<img src={image} className="w-50 h-50"/>
{/* {JSON.stringify(person)} */}
</Layout>
  )
}
export default withApi(Home);