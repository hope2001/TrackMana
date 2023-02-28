import Layout from "@/components/Layout/layout";
import Loader from "@/components/Layout/partials/Loader";
import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
import { categoriesService, categoriesTaskService } from "@/src/services/categories_Services";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Categories() {
  const Router = useRouter();
  const [Categories, setCategories] = useState([]);
  const [TCategories, setTCategories] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isLoadingt, setisLoadingt] = useState(true);
  const [showAdd, setshowAdd] = useState(false);
  const [showAddt, setshowAddt] = useState(false);

  const { showToastMessage } = useContext(ApiContext);

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data))
    let body = {
      label: data.label,
      description: data.description,
    };

    if (data && body && showAdd) {
      categoriesService
        .addCategory(body)
        .then((res) => {
          console.log(res);
          showToastMessage("Project Category added with Success", "success");
          setshowAdd(false);
          Router.push("/categories");
        })
        .catch((error) => {
          if (error.response) console.error(error.response.data.message);
          if (error.response)
            showToastMessage(error.response.data.message, "error");
        });
    } else {
      showToastMessage("System error", "info");
    }
  };
  const onSubmitTask = async (data) => {
    // alert(JSON.stringify(data))
    let body = {
      label: data.label,
      description: data.description,
    };

    if (data && body && showAddt) {
      categoriesTaskService.addTasksCategory(body)
        .then((res) => {
          console.log(res);
          showToastMessage("Task Category added with Success", "success");
          setshowAddt(false);
          Router.push("/categories");
        })
        .catch((error) => {
          if (error.response) console.error(error.response.data.message);
          if (error.response)
            showToastMessage(error.response.data.message, "error");
        });
    } else {
      showToastMessage("System error", "error");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // const {
  //   register1,
  //   handleSubmit1,
  //   formState: { errors1 },
  // } = useForm({ mode: "onChange" });

  let body = {};
  useEffect(() => {
    (async () => {
      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(await categoriesService.getCategories(body));
      console.warn("if", resultStatus, result, errorStatus, errorMessage);

      if (result !== null && resultStatus === "OK") {
        setCategories(result), setisLoading(false);
      }
    })();
  }, []);

useEffect(()=>{
  (async () => {
    const { resultStatus, result, errorStatus, errorMessage } =
      await RequestToResponse(await categoriesTaskService.getTaskCategories(body));
    console.warn("if", resultStatus, result, errorStatus, errorMessage);

    if (result !== null && resultStatus === "OK") {
      setTCategories(result), setisLoading(false);
    }
  })();
},[])

  // function trashCategory(id, label) {

  //   let confirmDelete = confirm("Are you sure to delete Category labeled " + label+ " ?");
  //   let body ={
  //     id: id
  //   }
  //         if (confirmDelete && id) {
  //           categoriesService.deleteCategory(body)
  //           .then((res) => {
  //             console.log(body);
  //             console.log(res);
  //             showToastMessage("Category labeled "+ label +" is successfully deleted", "success");
  //             setshowAdd(false)
  //             Router.push("/categories")

  //           })
  //           .catch((error) => {
  //             console.log(body);
  //             // setactionmessage(["Echec de l'Ajout" , "no", error.response, error.status])
  //             if(error.response) console.error(error.response.data.message);
  //             if(error.response) showToastMessage(error.response.data.message, "error")
  //             // return error.message;
  //           });

  //         } else {
  //           // alert("Action canceled");
  //           showToastMessage("Action aborted", "warning")
  //         }

  // }
  return (
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="position-sticky h4 mb-0">Project Categories List </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    onClick={() => setshowAdd(!showAdd)}
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add
                   Project Categories
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={
                  showAdd
                    ? "p-3 col-lg-6 col-sm-12 col-md-8 mx-auto  shadow-lg my-2 rounded border border-1 border-primary"
                    : "d-none"
                }
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput77"
                    className="form-label"
                  >
                    Label
                  </label>
                  <input
                    {...register("label")}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput77"
                    placeholder="Category Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput77"
                    className="form-label"
                  >
                    Description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput77"
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="dtable"
                    className="table table-hover table-striped align-middle mb-0 text-center"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                      { Categories ? isLoading ? (
                        <tr className="w-100 mx-auto flex justify-content-center">
                          <td
                            colSpan="8"
                            className="d-flex justify-content-center"
                          >
                            <Loader />
                          </td>
                        </tr>
                      ) : (
                        Categories.map((category, index) => (
                          <tr key={index}>
                            <td> {category.label} </td>
                            <td> {category.description} </td>

                            <td>
                              {/* suspensionComment */}

                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                        ))
                      ): <tr className="w-100  d-flex justify-content-center">
                      <td
                        colSpan="8"
                        className="d-flex justify-content-center w-100"
                      >
                        Nothing to show
                      </td>
                    </tr>}
                    </tbody>
                  </table>
                  {/* {isLoading ? <Loader /> : ""} */}
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0 position-sticky">Task Categories List </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    onClick={() => setshowAddt(!showAddt)}
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add Task
                    Categories
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmitTask)}
                className={
                  showAddt
                    ? "p-3 col-lg-6 col-sm-12 col-md-8 mx-auto  shadow-lg my-2 rounded border border-1 border-primary"
                    : "d-none"
                }
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput77"
                    className="form-label"
                  >
                    Label
                  </label>
                  <input
                    {...register("label")}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput77"
                    placeholder="Category Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput77"
                    className="form-label"
                  >
                    Description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput77"
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="dtable"
                    className="table table-hover table-striped align-middle mb-0 text-center"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="" style={{ width: "100%" }}>
                      { TCategories.length ? isLoading ? (
                        <tr className="w-100 mx-auto flex justify-content-center">
                          <td></td>
                          <td
                            colSpan="3"
                            className="d-flex justify-content-center"
                          >
                            <Loader />
                          </td>
                          <td></td>
                        </tr>
                      ) : (
                        TCategories.map((category, index) => (
                          <tr key={index}>
                            <td> {category.label} </td>
                            <td> {category.description} </td>

                            <td>
                              {/* suspensionComment */}

                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                        ))
                      ) : <tr className="w-100  d-flex justify-content-center">
                      <td
                        colSpan="8"
                        className="d-flex justify-content-center w-100"
                      >
                        Nothing to show
                      </td>
                    </tr> }
                    </tbody>
                  </table>
                  {/* {isLoading ? <Loader /> : ""} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
