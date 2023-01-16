function Setting({togglesetting,settogglesetting}) {
    return ( 
        //  <!-- Modal Custom Settings--> role="dialog"style={togglesetting? {display: "block" }: {display: "block"}}
         <div className={`modal fade right ${togglesetting? "show d-block": "d-none"}`} id="Settingmodal" tabIndex={-1}  aria-hidden="true" role="dialog">
         <div className="modal-dialog  modal-sm"> 
             <div className="modal-content">
                 <div className="modal-header">
                     <h5 className="modal-title">Custom Settings</h5>
                     <button onClick={()=>(settogglesetting(!togglesetting))} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body custom_setting">
                     {/* <!-- Settings: Color --> */}
                     <div className="setting-theme pb-3">
                         <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-color-bucket fs-4 me-2 text-primary"></i>Template Color Settings</h6>
                         <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                             <li data-theme="indigo"><div className="indigo"></div></li>
                             <li data-theme="tradewind"><div className="tradewind"></div></li>
                             <li data-theme="monalisa"><div className="monalisa"></div></li>
                             <li data-theme="mist" className="active"><div className="mist"></div></li>
                             <li data-theme="cyan"><div className="cyan"></div></li>
                             <li data-theme="green"><div className="green"></div></li>
                             <li data-theme="orange"><div className="orange"></div></li>
                             <li data-theme="blush"><div className="blush"></div></li>
                             <li data-theme="red"><div className="red"></div></li>
                         </ul>
                     </div>
                     {/* <!-- Settings: Template dynamics --> */}
                     <div className="dynamic-block py-3">
                         <ul className="list-unstyled choose-skin mb-2 mt-1">
                             <li data-theme="dynamic"><div className="dynamic"><i className="icofont-paint me-2"></i> Click to Dyanmic Setting</div></li>
                         </ul>
                         <div className="dt-setting">
                             <ul className="list-group list-unstyled mt-1">
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label>Primary Color</label>
                                     <button id="primaryColorPicker" className="btn bg-primary avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label>Secondary Color</label>
                                     <button id="secondaryColorPicker" className="btn bg-secondary avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label className="text-muted">Chart Color 1</label>
                                     <button id="chartColorPicker1" className="btn chart-color1 avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label className="text-muted">Chart Color 2</label>
                                     <button id="chartColorPicker2" className="btn chart-color2 avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label className="text-muted">Chart Color 3</label>
                                     <button id="chartColorPicker3" className="btn chart-color3 avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label className="text-muted">Chart Color 4</label>
                                     <button id="chartColorPicker4" className="btn chart-color4 avatar xs border-0 rounded-0"></button>
                                 </li>
                                 <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                     <label className="text-muted">Chart Color 5</label>
                                     <button id="chartColorPicker5" className="btn chart-color5 avatar xs border-0 rounded-0"></button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                     {/* <!-- Settings: Font --> */}
                     <div className="setting-font py-3">
                         <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-font fs-4 me-2 text-primary"></i> Font Settings</h6>
                         <ul className="list-group font_setting mt-1">
                             <li className="list-group-item py-1 px-2">
                                 <div className="form-check mb-0">
                                     <input className="form-check-input" type="radio" name="font" id="font-poppins" value="font-poppins" onChange={(e)=>("")}/>
                                     <label className="form-check-label">
                                         Poppins Google Font
                                     </label>
                                 </div>
                             </li>
                             <li className="list-group-item py-1 px-2">
                                 <div className="form-check mb-0">
                                     <input className="form-check-input" type="radio" name="font" id="font-opensans" value="font-opensans" onChange={(e)=>("")}/>
                                     <label className="form-check-label" >
                                         Open Sans Google Font
                                     </label>
                                 </div>
                             </li>
                             <li className="list-group-item py-1 px-2">
                                 <div className="form-check mb-0">
                                     <input className="form-check-input" type="radio" name="font" id="font-montserrat" value="font-montserrat" onChange={(e)=>("")}/>
                                     <label className="form-check-label" >
                                         Montserrat Google Font
                                     </label>
                                 </div>
                             </li>
                             <li className="list-group-item py-1 px-2">
                                 <div className="form-check mb-0">
                                     <input className="form-check-input" type="radio" name="font" id="font-Plex" value="font-Plex" checked="" onChange={(e)=>("")}/>
                                     <label className="form-check-label" >
                                         Plex Google Font
                                     </label>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     {/* <!-- Settings: Light/dark --> */} 
                     {/* <!-- Modal Custom Settings--> */}  
                     <div className="setting-mode py-3">
                         <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-layout fs-4 me-2 text-primary"></i>Contrast Layout</h6>
                         <ul className="list-group list-unstyled mb-0 mt-1">
                             <li className="list-group-item d-flex align-items-center py-1 px-2">
                                 <div className="form-check form-switch theme-switch mb-0">
                                     <input onChange={(e)=>("")} className="form-check-input" type="checkbox" id="theme-switch"/>
                                     <label className="form-check-label" >Enable Dark Mode!</label>
                                 </div>
                             </li>
                             <li className="list-group-item d-flex align-items-center py-1 px-2">
                                 <div className="form-check form-switch theme-high-contrast mb-0">
                                     <input onChange={(e)=>("")} className="form-check-input" type="checkbox" id="theme-high-contrast"/>
                                     <label className="form-check-label" >Enable High Contrast</label>
                                 </div>
                             </li>
                             <li className="list-group-item d-flex align-items-center py-1 px-2">
                                 <div className="form-check form-switch theme-rtl mb-0">
                                     <input onChange={(e)=>("")} className="form-check-input" type="checkbox" id="theme-rtl"/>
                                     <label className="form-check-label">Enable RTL Mode!</label>
                                 </div>
                             </li>
                         </ul>
                     </div>
                 </div>
                 <div className="modal-footer justify-content-start">
                     <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary lift">Save Changes</button>
                 </div>
             </div>
         </div>
     </div>  
     );
}

export default Setting;