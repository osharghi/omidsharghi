import React from "react"
import selfie from "../assets/Selfie.jpg"

export default function About() {
    return (
        <section id="top" className="hero">
            <img src={selfie} alt="Omid" className="hero-photo" />
            <div className="hero-text">
                <h1>Welcome, stranger<span className="accent">.</span></h1>
                <p className="hero-intro">
                    Mostly prompting, sometimes shipping.
                </p>
            </div>
        </section>
    )
}
