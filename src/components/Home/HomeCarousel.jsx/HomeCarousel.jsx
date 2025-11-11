import 'animate.css';
import React from 'react';
import styles from './HomeCarousel.module.css';
import carousel_One from '../../../assets/slide-01.jpg';
import carousel_two from '../../../assets/slide-02.jpg';
import carousel_three from '../../../assets/slide-03.jpg';

const HomeCarousel = () => {
  return <>
    <div id="carouselExampleFade" class={` ${styles.carousel_page} carousel slide carousel-fade`} interval={2000} data-bs-ride="carousel">
      <div class="carousel-inner ">
        <div class="carousel-item  active">
          <div className={styles.carousel_section}>
            <div className='animate__animated animate__fadeInDownBig'>
              <span className={styles.spantag}>Women Collection 2018</span>
            </div>
            <h2 className='animate__animated animate__fadeInUpBig'>NEW SEASON</h2>
            <button className='animate__animated animate__zoomIn'>SHOP NOW</button>
          </div>
          <img src={carousel_One} class={`${styles.carousel_img} d-block w-100`} alt="..." />
        </div>
        <div class="carousel-item">
          <div className={styles.carousel_section}>
            <div className='animate__animated animate__backInLeft'>
              <span className={styles.spantag}>Men New-Season</span>
            </div>
            <h2 className='animate__animated animate__backInRight' id={styles.jacket_text}>JACKETS & COATS</h2>
            <button className='animate__animated animate__zoomIn'>SHOP NOW</button>
          </div>
          <img src={carousel_two} class={`${styles.carousel_img} d-block w-100`} alt="..." />
        </div>
        <div class="carousel-item">
          <div className={styles.carousel_section}>
            <div className='animate__animated animate__rotateInDownLeft'>
              <span className={styles.spantag}>Men Collection 2018</span>
            </div>
            <h2 className='animate__animated animate__rotateInUpRight'>NEW ARRIVALS</h2>
            <button className='animate__animated animate__flip'>SHOP NOW</button>
          </div>
          <img src={carousel_three} class={`${styles.carousel_img} d-block w-100`} alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </>
}

export default HomeCarousel