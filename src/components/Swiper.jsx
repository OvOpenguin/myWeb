import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// My scss
import '../sass/swiperbase.scss';

// My Data
import { History } from '../json/History';



export default function App() {

    const swiperRef = useRef(null);


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section id='swiperBanner'>

            <div className="timeline">
                {History.map((event, index) => (
                    <button
                        key={event.id}
                        onClick={() => swiperRef.current.slideToLoop(index)}
                        className="timeline-btn"
                    >
                        {event.time}
                    </button>
                ))}
            </div>


            <Swiper
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                effect=''
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >

                {
                    History.map((event) => (
                        <SwiperSlide key={event.id}>
                            <div className='title st'><h1>{event.time}</h1></div>
                            <div className='se'><h4>{event.name}</h4></div>
                            <img src={event.image} alt={event.name} />
                        </SwiperSlide>
                    ))
                }

                {/* 倒數 */}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </section>
    );
}


