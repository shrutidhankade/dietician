import axios from "../../config/axios";
import { removeuser, saveuser } from "../Reducer/userReducer";





export const asyncsignup = (user) => async (dispatch, getState) => {
    try {

     const {data} =   await axios.post("/admin/signup", user)
         dispatch(saveuser(data.admin));
         console.log(data);
        

    } catch (error) {
        console.log(error);
    }

}

export const asyncsignin = (user) => async (dispatch, getState) => {
    try {

        const {data} =   await axios.post("/admin/signin", user)
        dispatch(saveuser(data.admin));
        console.log(data);
        

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


export const asyncsendmail = (user) => async (dispatch, getState) => {
    try {

      const {data} = await axios.post("/student/send-mail",user)
      dispatch(asynccurrentuser(data.student._id));
      console.log(data.student._id);
        
        

    } catch (error) {
        console.log(error.response.data.message);
    }

}

export const asyncverifymail = (user,id) => async (dispatch, getState) => {
    try {

      const {data} = await axios.post(`/student/forget-link/${id}`,user)
      dispatch(asynccurrentuser(data.student._id));
      console.log(data.student._id);
       
        

    } catch (error) {
        console.log(error.response.data.message);
    }

}

