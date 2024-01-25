import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  // ! By id we could fetch data
  const params = useParams();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Product - {params.productId} details</h1>
    </div>
  );
};

export default ProductDetails;
