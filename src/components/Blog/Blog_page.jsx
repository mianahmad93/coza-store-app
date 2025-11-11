import React, { useEffect, useState } from 'react';
import styles from './Blog_page.module.css';
import blog_img from '../../assets/bg-02.jpg';
import blog1 from '../../assets/blog-01.jpg';
import blog2 from '../../assets/blog-02.jpg';
import blog3 from '../../assets/blog-03.jpg';
import blog4 from '../../assets/blog-04.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import Blog_Search_Section from './Blog_Search_Section';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Data = [
    {
        id: 1,
        img: blog1,
        title: "8 Inspiring Ways to Wear Dresses in the Winter",
        descrpition: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
        reading: "Continue Reading",
        date: 22,
        month: 'Jan,2018'
    },
    {
        id: 2,
        img: blog2,
        title: "The Great Big List of Men’s Gifts for the Holidays",
        descrpition: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
        reading: "Continue Reading",
        date: 18,
        month: 'Jan,2018'
    },
    {
        id: 3,
        img: blog3,
        title: "5 Winter-to-Spring Fashion Trends to Try Now",
        descrpition: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
        reading: "Continue Reading",
        date: 16,
        month: 'Jan,2018'
    },
    {
        id: 4,
        img: blog4,
        title: "8 Inspiring Ways to Wear Dresses in the Winter",
        descrpition: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
        reading: "Continue Reading",
        date: 14,
        month: 'Jan,2018'
    }
]

const Blog_page = ({ itemsPerPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    function Items({ currentItems }) {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
        return (
            <>
                {currentItems.map((item) => {
                    return <>
                        <div className={styles.Blog_cards}>
                            <Link to={`/blogDetails/${item.id}`} state={{ item }} className={styles.img_link}>
                                <img src={item.img} alt={item.title} />
                            </Link>
                            <div className={styles.Blog_card_Box}>
                                <span>{item.date}</span>
                                <span>{item.month}</span>
                            </div>
                            <div className={styles.Blog_text_section}>
                                <Link to={`/blogDetails/${item.id}`} state={{ item }}>
                                    <h4 >{item.title}</h4>
                                </Link>
                                <p>{item.descrpition}</p>
                                <div className={`d-flex ${styles.links_text}`}>
                                    <div className={`text-start ${styles.lists}`}>
                                        <span>
                                            <span>By Admin</span>
                                            <span className='border-left m-2'>StreetStyle,Fashion,Couple</span>
                                            <span className='border-left m-2'>8 comments</span>
                                        </span>
                                    </div>
                                    <div className={`text-end ${styles.continue_reading_btn}`}>
                                        <Link to={`/blogDetails/${item.id}`} state={{ item }}>
                                            <span>{item.reading}</span>
                                            <FaLongArrowAltRight style={{ marginLeft: '5px' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </>
        )
    }



    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = Data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Data.length / itemsPerPage);

    const handlePageClick = (event) => {
        
        const newOffset = (event.selected * itemsPerPage) % Data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    return (
        <div className={styles.Blog_page}>
            <div className={styles.blog_img_div}>
                <img src={blog_img} alt="blog image" />
                <div className={styles.blog_text}>
                    <h2>Blog</h2>
                </div>
            </div>


            <div className={styles.blog_sections}>
                <div class="container-fluid text-center mt-5 ">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8">
                            <Items currentItems={currentItems} />
                            <div className={styles.mainPagination}>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={nextButton()}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel={prevButton()}
                                    renderOnZeroPageCount={null}
                                    className={`${styles.one}  `}
                                    pageLinkClassName={`${styles.two}`}
                                    // pageClassName={`${Styles.three} `}
                                    activeLinkClassName={`${styles.four}`}
                                />
                            </div>
                            {/* {records.map((item) => {
                                return <>
                                    <div className={styles.Blog_cards}>
                                        <Link to={`/blogDetails/${item.id}`} state={{ item }} className={styles.img_link}>
                                            <img src={item.img} alt={item.title} />
                                        </Link>
                                        <div className={styles.Blog_card_Box}>
                                            <span>{item.date}</span>
                                            <span>{item.month}</span>
                                        </div>
                                        <div className={styles.Blog_text_section}>
                                            <Link to={`/blogDetails/${item.id}`} state={{ item }}>
                                                <h4 >{item.title}</h4>
                                            </Link>
                                            <p>{item.descrpition}</p>
                                            <div className={`d-flex ${styles.links_text}`}>
                                                <div className={`text-start ${styles.lists}`}>
                                                    <span>
                                                        <span>By Admin</span>
                                                        <span className='border-left m-2'>StreetStyle,Fashion,Couple</span>
                                                        <span className='border-left m-2'>8 comments</span>
                                                    </span>
                                                </div>
                                                <div className={`text-end ${styles.continue_reading_btn}`}>
                                                    <Link to={`/blogDetails/${item.id}`} state={{ item }}>
                                                        <span>{item.reading}</span>
                                                        <FaLongArrowAltRight style={{ marginLeft: '5px' }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })} */}
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


function prevButton() {
    return <>
        <div className={styles.Icons_div}>
            <IoIosArrowBack className={`${styles.icon}`} />
        </div>
    </>
}

function nextButton() {
    return <>
        <div className={styles.Icons_div}>
            <IoIosArrowForward className={`${styles.icon}`} />
        </div>
    </>
}

export default Blog_page