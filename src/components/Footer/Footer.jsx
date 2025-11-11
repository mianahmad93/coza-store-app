import React, { useEffect } from 'react'
import styles from './Footer.module.css';
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import pay_one from '../../assets/icon-pay-01.png';
import pay_two from '../../assets/icon-pay-02.png';
import pay_three from '../../assets/icon-pay-03.png';
import pay_four from '../../assets/icon-pay-04.png';
import pay_five from '../../assets/icon-pay-05.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className={styles.Footer_page}>
            <div class="container-fluid text-center">
                <div class={`${styles.row_list} row`}>
                    <div className={`${styles.list_one} col-lg-3 col-md-6 col-sm-12`}>
                        <ul>
                            <li><strong>Categories</strong></li>
                            <li><a>Women</a></li>
                            <li><a>Men</a></li>
                            <li><a>Shoes</a></li>
                            <li><a>Watches</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.list_one} col-lg-3 col-md-6 col-sm-12`}>
                        <ul>
                            <li><strong>Help</strong></li>
                            <li><a>Track Order</a></li>
                            <li><a>Returns</a></li>
                            <li><a>Shipping</a></li>
                            <li><a>FAQs</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.second_list} col-lg-3 col-md-6 col-sm-12`}>
                        <ul>
                            <li><strong>Get in Touch</strong></li>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className={`${styles.icons_div} d-flex`}>
                                <RiFacebookFill className={styles.icon} style={{ marginRight: "12px" }} />
                                <IoLogoInstagram style={{ marginRight: "12px" }} className={styles.icon} />
                                <FaPinterestP style={{ marginRight: "12px" }} className={styles.icon} />
                            </div>
                        </ul>
                    </div>
                    <div className={`${styles.third_list} col-lg-3 col-md-6 col-sm-12`}>
                        <ul>
                            <li>
                                <strong>Newletter</strong>
                            </li>
                            <div class={`${styles.inputField}`}>
                                <input type="text" placeholder="email@example.com" />
                            </div>
                            <button className={styles.subscribe}>Subscribe</button>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.payment_images} text-center`}>
                <img src={pay_one} />
                <img src={pay_two} />
                <img src={pay_three} />
                <img src={pay_four} />
                <img src={pay_five} />
                <div className={`${styles.footer_desc} mt-5`}>
                    <p>Copyright ©2024 All rights reserved | Made with  by <span className={styles.color_blue}>Colorlib </span> & distributed by <span className={styles.color_blue}>ThemeWagon</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer