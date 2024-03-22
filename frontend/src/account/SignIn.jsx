
import React, { useState, useEffect } from 'react';
import Header from '../common/header';
import '../assets/styles/main.css' 
import Dashboard from '../product/Dashboard';
import {Link} from "react-router-dom";


const signInUrl = "http://0.0.0.0:8000/user/signin/"

function SignIn() {
	const [isLogin, setIsLogin] = useState(false);
	const [accessToken, setAccesssToken] = useState(false);
	const [refreshToken, setRefreshToken] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    //Normal function 
    // async function onSubmit(e){
    // arrow function SignIn
	const onSubmit = async (e) =>{
		console.log("click when ", e)
		const payload = {
			"email" :email,
			"password" : password
		}
		console.log(email,password)
		try {
			// Make the API request using the fetch function
			const response = await fetch(signInUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			// credentials: 'include',
			body: JSON.stringify(payload),
			});
			// Check if the request was successful (status code 2xx)
			const responseData = await response.json();
			if (response.ok) {
				// Process the response data (if needed)
				setAccesssToken(responseData["access"])
				setRefreshToken(responseData["refresh"])
				localStorage.setItem('access_token', responseData["access"]);
				localStorage.setItem('refresh_token', responseData["refresh"]);
			    setIsLogin(true)
				console.log(responseData);
			} else {
			// Handle errors
			console.error('API request failed', response );
			}
		} catch (error) {
			console.error('Error during API request', error);
		}
	}

	useEffect(() => {
		debugger

	}, [isLogin]);

	if(accessToken){
		return(<Dashboard/>)
	}


    return (
		<>
		    <div className='forms p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'>
			{/* <form className="forms" style={{margin:"10%"}}> */}
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label label-text">Email address</label>
				<input 
				    type="email" 
				    className="email form-control input-text" 
					id="exampleInputEmail1" 
				    name="email" 
				    required 
				    aria-describedby="emailHelp"
				    onChange={(e) => setEmail(e.target.value)}
			    ></input>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlfor="exampleInputPassword1" className="form-label label-text">Password</label>
				<input 
				    type="password"
				    className="password form-control input-text" 
				    // id="exampleInputPassword1" 
				    name="password" 
				    required
				    onChange={(e) => setPassword(e.target.value)}
			    ></input>
			</div>
			<div className="mb-3 form-check">
				<input 
				    type="checkbox"
				    className="form-check-input" 
					id="exampleCheck1"
			    ></input>
				<label className="form-check-label label-text" htmlFor="exampleCheck1">Check me out</label>
			</div>
			<div>
			<Link to="/forgot-password" > Forgot-password</Link> <br></br> <br></br>

			</div>
			
			<input type="submit" value="Sign-In"className="btn btn-primary" onClick={onSubmit}></input>  &nbsp; &nbsp;
			<button  className="btn btn-primary">  <Link to="/sign-up" style={{"color": "white",  'text-decoration': 'none'}}> Sign-Up</Link></button>
			{/* </form> */}
			</div>
		</>	
	);
}

export default SignIn;
