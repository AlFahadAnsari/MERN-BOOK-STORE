import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      return (
        <div>
    
          <div id="my_modal_3" className=" flex items-center h-screen justify-center  ">
            <div className="border-[2px] shadow-md p-10 rounded-md">
    
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
               
    
    
                <h3 className="font-bold text-lg">Signup</h3>
    
    
    
                <div className='mt-4 space-y-2'>
                  <span className='mx-2'>Name</span> <br />
                  <input type="text" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your Name'  />
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
                  <textarea className='bor border-2' name="" id="" cols="40" rows="5" placeholder='Type your message'></textarea>
                  
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