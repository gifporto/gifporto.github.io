import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import IconFrontEnd from "@/assets/service/icon-fe";
import IconGraphicDesign from "@/assets/service/icon-graph";
import IconSosmedSpecialist from "@/assets/service/icon-sosmed";
import IconUIUX from "@/assets/service/icon-ui";

import IconLaravel from "@/assets/tech/icon-laravel";
import IconReact from "@/assets/tech/icon-react";
import IconTailwind from "@/assets/tech/icon-tailwind";
import IconCodeIgniter from "@/assets/tech/icon-codeIgniter";
import IconBotstrap from "@/assets/tech/icon-botstrap";
import IconJava from "@/assets/tech/icon-java";
import IconVue from "@/assets/tech/icon-vue";

import dataClient from "@/data/client.json";
import services from "@/data/services.json";
import dataFrontend from "@/data/frontend.json";
import dataCertif from "@/data/certificate.json";
import Portfolio from "./Portfolio";

const iconMap: Record<string, JSX.Element> = {
    IconFrontEnd: <IconFrontEnd />,
    IconUIUX: <IconUIUX />,
    IconGraphicDesign: <IconGraphicDesign />,
    IconSosmedSpecialist: <IconSosmedSpecialist />,

    IconLaravel: <IconLaravel />,
    IconReact: <IconReact />,
    IconTailwind: <IconTailwind />,
    IconCodeIgniter: <IconCodeIgniter />,
    IconBotstrap: <IconBotstrap />,
    IconJava: <IconJava />,
    IconVue: <IconVue />,
};

const About = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentCertif, setCurrentCertif] = useState(0);

    // Auto slide projects
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => {
                const step = window.innerWidth >= 1024 ? 2 : 1;
                return (prev + step) % dataFrontend.length;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [dataFrontend.length]);

    // Auto slide certificates
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCertif((prev) => {
                const step = window.innerWidth >= 1024 ? 2 : 1;
                return (prev + step) % dataCertif.length;
            });
        }, 6000);
        return () => clearInterval(interval);
    }, [dataCertif.length]);

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Projects */}
                <div className="w-full md:w-3/5">
                    <div className="w-full">
                        <div className="flex justify-between md:px-0 px-2">
                            <h4 className="text-text text-xl font-semibold mb-2">Projects</h4>
                            <Link to="/portfolio" className="text-primary underline">See All</Link>
                        </div>
                        <div className="max-w-screen py-4 relative overflow-hidden">
                            {/* Gradient kiri */}
                            {/* <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div> */}
                            {/* Gradient kanan */}
                            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

                            <div
                                className="flex transition-transform duration-700 gap-4"
                                style={{
                                    transform: window.innerWidth >= 768 ? `translateX(-${currentProject * 45}%)` : `translateX(-${currentProject * 85}%)`,
                                }}
                            >

                                {dataFrontend.map((item, i) => (
                                    <div
                                        key={i}
                                        className="md:min-w-[43%] min-w-[85%]"
                                    >
                                        <div className="bg-bg-secondary flex flex-col justify-between rounded-3xl p-2 h-full">
                                            <div>
                                                <a href={item.link} target="blank">
                                                    <img
                                                        className="w-full mx-auto transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-primary/20 hover:shadow-lg rounded-2xl"
                                                        src={item.img}
                                                        alt={item.title}
                                                    />
                                                </a>
                                                <h5 className="text-text mt-3 font-semibold">
                                                    {item.title}
                                                </h5>
                                                <p className="text-text-seconday text-sm mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="text-xs">{item.date}</div>
                                                <div className="flex gap-1 items-center">
                                                    {iconMap[item.tech1]}
                                                    {iconMap[item.tech2]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Navigasi Projects */}
                            <button
                                onClick={() =>
                                    setCurrentProject((prev) => {
                                        const decrement = window.innerWidth < 768 ? 1 : 2; // mobile = -1, di atas mobile = -2
                                        return Math.max(prev - decrement, 0);
                                    })
                                }
                                className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-bg-secondary/50 text-text p-2 rounded-full"
                            >
                                ‹
                            </button>

                            <button
                                onClick={() =>
                                    setCurrentProject((prev) => {
                                        const increment = window.innerWidth < 768 ? 1 : 2; // mobile = +1, di atas mobile = +2
                                        return prev + increment >= dataFrontend.length ? prev : prev + increment;
                                    })
                                }
                                className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-bg-secondary/50 text-text p-2 rounded-full"
                            >
                                ›
                            </button>

                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="w-full">
                        <div className="flex justify-between md:px-0 px-2">
                            <h4 className="text-text text-xl font-semibold mb-2">Certificates</h4>
                            <Link to="/certificates" className="text-primary underline">See All</Link>
                        </div>
                        <div className="max-w-screen rounded-xl py-4 relative overflow-hidden">
                            {/* Gradient kiri */}
                            {/* <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div> */}
                            {/* Gradient kanan */}
                            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

                            <div
                                className="flex transition-transform duration-700 gap-4"
                                style={{
                                    transform: window.innerWidth >= 768 ? `translateX(-${currentCertif * 45}%)` : `translateX(-${currentCertif * 85}%)`,
                                }}
                            >
                                {dataCertif.map((item, i) => (
                                    <div
                                        key={i}
                                        className="md:min-w-[43%] min-w-[85%]"
                                    >
                                        <img
                                            className="transition duration-500 rounded-2xl"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                        <h5 className="text-text mt-3 font-semibold">
                                            {item.title}
                                        </h5>
                                        <div className="flex justify-between items-end">
                                            <p className="text-text-seconday text-sm mt-1">
                                                {item.description}
                                            </p>
                                            <div className="text-xs">{item.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Navigasi Certificate */}
                            <button
                                onClick={() => setCurrentCertif((prev) => Math.max(prev - 1, 0))}
                                className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-bg-secondary/50 text-text p-2 rounded-full"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentCertif((prev) =>
                                        prev + 2 >= dataCertif.length ? prev : prev + 1
                                    )
                                }
                                className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-bg-secondary/50 text-text p-2 rounded-full"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                {/* Clients */}
                <div className="w-full md:w-1/5 md:px-0 px-2">
                    <h4 className="text-text text-xl font-semibold mb-2">Clients</h4>
                    <div className="w-full bg-slate-800 rounded-xl py-4 flex justify-center">
                        <div className="grid md:grid-cols-1 grid-cols-2 gap-4">
                            {dataClient.slice(1).map((card, i) => (
                                <div key={i}>
                                    <a href={card.link}>
                                        <img
                                            className="w-full lg:max-w-[120px] transition duration-500 hover:scale-110"
                                            src={card.img}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="w-full md:w-2/5 md:px-0 px-2">
                    <h4 className="text-text text-xl font-semibold mb-2">Services</h4>
                    <div className="grid gap-4 lg:grid-cols-1">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="py-5 px-2 bg-bg-secondary shadow-lg rounded-xl"
                            >
                                <div className="container mx-auto flex p-2">
                                    <div className="flex justify-center w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                                        {iconMap[service.icon]}
                                    </div>
                                    <div className="px-0 flex-1">
                                        <h3 className="font-semibold text-text">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs mt-1 text-text-secondary">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
