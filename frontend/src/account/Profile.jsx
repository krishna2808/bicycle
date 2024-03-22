import React, { useState, useEffect } from 'react';
import Header from '../common/header';
// import SignIn from './SignIn';
import '../assets/styles/main.css' 
import $ from 'jquery';
import SignIn from './SignIn';

import {Link} from "react-router-dom";


const profileUrl = "http://0.0.0.0:8000/user/profile/";
const baseUrl = "http://0.0.0.0:8000";

function Profile(){
	const [username, setUsername] = useState('');
	const [image, setImage] = useState('');
	const [address, setAddress] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [login, setLogin] = useState(false);
	const [updateProfiles, setUpdateProfiles] = useState(false);


	const updateProfile = async () =>{
		try {
			debugger
			var token = localStorage.getItem('access_token')
			const payload = {
				"email" :email,
				"username" : username,
				"mobile" : mobile, 
				// "image" : image,
				"address":address,
				"first_name" : firstName,
				"last_name": lastName,

			}
			// Make the API request using the fetch function
			const response = await fetch(profileUrl, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			    method: 'PATCH',
				body: JSON.stringify(payload)
			
			});
	
			// Check if the request was successful (status code 2xx)
			debugger
			const responseData = await response.json();
			if (response.ok) {
				// setGetResponse(responseData)
				setUsername(responseData["username"])
				setImage(responseData["image"])
				setAddress(responseData["address"])
				setMobile(responseData["mobile"])
				setFirstName(responseData["first_name"])
				setLastName(responseData["last_name"])
				setEmail(responseData["email"])
				setLogin(true)
				setUpdateProfiles(true)
				// return responseData
			} else {
			// Handle errors
			    debugger
				return false
			    console.error('API request failed', response );
			}
		}catch (error) {
			console.error('Error during API request', error);
			return false;
		}

	
	
	}

	const getProfile = async () =>{
		try {
			var token = localStorage.getItem('access_token')
			// Make the API request using the fetch function
			const response = await fetch(profileUrl, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			    method: 'GET'
			
			});
	
			// Check if the request was successful (status code 2xx)
			debugger
			const responseData = await response.json();
			if (response.ok) {
				// setGetResponse(responseData)
				setUsername(responseData["username"])
				setImage(responseData["image"])
				setAddress(responseData["address"])
				setMobile(responseData["mobile"])
				setFirstName(responseData["first_name"])
				setLastName(responseData["last_name"])
				setEmail(responseData["email"])
				setLogin(true)

				return responseData
			} else {
			    debugger
			    console.error('API request failed', response );
			}
		}catch (error) {
			console.error('Error during API request', error);
			return false;
		}

	
	
	}

	useEffect(() => {
		if(!login || updateProfiles){
		    getProfile();
		}
		if(updateProfiles){
			$(".show-error").show()
		}
	  }, [getProfile]);


	//   getProfile()

    if(login){
		return(
			<>
			<Header/>
			<div  className='forms p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'>



			    {/* <div class="mb-3"> 
				<h4 className='show-error' style={{"display": 'none'}}>Profile is Updated successfully</h4>
 
                    <img src={ baseUrl + image} />

                </div> */}

				<div className="mb-3">
					

					<label htmlFor="exampleInputEmail1" className="form-label label-text"> Email  </label>
					<input 
						type="email" 
						className="email form-control input-text" 
						name="email" value={email}
						required  
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label label-text"> Mobile </label>
					<input 
							type="number" 
							className="mobile form-control input-text" 
							name="mobile" value={mobile}
							required  
							onChange={(e) => setMobile(e.target.value)}
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label label-text">Username  </label>
					<input 
							type="text" 
							className="username form-control input-text" 
							name="username" value={username}
							required  
							onChange={(e) => setUsername(e.target.value)}
					></input>
				</div>


				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label label-text">First Name </label>
					<input 
							type="text" 
							className="username form-control input-text" 
							name="username" value={firstName}
							required  
							onChange={(e) => setFirstName(e.target.value)}
					></input>
				</div>



				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label label-text">Last Name  </label>
					<input 
							type="text" 
							className="username form-control input-text" 
							name="username" value={lastName}
							required  
							onChange={(e) => setLastName(e.target.value)}
					></input>
				</div>

					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label label-text">Address </label>
							<input 
								type="text"
								className="password password form-control input-text" 
								id="signup-password" 
								name="address" value={address}
								onChange={(e) => setAddress(e.target.value)}
						></input>
					</div>
					<div className="mb-3">
						<input 
							type="submit" 
							value="Update" 
							className='btn btn-primary'
							onClick={updateProfile}
						></input> &nbsp; &nbsp;

					</div>
				</div>



			</>	
		);
	}else{
	    return(<SignIn/>);

	}


}
export default Profile 