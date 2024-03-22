// AppRouter.jsx
import React from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { Switch, Router,Routes, Route, Link } from 'react-router-dom'; 
import Dashboard from './product/Dashboard';
import Profile from './account/Profile';
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';

const AppRouter = () => {
  return (


	<Router> 
	{/* <div className="App"> 
		<ul className="App-header"> 
		<li> 
			<Link to="/">Dashboard</Link> 
		</li> 
		<li> 
			<Link to="/profile">Profile</Link> 
		</li> 
		<li> 
			<Link to="/signIn">Sign In </Link> 
		</li> 
		</ul>  */}
	<Routes> 
			<Route exact path='/' element={< SignUp />}></Route> 
			<Route exact path='/Dashboard' element={< Dashboard />}></Route> 
			<Route exact path='/profile' element={< Profile />}></Route> 
			<Route exact path='/signIn' element={< SignIn />}></Route> 
	</Routes> 
	{/* </div>  */}
</Router>




	
  );
};

export default AppRouter;
