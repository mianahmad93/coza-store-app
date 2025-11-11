import React, { useEffect, useState } from 'react';
import styles from './Goto_Top.module.css';
import { IoIosArrowUp } from "react-icons/io";


const Goto_Top = () => {
    const [isVisible, setVisible] = useState(false)
    function gotoBtn() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const listenToScroll = () => {
        let heightToHidden = 280;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    return (
        <section>
            {isVisible && (
                <div className={styles.top_div}>
                    <button className={styles.top_btn} onClick={gotoBtn} ><IoIosArrowUp style={{ color: "white" }} /></button>
                </div>
            )}
        </section>
    )
}

export default Goto_Top;