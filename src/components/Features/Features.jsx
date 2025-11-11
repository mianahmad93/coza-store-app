import React, { useEffect, useState } from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import styles from './Features.module.css';
import cart_image from '../../assets/item-cart-04.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';


// const Data = [
//     { id: 1, img: cart_image, title: "Fresh Strawberries", price: '36.00', total: '36.00', quantity: 1 },
//     { id: 2, img: cart_image, title: "Lightweight Jacket", price: '16.00', total: '16.00', quantity: 1 },
// ]

const Features = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    const AddItem = (item) => {
        dispatch(cartAction.addItemToCart(item))
        toast.success('Update cart Item!')
    }

    const RemoveItem = (id) => {
        dispatch(cartAction.removeItemFromCart(id))
        toast.error('Remove Cart Item!')
    }

    const cartTotal = cartItems.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0);

    return (
        <>
            <div className={styles.Feature_page} style={{ marginBottom: "10%" }}>
                <hr />
                <div className={styles.Feature_section_1}>
                    <BreadCrumb />
                </div>
                <div className={`${styles.Feature_section_2}`}>
                    <div class="container text-center mt-5 ">
                        <div class="row gx-5 py-4">
                            <div class="col-xl-8 col-lg-12 ">
                                <div className={`${styles.Feature_Column_1} border table-responsive`}>
                                    <table class={` ${styles.Table} table`}>
                                        <thead>
                                            <tr className={styles.First_row}>
                                                <th scope="col">Product</th>
                                                <th></th>
                                                <th scope="col" >Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className={styles.table_body}>
                                            {cartItems.map((item) => {
                                                return <>
                                                    <tr>
                                                        <td scope="row">
                                                            <img src={item.img} style={{ width: '60px', height: '80px' }} alt="" />
                                                        </td>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <div className={styles.Main_Btns}>
                                                                <button onClick={() => RemoveItem(item.id)}><FiMinus /></button>
                                                                <input type="text" value={item.quantity} defaultValue='1' />
                                                                <button onClick={() => AddItem(item)} ><FiPlus /></button>
                                                            </div>
                                                        </td>
                                                        <td><p>{item.price * item.quantity.toFixed(2)}</p></td>
                                                    </tr>
                                                </>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-12 ">
                                <div className={styles.Feature_Column_2}>
                                    <div className={styles.total_section}>
                                        <h5 className='text-start'>Cart Total</h5>
                                        <div className={` ${styles.subtotal} d-flex`}>
                                            <strong>Subtotal:</strong>
                                            <p>${cartTotal.toFixed(2)}</p>
                                        </div>
                                        <div className={styles.border_bottom}></div>
                                        <div className={`${styles.shipping_section} d-flex`}>
                                            <p>Shipping:</p>
                                            <span>
                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.</span>
                                        </div>
                                        <div className='mt-4'>
                                            <p>Calculate Shipping</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select country...</option>
                                                <option value="1">USA</option>
                                                <option value="2">UK</option>
                                            </select>
                                            <div class="input-group mt-3 flex-nowrap">
                                                <input type="text" class="form-control" placeholder="State / country" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div class="input-group mt-3 flex-nowrap">
                                                <input type="text" class="form-control" placeholder="Postalcode / Zip" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className={`${styles.update_btn} mt-4 text-end`}>
                                                <button>Update Total</button>
                                                <div className={`${styles.border_bottom} mt-4`}></div>
                                            </div>
                                            <div className={styles.total_section}>
                                                <div className='d-flex'>
                                                    <strong>Total:</strong>
                                                    <span>${cartTotal.toFixed(2)}</span>
                                                </div>
                                                <button className={styles.checkout_btn}>Proceed To Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </>
    )
}

export default Features