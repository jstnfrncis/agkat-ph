import '../../css/app.css'
import About from '../LandingPage/About.jsx';
import Footer from '../LandingPage/Footer.jsx';
import Hero from '../LandingPage/Hero';
import MeshBackground from '../UI/MeshBackground';
import Navbar from '../LandingPage/navbar';
import Socialproof from '../LandingPage/Socialproof.jsx';
import NewsEvents from '../LandingPage/NewsEvents.jsx';
import FeaturedSpots from '../LandingPage/FeaturedSpots.jsx';



function Home() {
  return (
    <>
      <div>
        {/* <Navbar  /> */}
        <Hero />
        <MeshBackground />
      </div>

      <div className="flex flex-col gap-24 mt-40 md:gap-24 lg:gap-60">
        <section>
          <Socialproof />
        </section>

        <section id="discover">
          <FeaturedSpots />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="event">
          <NewsEvents />
        </section>
        
      <Footer />
      </div>

    </>
  );
}

export default Home;
