import React, { useState } from 'react';
import { login } from '../services/auth';
import './Signup';
import * as CONSTS from '../utils/consts';
import { toast } from 'react-toastify';

function LogIn(props) {
	const { authenticate } = props;

	const initialState = {
		username: '',
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
			password: formData.password
		};

		login(credentials).then((res) => {
			if (!res.data) {
				console.log('error');
				toast("Your credentials are invalid")				
			}else{
      localStorage.setItem(CONSTS.ACCESS_TOKEN, res.data.accessToken);
			authenticate(res.data.user);
			props.history.push('/');
      }	
		});
	};

	return (
		<div className="login">
			<div className="login-container">
				<h1>Log In</h1>
				<br />
				<form onSubmit={handleSubmit} className='signup__form'>
					<div className="username-space">
						<label htmlFor='input-username'>Username</label>
						<br />
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
					
					<div className="password-space">
						<label htmlFor='input-password'>Password</label>
						<input
							id='input-password'
							type='password'
							name='password'
							placeholder='Password'
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

export default LogIn;