import React from 'react';
import type { Service, RecentWorkItem, Project, Partner } from './types';

// Helper function to generate placeholder image URLs
const getImageUrl = (seed: string, width: number, height: number) => `https://picsum.photos/seed/${seed}/${width}/${height}`;
const ACCENT_COLOR = "text-pink-500";

// SVG Icons for services
const CableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const CctvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55a2 2 0 01.45 2.12l-1.5 4.5A2 2 0 0116.55 18H7.45a2 2 0 01-1.95-2.38l1.5-4.5A2 2 0 019.45 10H15zm-5-4a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zM12 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75a13.43 13.43 0 0116.5 0M2.25 12.86a16.5 16.5 0 0119.5 0" />
    </svg>
);
const AutomationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.227l.55-.22a2.25 2.25 0 012.062.018l.504.222a2.25 2.25 0 001.688.086l.462-.154a2.25 2.25 0 012.223 1.258l.21.63a2.25 2.25 0 001.522 1.232l.537.178a2.25 2.25 0 011.522 2.148l-.043.644a2.25 2.25 0 00.178 1.895l.272.472a2.25 2.25 0 01-.587 2.956l-.462.386a2.25 2.25 0 00-.733 2.148l.063.578a2.25 2.25 0 01-1.74 2.155l-.578.193a2.25 2.25 0 00-1.99 1.12l-.286.532a2.25 2.25 0 01-2.827.842l-.537-.21a2.25 2.25 0 00-1.895-.178l-.644.043a2.25 2.25 0 01-2.148-1.522l-.178-.537a2.25 2.25 0 00-1.232-1.522l-.63-.21a2.25 2.25 0 01-1.258-2.223l.154-.462a2.25 2.25 0 00-.086-1.688l-.222-.504a2.25 2.25 0 01.018-2.062l.22-.55a2.25 2.25 0 011.227-1.11z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
);
const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const MarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${ACCENT_COLOR}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);

export const SERVICES_DATA: Service[] = [
    { icon: <CableIcon />, title: "Structure Cabling", description: "Dynamic network infrastructure through structured cabling including UTP, Fiber Optic, and Copper.", detailedDescription: "Our structured cabling services optimize network infrastructure, guaranteeing efficient data and voice connectivity across your organization. We handle a comprehensive range of single-mode and multi-mode fiber optic cables and components, including new installations, moves, changes, and testing." },
    { icon: <CctvIcon />, title: "CCTV Surveillance", description: "Real-time monitoring and protection of your assets with state-of-the-art surveillance.", detailedDescription: "We offer state-of-the-art CCTV surveillance systems designed to fortify the protection of your assets and premises. Our solutions feature real-time monitoring and advanced security features, ensuring the utmost safety and peace of mind for retail, commercial, and residential properties." },
    { icon: <PhoneIcon />, title: "IP Telephony and PABX", description: "Tailored solutions to improve connectivity and streamline business operations.", detailedDescription: "SAH is highly regarded in PABX Intercom System solutions. We provide a wide range of services designed to improve communication for businesses of all sizes, specializing in the planning, installation, and maintenance of customized PABX intercom systems." },
    { icon: <WifiIcon />, title: "Wireless (Wi-Fi) Support", description: "Expert Wi-Fi installation services, ensuring seamless and secure wireless connectivity.", detailedDescription: "Our certified team excels in configuring seamless home and office networks, integrating devices like computers, tablets, and smart TVs. We prioritize establishing a secure network, adhering to stringent guidelines set by industry leaders such as Etisalat and DU." },
    { icon: <AutomationIcon />, title: "Time Attendance & Door Access", description: "Streamline attendance tracking and access control with our advanced systems.", detailedDescription: "Our systems offer a seamless way to manage employee attendance, enhance security, and boost overall efficiency. We ensure the system you choose is user-friendly, reliable, and scalable to accommodate your future growth." },
    { icon: <AutomationIcon />, title: "Audio/Video Intercoms", description: "Efficient two-way communication solutions for residential and commercial spaces.", detailedDescription: "We specialize in the supply and installation of state-of-the-art audio and video intercom systems tailored for both offices and homes, ensuring enhanced convenience and security for your premises." },
    { icon: <AutomationIcon />, title: "Home & Office Automation", description: "Control your environment with ease using our smart automation systems.", detailedDescription: "We provide cutting-edge automation devices and services, from smart lighting and thermostats to security systems and voice assistants, that cater to the unique needs of our clients for both homes and offices." },
    { icon: <CctvIcon />, title: "Audio Visual Systems", description: "Immersive experience with advanced audio and video systems.", detailedDescription: "Our Audio Visual solutions deliver an immersive experience for boardrooms, auditoriums, and entertainment spaces. We design and install high-definition displays, professional-grade sound systems, and integrated control systems for a seamless user experience." },
    { icon: <WebDevIcon />, title: "Website Development", description: "User-friendly websites that establish a strong online presence for your business.", detailedDescription: "We design and develop user-friendly, responsive websites that establish a strong online presence for your business. Our focus is on creating a visually appealing design, intuitive navigation, and a seamless user experience to engage your audience effectively." },
    { icon: <MarketingIcon />, title: "Digital Marketing", description: "Strategic campaigns to boost your online visibility and engagement.", detailedDescription: "Our strategic digital marketing campaigns are designed to boost your online visibility and engagement, driving your online success. We offer SEO, social media marketing, and content creation to help your business reach its target audience." },
    { icon: <WebDevIcon />, title: "IT Outsourcing", description: "Customized IT services and infrastructure management to streamline your operations.", detailedDescription: "Our comprehensive IT outsourcing solutions are designed to streamline your IT operations. We provide customized solutions for IT services, infrastructure management, and technical support, allowing you to focus on your core business." },
    { icon: <PhoneIcon />, title: "AMC Support Services", description: "Regular maintenance and technical support to keep your systems running smoothly.", detailedDescription: "SAH's Annual Maintenance Contract (AMC) for IT services, CCTV, and home automation offers a comprehensive solution to ensure the uninterrupted functionality and security of your technology infrastructure. Enjoy peace of mind with consistent support and upkeep." },
];

