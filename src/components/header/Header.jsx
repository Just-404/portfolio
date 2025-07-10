import HeroSection from "./HeroSection";
import Nav from "./Nav";
import "../../styles/header.css";
export default function Header() {
  return (
    <header>
      <Nav />
      <HeroSection />
    </header>
  );
}
