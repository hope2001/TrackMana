import { useState } from "react";
import { accountService } from "../services";

export const RequestToResponse = async (request) => {
  // console.log("request---->", request);
  if (accountService.isLogged)
{  
  
  try {
    let res = await request;
    console.log(" ResponsseParser {Success}------->>>>>", res.data);
    // console.log(" ResponsseParser {Success}------->>>>>", res.statusText);
    let result = res.data
    let resultStatus = res.statusText
    let errorStatus = null;
    let errorMessage = null
    return {resultStatus, result, errorStatus, errorMessage};
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      // console.log(err.response.data);
      // console.log(err.response.status);
      // console.log(err.response.headers);

    } else {
      // Anything else
    }
    console.error(" ResponsseParser {error}------->>>>>", err);
    let result = null
    let resultStatus = null
    let errorStatus = err.status;
    // let errorMessage = err.response.data.message
    let errorMessage = err.message
    return {resultStatus, result, errorStatus, errorMessage};
  }

}
};
