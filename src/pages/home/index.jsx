import AboutComponents from "../../components/about";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import SkillsOrbit from "../../components/skills";

function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <AboutComponents />
      <SkillsOrbit />
    </div>
  );
}

export default Home;
