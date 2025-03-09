import { motion, useInView } from "framer-motion";
// import VariantsComponent from "../animateToHome";
import AnimateSkill from "../animateToSkills";
import html from "../../public/images/html.png"
import css from "../../public/images/css.png"
import js from "../../public/images/js.png"
// import typeScript from "../../public/images/typeScript.png"
import react from "../../public/images/react.png";
import bootStrab from "../../public/images/bootstrap.png"
import git from "../../public/images/git.png"
import gitHup from "../../public/images/git hup.png"
import vite from "../../public/images/vite-js-logo.svg"
// import next from "../../public/images/next.js.png"
import cli from "../../public/images/cli.png"
import frammerMotion from "../../public/images/frammer motion.png"
import ai from "../../public/images/ai.png"
import axios from "../../public/images/axios.png"
import postMan from "../../public/images/postman.png"
import api from "../../public/images/api.png"
import { useRef } from "react";
// import tailwind from "../../public/images/tailwind.png"
// import sass from "../../public/images/sass.png"
// import Redux from "../../public/images/redux.png"
// import node from "../../public/images/node.js.png"
// import mySQL from "../../public/images/mySql.png"


export default function Skills() {

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true });
    const skills = [
        { img: html, shadow: "rgb(243, 100, 33)", skill: "HTML", wi: "100px", numper: 100, delay: 0.5 },
        { img: css, shadow: "rgb(33, 205, 243)", skill: "CSS", wi: "100px", numper: 90, delay: 1 },
        { img: js, shadow: "rgb(243, 229, 33)", skill: "JS", wi: "95px", numper: 70, delay: 2 },
        { img: react, shadow: "rgb(33, 150, 243)", skill: "React", wi: "100px", numper: 65, delay: 2.5 },
        { img: vite, shadow: "rgb(89, 33, 243)", skill: "Vite", wi: "80px", numper: 65, delay: 3 },
        { img: bootStrab, shadow: "rgb(128, 33, 243)", skill: "BootStrab", wi: "100px", numper: 50, delay: 3.5 },
        { img: git, shadow: "rgb(243, 100, 33)", skill: "Git", wi: "95px", numper: 70, delay: 4 },
        { img: gitHup, shadow: "rgb(173, 33, 243)", skill: "GitHup", wi: "110px", numper: 80, delay: 4.5 },
        { img: cli, shadow: "rgb(33, 150, 243)", skill: "CLI", wi: "100px", numper: 50, delay: 5 },
        { img: ai, shadow: "rgb(243, 93, 33)", skill: "AI", wi: "90px", numper: 70, delay: 5.5 },
        { img: frammerMotion, shadow: "rgb(243, 33, 107)", skill: "Motion", wi: "90px", numper: 60, delay: 6 },
        { img: api, shadow: "rgb(125, 0, 242)", skill: "API", wi: "90px", numper: 70, delay: 6.5 },
        { img: axios, shadow: "rgb(194, 194, 194)", skill: "Axios", wi: "90px", numper: 70, delay: 7 },
        { img: postMan, shadow: "rgb(250, 114, 2)", skill: "Post Man", wi: "90px", numper: 50, delay: 7.5 },
    ];
    return (
        <div className="parent">
            <motion.h1 className="mySkills"
                initial={{ transform: "translateX(-102%)" }}
                animate={{ transform: "translateX(0%)" }}
                transition={{
                delay: 1,
                type: "spring",
                stiffness: 20,
                restDelta: 2
                }}
            >
                My Skills
            </motion.h1>

            <div className="skills" ref={sectionRef}>
                {
                    skills.map(({ img, shadow, skill, wi, numper, delay }, index) => {
                        return <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay }}
                                    >
                                    <AnimateSkill img={img} shadow={shadow} skill={skill} wi={wi} numper={numper}/>
                                </motion.div>
                    })
                }

                {/* <AnimateSkill img={Redux} shadow="rgb(145, 33, 243)" skill="Redux"  wi="80px" numper="0"/> */}
                {/* <AnimateSkill img={sass} shadow="rgb(243, 33, 114)" skill="Sass"  wi="100px" numper="0"/> */}
                
                {/* <AnimateSkill img={tailwind} shadow="rgb(33, 243, 233)" skill="TailWind"  wi="100px" numper="60"/> */}
                
                
                
                
                
                
                
                {/* <AnimateSkill img={next} shadow="rgb(255, 255, 255)" skill="Next.js"  wi="90px" numper="60"/> */}
                {/* <AnimateSkill img={typeScript} shadow="rgb(33, 150, 243)" skill="TypeScript"  wi="85px" numper="60"/> */}
                {/* <AnimateSkill img={node} shadow="rgb(7, 145, 60)" skill="node.js"  wi="130px" numper="60"/> */}
                {/* <AnimateSkill img={mySQL} shadow="rgb(33, 150, 243)" skill="MySQL"  wi="100px" numper="60"/> */}
            </div>
        </div>
    );
}
