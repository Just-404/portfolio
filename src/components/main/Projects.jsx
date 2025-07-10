import ProjectCard from "../main/ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className="projects">
      <h3>My projects</h3>
      <div className="cards-container">
        {projects?.map(() => (
          <ProjectCard />
        ))}
      </div>
    </section>
  );
}
