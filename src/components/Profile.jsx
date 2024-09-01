import React from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const cardVariants = {
        offscreen: {
            opacity: 0,
            x: -50,
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 2, 
            }
        }
    };

    const cardVariants2 = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 2, 
            }
        }
    };
    
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-24 lg:pt-0 bg-slate-100  dark:bg-dark transition-all ease-in duration-500">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-2/3">
                    <motion.div className='w-full lg:w-2/3' initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.2 }} variants={cardVariants}>
                            <h1 className="text-base font-semibold text-primary dark:text-primary2 md:text-xl z-20">
                                Halo Everyone, Saya
                                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white transition-all ease-in duration-500 z-20">
                                    Taufiq Aditya Putra
                                </span>
                            </h1>
                            <h2 className="font-medium text-secondary text-lg mb-5 mt-2 lg:text-2xl">
                                sebagai 
                                <span className="text-dark dark:text-white transition-all ease-in duration-500">
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            ' FrontEnd Programmer',
                                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                                            ' Graphic Designer',
                                            1000,
                                            ' UI/UX Designer',
                                            1000,
                                            ' Sosial Media Specialis',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h2>
                            <p className="font-medium text-secondary mb-10 leading-relaxed">
                                Saya merupakan lulusan S1 Informatika dengan hasil kerja keras. Saya memiliki pengalaman yang solid dan keterampilan yang kuat dalam bidang UI/UX dan desain grafik. Dengan latar belakang yang beragam, saya telah berhasil menghasilkan antarmuka pengguna yang menarik dan fungsional untuk berbagai platform dan aplikasi.
                            </p>
                            <a href="https://drive.google.com/drive/folders/1M_XfxosvBDx4xMqYK0prS2Ku7xGkSZ0p?usp=drive_link" className="text-base font-semibold text-white py-3 px-8 rounded-full bg-primary dark:bg-primary2 dark:text-dark dark:shadow-primary2/50 shadow-primary/50 shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                                Download CV
                            </a>
                        </motion.div>
                    </div>
                    
                    <div className="w-full self-end px-4 lg:w-1/3">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.2 }} variants={cardVariants2}>
                                <img src="./img/myfoto1.png" alt="Taufiq Aditya" className="relative z-10 max-w-full mx-auto" />
                                <div className="absolute rounded-full w-60 h-60 bg-primary dark:bg-primary2 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

