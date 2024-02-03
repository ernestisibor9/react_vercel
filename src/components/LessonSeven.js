import React, { useState } from 'react'

function LessonSeven() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showMsg, setShowMsg] = useState(false)
    const[showSuccess, setShowSuccess] = useState(false)
    const[showPasswordMessage, setShowPasswordMessage] = useState(false)

    // Create a function to handle submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email);
        console.log(password);

        // Validate the fields
        if(email === '' || password === ''){
            // alert("Fields cannot be empty")
            setShowMsg(true)
        }
        if(password.length < 6){
            // alert("Password must be at least 6 characters")
            setShowPasswordMessage(true)
            setShowMsg(false)
        }
        else{
            // alert("You have successfully registered!")
            setShowSuccess(true)

            setShowPasswordMessage(false)
            setShowMsg(false)
        }
    }

  return (
    <div>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <form onSubmit={handleSubmit}>
                    <div className='card shadow p-4'>
                        {/*  Display message */}
                        {
                            showMsg ? (
                                <div class="alert alert-danger" role="alert">
                                    Fields cannot be empty!
                                </div>
                            ) : ('')
                        }


                        {
                            showPasswordMessage ? (
                                <div class="alert alert-danger" role="alert">
                                    Password must be at least 6 characters
                                </div>
                            ) : ('')
                        }


                        {
                            showSuccess ? (
                                <div class="alert alert-success" role="alert">
                                    You have successfully registered!
                                </div>
                            ) : ('')
                        }
                        <h4 className='text-center'>Registration Form</h4>
                        <div className='card-body'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
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
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LessonSeven
