import React from "react"
import img from "../assets/saturn.png"

export default function NavBar() {
    return (
        <div className="nav-header">
            <img src={img} width="50px" height="50px" alt="Logo" />
            <h2>Omid Sharghi</h2>
        </div>
    )
}