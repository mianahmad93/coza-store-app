import React from 'react';
import styles from './Contact_page.module.css';
import about_img from '../../assets/bg-01.jpg';
import { FaRegEnvelope } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const Contact_page = () => {
    return (
        <div className={styles.Contact_page}>
            <div className={styles.contact_img_div}>
                <img src={about_img} alt="about image" />
                <div className={styles.contact_text}>
                    <h2>Contact</h2>
                </div>
            </div>

            <div className={styles.contact_section}>
                <div class={` ${styles.Contact_container} container text-center`}>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 border">
                            <div className={` ${styles.Form_section} text-center mt-5`}>
                                <h4>Send Us A Message</h4>
                                <div data-mdb-input-init class="form-outline w-75 m-auto mt-5">
                                    <input type="email" class="form-control ps-5" placeholder="Email" />
                                </div>

                                <div data-mdb-input-init class="form-outline w-75 m-auto mt-5">
                                    <textarea class="form-control" id="textAreaExample1" placeholder='How can we Help you?' rows="7"></textarea>
                                </div>

                                <div className={styles.Submit_btn}>
                                    <button>Submit</button>
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 border">
                            <div className={`${styles.first_div} d-flex w-full`}>
                                <span><IoLocationOutline /></span>
                                <div className='text-start'>
                                    <span style={{ fontSize: "18px", position: "relative", top: "5px" }}>Address</span>
                                    <p className='mt-4' style={{ color: "gray" }}>Coza Store Center 8th floor, 379 <br /> Hudson St, New York, NY 10018 US</p>
                                </div>
                            </div>

                            <div className={`${styles.second_div} d-flex w-full`}>
                                <span><LuPhone /></span>
                                <div className='text-start'>
                                    <span style={{ fontSize: "18px", position: "relative", top: "5px" }}>Lets Talk</span>
                                    <p className='mt-4' style={{ color: "#717fe0" }}>+1 800 1236879</p>
                                </div>
                            </div>

                            <div className={`${styles.third_div} d-flex w-full`}>
                                <span><FaRegEnvelope /></span>
                                <div className='text-start'>
                                    <span style={{ fontSize: "18px", position: "relative", top: "5px" }}>
                                        Sale Support</span>
                                    <p className='mt-4' style={{ color: "#717fe0" }}>contact@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.map_container}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47816.06171548916!2d73.0523336!3d31.4059102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1725441356556!5m2!1sen!2s"
                    width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div >
    )
}

export default Contact_page