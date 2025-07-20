import { useEffect, useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <div className="card" ref={cardRef}>
      <div>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.img} alt="" />
        </a>
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="icons-container">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener nooreferrer"
          >
            <img src="/icons/github-white.svg" alt="Github logo" />
          </a>
          <a href={project.url} target="_blank" rel="noopener nooreferrer">
            <img src="/icons/external-link.svg" alt="Open new tab project" />
          </a>
        </div>
      </div>
    </div>
  );
}
