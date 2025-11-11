import React, { useEffect } from 'react';
import styles from './Blog_Details.module.css';
import Blog_Search_Section from './Blog_Search_Section';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";



const Blog_Details = () => {
    const location = useLocation()
    const { item } = location.state || {}


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.Blog_Details_page} style={{ marginBottom: "10%" }}>
            <hr />
            <div className={`${styles.Blog_Details} mt-5`}>

                <div className={styles.BreadCrumb}>
                    <nav aria-label="breadcrumb">
                        <ol class={`${styles.BreadCrumb_links} breadcrumb`}>
                            <li ><Link to={'/'}>Home</Link>
                                <MdKeyboardArrowRight className={styles.right_arrow} />
                            </li>
                            <li ><Link to={'/blog'}>Blog</Link>
                                <MdKeyboardArrowRight className={styles.right_arrow} />
                            </li>
                            <p class="breadcrumb-item active" aria-current="page">{item.title}</p>
                        </ol>
                    </nav>

                </div>


                <div class="container text-center">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8">
                            <div className={styles.Blog_card}>
                                <img src={item.img} alt={item.title} />
                                <div className={styles.Blog_card_Box}>
                                    <span>{item.date}</span>
                                    <span>{item.month}</span>
                                </div>
                            </div>
                            <div className={`text-start mt-3 ${styles.lists}`}>
                                <span>
                                    <span>By Admin</span>
                                    <span className='border-left m-2'>StreetStyle,Fashion,Couple</span>
                                    <span className='border-left m-2'>8 comments</span>
                                </span>
                            </div>

                            <div className={`text-start mt-5 ${styles.Title_div}`}>
                                <h4>{item.title}</h4>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.</p>
                                <p className='mt-4'>Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate</p>
                            </div>

                            <div className={`text-start mt-5  ${styles.comment_form}`}>
                                <h5>Leave a Comment</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>

                                <div className={styles.Form}>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label for="floatingTextarea2">Comment...</label>
                                    </div>
                                    <div class="input-group mb-3 mt-5 w-50">
                                        <input type="text" class="form-control " aria-label="Sizing example input" 
                                        placeholder='Name *'
                                        aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                    <div class="input-group mb-3 mt-4 w-50">
                                        <input type="text" class="form-control " aria-label="Sizing example input" 
                                        placeholder='Email *'
                                        aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                    <div class="input-group mb-3 mt-4 w-50">
                                        <input type="text" class="form-control " aria-label="Sizing example input" 
                                        placeholder='Website'
                                        aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                    <div className={`mt-5 ${styles.post_btn}`}>
                                        <button>Post Comment</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-xl-1 col-lg-1 col-md-1'></div>
                        <div class="col-xl-3 col-lg-3 col-md-3 p-3">
                            <Blog_Search_Section />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog_Details