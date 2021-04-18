import React from 'react'
import ImageToggleOnMouseOver from '../services/ImageToggleOnMouseOver'

export default function ImageChangeOnMouseOver() {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/images/arjun.jpeg"
            secondaryImg="/images/img.png" 
             alt=""/>
        </div>
    )
}
