import { HEADER } from "../../utils/pageConstants";

export default function HeroHeader() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Software Developer</h1>
        <div className="about">
          <h2>About me</h2>
          <p>{HEADER.profile.about}</p>
        </div>
      </div>
      <div className="profile">
        <img src={HEADER.profile.img} alt="Profile" />
        <h2>{HEADER.profile.name}</h2>
      </div>
    </section>
  );
}
