import React from 'react';
import styles from './ProductDetails.module.css';
import ProductOverView from '../../Home/ProductOverView/ProductOverView';

const ProductDetails = () => {
  return (
    <div className={`${styles.ProductDetails} `}>
      <hr />
      <ProductOverView />

    </div>
  )
}

export default ProductDetails