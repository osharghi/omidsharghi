import React from "react"
import selfie from "../assets/Selfie.jpg"

export default function About() {
    return (
        <div className="about-section">
            <img src={selfie} alt="Omid" className="selfie" />
            <p>hi, it's me.</p>
        </div>
    )
}