import React from "react"

const projects = [
    {
        name: "Ticker Scanner",
        url: "https://osharghi.github.io/ticker-scan/",
        tags: ["Python", "AWS", "Docker"],
        description:
            "Scans the S&P 500 every weekday morning and afternoon, ranks the biggest movers since the open, and emails a report. " +
            "It runs as a Docker container on AWS Lambda triggered by EventBridge Scheduler, stores each day's results in S3, and charts them on a public site. " +
            "If it makes you money, remember who sent you.",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            {projects.map((p) => (
                <article key={p.name} className="project">
                    <h3>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                            {p.name} <span aria-hidden="true">↗</span>
                        </a>
                        <span className="tags">{p.tags.join(" / ").toLowerCase()}</span>
                    </h3>
                    <p>{p.description}</p>
                </article>
            ))}
        </section>
    )
}
