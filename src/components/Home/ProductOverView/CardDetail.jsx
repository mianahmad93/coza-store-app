import React, { useState } from 'react';
import styles from './ProductOverView.module.css';
import PopOver from './PopOver';
import { DUMMY_DATA } from './DUMMY_PRODUCT';
import ProductItem from './ProductItem';
import { cartAction } from '../../../store/cart-slice';
import { NavLink } from 'react-router-dom';


const CardDetail = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')


    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const filteredItems = selectedCategory === "All" ? DUMMY_DATA : DUMMY_DATA.filter(item => item.category === selectedCategory)
    return (
        <div className={styles.CardDetail_page}>
            <div className={`${styles.details_card}`} >
                <div className={styles.lists}>
                    <NavLink
                        className={selectedCategory === 'All' ? styles.active : ''}
                        onClick={() => handleCategoryClick("All")}
                    >All Products
                    </NavLink>

                    <NavLink
                        className={selectedCategory === 'Women' ? styles.active : ''}
                        onClick={() => handleCategoryClick("Women")}>Women
                    </NavLink>

                    <NavLink
                        className={selectedCategory === 'Men' ? styles.active : ''}
                        onClick={() => handleCategoryClick("Men")}>Men
                    </NavLink>

                    <NavLink
                        className={selectedCategory === 'Shoes' ? styles.active : ''}
                        onClick={() => handleCategoryClick("Shoes")}>Shoes
                    </NavLink>

                    <NavLink
                        className={selectedCategory === 'Watches' ? styles.active : ''}
                        onClick={() => handleCategoryClick("Watches")}>Watches
                    </NavLink>
                </div>

                <div class={`${styles.container} container-fluid`}>
                    <div class="row">
                        {filteredItems.map((item) => {
                            return <>
                                <ProductItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    img={item.img}
                                    category={item.category}
                                />
                            </>
                        })}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardDetail