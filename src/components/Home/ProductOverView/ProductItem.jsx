import React, { useState } from 'react';
import styles from './ProductOverView.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../store/cart-slice';
import heart from '../../../assets/icon-heart-01.png';
import toast, { Toaster } from 'react-hot-toast';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { title, price, img, id, category } = props
    const AddCartHandle = () => {
        dispatch(
            cartAction.addItemToCart({
                title,
                price,
                id,
                img,
                category
            }),
            toast.success('Add Cart Successfully!')
        )

    }
    return (
        <>
                <div key={id} class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class={`${styles.main_card}`}>
                        <div className={styles.img_div}>
                            <img src={img} class={`${styles.img} card-img-top`} alt="..." />
                            <div className={styles.add_cart_btn}>
                                <button className='animate__animated animate__fadeInUp' onClick={AddCartHandle}>Add Cart</button>
                            </div>
                        </div>
                        <div class={`${styles.card_body} d-flex mt-3`}>
                            <div className='text-start'>
                                <span class={`card-title`}>{title}</span>
                                <p >${price}</p>
                            </div>
                            <div className={`${styles.heart_img} text-end`}>
                                <img src={heart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
        </>
    )
}

export default ProductItem