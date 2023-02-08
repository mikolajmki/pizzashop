import React from "react";
import css from '../styles/Hero.module.css';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import { UilPhone } from '@iconscout/react-unicons';
import Image from "next/image";
import Pizza1 from '../assets/p1.jpg';

export default function Hero(props) {
    return (
        <div className={css.container}>
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>Faster than ever!</span>
                    <Image src={Cherry} alt="" width={40} height={25}/>
                </div>
                <div className={css.heroText}>

                    <span>Say hello to the fastest </span>
                    <span>of delivery</span>
                    <span>to your <span style={{ color: 'var(--themeRed)' }}>door</span></span>

                </div>
                <span className={css.miniText}>
                    On our way to send you the best pizza you`ve ever had!
                </span>
                <button className={`btn ${css.btn}`}>
                    Get started
                </button>
            </div>
            <div className={css.rightSide}>
                1
            </div>
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>
                <div className={css.contactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone style={{ color: 'var(--white)' }}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza </span>
                        <span style={{ color: 'var(--themeRed)' }}><span>$</span>7.49</span>
                    </div>
                </div>
            </div>
        </div>
    )
};