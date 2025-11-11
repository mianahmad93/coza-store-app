import React from 'react';
import styles from './ProductOverView.module.css';
import CardDetail from './CardDetail';

const ProductOverView = () => {
    return (
        <>
           
            <div className={styles.ProductOverView_page}>
                <CardDetail />
            </div>
        </>
    )
}

export default ProductOverView