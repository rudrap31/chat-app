import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading,login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }
	return (
		<div className='card flex flex-col items-center justify-center min-w-96 mx-auto bg-base-100'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding'>
				<h1 className='text-3xl font-semibold text-center text-base-content'>
					Login
					<span className='text-primary'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2 mt-3'>
							<span className='text-base text-base-content'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
					</div>

					<div>
						<label className='label p-2 mt-3'>
							<span className='text-base text-base-content'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<a href="/signup" className='text-sm  hover:underline hover:text-blue-600 mt-5 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 bg-primary'
                        disabled={loading}>
                            {loading? <span className='loading loading-infinity'></span> :"Login"}
                        </button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;