<nav
                    className="navbar navbar-expand-lg"
                    style={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        zIndex: 1000,
                        background: "linear-gradient(to right, rgba(10, 25, 47, 0.95), rgba(50, 10, 80, 0.95))", // تدرج داكن وجذاب
                        backdropFilter: "blur(12px)",
                        padding: "12px 30px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            <motion.img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: "60px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "2px solid #00f7ff", // إطار سماوي نيون
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                whileHover={{ scale: 1.15, rotate: 360, boxShadow: "0 0 15px rgba(0, 247, 255, 0.7)" }}
                            />
                        </a>

                        {/* Toggler for small screens */}
                        <motion.button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{ borderColor: "#00f7ff" }}
                            whileHover={{ scale: 1.1, borderColor: "#ff0066" }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
                        </motion.button>

                        {/* Nav Links */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ gap: "25px" }}>
                                {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="nav-item"
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={navItemVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        style={{
                                            background: "linear-gradient(45deg, #00f7ff, #ff00cc)", // تدرج نيون جذاب
                                            padding: "6px 15px",
                                            borderRadius: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <a
                                            className="nav-link text-white"
                                            href={`#${item.toLowerCase()}`}
                                            style={{
                                                fontWeight: "600",
                                                fontSize: "1.1rem",
                                                transition: "color 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.color = "#fff")}
                                            onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>














import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    // دالة لفتح صورة الـ CV في صفحة جديدة مع تأخير
    const handleOpenCV = (event) => {
        event.preventDefault();
        setTimeout(() => {
            window.open('/my-portfolio/public/images/my resume.pdf', '_blank'); // فتح الصورة في صفحة جديدة
        }, 1000); // تأخير 1 ثانية
    };

    return (
        <div>
            {/* زر لفتح صورة الـ CV */}
            <button className="btn btn-success" onClick={handleOpenCV}>
                My Resume
            </button>

            {/* زر لتجربة الـ exit animation */}
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'إغلاق' : 'فتح'}
            </button>

            {/* الـ AnimatePresence مع الـ exit animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        className="backdrop"
                        initial={{ width: '20px', height: '20px', top: 1, right: 29, opacity: 0, y: 0 }}
                        animate={{ width: '100vw', height: '100vh', top: -40, right: -30, opacity: 1, y: 0 }}
                        exit={{ width: '20px', height: '20px', top: 1, right: 29, opacity: 0, y: 100 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;


import { motion } from 'framer-motion';
import { useRef } from 'react';

// قائمة الصور (استبدلها بمسارات صورك)
const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  // أضف المزيد من الصور حسب الحاجة
];

import { motion } from 'framer-motion';
import { useRef } from 'react';

// قائمة العناصر (الأيقونات والنصوص)
const items = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
      </svg>
    ),
    text: 'READING',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-code" viewBox="0 0 16 16">
        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
      </svg>
    ),
    text: 'CODE',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-brush" viewBox="0 0 16 16">
        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
      </svg>
    ),
    text: 'DESIGN',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-controller" viewBox="0 0 16 16">
        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
      </svg>
    ),
    text: 'GAMING',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-pen" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
      </svg>
    ),
    text: 'WRITING',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" className="bi bi-camera" viewBox="0 0 16 16">
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
      </svg>
    ),
    text: 'PHOTOGRAPHY',
  },
];
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const items = [
  { icon: <span>🖼️</span>, text: 'Item 1' },
  { icon: <span>🎥</span>, text: 'Item 2' },
  { icon: <span>📱</span>, text: 'Item 3' },
  { icon: <span>💻</span>, text: 'Item 4' },
  { icon: <span>🎮</span>, text: 'Item 5' },
  { icon: <span>📷</span>, text: 'Item 6' },
];

const Carousel = () => {
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
          duration: 20, // مدة الحركة (عدلها حسب السرعة اللي عايزها)
          ease: 'linear', // حركة خطية عشان تكون سلسة
        },
      },
    });
  }, [controls]);

  return (
    <motion.div
      ref={carouselRef}
      style={{
        position: 'absolute',
        bottom: '20px',
        width: '100vw',
        height: '70px',
        backgroundColor: 'black',
        border: '3px solid #673AB7',
        transform: 'skewY(-1deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
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
        {[...items, ...items].map((item, index) => (
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
                color: '#666',
                margin: '0px',
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
