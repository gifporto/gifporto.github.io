import React, { useRef } from "react";
import dataEducation from "@/data/education.json";
import frontend from "@/data/frontend.json";
import dataUiux from "@/data/uiux.json";
import dataSosmed from "@/data/sosmed.json";
import dataSertif from "@/data/certificate.json";
import dataClient from "@/data/client.json";
import services from "@/data/services.json"
import dataDesign from "@/data/design.json";

import IconWhatsapp from "@/assets/sosmed/icon-whatsapp";
import IconLinkedin from "@/assets/sosmed/icon-linkedin";
import IconGmail from "@/assets/sosmed/icon-gmail";
import IconGithub from "@/assets/sosmed/icon-github";

import IconLaravel from "@/assets/tech/icon-laravel";
import IconReact from "@/assets/tech/icon-react";
import IconTailwind from "@/assets/tech/icon-tailwind";
import IconCodeIgniter from "@/assets/tech/icon-codeIgniter";
import IconBotstrap from "@/assets/tech/icon-botstrap";
import IconJava from "@/assets/tech/icon-java";
import IconVue from "@/assets/tech/icon-vue";

const iconMap: Record<string, React.ReactNode> = {
    IconWhatsapp: <IconWhatsapp />,
    IconLinkedin: <IconLinkedin />,
    IconGmail: <IconGmail />,
    IconGithub: <IconGithub />,

    IconLaravel: <IconLaravel />,
    IconReact: <IconReact />,
    IconTailwind: <IconTailwind />,
    IconCodeIgniter: <IconCodeIgniter />,
    IconBotstrap: <IconBotstrap />,
    IconJava: <IconJava />,
    IconVue: <IconVue />,
};


