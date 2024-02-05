import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MusicAndArtCarousel() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: '40px',
        slidesToShow: 3,
        
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image
                        src="/Neighbourhoods/kitsilano.png"
                        height={500}
                        width={500}
                        alt="neighbourhood"
                    />
                </div>
                <div>
                    <Image
                        src="/UserInfo/profilePic.jpg"
                        height={500}
                        width={500}
                        alt="neighbourhood"
                    />
                </div>
                <div>
                    <Image
                        src="/Neighbourhoods/kitsilano.png"
                        height={500}
                        width={500}
                        alt="neighbourhood"
                    />
                </div>
            </Slider>
        </div>
    );
}
