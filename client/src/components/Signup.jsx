import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'




const Signup = () => {
  let navi =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    let userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password}


   await axios.post('https://mern-book-store-server.vercel.app/user/signup',userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('signup succefull!');    
        setTimeout(() => {
          navi('/')
        }, 2000);
      }

      localStorage.setItem("Users", JSON.stringify(res.data.user));
      
    }).catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    });
  }

  return (
    <div>

      <div id="my_modal_3" className=" flex items-center h-screen justify-center  ">
        <div className="border-[2px] shadow-md p-10 rounded-md">

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>


            <h3 className="font-bold text-lg">Signup</h3>



            <div className='mt-4 space-y-2'>
              <span className='mx-2'>fullName</span> <br />
              <input type="text" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your fullname'   {...register("fullname", { required: true })} />
              <br />
              {errors.fullname && <span className='text-md text-red-600'>This field is required</span>}
            </div>


            <div className='mt-4 space-y-2'>
              <span className='mx-2'>Email</span> <br />
              <input type="email" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your email'    {...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-md text-red-600'>This field is required</span>}
            </div>





            <div className='mt-4 space-y-2'>
              <span className='mx-2'>Password</span> <br />
              <input type="password" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your password'  {...register("password", { required: true })}/>
                <br />
              {errors.password && <span className='text-md text-red-600'>This field is required</span>}
              
            </div>





            <div className='flex mt-6 justify-around'>
              <button className="btn btn-secondary btn-sm ">Signup</button>
              <p>No registererd <Link to={'/'} className=' underline text-blue-700 cursor-pointer '>login</Link></p>
            </div>





          </form>
        </div>
      </div>

    </div>




  )
}

export default Signup
