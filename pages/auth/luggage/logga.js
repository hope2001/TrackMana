// import { useMemo } from "react";
// import { GoogleMap, useLoadScript,Marker } from "@react-google-maps/api";

// export default function Map() {

//   const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",})

//   if(!isLoaded){
//     <div className="">Loading ...</div>
//   }
//   if(typeof google !== "undefined"){
//       return ( <div className="w-5/6 h-screen bg-yellow-400">
//           <div className="hline p-1 self-center bg-red-600 flex justify-between">
//             <span className="self-center"> Carte</span>
//             <div className="inline-flex justify-between gap-3">
//               <span className="bg-white p-2 self-center rounded-md box-border "> Couches</span>
//               <span className=""> bgbgb</span>
//               <span className=""> <input className="" type="search" name="" id="" /></span>
//               <span className=""> frf</span>
//             </div>
//           </div>
//             {/* <Mapself/>  */}<div className="relative">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2090116613354!2d2.4056198146039782!3d6.366991326729829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355493eb64b13%3A0x3a9d1c176632a1a6!2sHOLDING%20BOURJON%20INVESTMENT!5e0!3m2!1sfr!2sbj!4v1675166953192!5m2!1sfr!2sbj" frame-title="frame" className="w-full h-screen border-none"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             <div className="absolute p-3 rounded-sm bg-white border border-red-700 top-3 w-50 flex right-2 rounded-md">ghghghggh</div> </div>
//       </div>

//   )
//   }

 
  
// }


// function Mapself() {
//  const center= useMemo(()=>({lat:40, lng:-80}),[]) ;
//   return ( 
//     <GoogleMap zoom={10} center={center} mapContainerClassName="w-full h-screen ">
//       <Marker position={center}/>
//     </GoogleMap>
//    );
// }
