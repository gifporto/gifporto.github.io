import React, { useState, useEffect } from 'react'
import dataweb from '../data/frontend.json';
import datauiux from '../data/uiux.json';
import datadesain from '../data/desain.json';
import datablender from '../data/blender.json';
import dataclient from '../data/client.json';
import datasertif from '../data/sertif.json'

const All = () => {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        const allItems = document.querySelectorAll(".all");
        allItems.forEach((item) => {
        item.style.display = "none";
        });

        const itemsToShow = document.querySelectorAll("." + tab);
        itemsToShow.forEach((item) => {
        item.style.display = "block";
        });
    };

    useEffect(() => {
        handleTabClick("frontend");
    }, []);

    //kategori tab
    const [activeTab2, setActiveTab2] = useState("testall");
    const handle2TabClick = (tab) => {
        setActiveTab2(tab);

        const allItems = document.querySelectorAll(".testall");
        allItems.forEach((item) => {
        item.style.display = "none";
        });

        const itemsToShow = document.querySelectorAll("." + tab);
        itemsToShow.forEach((item) => {
        item.style.display = "block";
        });
    };

    useEffect(() => {
        handle2TabClick("test1");
    }, []);

    return (
        <div className="flex flex-wrap">
            {/* bottom bar mobile */}
            <div className="tabs_wrap2 fixed bottom-0 left-0 right-0 m-1 py-1 bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow lg:hidden z-30">
                <ul className="flex justify-end gap-2 py-2 px-8">
                    <li className={activeTab2 === "test1" ? "btn3 active" : "btn3"} onClick={() => handle2TabClick("test1")}>
                        About
                    </li>
                    <li className={activeTab2 === "test2" ? "btn3 active" : "btn3"} onClick={() => handle2TabClick("test2")}>
                        Resume
                    </li>
                    <li className={activeTab2 === "test3" ? "btn3 active" : "btn3"} onClick={() => handle2TabClick("test3")}>
                        Portofolio
                    </li>
                    <li className={activeTab2 === "test4" ? "btn3 active" : "btn3"} onClick={() => handle2TabClick("test4")}>
                        Sertificate
                    </li>
                </ul>
            </div>
            {/* kanan */}
            <div className="wrapperprofile py-1 w-full hidden lg:flex justify-end">
                <div class="tabs_wrap2">
                    <ul class="flex flex-wrap justify-center lg:justify-end gap-2">
                        <li className={activeTab2 === "test1" ? "btn2 active" : "btn2"} onClick={() => handle2TabClick("test1")}>
                            About
                        </li>
                        <li className={activeTab2 === "test2" ? "btn2 active" : "btn2"} onClick={() => handle2TabClick("test2")}>
                            Resume
                        </li>
                        <li className={activeTab2 === "test3" ? "btn2 active" : "btn2"} onClick={() => handle2TabClick("test3")}>
                            Portofolio
                        </li>
                        <li className={activeTab2 === "test4" ? "btn2 active" : "btn2"} onClick={() => handle2TabClick("test4")}>
                            Sertificate
                        </li>
                    </ul>
                </div>
            </div>
            <div className='wrapperprofile overflow-visible'>
                <div className="w-full">
                    {/* opsi 1 */}
                    <div className='flex flex-wrap test1 testall'>
                        <h4 class="text1">Skills</h4>
                        <div class="grid gap-4 lg:grid-cols-2">
                            <div class="wrapperjob ">
                                <div class="containertool">
                                    <div class="flex justify-center w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="70" viewBox="0 0 45.38 35.45">
                                            <path class="fil0" d="M42.67 0l-39.97 0c-1.49,0 -2.7,1.21 -2.7,2.7l0 30.04c0,1.49 1.21,2.7 2.7,2.7l39.97 0c1.49,0 2.7,-1.21 2.7,-2.7l0 -30.04c0,-1.49 -1.21,-2.7 -2.7,-2.7zm-1.78 8.8l-36.4 0c-0.49,0 -0.89,0.4 -0.89,0.89l0 21.27c0,0.49 0.4,0.89 0.89,0.89l10.55 0c0.49,0 0.89,-0.4 0.89,-0.89 0,-0.49 -0.4,-0.89 -0.89,-0.89l-9.66 0 0 -19.5 34.63 0 0 19.5 -17.85 0c-0.49,0 -0.89,0.4 -0.89,0.89 0,0.49 0.4,0.89 0.89,0.89l18.73 0c0.49,0 0.89,-0.4 0.89,-0.89l0 -21.27c0,-0.49 -0.4,-0.89 -0.89,-0.89zm-10.23 14.24l0 0.89c0,0.5 -0.4,0.9 -0.9,0.9l-0.01 0c-0.49,0 -0.89,0.4 -0.89,0.89 0,0.49 0.4,0.89 0.89,0.89l0.01 0c1.47,0 2.67,-1.2 2.67,-2.67l0 -0.89c0,-0.32 0.13,-0.64 0.36,-0.86l1.15 -1.12c0.17,-0.17 0.27,-0.39 0.27,-0.63 0,-0.24 -0.09,-0.46 -0.26,-0.63l-1.17 -1.17c-0.23,-0.23 -0.35,-0.53 -0.35,-0.84l-0.01 -0.93c-0.01,-1.46 -1.21,-2.65 -2.67,-2.65 -0.49,0 -0.89,0.4 -0.89,0.89 0,0.49 0.4,0.89 0.89,0.89 0.49,0 0.9,0.4 0.9,0.89l0.01 0.93c0.01,0.79 0.32,1.53 0.87,2.09l0.54 0.54 -0.51 0.5c-0.57,0.56 -0.9,1.33 -0.9,2.13zm-15.93 -5.28l0 -0.89c0,-0.5 0.4,-0.9 0.9,-0.9l0.01 0c0.49,0 0.89,-0.4 0.89,-0.89 0,-0.49 -0.4,-0.89 -0.89,-0.89l-0.01 0c-1.47,0 -2.67,1.2 -2.67,2.67l0 0.89c0,0.32 -0.13,0.64 -0.36,0.86l-1.15 1.12c-0.17,0.17 -0.26,0.39 -0.27,0.63 -0,0.24 0.09,0.46 0.26,0.63l1.17 1.17c0.23,0.23 0.35,0.53 0.35,0.84l0.01 0.93c0.01,1.46 1.21,2.65 2.67,2.65 0.49,0 0.89,-0.4 0.89,-0.89 0,-0.49 -0.4,-0.89 -0.89,-0.89 -0.49,0 -0.9,-0.4 -0.9,-0.89l-0.01 -0.93c-0.01,-0.79 -0.32,-1.53 -0.87,-2.09l-0.54 -0.54 0.51 -0.5c0.57,-0.56 0.9,-1.33 0.9,-2.13zm11.05 -2.6c-0.42,-0.25 -0.96,-0.11 -1.21,0.31l-5.26 8.89c-0.25,0.42 -0.11,0.97 0.31,1.21 0.14,0.08 0.3,0.12 0.45,0.12 0.3,0 0.6,-0.16 0.76,-0.44l5.26 -8.89c0.25,-0.42 0.11,-0.96 -0.31,-1.21zm-14.15 -9.56c0.02,0.05 0.05,0.1 0.08,0.15 0.03,0.05 0.07,0.09 0.11,0.13 0.04,0.04 0.09,0.08 0.13,0.11 0.05,0.03 0.1,0.06 0.15,0.08 0.05,0.02 0.11,0.04 0.17,0.05 0.06,0.01 0.12,0.02 0.17,0.02 0.06,0 0.12,-0.01 0.17,-0.02 0.06,-0.01 0.11,-0.03 0.17,-0.05 0.05,-0.02 0.1,-0.05 0.15,-0.08 0.05,-0.03 0.09,-0.07 0.13,-0.11 0.04,-0.04 0.08,-0.09 0.11,-0.13 0.03,-0.05 0.06,-0.1 0.08,-0.15 0.02,-0.05 0.04,-0.11 0.05,-0.17 0.01,-0.06 0.02,-0.12 0.02,-0.17 0,-0.06 -0.01,-0.12 -0.02,-0.17 -0.01,-0.06 -0.03,-0.11 -0.05,-0.17 -0.02,-0.05 -0.05,-0.11 -0.08,-0.15 -0.03,-0.05 -0.07,-0.09 -0.11,-0.13 -0.04,-0.04 -0.09,-0.08 -0.13,-0.11 -0.05,-0.03 -0.1,-0.06 -0.15,-0.08 -0.05,-0.02 -0.11,-0.04 -0.17,-0.05 -0.11,-0.02 -0.23,-0.02 -0.35,0 -0.06,0.01 -0.11,0.03 -0.17,0.05 -0.05,0.02 -0.11,0.05 -0.15,0.08 -0.05,0.03 -0.09,0.07 -0.13,0.11 -0.04,0.04 -0.08,0.09 -0.11,0.13 -0.03,0.05 -0.06,0.1 -0.08,0.15 -0.02,0.05 -0.04,0.11 -0.05,0.17 -0.01,0.06 -0.02,0.12 -0.02,0.17 0,0.06 0.01,0.12 0.02,0.17 0.01,0.06 0.03,0.11 0.05,0.17zm-3.54 0c0.02,0.05 0.05,0.1 0.08,0.15 0.03,0.05 0.07,0.09 0.11,0.13 0.16,0.17 0.39,0.26 0.63,0.26 0.06,0 0.12,-0.01 0.17,-0.02 0.06,-0.01 0.11,-0.03 0.17,-0.05 0.05,-0.02 0.1,-0.05 0.15,-0.08 0.05,-0.03 0.09,-0.07 0.14,-0.11 0.04,-0.04 0.08,-0.09 0.11,-0.13 0.03,-0.05 0.06,-0.1 0.08,-0.15 0.02,-0.05 0.04,-0.11 0.05,-0.17 0.01,-0.06 0.02,-0.12 0.02,-0.17 0,-0.06 -0.01,-0.12 -0.02,-0.17 -0.01,-0.06 -0.03,-0.11 -0.05,-0.17 -0.02,-0.05 -0.05,-0.11 -0.08,-0.15 -0.03,-0.05 -0.07,-0.09 -0.11,-0.13 -0.04,-0.04 -0.09,-0.08 -0.14,-0.11 -0.05,-0.03 -0.1,-0.06 -0.15,-0.08 -0.05,-0.02 -0.11,-0.04 -0.17,-0.05 -0.11,-0.02 -0.23,-0.02 -0.35,0 -0.06,0.01 -0.11,0.03 -0.17,0.05 -0.05,0.02 -0.11,0.05 -0.15,0.08 -0.05,0.03 -0.09,0.07 -0.13,0.11 -0.04,0.04 -0.08,0.09 -0.11,0.13 -0.03,0.05 -0.06,0.1 -0.08,0.15 -0.02,0.05 -0.04,0.11 -0.05,0.17 -0.01,0.06 -0.02,0.11 -0.02,0.17 0,0.06 0.01,0.12 0.02,0.17 0.01,0.06 0.03,0.11 0.05,0.17zm-3.55 0c0.02,0.05 0.05,0.1 0.08,0.15 0.03,0.05 0.07,0.09 0.11,0.13 0.16,0.17 0.39,0.26 0.63,0.26 0.06,0 0.12,-0.01 0.17,-0.02 0.06,-0.01 0.11,-0.03 0.17,-0.05 0.05,-0.02 0.1,-0.05 0.15,-0.08 0.05,-0.03 0.09,-0.07 0.13,-0.11 0.04,-0.04 0.08,-0.09 0.11,-0.13 0.03,-0.05 0.06,-0.1 0.08,-0.15 0.02,-0.05 0.04,-0.11 0.05,-0.17 0.01,-0.06 0.02,-0.12 0.02,-0.17 0,-0.06 -0.01,-0.12 -0.02,-0.17 -0.01,-0.06 -0.03,-0.11 -0.05,-0.17 -0.02,-0.05 -0.05,-0.11 -0.08,-0.15 -0.03,-0.05 -0.07,-0.09 -0.11,-0.13 -0.04,-0.04 -0.09,-0.08 -0.13,-0.11 -0.05,-0.03 -0.1,-0.06 -0.15,-0.08 -0.05,-0.02 -0.11,-0.04 -0.17,-0.05 -0.11,-0.02 -0.23,-0.02 -0.35,0 -0.06,0.01 -0.11,0.03 -0.17,0.05 -0.05,0.02 -0.11,0.05 -0.15,0.08 -0.05,0.03 -0.09,0.07 -0.13,0.11 -0.04,0.04 -0.08,0.09 -0.11,0.13 -0.03,0.05 -0.06,0.1 -0.08,0.15 -0.02,0.05 -0.04,0.11 -0.05,0.17 -0.01,0.06 -0.02,0.11 -0.02,0.17 0,0.06 0.01,0.12 0.02,0.17 0.01,0.06 0.03,0.11 0.05,0.17zm12.4 0.55l22.86 0c0.49,0 0.89,-0.4 0.89,-0.89 0,-0.49 -0.4,-0.89 -0.89,-0.89l-22.86 0c-0.49,0 -0.89,0.4 -0.89,0.89 0,0.49 0.4,0.89 0.89,0.89zm26.68 26.6c0,0.51 -0.42,0.93 -0.93,0.93l-39.97 0c-0.51,0 -0.93,-0.42 -0.93,-0.93l0 -30.04c0,-0.51 0.42,-0.93 0.93,-0.93l39.97 0c0.51,0 0.93,0.42 0.93,0.93l0 30.04z"/>
                                        </svg>
                                    </div>
                                    <div class="px-0 flex-1">
                                        <h3 class="tools-h3">FrontEnd Developer</h3>
                                        <p class="text-sm mt-1 text-secondary">Developing a responsive website that is easy to interact with features.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapperjob">
                                <div class="containertool">
                                    <div class="flex justify-center w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 45.38 35.45">
                                            <path class="fil0" d="M17.92 29.59l-14.03 0c-1.02,0 -1.99,-0.39 -2.72,-1.11 -0.68,-0.67 -1.09,-1.55 -1.16,-2.48 -0.01,-0.03 -0.01,-0.09 -0.01,-0.14l0 -20.43c0,-2.22 1.8,-4.04 4.03,-4.04 0.41,0 0.74,0.33 0.74,0.74l0 4.5 14.52 0 6.11 -6.13c0.32,-0.33 0.76,-0.51 1.22,-0.51 0.46,0 0.89,0.18 1.22,0.51l1.49 1.49c0.32,0.33 0.5,0.76 0.5,1.22 0,0.46 -0.18,0.89 -0.5,1.22l-2.19 2.19 3.06 0c0.41,0 0.74,0.33 0.74,0.74l0 9.17 0.99 -1c0.21,-0.21 0.53,-0.28 0.8,-0.16 0.28,0.11 0.46,0.38 0.46,0.68l0 16.38c0,0.41 -0.33,0.74 -0.74,0.74l-16.32 0c-0.3,0 -0.57,-0.18 -0.68,-0.46 -0.11,-0.28 -0.05,-0.59 0.16,-0.81l2.32 -2.33zm7.75 -27.27l1.84 1.84 0.77 -0.77c0.1,-0.1 0.1,-0.25 0,-0.35l-1.49 -1.49c-0.1,-0.1 -0.25,-0.1 -0.35,0l-0.77 0.77zm-1.04 1.05l-0.51 0.52 1.84 1.84 0.51 -0.52 -1.84 -1.84zm7.08 17.85l0 -3.36 -7.99 8.02c-0.02,0.02 -0.04,0.03 -0.06,0.05 -0.13,0.11 -0.3,0.17 -0.47,0.17 -0.17,0 -0.33,-0.06 -0.47,-0.17 -0.02,-0.02 -0.04,-0.03 -0.06,-0.05 -0.29,-0.29 -0.29,-0.76 0,-1.05l6.78 -6.8 0 -9.91 -3.8 0 -9.79 9.82c-0.02,0.02 -0.04,0.04 -0.07,0.06 -0.02,0.01 -0.03,0.03 -0.07,0.05 -0.02,0.01 -0.03,0.02 -0.07,0.04 -0.02,0.01 -0.04,0.02 -0.04,0.02 -0.01,0 -0.02,0.01 -0.03,0.01l-1.49 0.53 8.02 0c0.41,0 0.74,0.33 0.74,0.74 0,0.41 -0.33,0.74 -0.74,0.74l-13.28 0c-0.41,0 -0.74,-0.33 -0.74,-0.74 0,-0.41 0.33,-0.74 0.74,-0.74l1.4 0 1.53 -4.36c0,-0.01 0.01,-0.02 0.01,-0.03 0,-0.01 0.01,-0.02 0.03,-0.07 0.01,-0.01 0.01,-0.03 0.04,-0.07 0.01,-0.02 0.02,-0.03 0.04,-0.06 0.02,-0.02 0.04,-0.04 0.05,-0.06l2.24 -2.25c0.29,-0.29 0.76,-0.29 1.04,0 0.29,0.29 0.29,0.76 0,1.05l-1.72 1.73 1.84 1.84 9.56 -9.59 -1.84 -1.84 -6.42 6.45c-0.29,0.29 -0.76,0.29 -1.04,0 -0.29,-0.29 -0.29,-0.76 0,-1.05l2.21 -2.22 -13.04 0 0 9.04c0,0.41 -0.33,0.74 -0.74,0.74 -0.41,0 -0.74,-0.33 -0.74,-0.74l0 -14.17c-1.06,0.32 -1.82,1.32 -1.82,2.45l0 17.3c0.52,-0.43 1.15,-0.72 1.82,-0.85l0 -2.82c0,-0.41 0.33,-0.74 0.74,-0.74 0.41,0 0.74,0.33 0.74,0.74l0 3.49c0,0.41 -0.33,0.74 -0.74,0.74 -0.04,0 -0.09,0 -0.16,0.01 -0.03,0 -0.06,0 -0.13,0.01 -0.03,0 -0.07,0.01 -0.11,0.02 -0.04,0.01 -0.08,0.01 -0.13,0.02 -0.77,0.16 -1.43,0.68 -1.78,1.4 -0.01,0.03 -0.03,0.07 -0.06,0.13 -0.01,0.03 -0.02,0.06 -0.03,0.08 -0,0.01 -0.01,0.03 -0.02,0.04 -0.01,0.02 -0.02,0.05 -0.02,0.07 -0.01,0.02 -0.01,0.04 -0.02,0.06 -0.01,0.02 -0.01,0.03 -0.01,0.05 -0.01,0.03 -0.01,0.06 -0.03,0.11 -0.01,0.04 -0.01,0.07 -0.02,0.12 -0.01,0.03 -0.01,0.07 -0.02,0.11 -0.01,0.08 -0.02,0.16 -0.02,0.24 0.04,1.31 1.1,2.34 2.41,2.34l15.5 0 1.87 -1.87c0.25,-0.25 0.65,-0.29 0.94,-0.09 0.04,0.03 0.07,0.06 0.11,0.09 0.29,0.29 0.29,0.76 0,1.05l-4.4 4.42 13.81 0 0 -1.78 -0.63 0c-0.41,0 -0.74,-0.33 -0.74,-0.74 0,-0.41 0.33,-0.74 0.74,-0.74l0.63 0 0 -0.93 -0.63 0c-0.41,0 -0.74,-0.33 -0.74,-0.74 0,-0.41 0.33,-0.74 0.74,-0.74l0.63 0 0 -0.93 -0.63 0c-0.41,0 -0.74,-0.33 -0.74,-0.74 0,-0.41 0.33,-0.74 0.74,-0.74l0.63 0 0 -0.93 -0.63 0c-0.41,0 -0.74,-0.33 -0.74,-0.74 0,-0.41 0.33,-0.74 0.74,-0.74l0.63 0zm-2.44 1.88c0.28,0.11 0.46,0.38 0.46,0.68l0 5.26c0,0.41 -0.33,0.74 -0.74,0.74l-5.24 0c-0.3,0 -0.57,-0.18 -0.68,-0.46 -0.11,-0.28 -0.05,-0.59 0.16,-0.81l5.24 -5.26c0.21,-0.21 0.53,-0.27 0.8,-0.16zm-3.74 5.2l2.72 0 0 -2.73 -2.72 2.73zm-11.53 -11.19l-1.22 -1.23 -0.29 0.84 0.69 0.69 0.83 -0.3z"/>
                                        </svg>
                                    </div>
                                    <div class="px-0 flex-1">
                                        <h3 class="tools-h3">UI/UX Design</h3>
                                        <p class="text-sm mt-1 text-secondary">Creating an intuitive interface and an optimal user experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapperjob">
                                <div class="containertool">
                                    <div class="flex justify-center w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 55.66 29.23">
                                        <path class="fil0" d="M7.27 30.11l36.08 0c2.45,0 4.28,-1.99 4.28,-4.28 0,-2.29 -1.99,-4.28 -4.28,-4.28l-2.29 0 0.46 -4.28c1.07,-1.07 1.84,-2.6 1.68,-4.28 0,-2.91 -3.82,-8.41 -5.5,-11.01 -0.3,-0.31 -0.61,-0.46 -1.07,-0.46 -0.46,0.15 -0.61,0.46 -0.61,0.92 0,1.84 -1.38,3.97 -2.75,5.96 -1.22,1.83 -2.29,3.36 -2.29,4.74 0,1.68 0.76,3.21 1.84,4.28l0.61 4.13 -4.28 0 0 -19.11c0,-0.46 -0.46,-0.92 -0.92,-0.92l-6.73 -0c-0.46,0 -0.92,0.46 -0.92,0.92l0 19.11 -2.3 0 0 -9.63c0,-0.15 0,-0.31 0,-0.31l-4.13 -9.63c-0.16,-0.31 -0.46,-0.61 -0.92,-0.61 -0.46,-0 -0.76,0.3 -0.92,0.61 -4.28,10.09 -3.97,9.63 -4.13,9.79l0 0.15 0 9.48 -1.07 0c-2.45,0 -4.28,1.99 -4.28,4.28 0,2.29 1.99,4.43 4.44,4.43zm27.52 -20.8c0.92,-1.38 1.98,-2.91 2.6,-4.43 1.68,2.6 3.82,6.27 3.82,8.1l0 0c0,2.29 -1.83,4.28 -4.13,4.28 -2.45,0 -4.28,-1.83 -4.28,-4.13 0.15,-0.92 1.07,-2.45 1.99,-3.82zm0.15 9.33c1.38,0.61 3.06,0.46 4.43,0l-0.31 2.91 -3.67 0 -0.46 -2.91zm-12.54 -15.29l4.74 0 0 2.9 -1.99 0c-0.46,0 -0.92,0.46 -0.92,0.92 0,0.46 0.46,0.92 0.92,0.92l1.99 -0 0 3.82 -1.99 0c-0.46,0 -0.92,0.46 -0.92,0.92 0,0.46 0.46,0.92 0.92,0.92l1.99 0 0 3.82 -1.99 0c-0.46,0 -0.92,0.46 -0.92,0.92 0,0.46 0.46,0.92 0.92,0.92l1.99 0 0 1.99 -4.74 0 0 -18.04zm-6.12 9.48l0 8.56 -2.14 0 0 -8.56 2.14 0zm-3.06 -7.95l2.6 6.12 -5.2 0 2.6 -6.12zm-3.06 7.95l2.14 0 0 8.56 -2.14 0 0 -8.56zm36.97 -5.95c1.89,0 3.44,-1.55 3.44,-3.44 0,-1.89 -1.55,-3.44 -3.44,-3.44 -1.89,0 -3.44,1.55 -3.44,3.44 0,1.88 1.44,3.44 3.44,3.44zm0 -5.55c1.11,0 2.11,0.89 2.11,2.11 0,1.22 -0.89,2.11 -2.11,2.11 -1.22,0 -2.11,-0.89 -2.11,-2.11 0,-1.22 0.89,-2.11 2.11,-2.11zm2.58 27.92c0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 -0.55,0 -1,-0.45 -1,-1 0,-0.55 0.45,-1 1,-1zm-48.73 -22.8c0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 -0.55,-0 -1,-0.45 -1,-1 0,-0.55 0.45,-1 1,-1zm6.27 16.92c10.7,0 25.38,0 36.08,0 1.38,0 2.45,1.07 2.45,2.45 0,1.38 -1.07,2.45 -2.45,2.45l-36.08 0c-1.38,0 -2.45,-1.07 -2.45,-2.45 0,-1.38 1.07,-2.45 2.45,-2.45z"/>
                                        </svg>
                                    </div>
                                    <div class="px-0 flex-1">
                                        <h3 class="tools-h3">Graphic Design </h3>
                                        <p class="text-sm mt-1 text-secondary">Aesthetic and communicative design to strengthen the message and brand identity</p>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapperjob">
                                <div class="containertool">
                                    <div class="flex w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="90" viewBox="-7 0 40.38 35.45">
                                            <path class="fil0" d="M17.54 7.32c2.44,0.94 4.01,3.3 4.01,5.92 0,2.6 -1.6,4.97 -4.01,5.92l0 8c0,1.7 -1.38,3.08 -3.08,3.08l-11.38 0c-1.7,0 -3.08,-1.38 -3.08,-3.08l0 -24.08c0,-1.7 1.38,-3.08 3.08,-3.08l11.38 0c1.7,0 3.08,1.38 3.08,3.08 0,1.39 0,2.78 0,4.17l0 0.07zm3.32 -5.7c1.32,0 2.42,1.1 2.42,2.42 0,1.32 -1.1,2.42 -2.42,2.42 -1.32,0 -2.42,-1.1 -2.42,-2.42 0,-1.32 1.1,-2.42 2.42,-2.42zm-17.9 13.37l0 11.45c0,0.46 0.37,0.83 0.83,0.83l10.01 0c0.46,0 0.83,-0.38 0.83,-0.83l0 -6.84c-3.32,-0.24 -5.89,-3.03 -5.89,-6.37 0,-3.34 2.58,-6.13 5.89,-6.37l0 -3.08c0,-0.46 -0.37,-0.83 -0.83,-0.83l-2.04 0c-0.17,0.56 -0.66,0.97 -1.26,0.97l-3.4 0c-0.6,0 -1.1,-0.4 -1.26,-0.97l-2.09 0c-0.49,0 -0.78,0.36 -0.78,0.83l0 10.23 4.29 0c0.25,0 0.49,0.23 0.49,0.49 0,0.25 -0.23,0.49 -0.49,0.49l-4.29 0zm1.87 -4.33c0.02,-0.24 0.24,-0.46 0.49,-0.46l1.93 0c0.25,0 0.49,0.23 0.49,0.49 0,0.25 -0.23,0.49 -0.49,0.49l-1.93 0c-0.28,0 -0.56,-0.23 -0.49,-0.52zm3.21 1.91c0,0.25 -0.23,0.49 -0.49,0.49l-3.51 0c-0.25,0 -0.49,-0.23 -0.49,-0.49 -0,-0.25 0.23,-0.49 0.49,-0.49l3.51 0c0.25,0 0.49,0.23 0.49,0.49zm-3.99 4.3c-0.28,0 -0.49,-0.21 -0.49,-0.49 -0,-0.25 0.23,-0.49 0.49,-0.49l3.81 0c0.25,0 0.49,0.23 0.49,0.49 0,0.25 -0.23,0.49 -0.49,0.49l-3.81 0zm16.47 -4.13c-0.08,-1.07 -0.51,-2.03 -1.19,-2.85 -0.29,0.26 -0.61,0.47 -0.94,0.68 0.18,0.71 0.31,1.43 0.32,2.17l1.81 0zm-1.14 3.83c0.65,-0.83 1.07,-1.8 1.19,-2.85l-1.81 0c-0.05,0.72 -0.13,1.48 -0.32,2.17 0.33,0.21 0.65,0.42 0.94,0.68zm-6.31 -6.53c0.5,0.23 1.03,0.35 1.57,0.4l0 -2.49c-0.77,0.34 -1.29,1.33 -1.57,2.09zm1.57 1.43c-0.63,-0.05 -1.25,-0.18 -1.83,-0.43 -0.15,0.55 -0.22,1.12 -0.24,1.7l2.07 0 0 -1.27zm0 2.25l-2.11 0c0.05,0.57 0.12,1.14 0.24,1.7 0.6,-0.24 1.22,-0.37 1.87,-0.43l0 -1.27zm0 2.29c-0.54,0.03 -1.06,0.17 -1.56,0.37 0.28,0.75 0.81,1.78 1.56,2.13l0 -2.5zm1.03 0.01l0 2.54c0.76,-0.35 1.29,-1.39 1.57,-2.14 -0.5,-0.22 -1.03,-0.35 -1.57,-0.4zm0 -1.03c0.62,0.06 1.26,0.19 1.83,0.43 0.15,-0.55 0.22,-1.12 0.24,-1.7l-2.07 0 0 1.27zm0 -2.25l2.11 0c-0.04,-0.57 -0.12,-1.14 -0.24,-1.7 -0.6,0.23 -1.22,0.37 -1.87,0.42l0 1.27zm0 -2.29c0.53,-0.03 1.06,-0.19 1.56,-0.38 -0.28,-0.75 -0.81,-1.78 -1.56,-2.12l0 2.5zm-3.48 -0.85c0.16,-0.42 0.35,-0.84 0.6,-1.22 -0.41,0.21 -0.79,0.48 -1.14,0.79 0.17,0.16 0.35,0.3 0.55,0.43zm-1.26 0.29c-0.65,0.83 -1.07,1.8 -1.19,2.85l1.81 0c0.05,-0.72 0.13,-1.48 0.32,-2.17 -0.33,-0.21 -0.65,-0.42 -0.94,-0.68zm0.94 6c-0.18,-0.71 -0.31,-1.43 -0.33,-2.17l-1.76 0c0.08,1.05 0.5,2.02 1.14,2.85 0.29,-0.26 0.61,-0.47 0.94,-0.68zm0.32 0.97c-0.2,0.13 -0.38,0.28 -0.55,0.43 0.35,0.32 0.74,0.59 1.16,0.79 -0.25,-0.38 -0.45,-0.8 -0.61,-1.23zm5.34 1.22c0.41,-0.21 0.79,-0.48 1.14,-0.79 -0.17,-0.16 -0.35,-0.3 -0.55,-0.43 -0.16,0.42 -0.35,0.84 -0.6,1.22zm0.6 -8.48c0.2,-0.13 0.38,-0.28 0.55,-0.44 -0.35,-0.32 -0.74,-0.59 -1.16,-0.79 0.25,0.38 0.45,0.8 0.61,1.23zm-1.55 9.86c-0.3,0.07 -0.59,0.13 -0.9,0.15l0 6.88c0,1.02 -0.84,1.86 -1.86,1.86l-9.96 0c-1.02,0 -1.86,-0.85 -1.86,-1.86l0 -22.71c0,-1.03 0.71,-1.86 1.76,-1.86l2.54 0c0.25,0 0.49,0.23 0.49,0.49l-0 0.1c-0,0.18 0.15,0.32 0.32,0.32l3.4 0c0.18,0 0.32,-0.14 0.32,-0.32l0 -0.1c0,-0.25 0.23,-0.49 0.49,-0.49l2.44 0c1.02,0 1.86,0.84 1.86,1.86l0 3.09c0.3,0.04 0.6,0.08 0.9,0.14 0,-1.31 0,-2.62 0,-3.94 0,-1.12 -0.93,-2.05 -2.05,-2.05l-11.38 0c-1.12,0 -2.05,0.93 -2.05,2.05l0 24.08c0,1.12 0.93,2.05 2.05,2.05l11.38 0c1.12,0 2.04,-0.94 2.05,-2.05l0.05 -7.69zm4.3 -14.04c0.76,0 1.39,-0.63 1.39,-1.39 0,-0.76 -0.63,-1.39 -1.39,-1.39 -0.76,0 -1.39,0.63 -1.39,1.39 0,0.76 0.63,1.39 1.39,1.39z"/>
                                        </svg>
                                    </div>
                                    <div class="px-0 flex-1">
                                        <h3 class="tools-h3">Social Media Specialist</h3>
                                        <p class="text-sm mt-1 text-secondary">Optimizing media to enhance reach and engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="text1 mt-10">Clients</h4>
                        <div class="w-full bg-slate-800 rounded-xl">
                            <div class="flex flex-wrap items-center justify-center">
                                {dataclient.map((card, i) => (
                                    <div key={i}>
                                        <a href={card.linkclient}>
                                            <img class="max-w-[100px] lg:max-w-[120px] mx-4 py-4 transition duration-500 hover:scale-110" src={card.imageclient} alt=""/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <p className="mt-10 font-medium text-secondary leading-relaxed">
                            I am a <span className='text-primary dark:text-primary2'>bachelor’s degree graduate in Computer Science</span> with skills in UI/UX Design, Front End Development, and Graphic Design. I enjoy transforming complex problems into simple, beautiful, and intuitive designs.
                            My job is to build your website's appearance to be functional and user-friendly while still being visually appealing. Additionally, I add a personal touch to your product and ensure that it captures attention and is easy to use. My goal is to convey your message and identity in the most creative way. I have created web designs for many well-known brand companies.
                        </p>
                    </div>

                    {/* opsi 2 */}
                    <div className='w-full flex flex-wrap test2 testall'>
                        <div className='flex flex-wrap'>
                            <div className='lg:w-2/3 lg:mt-0'>
                                <h3 class="text1">Pengalaman</h3>
                                <div className="wrapperabout2 lg:mr-2" >
                                    <ul class="font-medium text-secondary relative z-10">
                                        <li>
                                            <p class="inline-block text-base mb-3">• Biro Sistem Informasi UAD - Student Employed <br/><span class="about-p">2024</span> (Frontend & UI/UX Design)</p>
                                        </li>
                                        <li>
                                            <p class="inline-block text-base mb-3">• Tries Digital Indonesia - Internship <br/><span class="about-p">2023</span> (UI/UX Design)</p>
                                        </li>
                                        <li>
                                            <p class="inline-block text-base mb-3">• MSV Studio AMIKOM - Internship <br/><span class="about-p">2023</span> (Creative Design)</p>
                                        </li>
                                        <li>
                                            <p class="inline-block text-base mb-3">• DYKTA Sticker <br/><span class="about-p">2021-2022</span> (Sticker Designer)</p>
                                        </li>
                                        <li>
                                            <p class="inline-block text-base mb-3">• Thuluse Pondok Hati - Freelance <br/><span class="about-p">2021-2022</span> (Graphic Design)</p>
                                        </li>
                                    </ul>
                                    <div className="w-48 absolute -right-16 -bottom-5 fill-primary/30 dark:fill-primary2/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="list"><path d="M47.735.914H15.643a1.94,1.94,0,0,0-1.938,1.939V4.191H7.813A2.46,2.46,0,0,0,5.356,6.648V60.569a2.52,2.52,0,0,0,2.517,2.517H55.506a2.52,2.52,0,0,0,2.517-2.517V6.648a2.46,2.46,0,0,0-2.458-2.457H49.674V2.853A1.941,1.941,0,0,0,47.735.914ZM16.2,5.441V3.414H47.174v7H16.2ZM7.813,6.691h5.892v3.727H7.844Zm47.71,53.878a.018.018,0,0,1-.017.017l-47.65-.017V13.032H55.523Zm0-53.921v3.77H49.674V6.683Z"></path><circle cx="52.051" cy="57.307" r="1.287"></circle><circle cx="11.328" cy="57.307" r="1.287"></circle><rect width="26.156" height="2.5" x="23.288" y="22.922"></rect><rect width="26.156" height="2.5" x="23.288" y="30.321"></rect><path d="M19.417,20.293H14.159a1.25,1.25,0,0,0-1.25,1.25V26.8a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V21.543A1.25,1.25,0,0,0,19.417,20.293Zm-1.25,5.258H15.409V22.793h2.758Z"></path><rect width="26.156" height="2.5" x="23.288" y="40.347"></rect><rect width="26.156" height="2.5" x="23.288" y="47.744"></rect><path d="M19.417,37.718H14.159a1.25,1.25,0,0,0-1.25,1.25v5.258a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V38.968A1.25,1.25,0,0,0,19.417,37.718Zm-1.25,5.258H15.409V40.218h2.758Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-1/3 w-full lg:mt-0 mt-10 mb-10">
                                <h3 class="text1">Pendidikan</h3>
                                <div className="wrapperabout2 min-h-full lg:ml-2">
                                    <ul class="font-medium text-secondary relative z-10">
                                        <li>
                                            <p class="inline-block text-base mb-3">• Ahmad Dahlan University <br/><span class="about-p">2020-2024</span> (Bachelor in Computer Science)</p>
                                        </li>
                                        <li>
                                            <p class="inline-block text-base mb-3">• SMA Negeri 1 Prambanan <br/><span class="about-p">2018-2020</span> (Natural Sciences)</p>
                                        </li>
                                    </ul>
                                    <div className="w-48 absolute -right-10 -bottom-5 fill-primary/30 dark:fill-primary2/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="study-growth">
                                        <path d="M56.94 60.34a1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46 1 1 0 0 0 .3-1.11A1 1 0 0 0 56 49H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56A1 1 0 0 0 56.94 60.34zM52.74 56a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 36.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 35H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM52.74 42a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 22.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 21H38.92A7 7 0 0 0 33 15.08V10.92A7 7 0 0 0 39 4a1 1 0 0 0-1-1 7 7 0 0 0-6 3.41A7 7 0 0 0 26 3a1 1 0 0 0-1 1 7 7 0 0 0 6 6.92v4.16A7 7 0 0 0 25.08 21H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM36.87 5.13a5 5 0 0 1-3.74 3.74A5 5 0 0 1 36.87 5.13zm-9.74 0a5 5 0 0 1 3.74 3.74A5 5 0 0 1 27.13 5.13zM32 17a5 5 0 0 1 4.9 4H27.1A5 5 0 0 1 32 17zM52.74 28a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2z"></path></svg>
                                    </div>           
                                </div>
                            </div>
                            <div class="w-full mt-10">
                                <h3 class="text1">Tools</h3>
                                <div className='border-2 border-dashed border-primary dark:border-primary2 rounded-xl'>
                                    <div class="mx-2 my-1 flex flex-wrap">
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/figma.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Figma</h3>
                                                <p class="text-sm mt-1 text-secondary">UI/UX Design</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="w-24 h-auto" src="./img/corel.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">CorelDraw</h3>
                                                <p class="text-sm mt-1 text-secondary">Graphic Design</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/blender.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Blender</h3>
                                                <p class="text-sm mt-1 text-secondary">3D Modelling</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/premiere.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Premiere</h3>
                                                <p class="text-sm mt-1 text-secondary">Vidio Editor</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/react.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">React</h3>
                                                <p class="text-sm mt-1 text-secondary">Library JS</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/laravel.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Laravel</h3>
                                                <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/codeigniter.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">CodeIgniter</h3>
                                                <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/tailwind.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Tailwind</h3>
                                                <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                            </div>
                                        </div>
                                        <div class="wrappernewtool">
                                            <div class="containernewtool">
                                                <img class="h-auto" src="./img/bootstrap.svg" alt="Logo" />
                                            </div>
                                            <div class="tooltiptext">
                                                <h3 class="tools-h3">Bootstrap</h3>
                                                <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* opsi 3 */}
                    <div className='w-full flex flex-wrap test3 testall'>
                        <div class="tabs_wrap">
                            <ul class="flex flex-wrap lg:justify-start justify-center gap-2">
                                {/* <li className={activeTab === "all" ? "btn active" : "btn"} onClick={() => handleTabClick("all")}>
                                    All
                                </li> */}
                                <li className={activeTab === "frontend" ? "btn active" : "btn"} onClick={() => handleTabClick("frontend")}>
                                    Frontend
                                </li>
                                <li className={activeTab === "uiux" ? "btn active" : "btn"} onClick={() => handleTabClick("uiux")}>
                                    UI/UX
                                </li>
                                <li className={activeTab === "desain" ? "btn active" : "btn"} onClick={() => handleTabClick("desain")}>
                                    Graphic Design
                                </li>
                                <li className={activeTab === "blender" ? "btn active" : "btn"} onClick={() => handleTabClick("blender")}>
                                    3D Model
                                </li>
                            </ul>
                        </div>
                        <ul className="pt-3">
                            {/* <!-- frontend  --> */}
                            <div className='frontend all'>
                                <div className='grid gap-4 lg:grid-cols-3'>
                                    {dataweb.map((card, i) => (
                                    <div key={i} className="bg-slate-100 rounded-xl dark:bg-slate-800 p-4 dark:hover:shadow-primary2 ease-linear group"> 
                                        <li class="w-full">
                                            <img className="w-full drop-shadow-sm shadow-md group-hover:scale-105 ease-linear duration-200 rounded-md" src={card.imageweb} alt="home" />
                                            <div class="">
                                                <div class="mb-2 pt-5">
                                                    <h4 class="card__title">{card.judulweb}</h4>
                                                    <p class="paragraph">{card.deskripsiweb}</p>
                                                </div>
                                                <div class="justify-between flex pt-2">
                                                    <div>
                                                        <a href={card.linkweb} class="more-btn">More Detail</a>
                                                    </div>
                                                    <div class="justify-between flex">
                                                        <p class="paragraph pr-2">Make by:</p>
                                                        <svg class="logo-frontend" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d={card.imgtool1}/>
                                                        </svg>
                                                        <svg class="logo-frontend" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d={card.imgtool2}/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* <!-- uiux  --> */}
                            <div className='uiux all'>
                                <div className='grid gap-4 lg:grid-cols-3'>
                                    {datauiux.map((card, i) => (
                                    <div key={i}>
                                        <li class="w-full">
                                            <img src={card.imageuiux} alt="" class="px-4 md:px-0 w-full drop-shadow-lg dark:hover:drop-shadow-[0_8px_5px_#F4D160] hover:scale-110 dark:decoration-purple-200 ease-linear transition-all duration-500 rounded-md"/>
                                            <div class="mb-2 pt-5 text-center">
                                                <h4 class="card__title">{card.juduluiux}</h4>
                                                <p class="paragraph">{card.deskripsiuiux}</p>
                                            </div>
                                        </li>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* <!-- desain  --> */}
                            <div className='desain all'>
                                <div className='grid gap-4 lg:grid-cols-5 grid-cols-2'>
                                    {datadesain.map((card, i) => (
                                        <div key={i}>
                                            <li class="w-full">
                                                <img src={card.imagedesain} alt="" class="w-full shadow-md hover:scale-110 ease-linear duration-500 rounded-md dark:hover:shadow-primary2 dark:hover:shadow-lg"/>
                                            </li>    
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <!-- blender  --> */}
                            <div className='blender all'>
                                <div className='grid gap-4 lg:grid-cols-3'>
                                    {datablender.map((card, i) => (
                                        <div key={i}>
                                            <li class="w-full">
                                                <div class="rounded-lg shadow-md  overflow-hidden relative hover:scale-95 transition-all duration-500 dark:hover:shadow-primary2 dark:hover:shadow-lg ease-linear group">
                                                    <img src={card.imageblender} alt="" class="h-full w-full group-hover:scale-150 group-hover:rotate-12 transition-all duration-300 ease-linear"/>
                                                </div>
                                            </li>  
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ul>
                        <div class="tabs_wrap mt-3 lg:hidden">
                            <ul class="flex flex-wrap lg:justify-start justify-center gap-2">
                                {/* <li className={activeTab === "all" ? "btn active" : "btn"} onClick={() => handleTabClick("all")}>
                                    All
                                </li> */}
                                <li className={activeTab === "frontend" ? "btn active" : "btn"} onClick={() => handleTabClick("frontend")}>
                                    Frontend
                                </li>
                                <li className={activeTab === "uiux" ? "btn active" : "btn"} onClick={() => handleTabClick("uiux")}>
                                    UI/UX
                                </li>
                                <li className={activeTab === "desain" ? "btn active" : "btn"} onClick={() => handleTabClick("desain")}>
                                    Graphic Design
                                </li>
                                <li className={activeTab === "blender" ? "btn active" : "btn"} onClick={() => handleTabClick("blender")}>
                                    3D Model
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* opsi 4 */}
                    <div className='w-full flex flex-wrap test4 testall'>
                        <div className='grid gap-4 lg:grid-cols-3'>
                            {datasertif.map((card, i) => (
                                <div key={i}>
                                    <div class="bg-slate-100 rounded-xl dark:hover:shadow-primary2 ease-linear shadow-lg overflow-hidden m-1 dark:bg-slate-800 group">
                                        <img class="w-full shadow-md group-hover:scale-110 transition-all duration-500 ease-out" src={card.imagesertif} alt=""/>
                                        <div class="my-8 mx-4">
                                            <h3 class="block mb-3 font-semibold text-lg text-dark truncate dark:text-white transition-all ease-in duration-500">{card.judulsertif}</h3>
                                            <p class="font-medium text-base text-secondary">{card.deskripsisertif}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default All