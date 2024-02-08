import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Slider = ({ children }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper(sliderRef.current, {
            slidesPerView: 2,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        const handleResize = () => {
            swiper.update(); // Update swiper on window resize
        };

        window.addEventListener('resize', handleResize);

        // Destroy Swiper instance and remove event listener when component unmounts
        return () => {
            swiper.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run only once after the initial render

    return (
        <div className="container mx-auto my-5 overflow-hidden relative">
            <div className="swiper-container" ref={sliderRef}>
                <div className="swiper-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Slider;
