import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, title: 'Product - 1' },
  { id: 2, title: 'Product - 2' },
  { id: 3, title: 'Product - 3' },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Products Page</h1>

      <ul>
        {PRODUCTS.map((el) => (
          <li key={el.id}>
            <Link to={`/products/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
