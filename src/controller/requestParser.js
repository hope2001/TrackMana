

export const  RequestToResponse =async (request)=>{
    console.log("request---->", request);
    try {
        let res = await request.data
        console.log(" ResponsseParser {Success}------->>>>>",res);
        return res
    } catch (err) {
        if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The client never received a response, and the request was never left
        } else {
            // Anything else
        }
        console.error(" ResponsseParser {error}------->>>>>",err.message);
        return err.message;
    }
    
    // await request.then((res) => {
    //     console.log(" ResponsseParser {Success}------->>>>>",res.data);
    //     return res.data
    //   })
    //   .catch((error) => {
    //     console.error(" ResponsseParser {error}------->>>>>",error.message);
    //     return error.message;
    //   });
}



// try {
//     let res = await axios.get('/my-api-route');

//     // Work with the response...
// } catch (err) {
//     if (err.response) {
//         // The client was given an error response (5xx, 4xx)
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//     } else if (err.request) {
//         // The client never received a response, and the request was never left
//     } else {
//         // Anything else
//     }
// }