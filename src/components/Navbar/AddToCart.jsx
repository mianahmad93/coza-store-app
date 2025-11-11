import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddToCart.module.css';
import { RxCross2 } from "react-icons/rx";
import { cartAction } from '../../store/cart-slice';
import toast, { Toaster } from 'react-hot-toast';

const AddToCart = ({ openHandleCart }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)
    let Total=0;
    
    cartItems.forEach(element=>{
        let bill = element.price * element.quantity;
        Total = bill + Total
    })

    const RemoveCartHandler = (id) => {
        dispatch(cartAction.removeItemFromCart(id))
        toast.error('Remove Cart Item!')
    }
    const nodeRef = useRef(null);
    return (
        <>
            <section ref={nodeRef} className={styles.AddToCart_page}>
                <div className={styles.addCart}>
                    <h6>Your Cart</h6>
                </div>
                <div className={styles.cross_div}>
                    <RxCross2 onClick={openHandleCart} />
                </div>

                <div className={`${styles.main_cart_div} mt-4 p-2`} >
                    {cartItems.map((item) => {
                        return <>
                            <div key={item.id} className={`${styles.cart_data} d-flex`}>
                                <div className={`${styles.cart_img} text-start`}>
                                    <img src={item.img} alt={item.title} />
                                    <div className={styles.delete_img}><RxCross2 onClick={() => RemoveCartHandler(item.id)} /></div>
                                </div>
                                <div className={`${styles.cart_title}`}>
                                    <p>{item.title}</p>
                                    <div className={`${styles.cart_price} text-start`}>
                                        <span>{item.quantity}</span>
                                        <RxCross2 />
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                    <div>
                        <div className={styles.total}>
                            <h6>Total: ${Total.toFixed(2)}</h6>
                        </div>
                        <div className={styles.Btns_div}>
                            <button>View Cart</button>
                            <button>Check Out</button>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster/>
        </>
    )
}

export default AddToCart