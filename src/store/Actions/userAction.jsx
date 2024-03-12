import axios from "../../config/axios";
import {  removeadmin, saveadmin } from "../Reducer/userReducer";





export const asynccurrentuser = () => async (dispatch, getState) => {
   try {
    try {

        const { data } = await axios.post("/student",)
        dispatch(saveadmin(data.student));
        console.log(data);

    } catch (error) {
        console.log(error.response);
    }
   } catch (error) {
    
   }

}



export const asyncsignup = (user) => async (dispatch, getState) => {
    try {

         await axios.post("/signup", user)
         dispatch(asynccurrentuser());
        

    } catch (error) {
        console.log(error);
    }

}

export const asyncsignin = (user) => async (dispatch, getState) => {
    try {

        await axios.post("/student/signin", user)
        dispatch(asynccurrentuser());
        

    } catch (error) {
        console.log(error.response.data);
    }

}

export const asyncremoveuser = () => async (dispatch, getState) => {
    try {

        await axios.get("/student/signout")
        dispatch(removeuser());
        

    } catch (error) {
        console.log(error.response.data);
    }

}


// export const asyncsendmail = (user) => async (dispatch, getState) => {
//     try {

//       const {data} = await axios.post("/student/send-mail",user)
//       dispatch(asynccurrentuser(data.student._id));
//       console.log(data.student._id);
        
        

//     } catch (error) {
//         console.log(error.response.data.message);
//     }

// }

// export const asyncverifymail = (user,id) => async (dispatch, getState) => {
//     try {

//       const {data} = await axios.post(`/student/forget-link/${id}`,user)
//       dispatch(asynccurrentuser(data.student._id));
//       console.log(data.student._id);
       
        

//     } catch (error) {
//         console.log(error.response.data.message);
//     }

// }

