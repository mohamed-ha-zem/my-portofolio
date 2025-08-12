import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import js from "../../public/images/js.png";
import react from "../../public/images/react.png";
import bootStrab from "../../public/images/bootstrap.png";
import tailwind from "../../public/images/tailwind.png";
import git from "../../public/images/git.png";
import gitHub from "../../public/images/git hup.png";
import cli from "../../public/images/cli.png";
import frammerMotion from "../../public/images/frammer motion.png";
import axios from "../../public/images/axios.png";
import postMan from "../../public/images/postman.png";
import api from "../../public/images/api.png";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export function AnimateSkill({ img, shadow, shadow2, wi, skill, numper, startCounting }) {
    const [num, setNum] = useState(0);

    function plus(nump) {
        let num1 = num;
        const interval = setInterval(() => {
            num1 += 1;
            setNum(Math.min(num1, nump));
            if (num1 >= nump) {
                clearInterval(interval);
            }
        }, 50);
        return interval;
    }

    useEffect(() => {
        if (startCounting) {
            const interval = plus(numper);
            return () => clearInterval(interval);
        }
    }, [startCounting, numper]);

    // Calculate stroke dashoffset for SVG circle (circumference = 2 * π * r = 2 * 3.14 * 60 ≈ 377)
    const circumference = 377; // هو متغير يمثل محيط الدائرة
    const strokeDashoffset = circumference - (num / 100) * circumference; // ده بيعني إن الخط الخارجي بتاع الدائرة هيبقى عبارة عن قطعة

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transition: "opacity 0.5s ease-in-out",
            }}
        >
            <span
                style={{
                    color: "white",
                    position: "absolute",
                    top: "-25%",
                    fontWeight: "bold",
                    zIndex: 2,
                }}
            >
                {num}%
            </span>
            <div
                style={{
                    position: "absolute",
                    width: "8.7rem",
                    height: "8.7rem",
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    top: "-9px",
                    boxShadow: `0px 0px 40px 18px ${shadow2}`,
                }}
            ></div>
            <svg
                width="195"
                height="195"
                viewBox="0 0 180 180"
                style={{
                    position: "absolute",
                    filter: `drop-shadow(0 0 20px ${shadow})`,
                    top: "-37.5px"
                }}
            >
                {/* Background circle */}
                <circle
                    cx="90"
                    cy="90"
                    r="60"
                    fill="none"
                    stroke={shadow2}
                    strokeWidth="10"
                />
                {/* Progress circle */}
                <circle
                    cx="90"
                    cy="90"
                    r="60"
                    fill="none"
                    stroke={shadow}
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 90 90)" // Start from top
                    style={{ transition: "stroke-dashoffset 0.05s linear" }}
                />
            </svg>
            <div
                className="borderSkill"
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    boxShadow: `${shadow} 0px 0px 28px 2px inset`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.2)",
                    zIndex: 1,
                }}
            >
                <img style={{ maxWidth: wi, borderRadius: "30%" }} src={img} alt={skill} />
            </div>
            <h3
                style={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    textAlign: "center",
                }}
            >
                {skill}
            </h3>
        </div>
    );
}

