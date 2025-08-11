import { motion } from "framer-motion";
import { Cards } from "../ProjectsCard";
import { useState } from "react";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filters = ["All", "HTML & CSS", "JavaScript", "JavaScript & Api", "React", "React & backEnd"];

    const filteredCards = filter === "All" ? Cards : Cards.filter((project) => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateY: 180 },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const filterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const langVariants = {
        hover: {
            y: -10,
            rotate: 10,
            transition: { duration: 0.3, yoyo: Infinity },
        },
    };

    return (
        <motion.div
            className="projects-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="My Projects"
        >
            <motion.h1
                className="myProjects"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
            >
                My Projects
            </motion.h1>
            <motion.div
                className="filter-buttons container mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="row g-2 justify-content-center">
                    {filters.map((category, index) => (
                        <motion.div
                            key={index}
                            className="col-auto"
                            variants={filterVariants}
                        >
                            <motion.button
                                className={`filter-btn ${filter === category ? "active" : ""}`}
                                style={{ border: "3px solid transparent" }}
                                onClick={() => setFilter(category)}
                                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(236, 72, 153, 0.7)" }}
                                whileTap={{ scale: 0.9 }}
                                animate={filter === category ? { scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } } : {}}
                            >
                                {category}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <div className="container">
                <motion.div
                    className="row projects"
                    key={filter} // Force re-render on filter change
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredCards.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${index}`} // Unique key for each card
                            className="col-lg-4 col-md-6 col-sm-12 mb-4"
                            variants={cardVariants}
                        >
                            <div className="card">
                                <img
                                    src={project.img}
                                    style={{ width: "100%", height: "200px", borderRadius: "10px 10px 0 0" }}
                                    alt={project.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text mt-3">{project.desc}</p>
                                    <div className="langs">
                                        <div>
                                        {project.langs.map((lang, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover="hover"
                                                variants={langVariants}
                                            >
                                                <img src={lang} alt="lang" />
                                            </motion.span>
                                        ))}
                                        </div>
                                        <span className="fs-6">Res: <span className="fs-3">{project.response}</span></span>
                                    </div>
                                    <motion.a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(236, 72, 153, 0.7)" }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.link}
                                        className="btn btn-primary"
                                    >
                                        Visit now
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}