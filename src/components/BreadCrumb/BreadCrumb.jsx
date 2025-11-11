import React from 'react'
import { Link } from 'react-router-dom';
import styles from './BreadCrumb.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className={styles.BreadCrumb_page}>
      <Link to={'/'}>Home
        <MdKeyboardArrowRight  />
      </Link>
      <span>Shoping Cart</span>
    </div>
  )
}

export default BreadCrumb