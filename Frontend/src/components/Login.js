import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../images/Login.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  useEffect(() => {  
    if(localStorage.getItem('email')){ 
  
     navigate("/Dashboard")
    }
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const data = { email, password };
    if(email.length===0 || password.length===0){
        toast.error('Email or password cannot be blank', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            return  
    }
    const res = await fetch('/api/signin', {
        method: "POST",
        headers: {
            //always use this
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })

    const check = await res.json();
   

    if (check.success) {
        localStorage.setItem("email",email)
        setemail("");
        setpassword("");
        toast.success('Successfully logged in', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            setTimeout(() => {
                navigate("/Dashboard");
            }, 3000);
        
        // alert("Sign In Completed");
        

    }
    else if (!check.success ) {

        
        toast.error(check.error, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setemail("");
        setpassword("");

    }
    
}


const handleChange = (req) => {
   
    if (req.target.name === "email") { setemail(req.target.value) }
    else if (req.target.name === "password") { setpassword(req.target.value) }

}



  
  return (
    <div>
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
    
    <section className="h-screen">
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
          <h1 className='text-center m-2 text-lg'>Log In to Your Account</h1>
          <Link to={"/Register"}><span><h2 className='text-center m-1 text-blue-500'>Or SignUp</h2></span></Link>
          <form onSubmit={handleSubmit} method="POST">
            
            <div className="mb-6">
              <input onChange={handleChange} value={email}
                type="email" name="email"  required id='email' htmlFor='email'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>
  
            
            <div className="mb-6">
              <input onChange={handleChange} value={password}
                type="password" name='password'  required id='password' htmlFor='password'
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>
  
            
  
            
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-indigo-500  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign in
            </button>
  
          
  
           
            
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Login