import React, { useEffect } from 'react'
import ProductDetails from './productDetails/ProductDetails'

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{ marginBottom: "10%" }}>
      <ProductDetails />
    </div>
  )
}

export default Shop;