import Layout from "@/components/Layout/layout";
import Link from "next/link";

function Tasks() {
  return (
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0"> Tasks </h3>
                {/* <h3 className="h4 mb-0"> Project details {asPath}  </h3> */}
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <Link
                    href="/projects"
                    type="button"
                    className="btn btn-primary btn-set-task w-sm-100"
                  >
                    <i className="icofont-arrow-left me-2 fs-6"></i>back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tasks;
