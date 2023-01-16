// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/assets/css/timetracker.style.min.css'
//import '../styles/assets/plugin/light-gallery/css/lightgallery.css'
// import '../styles/assets/fonts/icofont/css/icofont.css'
// import 'popper.js/dist/popper.min.js';
import { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap.min.js'




export default function App({ Component, pageProps }) {

  useEffect(()=>{
    // typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js'): null
    // typeof document !== undefined ? require('popper.js/dist/popper.min.js'): null
  })
  
  return <Component {...pageProps} />
  
}
