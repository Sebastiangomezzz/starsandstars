import React, { useState } from 'react';
import { signup } from '../services/auth';
import './auth.css';
import * as CONSTS from '../utils/consts';
import * as PATHS from '../utils/paths';

function Signup(props) {
	const initialState = {
		username: '',
		email: '',
		password: ''
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const credentials = {
			username: formData.username,
			password: formData.password,
			email: formData.email
		};

		signup(credentials).then((res) => {
			// successful signup
			console.log(res);
			if (!res.data) { 
				console.log(res.message);
			} else{
    	localStorage.setItem(CONSTS.ACCESS_TOKEN, res.data.accessToken);
			props.authenticate(res.data.user);
			props.history.push(PATHS.HOMEPAGE);
      }
		
		});
	};

	return (
		<div className="login">
			<div className="login-container">
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit} className='auth__form'>
					<div className="signup-username-space">
						<label htmlFor='input-username'>Username</label>
						<input
							id='input-username'
							type='text'
							name='username'
							placeholder='Username'
							value={formData.username}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="signup-email-space">
						<label htmlFor='input-username'>Email</label>
						<input
							id='input-email'
							type='email'
							name='email'
							placeholder='Your Email --> example@email.com'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="signup-password-space">
						<label htmlFor='input-password'>Password</label>
						<input
							id='input-password'
							type='password'
							name='password'
							placeholder='Password (min 8 characters)'
							value={formData.password}
							onChange={handleChange}
							required
							minLength='8'
						/>
					</div>
					<button className='form-btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signup;