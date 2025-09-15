import React, { useRef } from "react";
import dataEducation from "@/data/education.json";
import frontend from "@/data/frontend.json";
import dataUiux from "@/data/uiux.json";
import dataSosmed from "@/data/sosmed.json";
import dataSertif from "@/data/certificate.json";
import dataClient from "@/data/client.json";

import IconWhatsapp from "@/assets/sosmed/icon-whatsapp";
import IconLinkedin from "@/assets/sosmed/icon-linkedin";
import IconGmail from "@/assets/sosmed/icon-gmail";
import IconGithub from "@/assets/sosmed/icon-github";

const iconMap: Record<string, React.ReactNode> = {
    IconWhatsapp: <IconWhatsapp />,
    IconLinkedin: <IconLinkedin />,
    IconGmail: <IconGmail />,
    IconGithub: <IconGithub />,
};

const Resume: React.FC = () => {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <div className="xl:px-0 px-2">
            <div className="flex justify-between w-full xl:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Resume CV</h2>
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
                    className="bg-white p-4 sm:p-6 xl:p-8 text-black w-full rounded-lg"
                >
                    <section className="mb-8 text-center">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2">
                            Taufiq Aditya Putra
                        </h1>
                        <h2 className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm text-gray-500">
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

                    {/* Education */}
                    <h1 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                        Education
                    </h1>
                    <div className="mb-4">
                        {dataEducation.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1"
                            >
                                <div>
                                    <span className="font-bold">{item.school},</span>
                                    <span className="text-sm"> {item.major}</span>
                                </div>
                                <div className="text-xs">{item.date}</div>
                            </div>
                        ))}
                    </div>

                    {/* Experience */}
                    <h1 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                        Experience
                    </h1>
                    <div className="mb-4 flex flex-col gap-4">
                        {dataClient.slice(0, 5).map((item, i) => (
                            <div key={i}>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <div>
                                        <h1 className="font-bold text-md">{item.title}</h1>
                                        <h2 className="font-semibold text-sm">{item.client}</h2>
                                    </div>
                                    <div className="text-xs sm:text-right">
                                        <p>{item.date}</p>
                                        <p>{item.region}</p>
                                    </div>
                                </div>
                                <p className="text-xs">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Frontend Projects */}
                    <h1 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                        Project Front End
                    </h1>
                    <div className="mb-4 flex flex-col gap-1">
                        {frontend.map((item, i) => (
                            <div key={i}>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <h1 className="font-bold">{item.title}</h1>
                                    <div className="text-xs">{item.date}</div>
                                </div>
                                <h2 className="text-xs">{item.description}</h2>
                            </div>
                        ))}
                    </div>

                    {/* UI/UX Projects */}
                    <h1 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                        Project UI/UX
                    </h1>
                    <div className="mb-4 flex flex-col gap-1">
                        {dataUiux.map((item, i) => (
                            <div key={i}>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <h1 className="font-bold">{item.title}</h1>
                                    <div className="text-xs">{item.date}</div>
                                </div>
                                <h2 className="text-xs">{item.description}</h2>
                            </div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <h1 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                        Achievement
                    </h1>
                    <div className="mb-4 flex flex-col gap-1">
                        {dataSertif.slice(2).map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-end"
                            >
                                <div>
                                    <span className="font-bold">{item.title},</span>
                                    <span className="text-sm"> {item.description}</span>
                                </div>
                                <div className="text-xs">{item.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Print Styles */}
                <style>
                    {`
            @media print {
              @page {
                size: A4;
                margin: 10mm;
              }
              body * {
                visibility: hidden;
              }
              #print-area, #print-area * {
                visibility: visible;
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
