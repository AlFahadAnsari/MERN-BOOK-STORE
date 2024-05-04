import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
    let navi =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        let feedbackdata = {
          name:data.name,
          email:data.email,
          message:data.message}

          await axios.post('http://localhost:2000/feedback',feedbackdata)
          .then((res)=>{
            console.log(res.data);
            if(res.data){
              toast.success('feedback add succefull!'); 
              
              setTimeout(() => {
                  navi('/')
              }, 2000);
            }

          }).catch((e)=>{
            console.log({message:'error is'+e});
            toast.error("Error: " + e.response.data.message);
          })

        
      }
    
      return (
        <div>
    
          <div id="my_modal_3" className=" flex items-center h-screen justify-center  ">
            <div className="border-[2px] shadow-md p-10 rounded-md">
    
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
               
    
    
                <h3 className="font-bold text-lg">Signup</h3>
    
    
    
                <div className='mt-4 space-y-2'>
                  <span className='mx-2'>Name</span> <br />
                  <input type="text" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your Name'  {...register("name", { required: true })}   />
                  <br />
                  {errors.name && <span className='text-md text-red-600'>This field is required</span>}
                </div>
    
    
                <div className='mt-4 space-y-2'>
                  <span className='mx-2'>Email</span> <br />
                  <input type="email" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your email'    {...register("email", { required: true })} />
                  <br />
                  {errors.email && <span className='text-md text-red-600'>This field is required</span>}
                </div>
    
    
    
    
    
                <div className='mt-4 space-y-2'>
                <span className='mx-2'>Message</span> <br />
                  {errors.password && <span className='text-md text-red-600'>This field is required</span>}
                  <textarea className='bor border-2' name="" id="" cols="40" rows="5" placeholder='Type your message'  {...register("message", { required: true })}></textarea>
                  <br />

                  {errors.message && <span className='text-md text-red-600'>This field is required</span>}
                  
                </div>
    




                
            <div className='flex mt-6 justify-around'>
              <button className="btn btn-secondary btn-sm ">Submit</button>
              
            </div>
    
        

    
            
    
    
    
    
    
              </form>
            </div>
          </div>
    
        </div>
    
    
    
    
      )
    }

export default Contact