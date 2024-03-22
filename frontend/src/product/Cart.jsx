import React, { useState, useEffect } from 'react';

import Header from '../common/header';
// import SignIn from './SignIn';
import '../assets/styles/main.css' 
import $ from 'jquery';
import {Link} from "react-router-dom";
import SignIn from '../account/SignIn';



const cartUrl = "http://0.0.0.0:8000/cart/";
const baseUrl = "http://0.0.0.0:8000";


function Cart(){
	// const [getCartData, setCartData] = useState('');
	const [getCartData, setCartData] = useState([]);
	const [login, setLogin] = useState(false);
	const [updateCart, setUpdateCart] = useState(false);



    const UpdateCart = async (cartId, quantity) =>{

		try {
			var token = localStorage.getItem('access_token')
			// Make the API request using the fetch function
			const payload = {
				"id" : cartId,
				"quantity" : quantity
			}
			const response = await fetch(cartUrl, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,

			},
			body: JSON.stringify(payload),
			});
	
			// Check if the request was successful (status code 2xx)
			const responseData = await response.json();
			if (response.ok) {
				setUpdateCart(true)
			} else {
			// Handle errors
			console.error('API request failed', response );
			}
		} catch (error) {
			console.error('Error during API request', error);
		}

	
	}


	const getCart = async () =>{
		try {
			var token = localStorage.getItem('access_token')
			// Make the API request using the fetch function
			const response = await fetch(cartUrl, {
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
				setCartData(responseData)
				var t = getCartData
				setLogin(true)
				debugger
				return responseData
			} else {
			    console.error('API request failed', response );
			}
		}catch (error) {
			console.error('Error during API request', error);
			return false;
		}
	
	}

	const handleQuantityChange = (e, index, data) => {
		const cartId = data.id
		const updatedCartData = [...getCartData];
		updatedCartData[index].quantity = parseInt(e.target.value, 10);
		setCartData(updatedCartData);
		var quantity = parseInt(e.target.value, 10) 
		UpdateCart(cartId, quantity)

	  };

	useEffect(() => {
		if(!login || updateCart){
		    getCart();
			setUpdateCart(false)
		}
	  }, [getCart]);
	//   console.log('getCartData------------------------', getCartData)
    if(login){
		return(
			<>
			<Header/>
			<div className='carts-details border border-success p-2 mb-2'>
				<h3>Shopping Cart</h3>
				<hr/>
				{getCartData.map((data, index) => (
				
					<div className="card mb-3" style={{"maxWidth": "54700x"}} >
						<div className="row g-0">
							<div className="col-md-4">
							<img src={ baseUrl + data.product["image"]} className="img-fluid rounded-start" alt="..."/>
							</div>
							<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{data.product["bicycle_name"]}</h5>
								<p className="card-text">{data.product["description"]}</p>
								<p className="card-text">No of Stock : {data.product["no_of_stock"]}</p>
								<p className="card-text" id={`price`+data.id} >Price : {data.price}</p>


								{/* <select > */}
									{/* {[...Array(data.product["quantity"]).keys()].map((quantityOption) => ( */}
								<select value={data.quantity} onChange={(e) => handleQuantityChange(e, index, data)}>
								
									<option key={0} value={0}>
										Qty: {0}
									</option>
									{/* {[...Array( data.quantity).keys()].map((quantityOption) => ( */}
									{[...Array(parseInt(data.product["no_of_stock"])).keys()].map((quantityOption) => (
									<option key={quantityOption + 1}  value={quantityOption + 1}>
										Qty: {quantityOption + 1}
									</option>
									
									))}
								</select>



							</div>
							</div>
						</div>
					</div>
				))}

           </div>


			</>	

		);
	}
	else{
	    return(<SignIn/>);
	}
    
}

export default Cart;