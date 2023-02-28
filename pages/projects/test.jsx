function Test() {
    return ( 
        <ol class="dd-list">
        <li class="dd-item" data-id="1">
            <div class="dd-handle">
                <div class="task-info d-flex align-items-center justify-content-between">
                    <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Quality Assurance
                    </h6>
                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                        <div class="avatar-list avatar-list-stacked m-0">
                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar2.svg" alt=""/>
                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar1.svg" alt=""/>
                        </div>
                        <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                    </div>
                </div>
                <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                    nec scelerisque massa.</p>
                <div class="tikit-info row g-3 align-items-center">
                    <div class="col-sm">
                        <ul class="d-flex list-unstyled align-items-center flex-wrap">
                            <li class="me-2">
                                <div class="d-flex align-items-center">
                                    <i class="icofont-flag"></i>
                                    <span class="ms-1">28 Mar</span>
                                </div>
                            </li>
                            <li class="me-2">
                                <div class="d-flex align-items-center">
                                    
                                        <i class="icofont-ui-text-chat"></i>
                                        <span class="ms-1">5</span>
                                    
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="icofont-paper-clip"></i>
                                    <span class="ms-1">5</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm text-end">
                        
                        <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Box of Crayons </div>
                    </div>
                </div>
            </div>

        </li>
    </ol>
     );
}

export default Test;