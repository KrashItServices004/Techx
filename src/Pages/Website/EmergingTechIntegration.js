import "./styles/EmergingTechIntegration.css";
import ThemeSetting from "./Include/ThemeSetting";
import "slick-carousel/slick/slick-theme.css";
import Cookie from "./Include/Cookie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function EmergingTechIntegration() {
  useEffect(() => {
    Aos.init();
  });
  const services = {
    service1: {
      heading: "Artificial Intelligence Integration",
      para: `Immerse your business in the intelligence revolution. TECHX seamlessly integrates AI
            solutions, from machine learning algorithms to cognitive computing, unlocking
            unprecedented efficiency and insights`,
    },

    service2: {
      heading: "IoT (Internet of Things) Implementations",
      para: `Connect, analyze, and optimize. TECHX propels your business into the IoT era, where
            devices communicate intelligently, enabling smarter decision-making and unparalleled
            control`,
    },

    service3: {
      heading: "Blockchain Solutions",
      para: `Secure, transparent, and decentralized. TECHX pioneers blockchain solutions that
      redefine trust and accountability, ensuring your business operates on a foundation of
      unparalleled security`,
    },

    service4: {
      heading: "Augmented and Virtual Reality (AR/VR)",
      para: `Immerse your audience in experiences beyond reality. TECHX crafts immersive AR/VR
        solutions that captivate, educate, and revolutionize the way you engage with your
        audience`,
    },

    service5: {
      heading: "Edge Computing Integration",
      para: `Faster, smarter, and more efficient. TECHX optimizes your operations through Edge
      Computing, bringing computation closer to the data source, reducing latency, and
      enhancing performance`,
    },
  };

  return (
    <>
      <div className="heading">
        <div className="heading-container">
          <h1>
            <span className="heading-1">Transforming Tomorrow</span>
          </h1>
          <h1 className="heading-2">
            Unleashing the Power of Emerging Tech with
            <span className="heading-logo"> TECHX</span>
          </h1>
          <h3 className="textColor">
            Revolutionize Your Future with Cutting-Edge Solutions Tailored by
            TECHX Engineering Prowess
          </h3>
        </div>

        <div className="heading-image" data-aos="fade-left">
          <img
            src="assets/images/pages/EmergingTechIntegration/blueprint-architecture-interior-design-structure-development-concept.jpg"
            alt=""
          ></img>
        </div>
      </div>

      <div className="discription" data-aos="fade-up" data-aos-duration="3000">
        <p className="dis-p-1 textColor">
          At TECHX, we transcend boundaries, pioneering a new era of innovation
          through our unparalleled expertise in Emerging Tech Integration. In a
          landscape where the only constant is change, we stand as architects of
          tomorrow, engineering solutions that redefine what's possible.
        </p>
        <div className="des-para-2 textColor">
          <h3>Our Commitment to Excellence</h3>
          <p>
            Embrace a future where possibilities are limitless with TECHX. We
            specialize in harnessing the potential of Emerging Technologies,
            crafting bespoke solutions that not only meet but exceed your
            expectations. Our commitment to excellence extends beyond the
            ordinary – we engineer the extraordinary.
          </p>
        </div>

        <div className="des-para-3 textColor">
          <h3>Engineering the Future</h3>
          <p>
            What sets us apart is our relentless pursuit of innovation. While
            others follow, TECHX leads. Our engineering prowess goes beyond the
            conventional, exploring realms others deem impossible. From
            AI-driven advancements to IoT implementations, we engineer solutions
            that transform industries, shaping a future that's smart, connected,
            and resilient.
          </p>
        </div>
      </div>

      <div className="services" data-aos="fade-up" data-aos-duration="3000">
        <div className="services-container">
          <div className="services-1 service">
            <h1>{services.service1.heading}</h1>
            <p className="text-left" style={{marginLeft:'18px'}}>{services.service1.para}</p>
          </div>

          <div className="services-2 service">
            <h1>{services.service2.heading}</h1>
            <p className="text-left" style={{marginLeft:'18px'}}>{services.service2.para}</p>
          </div>

          <div className="services-3 service">
            <h1>{services.service3.heading}</h1>
            <p className="text-left" style={{marginLeft:'18px'}}>{services.service3.para}</p>
          </div>

          <div className="services-4 service">
            <h1>{services.service4.heading}</h1>
            <p className="text-left" style={{marginLeft:'18px'}}>{services.service4.para}</p>
          </div>

          <div className="services-5-container">
            <div className="services-5 service">
              <h1>{services.service5.heading}</h1>
              <p className="text-left" style={{marginLeft:'18px'}}> {services.service5.para}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 textColor" data-aos="fade-up" data-aos-duration="3000" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className="container1-1">
          <h1>
            Why <span className="container2-heading">TECHX </span>
            <span className="moving">?</span>
          </h1>
          <p className="">
            Our team consists of visionaries, engineers, and problem solvers who
            thrive on challenges. We don't just provide solutions; we engineer
            experiences. Collaborate with TECHX, and you gain a partner
            dedicated to pushing boundaries, breaking norms, and engineering a
            future where your business not only survives but thrives
          </p>
        </div>
      </div>

      <div className="container2 textColor" data-aos="fade-up" data-aos-duration="3000" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className="container2-2">
          <h1>
            Join the <span className="container2-heading" style={{color:'red'}}>TECHX </span>
            Revolution
          </h1>
          <p className="text-left " style={{marginLeft:'0px'}}>
            In a world of technological convergence, TECHX stands at the
            crossroads of innovation. Partner with us, and embark on a journey
            where the integration of emerging technologies isn't just a service
            – it's a promise. At TECHX, we don't predict the future; we engineer
            it
          </p>
        </div>
      </div>

      <ThemeSetting />
    </>
  );
}

export default EmergingTechIntegration;
