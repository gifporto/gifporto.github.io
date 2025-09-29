import { useEffect, useState } from "react";

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
import dataTech from "@/data/tech.json"
import dataFrontend from "@/data/frontend.json";
import dataCertif from "@/data/certificate.json";
import ExperienceCard from "@/components/ExperienceCard";

const iconMap: Record<string, React.ReactNode> = {
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

function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenWidth;
}

function getTranslateValue(index: number, screenWidth: number) {
    if (screenWidth < 640) {
        // 📱 Mobile
        return `-${index * 85}%`;
    } else if (screenWidth < 1024) {
        // 📲 Tablet
        return `-${index * 50}%`;
    } else {
        // 💻 Desktop
        return `-${index * 45}%`;
    }
}

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentCertif, setCurrentCertif] = useState(0);
    const screenWidth = useScreenWidth();

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
        <div className="w-full flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:w-3/5">
                {/* Projects */}
                <div className="w-full">
                    <div className="flex justify-between xl:px-0 px-2">
                        <h4 className="text-text text-xl font-semibold mb-2">Projects</h4>
                        <button onClick={() => onNavigate?.("portfolio")} className="text-primary underline">See All</button>
                    </div>
                    <div
                        className="max-w-screen py-4 relative overflow-hidden"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "100% 100%",
                            maskImage:
                                "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                            maskRepeat: "no-repeat",
                            maskSize: "100% 100%",
                        }}
                    >
                        <div
                            className="flex transition-transform duration-700 gap-4"
                            style={{
                                transform: `translateX(${getTranslateValue(currentProject, screenWidth)})`,
                            }}
                        >
                            {dataFrontend.map((item, i) => (
                                <div
                                    key={i}
                                    className="lg:min-w-[43%] min-w-[85%] card-glass flex flex-col justify-between p-2"
                                >
                                    <div>
                                        <a href={item.link} target="blank">
                                            <img
                                                className="w-screen mx-auto transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-primary/20 hover:shadow-xl rounded-2xl"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </a>
                                        <h5 className="text-text mt-3 font-semibold">
                                            {item.title}
                                        </h5>
                                        <p className="text-text-seconday text-xs mt-1">
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
                    <div className="flex justify-between xl:px-0 px-2">
                        <h4 className="text-text text-xl font-semibold mb-2">Certificates</h4>
                        <button onClick={() => onNavigate?.("certificates")} className="text-primary underline">See All</button>
                    </div>
                    <div
                        className="max-w-screen py-4 relative overflow-hidden"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "100% 100%",
                            maskImage:
                                "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                            maskRepeat: "no-repeat",
                            maskSize: "100% 100%",
                        }}
                    >
                        <div
                            className="flex transition-transform duration-700 gap-4"
                            style={{
                                transform: `translateX(${getTranslateValue(currentCertif, screenWidth)})`,
                            }}
                        >
                            {dataCertif.map((certif, i) => (
                                <div
                                    key={i}
                                    className="lg:min-w-[43%] min-w-[85%] bg-gradient-to-t card-glass to-100% rounded-xl"
                                >
                                    <img
                                        className="w-screen transition duration-500 rounded-xl"
                                        src={certif.img}
                                        alt={certif.title}
                                    />
                                    <div className="p-2">
                                        <h5 className="text-text font-semibold">
                                            {certif.title}
                                        </h5>
                                        <p className="text-text-seconday text-xs mt-1">
                                            {certif.description}
                                        </p>
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

            <div className="w-full xl:w-2/5 flex flex-col md:flex-row gap-4">
                {/* Clients */}
                <div className="w-full md:w-2/3 xl:w-2/5 xl:px-0 px-2">
                    <h4 className="text-text text-xl font-semibold mb-2">Clients</h4>
                    <div className="relative z-10 w-full bg-slate-800/70 rounded-xl py-4 flex justify-center bg-gradient-to-tr from-transparent to-white/10 border-t-2 border-r-2 border-1 border-text/10">
                        <div className="grid xl:grid-cols-1 grid-cols-2 gap-4">
                            {dataClient.slice(1).map((card, i) => (
                                <div key={i}>
                                    <a href={card.link}>
                                        <img
                                            className="w-full xl:max-w-[120px] transition duration-500 hover:scale-110"
                                            src={card.img}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technology */}
                <div className="w-full md:w-1/3 xl:w-3/5 xl:px-0 px-2">
                    <h4 className="text-text text-xl font-semibold mb-2">Technology</h4>
                    <div className="relative overflow-hidden px-4 py-6 card-glass">
                        <div className="flex flex-wrap gap-2 relative">
                            {dataTech.map((item, i) => (
                                <div key={i}>
                                    <img className="h-8" src={item.img} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="h-32 absolute -right-10 -bottom-8 fill-primary/30 dark:fill-primary2/30">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="browser"><path d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1Zm13 15a12.94 12.94 0 0 1-.64 4h-6.57a38 38 0 0 0 .21-4 38 38 0 0 0-.21-4H25a1 1 0 0 0 0-2h-3.49a19.39 19.39 0 0 0-2.12-6.54A13 13 0 0 1 29 16ZM16 29c-1.17 0-2.71-2.61-3.49-7h7c-.8 4.39-2.34 7-3.51 7Zm-3.78-9a37.24 37.24 0 0 1 0-8h7.57a36.45 36.45 0 0 1 .21 4 36.45 36.45 0 0 1-.22 4ZM16 3c1.17 0 2.71 2.61 3.49 7h-7c.8-4.39 2.34-7 3.51-7Zm-3.39.46A19.39 19.39 0 0 0 10.49 10h-6a13 13 0 0 1 8.12-6.54ZM3 16a12.94 12.94 0 0 1 .64-4h6.58a37.82 37.82 0 0 0 0 8H7a1 1 0 0 0 0 2h3.49a19.39 19.39 0 0 0 2.12 6.54A13 13 0 0 1 3 16Zm16.39 12.54A19.39 19.39 0 0 0 21.51 22h6a13 13 0 0 1-8.12 6.54Z" data-name="Layer 6"></path></svg>
                        </div>
                    </div>

                    {/* <div className="mt-4">
                        <ExperienceCard />
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default About;
