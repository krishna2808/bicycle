
import React, { useState, useEffect } from 'react';
import Header from '../common/header';
import '../assets/styles/main.css' 
import Dashboard from '../product/Dashboard';
import $ from 'jquery';


var ForgotPasswordUrl = "http://0.0.0.0:8000/user/password-reset/"
var opt_verify = "http://0.0.0.0:8000/user/otp-verify/"

function ForgotPassword() {
	const [otp, setOtp] = useState(false);
	const [isSendOtp, setIsSendOtp] = useState(false);
	const [response, setResponse] = useState(false);
	const [email, setEmail] = useState('');
	const [newPassword, setNewPassword] = useState(false);
    //Normal function 
    // async function onSubmit(e){
    // arrow function 
	const onSubmit = async (e) =>{
		console.log("click when ", e)
		if(otp && newPassword){
		    var url = opt_verify;
			var payload = {
                "email" :email, 
				"new_password":newPassword,
				"otp":otp,
			}

		}
		else{
		    var url = ForgotPasswordUrl;
			var payload = {
                "email" :email
			}
		}
		try {
			// Make the API request using the fetch function
			const response = await fetch(url, {
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
			    setIsSendOtp(true)
				console.log(responseData);
			} else {
			// Handle errors
			console.error('API request failed', response );
			}
			setResponse(responseData["detail"])
		} catch (error) {
			console.error('Error during API request', error);
		}
	}

	useEffect(() => {
		debugger
		if(isSendOtp){
			$(".new_password").show()
			$(".otp").show()  
		}
		if(response){
			$("#reponse-message").show()
			$("#reponse-message").text(response);
		}
	  }, [response]);

    return (
		<>  
		    <div className='forms p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'>
		    <h4 className='show-error' id="reponse-message" style={{"display": 'none'}}></h4>

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


			<div className="mb-3 otp" style={{"display":"none"}}>
					<label htmlFor="exampleInputPassword1" className="form-label label-text">OTP </label>
					<input 
							type="number" 
							id="signup-mobile"
							className="mobile form-control input-text" 
							name="mobile" 
							required  
							onChange={(e) => setOtp(e.target.value)}
					></input>
			</div>


			<div className="mb-3 new_password" style={{"display":"none"}}>
				<label htmlfor="exampleInputPassword1" className="form-label label-text">New Password</label>
				<input 
				    type="password"
				    className="password form-control input-text" 
				    // id="exampleInputPassword1" 
				    name="password" 
				    required
				    onChange={(e) => setNewPassword(e.target.value)}
			    ></input>
			</div>

			<input type="submit" className="btn btn-primary" onClick={onSubmit}></input>
			</div>
		</>	
	);
}

export default ForgotPassword;
