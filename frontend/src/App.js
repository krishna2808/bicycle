import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Navigation from './components/Navigation';
import Dashboard from './product/Dashboard';
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';
import ForgotPassword from './account/ForgotPassword';
import Profile from './account/Profile';
import Cart from './product/Cart';
import SignOut from './account/SignOut';
import SingleItem from './product/SingleItem'


function App() {
	return (
		<div className='container'>
		<BrowserRouter> 
		  <Routes>
			<Route path="/" exact element={<Dashboard/>} />
			<Route path="/sign-in" element={<SignIn/>} />
			<Route path="/sign-out" element={<SignOut/>} />
			<Route path="/sign-up" element={<SignUp/>} />
			<Route path="/profile" element={<Profile/>} />
			<Route path="/cart" element={<Cart/>} />
			<Route path="/singleitem" element={<SingleItem/>} />
			<Route path="/forgot-password" element={<ForgotPassword/>} />
		  </Routes>
		</BrowserRouter>	
		</div>  

	
	);
};

export default App;
