import React from "react"

const projects = [
    {
        name: "Ticker Scanner",
        url: "https://osharghi.github.io/ticker-scan/",
        description:
            "Scans the S&P 500 every weekday morning and afternoon, ranks the biggest movers since the open, and emails a report. " +
            "It runs as a Docker container on AWS Lambda triggered by EventBridge Scheduler, stores each day's results in S3, and charts them on a public site.",
    },
]

export default function Projects() {
    return (
        <section className="projects-section">
            <h3 className="projects-heading">projects</h3>
            <ul className="projects-list">
                {projects.map((p) => (
                    <li key={p.name} className="project">
                        <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
                        <p>{p.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
