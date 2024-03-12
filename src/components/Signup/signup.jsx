import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { asyncsignup } from '../../store/Actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import { asyncsignup } from '../../store/Actions/userAction'


const Signup = () => {
  const [formData, setLocalFormData] = useState({});
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncsignup(formData));

    // Accept: "application/json, text/plain, */*"
    // Content - Type; "application/json"


  };

  return (
    <div className='w-full h-[110vh] flex flex-col  items-center  '>

      <img className='w-full h-[110vh]' src="https://internshala.com/static/images/registration/student_new/background.png" alt="" />

      <div className='absolute top-20 ml-16  '>
        <h1 className='text-5xl -ml-12 font-bold pt-10'>Sign-up and apply for free</h1>

        <h3 className='text-2xl pt-4 '>1,50,000+ companies hiring on Internshala</h3>

        <div className='w-[31vw] h-[65%]  border-2 border-[#00A5EC] border-opacity-30 mt-10'>




          <div className=' bg-zinc-200 mt-5 p-2 w-[91%] ml-[5%]   '>


            <img className='h-[10px] ml-20  ' src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg" alt="" />


            <h1 className='text-center'>
              Sign up with Google
            </h1>
          </div>




          <form onSubmit={handleSubmit} className='flex flex-col mt-10 p-2'>
            <h1 className='ml-5'>Email</h1>

            <input

              type="email"
              name='email'
              onChange={handleChange}
              placeholder='john@example.com'
              className='w-[91%] p-2 ml-[5%]  border-2   rounded-[5px] ' />
            <br />


            <h1 className='ml-5'>Password</h1>

            <input type="password" name='password'
              placeholder='Must be atleast 6 characters'
              onChange={handleChange}
              className='w-[91%] p-2 ml-[5%]  border-2  rounded-[5px]  ' /><br />

            <div className='flex gap-32'>  <h1 className='ml-5'>First Name</h1>
              <h1 className='ml-5'>Last Name</h1></div>

            <div className='flex gap-2 ml-5'>

              <input type="text"
                name='firstname'
                placeholder='John'
                onChange={handleChange}
                className=' p-2    border-2   rounded-[5px] ' /><br />

              <input type="text" name='lastname'
                onChange={handleChange}
                placeholder='Doe'
                className=' p-2   border-2  rounded-[5px]   ' />
            </div>

            <p className='p-5 text-[0.9vw]'>By signing up, you agree to our <span className='text-[#00A5EC]'>Terms and Conditions</span>.</p>

            <button type='submit' className='bg-[#00A5EC] p-2 w-[91%] ml-[5%] text-white rounded-[5px] ' >Sign up</button>

            <h1 className='p-5 text-center font-semibold'>Already registered? <Link className='text-[#00A5EC]' to="/signin">Login</Link></h1>
          </form>



        </div></div>

    </div>
  )
}

export default Signup