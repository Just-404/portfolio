import { useEffect, useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
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
          <img src="#" alt="" />
        </a>
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
