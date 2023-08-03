import React, { useState } from "react";
import { motion } from "framer-motion";
import Hello from "../assets/Hello.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonials from "./Testimonials"
import { useMediaQuery } from "react-responsive";
import visa from "../assets/png/visa.png"
import paypal from "../assets/png/paypal.png"
import LogoCarouselSlide from "../components/LogoCarouselSlide";
import unity from "../assets/png/unity.png";
import android from "../assets/png/android.png";
import bing from "../assets/png/bing.png";
import netflix from "../assets/png/netflix.png";
import linkedIn from "../assets/png/linkedIn.png";
import snap from "../assets/png/snap.png";
import swarm from "../assets/png/swarm.png";
import youtube from "../assets/png/youtube.png";
import zoom from "../assets/png/zoom.png";
import microsoft from "../assets/png/microsoft.png";
import apple from "../assets/png/apple.png";
import meta from "../assets/png/meta.png";
import instagram from "../assets/png/instagram.png";
import wordpress from "../assets/png/wordpress.png";
import twitter from "../assets/png/twitter.png";
import nike from "../assets/png/nike.png";
import social from "../assets/png/social.png";
import amazon from "../assets/png/amazon.png";
import Features from "./Features"
import Search from "../components/Search";
const logos = [
    { id: 1, image: amazon },
    { id: 2, image: unity },
    { id: 3, image: social },
    { id: 4, image: twitter },
    { id: 5, image: instagram },
    { id: 6, image: wordpress },
    { id: 7, image: nike },
    { id: 8, image: meta },
    { id: 9, image: apple },
    { id: 10, image: microsoft },
    { id: 11, image: android },
    { id: 12, image: bing },
    { id: 13, image: netflix },
    { id: 14, image: linkedIn },
    { id: 15, image: snap },
    { id: 16, image: swarm },
    { id: 17, image: youtube },
    { id: 18, image: zoom },
    { id: 19, image: paypal },
    { id: 20, image: visa },
];

const Home = () => {
    const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
    const [open, setOpen] = useState(false);

    return (
        <section id="home" className="bg-gray-20 py-10 md:h-full md:pb-0">
            <div className="mx-auto w-[90%] md:flex md:justify-between mb-5">
                {/* Image */}
                <div className="relative flex justify-center items-center md:w-1/2">
                    <div >
                        <img alt="home-page-text" src={Hello} />
                    </div>
                </div>

                {/* Intro Text */}
                <div className="md:w-1/2 md:text-start md:pl-8">
                    <div className="md:mt-[2%] mt-[6%] flex flex-col md:gap-10 gap-5">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 1.2, type: "spring", bounce: 0.6 },
                                },
                            }}
                            className="font-semibold sm:text-3xl text-2xl text-[#2a6a94] "
                        >
                            Welcome to CodeSphere - Where Talent Meets Opportunity!
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="text-md font-semibold"
                        >
                            At CodeSphere, we connect companies with top-tier software engineers in India. Our streamlined platform simplifies the hiring process, offering you access to a diverse talent pool of skilled professionals.
                        </motion.div>
                        <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                           {!open && <button className="bg-[#2a6a94] text-white py-2 px-3 rounded-md font-semibold" onClick={() => setOpen(true)}>Get Started</button>}
                        </motion.div>
                    </div>
                </div>
            </div>
            {!open ? <><div className="bg-[#91C8E4] px-3 sm:py-6 py-2 mt-10">
                <h2 className="sm:text-2xl text-xl font-semibold mt-2 mb-5 sm:ml-5 ml-2">Trusted by more than 100+ companies...</h2>
                <div className="flex flex-wrap sm:w-[90%] w-full mx-auto" style={{ overflowX: "hidden" }}>
                    {!isMobileScreen ? <Carousel
                        showArrows={false}
                        showStatus={false}
                        transitionTime={1700}
                        showIndicators={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={6000}
                        stopOnHover={false}
                        swipeable={true}
                        className="w-full h-[100px] flex justify-center items-center mb-4"
                    >
                        <div >
                            <LogoCarouselSlide logos={logos.slice(0, 6)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(6, 12)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(12, 18)} />
                        </div>

                    </Carousel> : <Carousel
                        showArrows={false}
                        showStatus={false}
                        transitionTime={1700}
                        showIndicators={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={6000}
                        stopOnHover={false}
                        swipeable={true}
                        className="w-full h-[100px] flex justify-center items-center mb-4"
                    >
                        <div >
                            <LogoCarouselSlide logos={logos.slice(0, 4)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(4, 8)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(8, 12)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(12, 16)} />
                        </div>
                        <div >
                            <LogoCarouselSlide logos={logos.slice(16)} />
                        </div>

                    </Carousel>}

                </div>
            </div>
                <Features />
                <Testimonials /></> : <Search/>}

        </section>
    );
};

export default Home;
