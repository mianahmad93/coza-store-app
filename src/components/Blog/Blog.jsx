import React, { useEffect } from 'react'
import Blog_page from './Blog_page'

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ marginBottom: "10%" }}>
            <Blog_page itemsPerPage={3} />
        </div>
    )
}

export default Blog