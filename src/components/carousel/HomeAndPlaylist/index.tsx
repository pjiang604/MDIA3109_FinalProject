import Image from "next/image";
import React, { Component } from "react";
import Carousel from 'nuka-carousel';
import styles from './HomeAndPlaylistCarousel.module.css';

export default function HomeAndPlaylistCarousel() {
    return (
        <div className={styles.carouselContainer}>
            <Carousel className={styles.carousel}>
                <Image src="/CarouselPics/pic1.JPG" height={300} width={700} alt="carousel pic 1"/>
                <Image src="/CarouselPics/pic2.jpg" height={300} width={700} alt="carousel pic 2"/>
                <Image src="/CarouselPics/pic3.jpg" height={300} width={700} alt="carousel pic 3"/>
                <Image src="/CarouselPics/pic4.JPG" height={300} width={700} alt="carousel pic 4"/>
                <Image src="/CarouselPics/pic5.jpg" height={300} width={700} alt="carousel pic 5"/>
                <Image src="/CarouselPics/pic6.jpg" height={300} width={700} alt="carousel pic 6"/>
            </Carousel>
        </div>
    );
}
