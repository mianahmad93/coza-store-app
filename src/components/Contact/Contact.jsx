import React, { useEffect } from 'react'
import Contact_page from './Contact_page'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Contact_page />
        </div>
    )
}

export default Contact