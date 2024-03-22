
import Header from '../common/header';
import React, { useState, useEffect } from 'react';
import '../assets/styles/main.css' 
import SignIn from '../account/SignIn';
import Rating from './Rating';
import { Link } from 'react-router-dom';


const productUrl = "http://0.0.0.0:8000/product/"
const AddCartUrl = "http://0.0.0.0:8000/cart/"
const baseUrl = "http://0.0.0.0:8000"


function ProductList(){
	const [getResponse, setGetResponse] = useState(false);
	const [getResponseSingleItem, setGetResponseSingleItem] = useState(false);
	const [isAddCart, setIsAddCart] = useState(false);
	const [login, setLogin] = useState(false);


	const handleRatingChange = (productId, rating) => {
		debugger
		// Update the rating for the product in your state or backend
		// You can send an API request to update the rating for the product
		console.log(`Product ID: ${productId}, Rating: ${rating}`);
	  };

	
    const showItem = async (data) =>{
		debugger
		console.log("")

	
	}

    const addCart = async (data) =>{

		try {
			var token = localStorage.getItem('access_token')
			// Make the API request using the fetch function
			const payload = {
				"price" : data.price,
				"product" : data.id,
				// "user" : "kk@gmail.com",
				"quantity" :1
			}
			const response = await fetch(AddCartUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,

			},
			body: JSON.stringify(payload),
			});
	
			// Check if the request was successful (status code 2xx)
			const responseData = await response.json();
			if (response.ok) {
				setIsAddCart(true)
			} else {
			// Handle errors
			console.error('API request failed', response );
			}
		} catch (error) {
			console.error('Error during API request', error);
		}

	
	}
	
    const getProduct = async () =>{

		try {
			var token = localStorage.getItem('access_token')
			// Make the API request using the fetch function
			const response = await fetch(productUrl, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			    method: 'GET'
			
			});
	
			const responseData = await response.json();
			if (response.ok) {
				setGetResponse(responseData)
				setLogin(true)
			} else {
			// Handle errors
			    console.error('API request failed', response );
			}
		}catch (error) {
			console.error('Error during API request', error);
		}
	}
	useEffect(() => {
		getProduct();
	  }, []);


	if(login){	
		return(
			<>
			    <Header/>
				<div className=" product-Details border border-success p-2 mb-2">
					<h3>Products </h3>
					<hr/>
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
						{getResponse.map((data, index) => (
						<div key={data.id} className="col">

							<div className="card">
								<img src={baseUrl + data.image} className="card-img-top cart-image" alt={data.bicycle_name} />
								<div className="card-body">
									<h5 className="card-title">{data.bicycle_name}</h5>
									<p className="card-text">{data.description}</p>
									<button  class="btn btn-primary" onClick={() =>  addCart(data)}>Add Cart</button> &nbsp;&nbsp;&nbsp;
		
									<Rating product_rating={{"productId": data.id, "rating":data.product_rating}}/>
									<Link ></Link>
									
								</div>

							</div>

						</div>
						))}
					</div>
				</div>
			</>



		);
	
	}else{
	    return(<SignIn/>);
	    
	}


}


export default ProductList