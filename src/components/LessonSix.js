import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LessonSix() {
    // Hook to a state
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    

    // Creare a function to submit a form
    const handleSubmit = (event)=>{
        // alert("You have submitted!")
        event.preventDefault()

        if(username === "" || password === ""){
            // alert("Form cannot be empty!")
            // toast.error('Form cannot be empty!')
            setShowMessage(true)

        }
        if(password.length <= 6){
            // alert("Password cannot exceed 6 characters")
            // toast.error('Password cannot exceed 6 characters')
            setShowPassword(true)
            setShowMessage(false)
            setShowSuccess(false)
        }
        else{
            // alert("Student successfully registered")
            // toast.success('Student successfully registered')
            setShowSuccess(true)
            setShowMessage(false)
        }

    }
  return (
    <div>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
            {
                showMessage ? (
                <div class="alert alert-danger" role="alert">
                Fields cannot be empty
              </div>
              ) : ('')
            }

            {
                showSuccess ? (
                <div class="alert alert-success" role="alert">
                You have successfully login
              </div>
              ) : ('')
            }

            {
                showPassword ? (
                <div class="alert alert-danger" role="alert">
                Password cannot exceed six characters
              </div>
              ) : ('')
            }
                <form onSubmit={handleSubmit}>
                    <div className='card shadow p-4'>
                        <h4 className='text-center'>Login Form</h4>
                        <div className='card-body'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            value={username}
                            onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                            
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </div>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LessonSix
