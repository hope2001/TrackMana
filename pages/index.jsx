import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/layout'
import { useContext, useState } from 'react'

import axios from 'axios';
import { ApiContext, withApi } from '@/src/controller/apiContext'
import { useEffect } from 'react';
import { RequestToResponse } from '@/src/controller/requestParser'
import { employeeService } from '@/src/services'
import { CompanieServices } from './../src/services/Companies/companies_services';

const inter = Inter({ subsets: ['latin'] })

 function Home() {
  // if (typeof document !== undefined) {
  //   const {name,age,happyBirthday,showToastMessage} = useContext(ApiContext)
  //   console.warn(name, age);
  // }
 
  const {age, name, happyBirthday, activecompany} = useContext(ApiContext);
  const [test, settest] = useState(true);
  const [person, setperson] = useState([])

 useEffect(() => {
  (async ()=>{

})()
 }, []);


  return (
<Layout><div className='d-flex'>test {} </div>

  <div className='d-flex p-4'> {name } {age} <button onClick={()=>happyBirthday()} className='btn btn-info '> <i className='bi bi-home'></i>  Incrr age</button> </div>
<button className='btn btn-primary' onClick={()=>(settest(!test))}>Toggle</button>
<div className={`bg-danger col-6 p-4 ${test? "d-flex": "d-none"}`}>
  opened lorem cvdlkjdljcljc <br/> {JSON.stringify(activecompany)}
</div>
{/* {JSON.stringify(person)} */}
</Layout>
  )
}
export default withApi(Home);