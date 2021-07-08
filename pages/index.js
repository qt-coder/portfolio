import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div>
      <Intro/>
      <div className='content'>
        <About/>
        <Projects/>
        <CTA/>
        <Contact/>
      </div>
    </div>
  )
}
