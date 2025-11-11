import React from 'react';
import styles from './About_page.module.css';
import about_img from '../../assets/bg-01.jpg'
import about_img_01 from '../../assets/about-01.jpg';
import about_img_02 from '../../assets/about-02.jpg';

const About_page = () => {
    return (
        <div className={styles.About_section}>
            <div className={styles.About_page}>
                <div className={styles.about_img_div}>
                    <img src={about_img} alt="about image" />
                    <div className={styles.about_text}>
                        <h2>About</h2>
                    </div>
                </div>

                <div className={styles.About_content}>
                    <div class={` ${styles.main_container} container-fluid text-center`}>
                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7">
                                <div className={`${styles.about_Text_section} text-start`}>
                                    <h4>Our Story</h4>
                                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                                    <p className='mt-5'>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
                                    <p className='mt-5'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                                </div>
                            </div>
                            <div class="col-xl-1 col-lg-1 col-md-1"></div>
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <div className={`${styles.about_img}`}>
                                    <img src={about_img_01} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>




                    <div class={` ${styles.main_container2} container-fluid text-center`}>
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <div className={`${styles.about_img_2}`}>
                                    <img src={about_img_02} alt="" />
                                </div>
                            </div>
                            <div class="col-xl-1 col-lg-1 col-md-1"></div>
                            <div class="col-xl-7 col-lg-7 col-md-7">
                                <div className={`${styles.about_Text_section} text-start`}>
                                    <h4>Our Mission</h4>
                                    <p className='mt-4'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                                    <div className={styles.About_section_2}>
                                        <p className='mt-5 m-3'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                                        <span className='m-3' style={{ fontSize: "13px" }}>- Steve Job's</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>







                    <div class={` ${styles.Responsive_design} container-fluid text-center`}>
                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7">
                                <div className={`${styles.about_Text_section} text-start`}>
                                    <h4>Our Mission</h4>
                                    <p className='mt-4'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                                    <div className={styles.About_section_2}>
                                        <p className='mt-5 m-3'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                                        <span className='m-3' style={{ fontSize: "13px" }}>- Steve Job's</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-1 col-lg-1 col-md-1"></div>
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <div className={`${styles.about_img_2}`}>
                                    <img src={about_img_02} alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_page