import React, {useRef, useEffect, useState} from 'react'

export default function ImageToggleOnScroll({primaryImg, SecondaryImg}) {
    const imageRef = useRef(null)
    const isInView = () => {
        const rect = imageRef.current. getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const[inVeiw, setInView]  = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img

        src={inVeiw? SecondaryImg: primaryImg}
       alt="" ref={imageRef}
        />
    )
}
