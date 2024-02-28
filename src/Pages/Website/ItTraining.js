import "./styles/ItTraining.css";
import ThemeSetting from "./Include/ThemeSetting";
import "slick-carousel/slick/slick-theme.css";
import Cookie from "./Include/Cookie";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ItTraining() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="f-page">
        <div className="f-text">
          <h1>
            Unlocking Potential: Empowering{" "}
            <span className="t-success">Success</span> Through Cutting-Edge IT
            Training at{" "}
            <span className="t-company">
              TECH<span className="tchar-x">X</span>
            </span>
          </h1>
          <h3>
            Revolutionizing Learning in IT: Unleash Your Potential with TECHX's
            Unique Approach
          </h3>
          <p>
            At TECHX, we redefine the landscape of IT training, transcending
            conventional boundaries to cultivate a new era of expertise and
            innovation. As an engineering company committed to pushing the
            limits, we recognize the profound impact of continuous learning in
            the dynamic field of technology
          </p>
        </div>

        <div className="f-image">
          <img src="assets/images/pages/ItTraining/person-working-html-computer.jpg"></img>
        </div>
      </div>

      <div className="cardds">
        <h2
          className="card-heading"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Why Choose TECHX for IT Training ?
        </h2>

        <div className="card1 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Innovative Curriculum</h2>
          <p style={{color:'red'}}>
            Embark on a learning journey crafted by industry experts, blending
            theoretical knowledge with real-world applications. Our innovative
            curriculum evolves alongside the rapidly changing IT landscape,
            ensuring you stay ahead of the curve
          </p>
        </div>

        <div className="card2 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Hands-On Experience</h2>
          <p style={{color:'red'}}>
            At TECHX, theory meets practice. Immerse yourself in hands-on
            projects, simulations, and interactive labs designed to reinforce
            concepts and foster practical skills. Experience is not just
            encouraged; it's integral to our training philosophy
          </p>
        </div>

        <div className="card3 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Expert Instructor</h2>
          <p style={{color:'red'}}>
            Learn from the best in the industry. Our seasoned instructors bring
            a wealth of experience, passion, and a commitment to nurturing your
            technical prowess. They don't just teach; they inspire and guide you
            to reach new heights
          </p>
        </div>
        <div className="animation-container" data-aos="zoom-in">
          <img
            src="assets/images/icons/Mr3W.gif"
            className="round-animation"
            alt=""
          />
        </div>

        <div className="card4 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Customized Learning Paths</h2>
          <p style={{color:'red'}}>
            Recognizing that every learner is unique, we offer personalized
            learning paths tailored to your goals and aspirations. Whether
            you're a beginner or a seasoned professional, TECHX has the right
            program to elevate your expertise
          </p>
        </div>

        <div className="card5 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Cutting-Edge Technologies</h2>
          <p style={{color:'red'}}>
            Stay on the forefront of technology trends with access to
            cutting-edge tools and platforms. Our training programs encompass
            the latest advancements in IT, providing you with the skills
            demanded by the industry
          </p>
        </div>

        <div className="card6 card" data-aos="fade-up" data-aos-duration="1000">
          <h2>Industry-Relevant Projects</h2>
          <p style={{color:'red'}}>
            Bridge the gap between theory and application through
            industry-relevant projects. Our training programs emphasize
            practicality, ensuring you are well-prepared for the challenges of
            the professional realm
          </p>
        </div>
      </div>

      <div className="categories">
        <h2
          className="category-heading"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Categories of IT Training at <span className="logo">TECHX</span>
        </h2>
        <div
          className="category1 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Programming and Development</h2>
          <p>
            Comprehensive courses in popular programming languages and
            development frameworks
          </p>
        </div>

        <div
          className="category2 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Cloud Computing and DevOps</h2>
          <p>
            Harness the power of the cloud and streamline development with our
            Cloud Computing and DevOps training
          </p>
        </div>

        <div
          className="category3 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Cybersecurity</h2>
          <p>
            Protect systems and networks with our cutting-edge cybersecurity
            training programs
          </p>
        </div>

        <div
          className="category4 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Data Science and Analytics</h2>
          <p>
            Dive into the world of data with specialized training in data
            science and analytics
          </p>
        </div>

        <div
          className="category5 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Networking and Infrastructure</h2>
          <p>
            Build a solid foundation in networking and infrastructure through
            our specialized courses
          </p>
        </div>

        <div
          className="category6 category"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Artificial Intelligence and Machine Learning</h2>
          <p>
            Explore the realms of AI and ML with hands-on training in the latest
            technologies
          </p>
        </div>
      </div>
      <ThemeSetting />

      <Cookie />
    </>
  );
}

export default ItTraining;
