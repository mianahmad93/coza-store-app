import React, { useEffect } from 'react'
import About_page from './About_page'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <About_page />
        </div>
    )
}

export default About