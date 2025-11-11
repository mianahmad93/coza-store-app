import React, { useEffect } from 'react'
import styles from './Card.module.css';
import banner_1 from '../../../assets/banner-01.jpg';
import banner_2 from '../../../assets/banner-02.jpg';
import banner_3 from '../../../assets/banner-03.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';




const CARD_DATA = [
    {
        img: banner_1,
        title: "Women",
        desc: 'Spring 2018'
    },
    {
        img: banner_2,
        title: "Men",
        desc: 'Spring 2018'
    },
    {
        img: banner_3,
        title: "Accessories",
        desc: 'New Trend'
    }
]

const Card = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    Aos.init();
    return (
        <div className={styles.card_div}>
            <div class={`${styles.container} container-fluid text-center`}>
                <div class="row">
                    {CARD_DATA.map((item,ind) => {
                        return <>
                            <div key={item.id} data-aos="fade-down" class="col-lg-4 col-md-6 col-sm-12">
                                <Link to={'/shoppingdetail'} style={{ color: "black" }}>
                                    <div class={`${styles.card_data} card`} >
                                        <img src={item.img} class="card-img-top" alt="..." />
                                        <div className={styles.overlay}></div>
                                        <div className={styles.card_desc}>
                                            <h3>{item.title}</h3>
                                            <p className='text-start'>{item.desc}</p>
                                        </div>
                                        <div className={styles.shop_now}>
                                            <p className=''>Shop Now</p>
                                            <div className=''></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card;