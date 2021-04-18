import React from 'react'
import ImageToggleOnScroll from '../services/ImageToggleOnScroll'

export default function ImageChangeOnScroll() {
    return (
        <div>
            <ImageToggleOnScroll 
            primaryImg="/images/arjun.jpeg"
            secondaryImg="/images/img.png" 
             alt="hello there" />
        </div>
    )
}
