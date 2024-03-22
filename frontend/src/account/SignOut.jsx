import React, { useState, useEffect } from 'react';

import '../assets/styles/main.css' 
import $ from 'jquery';
import {Link} from "react-router-dom";
import SignIn from './SignIn';

function SignOut(){
    var token = localStorage.getItem('access_token');
	if(token != null){
	    localStorage.removeItem('access_token');
		return(
		    <SignIn/>
		);
	}


}
export default SignOut;