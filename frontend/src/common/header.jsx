import {Link} from "react-router-dom";

function Header(){
    return(
	    <>

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<Link class="navbar-brand"  to="/">Home</Link>
				<Link class="navbar-brand" to="/cart"> <img src="cart.jpg" className="cart-default"/></Link>
				{/* <a class="navbar-brand" href="#">Navbar</a> */}
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item dropdown">
						{/* <Link class="nav-link dropdown-toggle"  to="/">Home</Link> */}
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<img src="profile.jpeg	" className="profile-default"/>
					</a>
					
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
						<li><Link to="/profile" class="dropdown-item">Profile</Link></li>
						<li><Link to="/sign-out" class="dropdown-item">LogOut</Link></li>
					</ul>
					</li>
				</ul>
				</div>
			</div>
			</nav>





		</>	
	);


}

export default Header