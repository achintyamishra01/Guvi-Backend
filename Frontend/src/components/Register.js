import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../images/Login.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [cpassword, setcpassword] = useState('')


useEffect(() => {  //if user is already logged in then redirect him to home page
  if(localStorage.getItem('email')){ 

   navigate("/Dashboard")
  }

 // eslint-disable-next-line
}, [])










const handleSubmit = async (e) => {

  e.preventDefault()
  const data = { name: name, email: email, password: password }
  if(name==="" || email==="" || password==="" ){
    toast.error('Credentials not proper', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        return  
}
if(password!==cpassword ){
  toast.error('Password and Confirm Password does not match', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      return  
}
const res = await fetch('api/register', {
  method: "POST",
  headers: {
      //always use this
      'content-type': "application/json"
  },
  body: JSON.stringify(data)
})


const check = await res.json();


if (check.success) {
  toast.success('Thanks ,for registering with us', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      
  setname("");
  setpassword("");
  setcpassword("");
  
  setemail("");

  setTimeout(() => {
      navigate("/Login")
  }, 3000);
}
else {
  toast.error(check.error, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  setname("");
  setpassword("");
  setcpassword("");
  
  setemail("");
}
  
}
const handleChange = (e) => {
  if (e.target.name === "name") { setname(e.target.value) }
   if (e.target.name === "email") { setemail(e.target.value) }
 if (e.target.name === "password") { setpassword(e.target.value) }
   if (e.target.name === "cpassword") { setcpassword(e.target.value) }
}

return (<>
  <ToastContainer
    position="bottom-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  <div><section className="h-screen">
    <div className="container px-6 py-12 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
          <img
            src={loginImg}
            className="w-full"
            alt="Phone"
          />
        </div>
        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
          <h1 className='text-center m-2 text-lg'>Register With Us</h1>
          <Link to={"/Login"}><span><h2 className='text-center m-1 text-blue-500'>Or Login</h2></span></Link>
          <form onSubmit={handleSubmit} method="POST">

            <div className="mb-6">
              <input value={name} onChange={handleChange}
                type="text" name='name' required id='name' htmlFor='name'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-6">
              <input value={email} onChange={handleChange}
                type="email" name='email' required id='email' htmlFor='email'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>


            <div className="mb-6">
              <input value={password} onChange={handleChange}
                type="password" name='password' required id="password" htmlFor='password'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="mb-6">
              <input value={cpassword} onChange={handleChange}
                type="password" name='cpassword' required id="cpassword" htmlFor='cpassword'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm Password"
              />
            </div>


            <button
              type="submit"
              className="inline-block px-7 py-3 bg-indigo-500  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign Up
            </button>




          </form>
        </div>
      </div>
    </div>
  </section></div></>
  )
}

export default Register