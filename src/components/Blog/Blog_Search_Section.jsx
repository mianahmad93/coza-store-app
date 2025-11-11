import React from 'react';
import styles from './Blog_page.module.css';
import product_01 from '../../assets/product-min-01.jpg';
import product_02 from '../../assets/product-min-02.jpg';
import product_03 from '../../assets/product-min-03.jpg';


const categories = ['Fashion', 'Beauty', 'Street Style', 'Life Style', 'DIY & Crafts']

const Feature_products = [
    { img: product_01, title: "White Shirt With Pleat Detail Back", price: "19.00" },
    { img: product_02, title: "Converse All Star Hi Black Canvas", price: "39.00" },
    { img: product_03, title: "Nixon Porter Leather Watch In Tan", price: "17.00" },
]

const Blog_Search_Section = () => {
    return (
        <div>
            <div className={`${styles.blog_section_two}`}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
            </div>

            <div className={`text-start mt-5 ${styles.categories_section}`}>
                <h5>Categories</h5>
                {categories.map((item) => {
                    return <>
                        <div className='mt-3'>
                            <p id={styles.bordet_top}></p>
                            <p className={styles.categoires_item}>{item}</p>
                        </div>
                    </>
                })}
            </div>

            <div className={` ${styles.featured_products} mt-5 text-start`}>
                <h5>Features Products</h5>
                {Feature_products.map((item) => {
                    return <>
                        <div className={`${styles.featured_items} d-flex`}>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div>
                                <p id={styles.title}>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Blog_Search_Section