import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('email')) {
            navigate("/")
        }
        else {
            databaseSe();
        }
// eslint-disable-next-line
    }, [])

    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [occupation, setoccupation] = useState("")
    const [nationality, setnationality] = useState("")
    const [nickname, setnickname] = useState("")
    const [phone, setphone] = useState("")
    const handleChange = (e) => {

        if (e.target.name === 'name') {
            setname(e.target.value)
        }

       
        if (e.target.name === 'occupation') {
            setoccupation(e.target.value)
        }
        if (e.target.name === 'nationality') {
            setnationality(e.target.value)
        }
        if (e.target.name === 'address') {
            setaddress(e.target.value)
        }
        if (e.target.name === 'nickname') {
            setnickname(e.target.value)
        }
        if (e.target.name === 'phone') {
            setphone(e.target.value)
        }


    }

    const databaseSe = async () => {
        let a = await fetch("/api/userInfo", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: localStorage.getItem('email') })
        });
      
        let b = await a.json(); 
       
        setemail(b.person.email)
        setaddress(b.person.address)
        setname(b.person.name)
        setnationality(b.person.nationality)
        setoccupation(b.person.occupation)
        setphone(b.person.phone)
        setnickname(b.person.nickname)


    }
    const updateInfo = async() => {
     
    if(phone.length>10){
        toast.error("Phone number not valid", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
        await fetch("/api/updateAccount",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email:email,address:address,name:name,occupation:occupation,nationality:nationality,phone:phone,nickname:nickname})
        })
     
        
        toast.success("Details Updated ", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
       
        
    
    }
    const Logout=()=>{
        localStorage.removeItem("email")
        toast.success("Logging out ", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            navigate("/Login")
        }, 2000);
    }
  


  return (
    <>
    <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <div className='container m-auto w-4/5 '>
              
    
                <h1 className='text-center font-bold my-5 text-xl'>Portfolio</h1>
                <h2 className=' font-semibold  text-xl'> Update Details</h2>
                <div className="mx-auto flex my-4">
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" onChange={handleChange} value={name} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email(cannot be changed)</label>
                            <input type="text" onChange={handleChange} value={email} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    
    
    
                </div>
                <div className="mx-auto flex my-4">
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="nationality" className="leading-7 text-sm text-gray-600">Nationality</label>
                            <input type="text" onChange={handleChange} value={nationality} id="nationality" name="nationality" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="occupation" className="leading-7 text-sm text-gray-600">Occupation</label>
                            <input type="text" onChange={handleChange} value={occupation} id="occupation" name="occupation" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
    
    
                </div>
                <div className="mx-auto flex my-4">
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="nickname" className="leading-7 text-sm text-gray-600">Nickname</label>
                            <input type="text" onChange={handleChange} value={nickname} id="nickname" name="nickname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    
                    <div className="px-2  w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="number" onChange={handleChange} value={phone} id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
    
    
                </div>
                <div className="px-2  w-full ">
                    <div className=" mb-4">
                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
    
                        <textarea cols="30" onChange={handleChange} value={address} rows="2" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button onClick={updateInfo} className="disabled:bg-indigo-300  flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8  focus:outline-none hover:bg-indigo-600 rounded text-sm mr-1">Submit</button>
                    <button onClick={Logout} className="disabled:bg-indigo-300  flex text-white bg-indigo-500 border-0 py-2 px-8  focus:outline-none hover:bg-indigo-600 rounded text-sm mr-1">Logout</button>
                </div>
    
            </div>
            </>
  )
}

export default Dashboard