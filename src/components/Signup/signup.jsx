import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { asyncsignin } from '../../store/Actions/userActions';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Signin = () => {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setLocalFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncsignin(formData));

    // Accept: "application/json, text/plain, */*"
    // Content - Type; "application/json"


    navigate("/Profile")
  };


  return (
    <div className='w-full h-[120vh] flex flex-col  items-center'>
      <div className='w-[25vw] h-[60%]  border-2 border-[#00A5EC] border-opacity-30 mt-10'>

        <div className='w-[80%] p-2 ml-[10%]  mt-4 flex gap-24'>

          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                fontWeight: e.isActive ? "bold" : "",
                textDecoration: e.isActive ? "underline" : "",
                fontWeight: e.isActive ? "500" : "",

              };
            }}
            to="/signin" 
          >
         <h1 className='text-[1.3vw]'>  Student</h1>
          </NavLink>

          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "skyblue" : "",
                fontWeight: e.isActive ? "bold" : "",
                textDecoration: e.isActive ? "underline" : "",
                fontWeight: e.isActive ? "500" : "",
              };
            }}
            to="/EmployeSignin"> <h1 className='text-[1.3vw]'>Employe/T&P</h1>
          </NavLink>

        </div>
         <button className='w-[91%] p-2 ml-[5%]  border-2 mt-5  rounded-[5px]'>Login with Google</button>

        <h1 className='text-center mt-4'> OR</h1>

        <form onSubmit={handleSubmit} className='flex mt-2 flex-col'>
          <h1 className='ml-5'>Email</h1>

          <input

            type="email"
            name='email'
            onChange={handleChange}
            placeholder='john@example.com'
            className='w-[91%] p-2 ml-[5%]  border-2   rounded-[5px] ' />

          <h1 className='ml-5'>Password</h1>

          <input type="password" name='password'
            placeholder='Must be atleast 6 characters'
            onChange={handleChange}
            className='w-[91%] p-2 ml-[5%]  border-2  rounded-[5px]  ' /><br />

            <Link className='text-[#00A5EC] ml-[59%] -mt-2 mb-3' to="/forget">
            Forgot password?
            </Link>


          <button type='submit' className='bg-[#00A5EC] p-2 w-[91%] ml-[5%] text-white rounded-[5px] ' >Login</button>

          <h1 className='p-5 text-center font-semibold'>New to Internshala? Register<Link className='text-[#00A5EC]' to="/signup"> (<Link to="/signup">Student</Link> / <Link to="/EmployeSignup">Company</Link> ) </Link></h1>
        </form>
      </div>
    </div>
  )

}

export default Signin