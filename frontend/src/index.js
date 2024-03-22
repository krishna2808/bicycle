import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './account/SignIn';
import reportWebVitals from './reportWebVitals';
// import AppRouter from './AppRouter';
import SignUp from './account/SignUp';
import Dashboard from './product/Dashboard';
import ForgotPassword from './account/ForgotPassword';
import { BrowserRouter ,Router, Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';
// import Header from './common/header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(	
	    
    <div className='container'>
	    
		 	<App />	


	</div>
    
    
);

reportWebVitals();