export default function Skills() {
    const {ref: sectionRef, inView: sectionInview} = useInView({
        once: true,
        threshold: window.innerWidth > 768 ?  0.2 : 0.1
    });
    // const {ref: circleRef, inView: circleInview} = useInView({
    //     once: true,
    //     threshold: window.innerWidth > 768 ?  0.2 : 0.1
    // });
    const [isVisible, setIsVisible] = useState(false);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        if (sectionInview && !isVisible) {
            setIsVisible(true);
            setStartCounting(true);
        }
    }, [sectionInview, isVisible]);

    const carouselRef = useRef(null);
    const controls = useAnimation();
    const items = [
        {
            icon: (
            <img src="/images/html-icon.png" style={{width: "60%"}}/>
            ),
            text: 'HTML',
        },
        {
            icon: (
                <img src="/images/css-icon.png" style={{width: "60%"}}/>
            ),
            text: 'CSS',
        },
        {
            icon: (
            <img src="/images/js-icon.png" style={{width: "60%"}}/>
            ),
            text: 'JS',
        },
        {
            icon: (
            <img src="/images/react-icon.png" style={{width: "60%"}}/>
            ),
            text: 'REACT',
        },
        {
            icon: (
            <img src="/images/tailwindcss-icon.png" style={{width: "60%"}}/>
            ),
            text: 'TAILWINDCSS',
        },
        {
            icon: (
            <img src="/images/motion-icon.png" style={{width: "60%"}}/>
            ),
            text: 'MOTION',
        },
    ];

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

    const skills = [
        { img: html, shadow: "rgb(243, 100, 33)", shadow2: "rgba(243, 100, 33, 0.6)", skill: "HTML", wi: "100px", numper: 100, delay: 0.5 },
        { img: css, shadow: "rgb(33, 205, 243)", shadow2: "rgba(33, 205, 243, 0.6)", skill: "CSS", wi: "100px", numper: 90, delay: 1 },
        { img: js, shadow: "rgb(243, 229, 33)", shadow2: "rgba(243, 229, 33, 0.6)", skill: "JS", wi: "95px", numper: 70, delay: 1.5 },
        { img: react, shadow: "rgb(33, 150, 243)", shadow2: "rgba(33, 150, 243, 0.6)", skill: "React", wi: "100px", numper: 85, delay: 2 },
        { img: bootStrab, shadow: "rgb(128, 33, 243)", shadow2: "rgba(128, 33, 243, 0.6)", skill: "Bootstrap", wi: "100px", numper: 70, delay: 3 },
        { img: tailwind, shadow: "rgb(20, 188, 255)", shadow2: "rgba(20, 188, 255, 0.6)", skill: "tailwind", wi: "100px", numper: 85, delay: 3.5 },
        { img: git, shadow: "rgb(243, 100, 33)", shadow2: "rgba(243, 100, 33, 0.6)", skill: "Git", wi: "95px", numper: 70, delay: 4 },
        { img: gitHub, shadow: "rgb(173, 33, 243)", shadow2: "rgba(173, 33, 243, 0.6)", skill: "GitHub", wi: "110px", numper: 80, delay: 4.5 },
        { img: cli, shadow: "rgb(33, 150, 243)", shadow2: "rgba(33, 150, 243, 0.6)", skill: "CLI", wi: "100px", numper: 70, delay: 5 },
        { img: frammerMotion, shadow: "rgb(255, 0, 115)", shadow2: "rgba(255, 0, 115, 0.6)", skill: "Motion", wi: "90px", numper: 70, delay: 5.5 },
        { img: api, shadow: "rgb(125, 0, 242)", shadow2: "rgba(125, 0, 242, 0.6)", skill: "API", wi: "90px", numper: 70, delay: 6 },
        { img: axios, shadow: "rgb(194, 194, 194)", shadow2: "rgba(194, 194, 194, 0.6)", skill: "Axios", wi: "90px", numper: 85, delay: 6.5 },
        { img: postMan, shadow: "rgb(250, 114, 2)", shadow2: "rgba(250, 114, 2, 0.6)", skill: "Postman", wi: "90px", numper: 50, delay: 7 },
    ];

    return (
        <>
        <div className="parent" id="My Skills">
            <motion.h1
                className="mySkills"
                initial={{ transform: "translateX(-102%)" }}
                animate={{ transform: "translateX(0%)" }}
                transition={{ delay: 1, type: "spring", stiffness: 20, restDelta: 2 }}
            >
                My Skills
            </motion.h1>
            <div className="skills" ref={sectionRef}>
                {skills.map(({ img, shadow, shadow2, skill, wi, numper, delay }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ delay }}
                    >
                        <AnimateSkill
                            img={img}
                            shadow={shadow}
                            shadow2={shadow2}
                            skill={skill}
                            wi={wi}
                            numper={numper}
                            startCounting={startCounting}
                        />
                    </motion.div>
                ))}
            </div>
            {/* carousel line */}
            <motion.div
                ref={carouselRef}
                style={{
                    position: 'absolute',
                    bottom: window.innerWidth > 768 ? '0px' : '0px',
                    width: '100vw',
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
        </>
    );
}