import React, { useEffect } from 'react';
import HomeCarousel from './HomeCarousel.jsx/HomeCarousel';
import Card from './Card/Card';
import ProductOverView from './ProductOverView/ProductOverView';
import styles from '../Home/ProductOverView/ProductOverView.module.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ marginBottom: "10%" }}>
            <HomeCarousel />
            <Card />
            <div className={`${styles.Overview_main}`}>
                <h2>Product Details</h2>
            </div>
            <ProductOverView />
        </div>
    )
}

export default Home;