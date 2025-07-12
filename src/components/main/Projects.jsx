import ProjectCard from "../main/ProjectCard";
import { PROJECTS } from "../../utils/pageConstants";
import "../../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>My projects</h2>
      <div className="cards-container">
        {PROJECTS?.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
