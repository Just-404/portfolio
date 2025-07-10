import profileImg from "../../assets/profile-placeholder.jpg";
export default function HeroHeader() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>UI | UX Enhanced Experience</h1>
      </div>
      <div className="profile">
        <img src={profileImg} alt="Profile" />
        <h2>Eddy Rodriguez</h2>
      </div>

      <div className="about">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          dolorum voluptatum quasi incidunt doloremque exercitationem dicta cum
          quo beatae ad fugit minima at, facere, quisquam quae natus molestias
          eaque perferendis!
        </p>
      </div>
    </section>
  );
}