const Resume: React.FC = () => {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = () => {
        const originalTitle = document.title;
        const today = new Date().toISOString().split("T")[0]; // hasil: 2025-09-21
        document.title = `Presentation_TaufiqAdityaPutra_${today}`;
        window.print();
        document.title = originalTitle;
    };

    return (
        <div className="xl:px-0 px-2">
            <div className="flex justify-between w-full xl:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Presentation</h2>
                {/* Tombol Download PDF */}
                <button
                    onClick={handleDownloadPDF}
                    className="btn-primary w-full xl:w-auto py-2 px-4 rounded"
                >
                    Download PDF
                </button>
            </div>

            <div className="w-full xl:w-3/4">
                {/* Bagian yang akan dicetak */}
                <div
                    ref={printRef}
                    id="print-area"
                    className="bg-white overflow-hidden p-4 sm:p-6 xl:p-8 text-slate-900 w-full rounded-lg"
                >
                    {/* About me */}
                    <section className="pt-2">
                        <div className="w-full relative">
                            <div className="pl-6 text-primary font-extrabold text-8xl">
                                My Portfolio
                            </div>

                            {/* Foto */}
                            <div className="absolute z-20 bottom-0 right-0 xl:-translate-x-2 w-48 overflow-hidden">
                                <img
                                    src="./img/myfoto4.png"
                                    alt="Taufiq Aditya"
                                    className="max-w-full drop-shadow-xl drop-shadow-primary/70"
                                />
                            </div>

                            {/* Card dengan background SVG */}
                            <div className="w-full h-fit relative px-6 pb-6 overflow-hidden card-glass">
                                {/* SVG Background */}
                                <div className="absolute inset-0 pointer-events-none ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1200 360"
                                        preserveAspectRatio="none"
                                        className="w-full h-full"
                                    >
                                        <defs>
                                            <linearGradient id="g3" x1="0" x2="1" className=" text-primary">
                                                <stop offset="0" stopColor="currentColor" stopOpacity="0.1" />
                                                <stop offset="1" stopColor="currentColor" stopOpacity="1" />
                                            </linearGradient>
                                            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="18" result="b" />
                                                <feBlend in="SourceGraphic" in2="b" />
                                            </filter>
                                        </defs>
                                        <g filter="url(#soft)" opacity="0.9">
                                            <path
                                                d="M0,220 L150,180 C300,140 450,260 600,220 C750,180 900,260 1050,220 L1200,180 L1200,360 L0,360 Z"
                                                fill="url(#g3)"
                                            />
                                        </g>
                                        <path
                                            d="M0,210 C200,150 400,300 600,240 C800,180 1000,260 1200,200"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.12)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                {/* Konten Card */}
                                <div className="relative z-10 flex justify-between">
                                    <div>
                                        <div className="font-bold text-4xl text-slate-900">
                                            Taufiq Aditya Putra
                                        </div>
                                        <div className="flex gap-2 text-xs mt-1">
                                            {services.map((service) => (
                                                <div
                                                    key={service.id}
                                                >
                                                    {service.title} /
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="pt-4 font-normal flex flex-wrap gap-2 justify-center text-xs sm:text-sm text-slate-700">
                            {dataSosmed.map((item, i) => (
                                <div key={i} className="flex gap-1 items-center">
                                    <div className="size-4">
                                        {iconMap[item.icon]}
                                    </div>
                                    {item.value}
                                </div>
                            ))}
                        </h2>
                    </section>

                    {/* Clients */}
                    <section className="pt-8">
                        <h1 className="text-lg sm:text-xl font-bold pb-2 text-slate-900">
                            Clients
                        </h1>
                        <div className="w-full border bg-slate-900 rounded-xl py-4 px-6 flex justify-center">
                            <div className="w-full flex flex-wrap gap-4">
                                {dataClient.slice(1).map((card, i) => (
                                    <div key={i}>
                                        <a href={card.link}>
                                            <img
                                                className="w-[115px] transition duration-500 hover:scale-110"
                                                src={card.img}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Frontend Projects */}
                    <section className="pt-8">
                        <h1 className="text-lg sm:text-xl font-bold pb-2 text-slate-900">
                            Project Front End
                        </h1>
                        <div className="grid grid-cols-3 gap-2">
                            {frontend.map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="card-glass flex flex-col justify-between rounded-3xl p-2 h-full">
                                        <div>
                                            <a href={item.link} target="blank">
                                                <img
                                                    className="w-full mx-auto transition duration-500 rounded-2xl"
                                                    src={item.img}
                                                    alt={item.title}
                                                />
                                            </a>
                                            <h5 className="text-slate-900 mt-3 font-semibold">
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
                    </section>

                    {/* UI/UX Projects */}
                    <section className="pt-8">
                        <h1 className="text-lg sm:text-xl font-bold pb-2 text-slate-900">
                            Project UI/UX
                        </h1>
                        <div className="grid grid-cols-4 gap-4">
                            {dataUiux.map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <img
                                        className="transition duration-500 rounded-2xl"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                    <div className="card-glass rounded-xl p-4 mt-2">
                                        <div className="flex justify-between">
                                            <h5 className="text-slate-900 font-semibold">{item.title}</h5>
                                            <span className="text-xs">{item.date}</span>
                                        </div>
                                        <p className="text-text-seconday text-sm mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Design Graphic */}
                    <section className="pt-8">
                        <h1 className="text-lg sm:text-xl font-bold pb-2 text-slate-900">
                            Graphic Design
                        </h1>
                        <div className="grid grid-cols-5 gap-2">
                            {dataDesign.map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <img
                                        className="transition duration-500 rounded-2xl"
                                        src={item.img}
                                        alt={`Design ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Achievements */}
                    <section className="pt-8">
                        <h1 className="text-lg sm:text-xl font-bold pb-2 text-slate-900">
                            Achievement
                        </h1>
                        <div className="grid grid-cols-3 gap-4">
                            {dataSertif.map((certif, i) => (
                                <div key={i} className="flex flex-col card-glass to-100% rounded-xl">
                                    <img
                                        className="w-screen transition duration-500 rounded-xl"
                                        src={certif.img}
                                        alt={certif.title}
                                    />
                                    <div className="p-2 mt-2">
                                        <div className="flex justify-between">
                                            <h5 className="text-slate-900 font-semibold">
                                                {certif.title}
                                            </h5>
                                            <span className="text-xs">{certif.date}</span>
                                        </div>
                                        <p className="text-text-seconday text-sm mt-1">
                                            {certif.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Print Styles */}
                <style>
                    {`
            @media print {
              @page {
                size: A4;
                margin: 15mm 5mm;
              }
              body * {
                visibility: hidden;
                margin: 0;
              }
              #print-area, #print-area * {
                visibility: visible;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              #print-area {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
              head, title {
                display: none !important;
              }
            }
          `}
                </style>
            </div>
        </div>
    );
};

export default Resume;