export const RECENT_WORK_DATA: RecentWorkItem[] = [
    { imageUrl: getImageUrl("fiber-optic-panel", 600, 400), caption: "Mini ODF as per DU and Etisalat Standards" },
    { imageUrl: getImageUrl("server-room-cabling", 600, 400), caption: "MTR Room as per DU and Etisalat standards" },
    { imageUrl: getImageUrl("network-rack-cctv", 600, 400), caption: "Network and CCTV rack as per SERA standards" },
    { imageUrl: getImageUrl("small-network-rack", 600, 400), caption: "12 U Rack as per SERA Standards" },
    { imageUrl: getImageUrl("power-meter-testing", 600, 400), caption: "Power Meter Testing" },
    { imageUrl: getImageUrl("fiber-splicing-machine", 600, 400), caption: "Fiber Splicing with Fujikura-68-S" },
];

export const PROJECTS_DATA: Project[] = [
    {
        imageUrl: getImageUrl("moon-tower-dubai", 600, 800),
        name: "Moon Tower",
        location: "Business Bay, Dubai",
        description: "A 21-story building under development, requiring comprehensive IT and network infrastructure.",
        scope: [
            "CCTV Camera Installation and servicing",
            "Internal and external Structural cabling (ISP, GPON, FTTH, OSP)",
            "Designing and installation of MDF, FDH and Mini OD",
            "Structure cabling for Data and Telephone",
        ],
    },
    {
        imageUrl: getImageUrl("vida-dubai-downtown", 600, 800),
        name: "Vida, Dubai",
        location: "Downtown Dubai",
        description: "An ultra-chic featuring service and branded apartments with uninterrupted views of Burj Khalifa.",
        scope: [
            "Internal and external Structural cabling",
            "Designing and installation of MDF, FDH, Micro ODF",
            "Termination, Splicing and Labeling for Etisalat and DU",
            "Installation and Termination of TETRA Radio Systems",
        ],
    },
    {
        imageUrl: getImageUrl("saadiyat-marina-abudhabi", 600, 800),
        name: "Hidd Al-Saadiyat Marina",
        location: "Abu Dhabi",
        description: "Abu Dhabi's newest marina, located in the idyllic setting of the northern interior Saadiyat channel.",
        scope: [
            "CCTV camera installation and servicing",
            "Termination of CCTV",
            "Internal and external Structural cabling",
            "Configuration of Samsung, Wisenet CCTV System",
        ],
    },
    {
        imageUrl: getImageUrl("al-durrah-tower-barsha", 600, 800),
        name: "Al Durrah Tower",
        location: "Al Barsha",
        description: "A modern residential tower requiring advanced security and connectivity solutions.",
        scope: [
            "CCTV camera installation and servicing",
            "Installation of Samsung, Wisenet CCTV System",
            "Approval and clearance of SERA",
            "Complete Structure cabling (Data and Fiber Optics)",
        ],
    },
     {
        imageUrl: getImageUrl("executive-towers-dubai", 600, 800),
        name: "Executive Towers",
        location: "Dubai",
        description: "Home Automation for a 3BHK Apartment located in Tower E of Executive Towers.",
        scope: [
            "Supply and Installation for Smart switches for lights",
            "Supply and Installation of Smart Thermostats",
            "Supply and installation of smart Door Lock",
            "Configuration of complete apartment with HUB",
        ],
    },
];

export const PARTNERS_DATA: Partner[] = [
    { name: "HIKVISION" },
    { name: "WISENET" },
    { name: "SAMSUNG" },
    { name: "Aqara" },
    { name: "BOSE" },
    { name: "BOSCH" },
    { name: "PHILIPS" },
];