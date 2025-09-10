import React, { useEffect, useState } from "react";
import IconWhatsapp from "@/assets/sosmed/icon-whatsapp";
import IconInstagram from "@/assets/sosmed/icon-instagram";
import IconTiktok from "@/assets/sosmed/icon-tiktok";
import IconYoutube from "@/assets/sosmed/icon-yt";
import IconLinkedin from "@/assets/sosmed/icon-linkedin";
import IconGmail from "@/assets/sosmed/icon-gmail";
import IconGithub from "@/assets/sosmed/icon-github";

import sosmed from "@/data/sosmed.json"
import dataTech from "@/data/tech.json"
import services from "@/data/services.json"
import BlurText from "./BlurText";

const iconMap: Record<string, React.ReactNode> = {
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
    <h3 className="text-sm text-text-secondary h-6">
      {currentService.substring(0, subIndex)}
      <span className="border-r-2 border-primary animate-pulse ml-1"></span>
    </h3>
  );
};

const Topbar: React.FC = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-end gap-4 md:px-0 px-2">
        <div className="w-full md:w-3/4 md:pr-28">
          <div className="my-2 text-text-secondary text-sm md:text-base">
            Selamat Datang di Portfolio saya
          </div>
          <div className='w-full h-fit relative px-6 py-6 bg-bg-secondary bg-gradient-to-r from-primary/40 via-bg-secondary to-bg-secondary shadow-lg rounded-xl'>
            <div className='flex justify-between'>
              <div className="">
                <BlurText className="font-bold text-dark lg:text-4xl mt-1 text-text" text="Taufiq Aditya Putra" easing="easeInOut" />
                {/* Ganti list services dengan animasi typing */}
                <TypingServices />
                <div className='mt-2 flex gap-2'>
                  {sosmed.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-primary text-primary dark:border-primary dark:text-primary hover:text-white dark:hover:text-bg-secondary shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/50 hover:border-hidden hover:bg-primary dark:hover:bg-primary transition ease-in-out"
                    >
                      <div className="size-4">
                        {iconMap[item.icon]}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-fit">
                <img src="./img/myfoto1.png" alt="Taufiq Aditya" className="absolute z-10 max-w-full mx-auto w-40 bottom-0 md:-translate-x-16" />
              </div>
              <div className="absolute overflow-hidden w-36 h-36 right-0 bottom-0 rounded-r-xl">
                <div className="rounded-full w-96 h-96 lg:w-80 lg:h-80 bg-primary">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="relative overflow-hidden px-4 py-6 bg-bg-secondary shadow-lg rounded-xl">
            <h3 className="text-text tech-lg font-semibold mb-2">Technology</h3>
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
        </div>
      </div>

    </>
  );
};

export default Topbar;
