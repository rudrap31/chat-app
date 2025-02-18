import React from 'react'

const SignUp = () => {
  return (
    <div className='card flex flex-col items-center justify-center min-w-96 mx-auto bg-base-100'>
        <div className=' w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter '>
            <h1 className='text-3xl font-semibold text-center text-white-300'>Login
                <span className='text-primary'> Chat App</span>
            </h1>
        

        <form>
 			<div>
 				<label className='label p-2'>
 					<span className='text-base text-base-content'>Full Name</span>
 				</label>
 				<input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' />
 			</div>
			<div>
				<label className='label p-2'>
					<span className='text-base text-base-content'> Username</span>
				</label>
				<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
			</div>
            
			<div>
				<label className='label p-2'>
					<span className='text-base text-base-content'>Password</span>
				</label>
			<input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
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
                />
            </div>


            <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2 border bg-primary'>Sign Up</button>
            </div>
				</form>
            </div>
    </div>
  )
}

export default SignUp;