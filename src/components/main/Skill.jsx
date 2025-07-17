export default function Skill({ svgPath, name }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={svgPath} alt="" height="60" width="60" />
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
}
