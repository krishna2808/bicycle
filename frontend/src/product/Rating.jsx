// Rating.js

import { useState, useEffect } from 'react';
const ratingUrl = "http://0.0.0.0:8000/rating/"


const Rating = (props) => {


	const [rating, setRating] = useState(props.product_rating["rating"]);
	const [productId, setProductId] = useState(props.product_rating["productId"]);
  
	useEffect(() => {
	  // Update the state when the prop value changes
	  setRating(props.product_rating["rating"]);
	  setProductId(props.product_rating["productId"]);
	}, [props.product_rating]);

//   const [rating, setRating] = useState('');
//   const [productId, setProductId] = useState('');


  const handleRatingClick = async (rating) => {
	// console.log(props.product_rating["productId"], 'props ----id----')
	// console.log(props.product_rating["rating"], 'props ---rating-----')
	// setProductId(props.product_rating["productId"])
	// setRating(props.product_rating["rating"])
	debugger


	// setRating(rating);

	// return ''

    try {
      const token = localStorage.getItem('access_token');
      const payload = {
        rating: rating,
		product_id: productId
      };
      const response = await fetch(ratingUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
		console.log("yes")
        // setRating(newRating);
      } else {
        console.error('API request failed', response);
      }
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? 'active' : ''}`}
          onClick={() => handleRatingClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
