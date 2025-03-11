import { motion } from "framer-motion";
import image1 from "../../public/images/logo1.png"
import hangman from "../../public/images/hangman.png"
import memory from "../../public/images/memory.png"
import prayer from "../../public/images/prayer.png"
import shopCrud from "../../public/images/shop crud.png"
import medical from "../../public/images/medical.png"
import shopClothes from "../../public/images/shopClothes.png"


import html from "../../public/images/html.png"
import css from "../../public/images/css.png"
import js from "../../public/images/js.png"
import react from "../../public/images/react.png";
import axios from "../../public/images/axios.png"
import api from "../../public/images/api.png"
import { useEffect, useRef } from "react";


export function Card ({img , title , description , href , lang1 , lang2 , lang3 , lang4}){
    return (
        <div className="card" >
            <img src={img} style={{width: "100%" , height: "270px" , borderRadius: "10px"}} alt="project one" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div>
                    <span><img src={lang1}/></span>
                    <span><img src={lang2}/></span>
                    <span><img src={lang3}/></span>
                    <span><img src={lang4}/></span>
                </div>
                <motion.a 
                    target="_blank"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: .8}}
                    href={href} className="btn btn-primary">Visit now
                </motion.a>
            </div>
        </div>
    )
}


export default function Projects(){
    const sectionRefs = useRef([]); // مصفوفة لتخزين المراجع لكل `projects`

    useEffect(() => {
        const observers = [];

        sectionRefs.current.forEach((section) => {
            if (!section) return;

            const boxs = section.querySelectorAll(".box");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("is-flibbed");
                        } , 500)
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            boxs.forEach((box) => observer.observe(box));
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    


    return(
        <div style={{backgroundColor: "black"}}>
            <motion.h1 className="myProjects"
                initial={{ transform: "translateX(-102%)" }}
                animate={{ transform: "translateX(0%)" }}
                transition={{
                delay: 1,
                type: "spring",
                stiffness: 20,
                restDelta: 2
                }}
            >
                My Projects
            </motion.h1>
            <div className="projects"  ref={(el) => sectionRefs.current[0] = el}> 
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card img={hangman} 
                            title="HangMan Game" 
                            href={"https://mohamed-ha-zem.github.io/Hang_Man_Game/"} 
                            description="The game is guess the word if you guess wrong the man will hanged and if you guess true you will be won"
                            lang1={html} lang2={css} lang3={js}
                        />
                    </div>
                </div>
                {/* <div className="description" style={{zIndex: "0"}}>
                    My Games
                </div> */}
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card 
                            img={memory} 
                            title="Memory Game" 
                            href={"https://mohamed-ha-zem.github.io/Memory_Game/"} 
                            description="The game is guess the picture if the one picture same the two picture you will be won but if not same it 25 time you will be lose"
                            lang1={html} lang2={css} lang3={js}
                            />
                    </div>
                </div>
            </div>

            <div className="projects" ref={(el) => sectionRefs.current[1] = el}> 
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card img={prayer} 
                            title="Prayer Website" 
                            href={"https://mohamed-ha-zem.github.io/Prayer-Project/"} 
                            description="A Website to Prayer times and find in it times all of Arab Countries."
                            lang1={html} lang2={css} lang3={js} lang4={axios}
                        />
                    </div>
                </div>
                {/* <div className="description" style={{zIndex: "0"}}>
                    My Games
                </div> */}
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card 
                            img={shopCrud} 
                            title="Shop Crud website" 
                            href={"https://mohamed-ha-zem.github.io/CRUD-Shop/"} 
                            description="The website to seal products and search the product and buy any products."
                            lang1={html} lang2={css} lang3={js}
                            />
                    </div>
                </div>
            </div>

            <div className="projects" ref={(el) => sectionRefs.current[2] = el}> 
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card img={medical} 
                            title="Medical Website" 
                            href={"https://youtu.be/NehBAYS9EcA"} 
                            description="The Medical website inside many Sections and provide inside Translation Property and button to change the colors in website."
                            lang1={html} lang2={css} lang3={js} lang4={react}
                        />
                    </div>
                </div>
                {/* <div className="description" style={{zIndex: "0"}}>
                    My Games
                </div> */}
                <div className="box">
                    <div className="face front">
                        <img src={image1}/>
                    </div>
                    <div className="face back">
                        <Card 
                            img={shopClothes} 
                            title="Shop Clothes Api" 
                            href={"https://youtu.be/9zZzzi3lIg8"} 
                            description="The Market to buy the Clothes and use Api(laravel) inside and find in it register and login page and the responsive website."
                            lang1={react} lang2={axios} lang3={api}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}