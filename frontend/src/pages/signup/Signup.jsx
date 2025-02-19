import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const {loading, signup} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='card flex flex-col items-center justify-center min-w-96 mx-auto bg-base-100'>
        <div className=' w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter '>
            <h1 className='text-3xl font-semibold text-center text-white-300'>Login
                <span className='text-primary'> Chat App</span>
            </h1>
        
        <form onSubmit={handleSubmit}>
 			<div>
 				<label className='label p-2'>
 					<span className='text-base text-base-content'>Full Name</span>
 				</label>
 				<input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
                    value = {inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                />
 			</div>

			<div>
				<label className='label p-2'>
					<span className='text-base text-base-content'> Username</span>
				</label>
				<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
                value = {inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />
			</div>
            
			<div>
				<label className='label p-2'>
					<span className='text-base text-base-content'>Password</span>
				</label>
			<input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value = {inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
			</div>

			<div>
                <label className='label p-2'>
                    <span className='text-base text-base-content'>Confirm Password</span>
                </label>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    className='w-full input input-bordered h-10'
                    value = {inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </div>


            <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='/login'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2 border bg-primary'
                disabled={loading}>
                    {loading? <span className='loading loading-infinity'></span> :"Sign Up"}
                </button>
            </div>
				</form>
            </div>
    </div>
  )
}

export default SignUp;