import { easeInOut, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion"
import { Link } from "react-router-dom";

// انشاء قائمه بتغطي الشاشه كلها بتبقه بلوريه وتظهر الصفحات اللي عندي
export default function VariantsComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div style={fullscreenContainer}>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                style={nav}
            >
                <motion.div style={background} variants={sidebarVariants} />
                <Navigation />
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.nav>
        </div>
    );
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
        zIndex: "100"
    }),
    closed: {
        clipPath: "circle(10px at calc(100% - 40px) 40px)",
        transition: {
            delay: .2,
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
        zIndex: "-1",
    },
};

const Navigation = () => (
    <motion.ul style={list} variants={navVariants}>
        {[0, 1, 2, 3 , 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        display: "none"
    },
};

const colors = ["#FF008C", "#9C1AFF", "#7700FF", "#4400FF" , "#FF008C"];
const sections = ["My Profile", "Home" , "Skills" , "Projects" , "ContactUs"];
const MenuItem = ({ i }) => {
    // const border = `2px solid ${colors[i]}`;
    const boxShadow = `0px 0px 12px 1px inset ${colors[i]}`
    return (
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.90 }}
        >
            <Link to={`/${sections[i].toLowerCase()}`} style={{ ...textPlaceholder, boxShadow }}>{sections[i]}</Link>
        </motion.li>
    );
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const MenuToggle = ({ toggle }) => (
    <button style={toggleContainer} onClick={toggle} className="buttonClick">
        <svg width="30" height="30" viewBox="0 0 23 23">
            <motion.path
                fill="black"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <motion.path
                fill="black"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);

const fullscreenContainer = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
};

const nav = {
    width: 300,
};

const background = {
    backgroundcolor: "rgba(255, 255, 255, 0.2)",/* لون فاتح بشفافية */
    backdropFilter: "blur(20px)", /* تأثير ضبابي */
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
};

const toggleContainer = {
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 25,
    width: 55,
    height: 55,
    borderRadius: "20%",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3px",
    zIndex: "200"
};

const list = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: "150"
};

const listItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginBottom: 20,
    cursor: "pointer",
};

const textPlaceholder = {
    position: "relative",
    borderRadius: "40px",
    width: "210px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    overflow: "hidden",
    textDecoration: "none"
};

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};
// انشاء قائمه بتغطي الشاشه كلها بتبقه بلوريه وتظهر الصفحات اللي عند //

// عمل انميشن لكتابة الكلمات حرف حرف ومسحهم حرف حرف
const words = ["Front-End", "Back-End" , "Graphic-Designer"];
export const TypingEffect = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = deleting ? 100 : 150;

    if (!deleting && text === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
        return;
    }

    if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
    }

    const timeout = setTimeout(() => {
        setText((prevText) =>
        deleting ? prevText.slice(0, -1) : currentWord.slice(0, prevText.length + 1)
        );
    }, typingSpeed);

    return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex]);

    return (
    <div>
        <div className="relative" style={{color: "#9400ff" , fontWeight: "bold"}}>
        <motion.span>{text}</motion.span>
        <motion.span
            className="absolute w-1 h-full bg-white"
            style={{position: "absolute" , width: "5px" , height: "45px" , backgroundColor: "white"}}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
        >
        </motion.span>
        </div>
    </div>
    );
};
// عمل انميشن لكتابة الكلمات حرف حرف ومسحهم حرف حرف //

// كومبوننت بيظهر شكل معبات علي شكل مسطره من اي مكان انت عايزه 
export function RotatingStick ({ p, r1, r2, t1, t2, d }) {
    const squares = Array.from({ length: 8 }); // عدد القطع

    return (
        <motion.div
            initial={{ scale: 0, right: r1, top: Number(t1), position: "absolute" }}
            animate={{ scale: 1, right: r2, top: Number(t2), position: "absolute" }}
            transition={{ duration: 1, ease: "linear", delay: Number(d) }}
        >
            <motion.div
                style={{ display: "flex", alignItems: "center", justifyContent: "center", position: p }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
                {squares.map((_, index) => (
                    <motion.div
                        key={index}
                        style={{ width: "10px", height: "10px", margin: "2px", backgroundColor: "rgb(255 0 163 / 76%)" }}
                        animate={{ rotate: [0, 360] }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

// كومبوننت بيظهر شكل مكعبات علي شكل مسطره من اي مكان انت عايزه //

// ظهور دايره ملونه من الجنب كده 

export function TransitionOptions() {
    return (
        <motion.div
            style={ball}
            initial={{ opacity: 0, scale: 1 , translateX: "60%" }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 , translateX: ["60%", "0%", "60%"] }}
            transition={{
                duration: 4,
                delay: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
            }}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "var(--accent)",
    position: "absolute",
    backgroundImage: "linear-gradient(45deg,rgb(221, 19, 100),rgba(221, 174, 192, 0.95))",
    right: "5%" , 
    top: "220px"
}
// ظهور دايره ملونه من الجنب كده //

export function RhombusAnimation() {

    return (
        <div style={{width: "100vw" , display: "flex" , justifyContent: "center" , alignItems: "center"}}>
            <motion.div
                style={{
                    width: "130px",
                    height: "130px",
                    backgroundColor: "#ff007f",
                    position: "absolute",
                    transform: "rotate(45deg)",
                    backgroundImage: "linear-gradient(132deg, #8b228a, #1336b2)"
                }}
                initial={{ top: "100vh", opacity: 0 }}
                animate={{ top: "75vh", opacity: 1 }}
                exit={{ y: "-100vh", opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>

    )
}















