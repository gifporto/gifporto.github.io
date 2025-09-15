import React, { useEffect, useState } from "react";
import IconWhatsapp from "@/assets/sosmed/icon-whatsapp";
import IconInstagram from "@/assets/sosmed/icon-instagram";
import IconTiktok from "@/assets/sosmed/icon-tiktok";
import IconYoutube from "@/assets/sosmed/icon-yt";
import IconLinkedin from "@/assets/sosmed/icon-linkedin";
import IconGmail from "@/assets/sosmed/icon-gmail";
import IconGithub from "@/assets/sosmed/icon-github";

import IconFrontEnd from "@/assets/service/icon-fe";
import IconGraphicDesign from "@/assets/service/icon-graph";
import IconSosmedSpecialist from "@/assets/service/icon-sosmed";
import IconUIUX from "@/assets/service/icon-ui";

import sosmed from "@/data/sosmed.json"
import services from "@/data/services.json"
import BlurText from "./BlurText";

const iconMap: Record<string, React.ReactNode> = {
  IconFrontEnd: <IconFrontEnd />,
  IconUIUX: <IconUIUX />,
  IconGraphicDesign: <IconGraphicDesign />,
  IconSosmedSpecialist: <IconSosmedSpecialist />,

  IconWhatsapp: <IconWhatsapp />,
  IconInstagram: <IconInstagram />,
  IconTiktok: <IconTiktok />,
  IconYoutube: <IconYoutube />,
  IconLinkedin: <IconLinkedin />,
  IconGmail: <IconGmail />,
  IconGithub: <IconGithub />
};

const TypingServices: React.FC = () => {
  const [index, setIndex] = useState(0); // service ke berapa
  const [subIndex, setSubIndex] = useState(0); // karakter ke berapa
  const [forward, setForward] = useState(true); // ngetik atau menghapus

  const currentService = services[index].title;

  useEffect(() => {
    if (forward) {
      if (subIndex < currentService.length) {
        setTimeout(() => setSubIndex(subIndex + 1), 100); // kecepatan ngetik
      } else {
        setTimeout(() => setForward(false), 1500); // tunggu sebelum hapus
      }
    } else {
      if (subIndex > 0) {
        setTimeout(() => setSubIndex(subIndex - 1), 50); // kecepatan hapus
      } else {
        setForward(true);
        setIndex((prev) => (prev + 1) % services.length); // ganti service
      }
    }
  }, [subIndex, forward, currentService]);

  return (
    <h3 className="text-sm text-text h-6">
      {currentService.substring(0, subIndex)}
      <span className="border-r-2 border-primary animate-pulse ml-1"></span>
    </h3>
  );
};

const Topbar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle drag/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY === null) return;
    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        // swipe up
        setIndex((prev) => (prev + 1) % services.length);
      } else {
        // swipe down
        setIndex((prev) => (prev - 1 + services.length) % services.length);
      }
    }
    setStartY(null);
  };

  return (
    <>
      <div className="w-full flex lg:flex-row flex-col items-end gap-4 lg:px-0 px-2">
        <div className="w-full lg:w-3/4 lg:pr-20 relative">
          <div className="my-2 text-text-secondary text-sm lg:text-base">
            Selamat Datang di Portfolio saya
          </div>

          {/* Foto */}
          <div className="absolute z-20 bottom-0 right-0 lg:-translate-x-2 w-48 overflow-hidden">
            <img
              src="./img/myfoto3.png"
              alt="Taufiq Aditya"
              className="max-w-full drop-shadow-xl drop-shadow-primary/70"
            />
          </div>

          {/* Card dengan background SVG */}
          <div className="w-full h-fit relative px-6 py-6 lg:py-4 shadow-lg rounded-xl overflow-hidden">
            {/* SVG Background */}
            <div className="absolute inset-0 pointer-events-none bg-bg-secondary">
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
                <BlurText
                  className="font-bold lg:text-4xl mt-1 text-text"
                  text="Taufiq Aditya Putra"
                  easing="easeInOut"
                />
                <TypingServices />
                <div className="mt-2 flex gap-2">
                  {sosmed.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-primary text-primary hover:text-white shadow-lg hover:shadow-primary/50 transition ease-in-out"
                    >
                      <div className="size-4">{iconMap[item.icon]}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card y */}
        <div
          className="w-full lg:w-1/4 relative overflow-hidden lg:h-36 h-36"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
          <div
            className="flex flex-col gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${index * 26}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-center py-5 px-2 bg-bg-secondary shadow-lg rounded-xl"
              >
                <div className="container mx-auto flex p-2">
                  <div className="flex justify-center w-1/5 mr-2 text-primary dark:text-primary2 fill-current">
                    {iconMap[service.icon]}
                  </div>
                  <div className="px-0 flex-1">
                    <h3 className="font-semibold text-text">{service.title}</h3>
                    <p className="text-xs mt-1 text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator */}
          <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Topbar;
