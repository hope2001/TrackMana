import { ApiContext } from "@/src/controller/apiContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
function Editproject({ show, setshow, thisData, setthisData }) {
  const currencies = ["XOF", "NGN", "EUR", "USD"];
  const priorities = ["Faible", "Moyen", "Important", "Urgent", "Très urgent"];
  const { showToastMessage, categories } = useContext(ApiContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  useEffect(() => {
    setValue("ID", thisData.id);
    setValue("label", thisData.label);
    setValue("budget", thisData.budget);
    setValue("curencies", thisData.budgetCurrency);
    setValue("description", thisData.description);
  }, [setValue, thisData]);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data))}
    // setshow(false)
  return (
    show && (
      <div
        className={`modal fade  ${
          show ? "show position-fixed top-0 fade d-block" : "d-none"
        }`}
        id="eddpro"
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <form onSubmit={handleSubmit(onSubmit)}  className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="editprojectLabel">
                {" "}
                Edit Project
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setshow(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
              <input type="hidden" {...register("ID", { value: thisData.id })} />
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput78" className="form-label">
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput78"
                  placeholder={thisData.label}
                  {...register("label", { defaultValue: thisData.label })}
                />
              </div>

              <div className="deadline-form">
                <>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label htmlFor="datepickerded123" className="form-label">
                        Project Start Date
                      </label>
                      <input
                      {...register("startDate")}
                        type="date"
                        className="form-control"
                        id="datepickerded123"
                        defaultValue={thisData.startDate.split("T")[0]}
                      />
                      
                    </div>
                    <div className="col">
                      <label htmlFor="datepickerded456" className="form-label">
                        Project End Date
                      </label>
                      <input
                      {...register("endDate")}
                        type="date"
                        className="form-control"
                        id="datepickerded456"
                        defaultValue={thisData.endDate.split("T")[0]}
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label className="form-label">Notifation Sent</label>
                      <select

                        className="form-select"
                        aria-label="Default select example"
                        onChange={() => ""}
                      >
                        <option>All</option>
                        <option value="1">Team Leader Only</option>
                        <option value="2">Team Member Only</option>
                      </select>
                    </div>
                  </div>
                </>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Budget 
                  </label>
                  <input
                    {...register("budget")}
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Currency
                  </label>
                  <select
                    {...register("currencies")}
                    className="form-select"
                    aria-label="Default select currency"
                  >
                    <option selected value={thisData.budgetCurrency} className="alert-dark">
                      {" "}
                      {thisData.budgetCurrency}{" "}
                    </option>
                    {currencies.map(
                      (current, index) =>
                        thisData.budgetCurrency !== current && (
                          <option key={index} value={current}>
                            {" "}
                            {current}{" "}
                          </option>
                        )
                    )}
                  </select>
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Priority
                  </label>
                  <select
                    {...register("priority")}
                    className="form-select"
                    aria-label="Default select Priority"
                  >
                    <option className="alert-dark">
                      {" "}
                      {thisData.priority}{" "}
                    </option>
                    {priorities.map(
                      (prior, index) =>
                        thisData.priority !== prior && (
                          <option key={index} value={prior}>
                            {" "}
                            {prior}{" "}
                          </option>
                        )
                    )}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea786"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                 {...register("description")}
                  className="form-control"
                  id="exampleFormControlTextarea786"
                  rows="3"
                  placeholder={thisData.description}
                >
                  
                </textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setshow(false)}
              >
                Done
              </button>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Editproject;
