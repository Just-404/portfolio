import { SKILLS } from "../../utils/pageConstants";
import Skill from "./Skill.jsx";
import "../../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {SKILLS.map((skill, idx) => (
          <Skill key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
}
