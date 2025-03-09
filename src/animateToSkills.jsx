import { useEffect, useState } from "react";

export default function AnimateSkill({ img, shadow, wi, skill, numper }) {
    const [num, setNum] = useState(0);

    function plus(nump) {
        let num1 = num;
        let num2 = nump
        const interval = setInterval(() => {
            num1 += 1;
            setNum(num1);
            if (num1 >= num2) {
                clearInterval(interval);
            }
        }, 50);
    }
    useEffect(() => {
        plus(numper);
    } , [])


    return (
        <div 
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transition: "opacity 0.5s ease-in-out" // تأثير الانتقال التدريجي
            }}
        >
            <span 
                style={{
                    color: "white",
                    position: "absolute",
                    top: "-15%",
                    fontWeight: "bold",
                    left: "25%"
                }}
            >
                {num}%
            </span>
            <div 
                className="border" 
                style={{
                    background: `conic-gradient(${shadow} ${num}%, #222 ${100 - num}%)`
                }}
            ></div>
            <div 
                className="borderSkill" 
                style={{
                    margin: "10px 30px 0px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    boxShadow: `${shadow} 0px 0px 85px 20px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img style={{ maxWidth: wi, borderRadius: "30%" }} src={img} />
            </div>
            <h3 
                style={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginTop: "0px",
                    textAlign: "center"
                }}
            >
                {skill}
            </h3>
        </div>
    );
}
