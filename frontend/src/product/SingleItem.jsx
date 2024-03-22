import Header from '../common/header';
import React, { useState, useEffect } from 'react';
import '../assets/styles/main.css' 
import $ from 'jquery';

const baseUrl = "http://0.0.0.0:8000"



function SingleItem(props){
	debugger


	return(

		
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
		{props.map((data, index) => (
		<div key={data.id} className="col">

			<div className="card">

				<img src={baseUrl + data.image} className="card-img-top cart-image" alt={data.bicycle_name} />
				<div className="card-body">
					<h5 className="card-title">{data.bicycle_name}</h5>
					<p className="card-text">{data.description}</p>
					{/* <button  class="btn btn-primary" onClick={() =>  addCart(data )}>Add Cart</button> &nbsp;&nbsp;&nbsp; */}
					{/* <button  class="" onClick={()=> showItem(data)}>view item</button> */}
				</div>

			</div>

		</div>
		))}
	</div>
		
		
		
	);



}

export default SingleItem



