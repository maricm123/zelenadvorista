"use client"
import Image from 'next/image';
import AboutV1ListData from '@/assets/jsonData/about/AboutV1ListData.json'
import AboutV1List from './AboutV1List';
import Counter from '../counter/Counter';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {

    useEffect(() => {
        // Set initial position
        gsap.set('.animation-shape', {
            yPercent: 10,
        });

        // Create the animation
        gsap.to('.animation-shape', {
            yPercent: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.animation-shape',
                scrub: 1,
            },
        });
    }, []);

    return (
        <>
            <div className="about-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="about-style-one-thumb">
                                <Image src="/assets/img/about/cikarezezivicu.jpg" alt="Image Not Found" width={615} height={852} />
                                <div className="animation-shape">
                                    <Image src="/assets/img/illustration/cikarezezivicu.jpg" alt="Image Not Found" width={250} height={533} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-style-one-info">
                                <h2 className="title">  <br /> </h2>
                                <p>
                                    Naš tim sa posvećenjem radi već četiri godine, kontinuirano se usavršavajući u svakom aspektu održavanja vrtova i dvorišta. Kroz kombinaciju stručnog znanja, iskustva i inovativnih pristupa, osiguravamo da se vaš dvorišni prostor nalazi na najvećem mogućem nivou. Svaki član tima je posvećen da pruži izuzetnu uslugu i zadržava najnovije tehnike i trendove u vrtlarstvu kako bi vaš vrt bio pravi raj u kojem ćete uživati.
                                </p>
                                <div className="fun-fact-style-flex mt-35">
                                    <div className="counter">
                                        <div className="timer"><Counter end={100} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Zadovoljnih <br /> mušterija</span>
                                </div>
                                <ul className="top-feature">
                                    {AboutV1ListData.map(list =>
                                        <AboutV1List key={list.id} list={list} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;