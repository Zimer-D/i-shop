import React, { FC, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import { Image }  from '../../../types'

interface ImgCarouselProps {
    images:Image[] | undefined
}

const ImgCarousel:FC<ImgCarouselProps> = ( {images}) => {
    const [index, setIndex] = useState(0);


    //@ts-ignore
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel  activeIndex={index} onSelect={handleSelect}>
            {images?.map(item=>(
                <Carousel.Item key={item.id}>
                <img
                
                    className="d-block w-100"
                    src={process.env.REACT_APP_IMG_URL+item.image_url}
                />
                
            </Carousel.Item>
            )) }
        </Carousel>
    );
}

export default ImgCarousel