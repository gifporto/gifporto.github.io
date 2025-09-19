import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  dark: boolean;
  toggleDark: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Bottombar: React.FC<SidebarProps> = ({ dark, toggleDark, activePage, onNavigate }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(activePage);

  // Set halaman awal berdasarkan URL
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "about"; // default "about"
    setCurrentPage(path);
  }, [location.pathname]);

  const links = [
    {
      key: "about",
      label: "AboutMe",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.4399 18L17.4299 18.99L19.5599 17.02" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


      ),
    },
    {
      key: "portfolio",
      label: "Portfolio",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12.61H19" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.25 2 17.27V10.28C2 7.57999 2.63 6.70999 5 6.56999C5.24 6.55999 5.50003 6.54999 5.78003 6.54999H15.22C18.24 6.54999 19 7.29999 19 10.28Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.25 17.81H6.96997" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.10999 17.81H12.55" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: "certificates",
      label: "Certificates",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.37988 12L10.7899 14.42L15.6199 9.57996" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.7499 2.44995C11.4399 1.85995 12.5699 1.85995 13.2699 2.44995L14.8499 3.80995C15.1499 4.06995 15.7099 4.27995 16.1099 4.27995H17.8099C18.8699 4.27995 19.7399 5.14995 19.7399 6.20995V7.90995C19.7399 8.29995 19.9499 8.86995 20.2099 9.16995L21.5699 10.7499C22.1599 11.4399 22.1599 12.5699 21.5699 13.2699L20.2099 14.8499C19.9499 15.1499 19.7399 15.7099 19.7399 16.1099V17.8099C19.7399 18.8699 18.8699 19.7399 17.8099 19.7399H16.1099C15.7199 19.7399 15.1499 19.9499 14.8499 20.2099L13.2699 21.5699C12.5799 22.1599 11.4499 22.1599 10.7499 21.5699L9.16988 20.2099C8.86988 19.9499 8.30988 19.7399 7.90988 19.7399H6.17988C5.11988 19.7399 4.24988 18.8699 4.24988 17.8099V16.0999C4.24988 15.7099 4.03988 15.1499 3.78988 14.8499L2.43988 13.2599C1.85988 12.5699 1.85988 11.4499 2.43988 10.7599L3.78988 9.16995C4.03988 8.86995 4.24988 8.30995 4.24988 7.91995V6.19995C4.24988 5.13995 5.11988 4.26995 6.17988 4.26995H7.90988C8.29988 4.26995 8.86988 4.05995 9.16988 3.79995L10.7499 2.44995Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      ),
    },
    {
      key: "resume",
      label: "Resume",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.09607 11H8.10505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.8984 11H16.3984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.09607 7H8.10505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.8984 7H16.3984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const handleClick = (key: string) => {
    setCurrentPage(key);
    onNavigate(key);
  };

  return (
    <nav className="bg-bg-secondary/95 shadow-lg shadow-primary/30 rounded-xl p-4 w-full">
      <div className="flex justify-between">
        <button
          onClick={toggleDark}
          className="w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 bg-bg"
        >
          <div
            className={`w-4 h-4 bg-primary shadow-primary/50 rounded-full shadow-md transform transition-transform duration-300 ${dark ? "translate-x-6" : ""
              }`}
          />
        </button>

        <div className="flex gap-4">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleClick(link.key)}
              className={`relative group flex items-center justify-center hover:cursor-pointer ${currentPage === link.key
                ? "text-primary drop-shadow-lg drop-shadow-primary"
                : "text-gray-500 hover:text-primary hover:drop-shadow-lg hover:drop-shadow-primary"
                }`}
            >
              {link.icon}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Bottombar;
