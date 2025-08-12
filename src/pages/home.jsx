import image1 from "../../public/images/my-removebg-preview.png"
import logo from "../../public/images/logo4.png"
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import  { TypingEffect } from "../animateToHome";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [navLinkes, setNavLinkes] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setNavLinkes(!navLinkes);
        setIsOpen(!isOpen);
    };
    // دالة للتحكم في الانتقال مع تأخير
    const handleLinkClick = (event, item) => {
        event.preventDefault(); // منع الانتقال الافتراضي للـ href
        setTimeout(() => {
            // الانتقال للسكشن بعد 1 ثانية
            window.location.href = `#${item}`;
        }, 700); // تأخير 1000 مللي ثانية = 1 ثانية
    };

    // دالة لفتح صورة الـ CV في صفحة جديدة مع تأخير
    const handleOpenCV = (event) => {
        event.preventDefault();
        window.open('my-resume', '_blank'); // فتح الصورة في صفحة جديدة
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.7, duration: 0.7, ease: "easeOut" },
        }),
        hover: { scale: 1.1 },
        tap: { scale: 0.95 },
    };

    const menuVariants = {
        open: { opacity: 1, transition: { duration: 0.7, delay: 0.4 }},
        closed: { opacity: 0, transition: { duration: 0.7 }},
    };
    
    const backgroundBlur = {
        open: { width: '103vw', height: '103vh', top: 0, right: 15 , transition: {duration: .7, ease: "easeInOut"}},
        closed: { width: '20px', height: '20px', top: 0, right: 15 , transition: {duration: .7, ease: "easeInOut"}},
    }
    // قائمة العناصر (الأيقونات والنصوص)
    const items = [
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
            ),
            text: 'READING',
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-code" viewBox="0 0 16 16">
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
            </svg>
            ),
            text: 'CODE',
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-brush" viewBox="0 0 16 16">
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
            </svg>
            ),
            text: 'DESIGN',
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-controller" viewBox="0 0 16 16">
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
            </svg>
            ),
            text: 'GAMING',
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg>
            ),
            text: 'WRITING',
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#673AB7" className="bi bi-camera" viewBox="0 0 16 16">
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
            </svg>
            ),
            text: 'PHOTOGRAPHY',
        },
    ];
    const carouselRef = useRef(null);
    const controls = useAnimation();
    
    useEffect(() => {
        // حساب العرض الكلي للعناصر (عدد العناصر * عرض كل عنصر + المسافات)
        const totalWidth = items.length * (120 + 50); // 120px المسافة بين العناصر + 50px عرض العنصر تقريباً
    
        // الـ animation الأساسي
        controls.start({
            x: -totalWidth, // تحريك من اليمين للشمال بمقدار العرض الكلي
            transition: {
                x: {
                    repeat: Infinity, // تكرار لا نهائي
                    repeatType: 'loop', // نوع التكرار loop عشان يرجع من الأول
                    duration: 10, // مدة الحركة (عدلها حسب السرعة اللي عايزها)
                    ease: 'linear', // حركة خطية عشان تكون سلسة
                },
            },
        });
    }, [controls, items.length]);

    return (
        <>
            <motion.div
                style={{ minHeight: "100vh", background: "black", width: "100%", margin: 0, boxSizing: "border-box" }}
            >
                {/* Navbar */}
                <nav
                    className="navbar navbar-expand-lg"
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        zIndex: 1000,
                        padding: "12px 30px",
                    }}
                >
                    <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            <motion.img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: "20rem",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: "-105px",
                                    left: "-70px",
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </a>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: .9}}
                            onClick={handleToggle}
                            style={{position: "fixed", zIndex: "1000", borderRadius: "50%", width: "60px", height: "60px", right: "40px", top: "15px", boxShadow: "0 0 15px 2px white", border: 0}}
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </span>
                        </motion.button>
                        {/* Nav Links */}
                        <div 
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                variants={backgroundBlur}
                                style={{
                                    position: 'fixed',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    backdropFilter: 'blur(15px)',
                                    transformOrigin: 'right',
                                    backgroundColor: "#7b64ff21",
                                    width: '20px', 
                                    height: '20px'
                                }}
                                initial="closed"
                                animate={navLinkes ? "open" : "closed"}
                                exit="closed"
                                >
                                    <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0"
                                        variants={menuVariants}
                                        initial="closed"
                                        animate={navLinkes ? 'open' : 'closed'} 
                                        style={{ gap: "25px", display: "felx", flexDirection: "column", position: "absolute", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
                                        {["Back To Home", "My Skills", "My Projects", "Contact Me"].map((item, index) => (
                                            <motion.li
                                                key={index}
                                                className="nav-item"
                                                custom={index}
                                                initial="hidden"
                                                animate="visible"
                                                variants={navItemVariants}
                                                whileHover="hover"
                                                whileTap="tap"
                                                onClick={handleToggle}
                                                style={{
                                                    background: "transparent", // تدرج نيون جذاب
                                                    padding: "5px 20px",
                                                    borderRadius: "50px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    boxShadow: "0 0 12px rgb(218 0 255 / 85%)",
                                                }}
                                            >
                                                <a
                                                    className="text-white "
                                                    href={`#${item}`}
                                                    style={{
                                                        fontFamily: 'Outfit',
                                                        fontWeight: "100",
                                                        fontSize: "30px",
                                                        transition: "color 0.3s ease",
                                                        textDecoration: "none"
                                                    }}
                                                    onClick={(e) => handleLinkClick(e, item)}
                                                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                                                    onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
                                                >
                                                    {item}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </nav>
                {/* Home Content */}
                <div style={{position: "relative"}}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="home"
                    id="Back To Home"
                    style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "2rem 0", justifyContent: "center", width: "100%", margin: 0, boxSizing: "border-box" , gap: "0px 90px", overflow: "hidden" }}
                >
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="home-text"
                        style={{ textAlign: "center" }}
                    >
                        <motion.h1
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            style={{ fontSize: "2.5rem", color: "#fff" }}
                        >
                            HI, I&apos;m Mohamed
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            style={{ fontSize: "2rem", color: "#60a5fa", margin: 0 , height: "25px" }}
                        >
                            <TypingEffect />
                        </motion.h1>
                        <motion.hr
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 1 }}
                            style={{ border: "2px solid white", margin: "1rem auto" }}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            style={{ color: "#e5e7eb", lineHeight: "1.6" }}
                        >
                            I&apos;m Mohamed, passionate about building creative and smooth web interfaces using HTML, CSS, JavaScript, and React.
                            I love details, animations, and visual effects that enhance user experience and make it more enjoyable.
                            I&apos;m always striving to improve my skills and experiment with new design and development ideas.
                            For me, coding is not just writing code—it’s a tool for creativity and making something unique!
                        </motion.p>
                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="images-contact"
                            style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}
                        >
                            <motion.a
                                href="https://www.facebook.com/share/19xCgzUUed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{opacity: .7}}
                                whileHover={{ scale: 1.3 , opacity: 1}}
                                whileTap={{ scale: 0.8 , opacity: 1}}
                                transition={{ duration: 0.3 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#2aa4f4"></stop>
                                        <stop offset="1" stopColor="#007ad9"></stop>
                                    </linearGradient>
                                    <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                                    <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/201287620878"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{opacity: .7}}
                                whileHover={{ scale: 1.3 , opacity: 1}}
                                whileTap={{ scale: 0.8 , opacity: 1}}
                                transition={{ duration: 0.3 }}
                            >
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#25D366" width="50" height="50">
                                    <title>WhatsApp</title>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/mohamed-hazem-a162a6307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{opacity: .7}}
                                whileHover={{ scale: 1.3 , opacity: 1}}
                                whileTap={{ scale: 0.8 , opacity: 1}}
                                transition={{ duration: 0.3 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
                                    <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                                    <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                                    <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="mailto:gggftyyfd@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{opacity: .7}}
                                whileHover={{ scale: 1.3 , opacity: 1}}
                                whileTap={{ scale: 0.8 , opacity: 1}}
                                transition={{ duration: 0.3 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                                    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                                    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                                    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg>
                            </motion.a>
                            <div>
                                {/* زر تحميل الـ CV */}
                                <motion.button
                                    className="btn" 
                                    style={{backgroundColor: "white", color: "black", fontWeight: "bold", whiteSpace: "0px"}} 
                                    onClick={handleOpenCV}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: .9}}
                                >
                                    My Resume
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
                        style={{
                            marginTop: "2rem",
                            position: "relative",
                            width: "300px",
                            height: "300px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "40px"
                        }}
                    >
                        <motion.div
                            style={{
                                position: "absolute",
                                width: "350px",
                                height: "220px",
                                bottom: "-60px",
                                backgroundImage: "linear-gradient(0deg, #9C27B0, transparent)",
                                borderRadius:" 0% 0% 30% 30%",
                                zIndex: 1
                            }}
                        />
                        <motion.img
                            src={image1}
                            alt="profile-image"
                            style={{
                                maxWidth: "400px",
                                zIndex: 2
                            }}
                        />
                    </motion.div>
                </motion.div>
                {/* carousel line */}
                <motion.div
                    ref={carouselRef}
                    style={{
                        position: 'absolute',
                        bottom: window.innerWidth > 768 ? '-15px' : '-10px',
                        width: '105vw',
                        left: "-5px",
                        height: '70px',
                        backgroundColor: 'black',
                        border: '3px solid #673AB7',
                        transform: 'skewY(-2deg)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        zIndex: "300"
                    }}
                    initial={{y: 60}}
                    animate={{y: 0}}
                    transition={{duration: 2}}
                >
                    <motion.div
                        animate={controls}
                        style={{
                            display: 'inline-flex',
                            gap: '120px', // المسافة بين العناصر
                            justifyContent: 'center',
                            alignItems: 'center',
                            // عرض كافي لتكرار العناصر مرتين
                            width: `${items.length * 2 * 100}%`,
                        }}
                    >
                        {/* تكرار العناصر مرتين لضمان الاستمرارية */}
                        {[...items, ...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0, // منع تقليص العناصر
                                width: '50px', // عرض ثابت لكل عنصر (عدّله حسب الحاجة)
                            }}
                        >
                            {item.icon}
                            <p
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#eeeeee',
                                    margin: '0px',
                                }}
                            >
                                {item.text}
                            </p>
                        </div>
                        ))}
                    </motion.div>
                </motion.div>
                </div>
            </motion.div>
        </>
    )
}