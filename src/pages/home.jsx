import image1 from "../../public/images/my-removebg-preview.png"
import logo from "../../public/images/logo2.png"
import { motion } from "framer-motion";
import  { RotatingStick, TypingEffect } from "../animateToHome";

export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1e3c72, #2a5298)", width: "100%", margin: 0, boxSizing: "border-box" }}
            >
                {/* Navbar */}
                <nav
                    className="navbar navbar-expand-lg"
                    style={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)', // خلفية داكنة بشفافية
                        backdropFilter: 'blur(10px)', // تأثير ضبابي
                        padding: '10px 20px',
                    }}
                    >
                    <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* اللوجو */}
                        <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                            width: '60px', // تصغير اللوجو شوية
                            borderRadius: '50%', // دايرة كاملة
                            objectFit: 'cover',
                            }}
                        />
                        </a>

                        {/* زر الـ toggle للشاشات الصغيرة */}
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ borderColor: '#fff' }}
                        >
                        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                        </button>

                        {/* الروابط */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ gap: '20px' }}>
                            <motion.li className="nav-item"
                                style={{backgroundColor: "#5f05ff"}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .8 , backgroundColor: "red"}}
                                transition={{duration: .3}}
                            >
                            <a
                                className="nav-link text-light"
                                href="#home"
                                style={{
                                fontWeight: '500',
                                transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#00ff88')} // لون عند الـ hover
                                onMouseLeave={(e) => (e.target.style.color = '#fff')}
                            >
                                Home
                            </a>
                            </motion.li>
                            <motion.li className="nav-item"
                                style={{backgroundColor: "#5f05ff"}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .8 , backgroundColor: "red"}}
                                transition={{duration: .3}}>
                            <a
                                className="nav-link text-light"
                                href="#skills"
                                style={{
                                fontWeight: '500',
                                transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#00ff88')}
                                onMouseLeave={(e) => (e.target.style.color = '#fff')}
                            >
                                Skills
                            </a>
                            </motion.li>
                            <motion.li className="nav-item"
                                style={{backgroundColor: "#5f05ff"}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .8 , backgroundColor: "red"}}
                                transition={{duration: .3}}>
                            <a
                                className="nav-link text-light"
                                href="#projects"
                                style={{
                                fontWeight: '500',
                                transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#00ff88')}
                                onMouseLeave={(e) => (e.target.style.color = '#fff')}
                            >
                                Projects
                            </a>
                            </motion.li>
                            <motion.li className="nav-item"
                                style={{backgroundColor: "#5f05ff"}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .8 , backgroundColor: "red"}}
                                transition={{duration: .3}}>
                            <a
                                className="nav-link text-light"
                                href="#contact"
                                style={{
                                fontWeight: '500',
                                transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#00ff88')}
                                onMouseLeave={(e) => (e.target.style.color = '#fff')}
                            >
                                Contact
                            </a>
                            </motion.li>
                        </ul>
                        </div>
                    </div>
                </nav>

                {/* Home Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="home"
                    id="home"
                    style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "2rem 0", justifyContent: "center", width: "100%", margin: 0, boxSizing: "border-box" , gap: "40px", overflow: "hidden" }}
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
                            HI, I'm Mohamed
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
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 1 }}
                            style={{ borderColor: "#60a5fa", margin: "1rem auto" }}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            style={{ color: "#e5e7eb", lineHeight: "1.6" }}
                        >
                            I'm Mohamed, passionate about building creative and smooth web interfaces using HTML, CSS, JavaScript, and React.
                            I love details, animations, and visual effects that enhance user experience and make it more enjoyable.
                            I'm always striving to improve my skills and experiment with new design and development ideas.
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
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.8 }}
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
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.8 }}
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
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.8 }}
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
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.8 }}
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
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
                        style={{
                            marginTop: "2rem",
                            position: "relative",
                            width: "300px",
                            height: "300px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "20px 40px"
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
                            // animate={{ scale: [1, 1.05, 1] }}
                            // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={image1}
                            alt="profile-image"
                            style={{
                                maxWidth: "400px",
                                zIndex: 2
                            }}
                            // animate={{ y: [0, -10, 0] }}
                            // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            // whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(96, 165, 250, 0.7)" }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}