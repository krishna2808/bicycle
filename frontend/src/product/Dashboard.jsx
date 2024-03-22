
import Header from '../common/header';
import React, { useState, useEffect } from 'react';
import '../assets/styles/main.css' 
import $ from 'jquery';
import ProductList from './ProductList';
const productUrl = "http://0.0.0.0:8000/product/"


function Dashboard(){
	const [getResponse, setGetResponse] = useState(false);
	
	// const getproduct = getProduct()

	return(
		<>
			<ProductList/>

		</>	
	);



}


export default Dashboard