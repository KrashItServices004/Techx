import "./styles/HardwareSupport.css";
import ThemeSetting from "./Include/ThemeSetting";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HardwareSupport() {
  useEffect(() => {
    Aos.init();
  });
  const standingPoint = {
    point1: {
      heading: "Engineering Expertise",
      para: `Our team comprises seasoned engineers with a wealth of experience, ready to tackle even the
      most intricate hardware challenges. We don't just fix; we engineer solutions tailored to your
      unique needs`,
    },

    point2: {
      heading: "Proactive Maintenance",
      para: `TECHX believes in staying ahead. Our proactive maintenance approach ensures potential
      hardware issues are identified and resolved before they impact your operations, minimizing
      downtime and maximizing efficiency`,
    },

    point3: {
      heading: "Custom Solutions",
      para: `Every business is unique, and so are its hardware requirements. At TECHX, we don't believe in
      one-size-fits-all solutions. Our engineers work closely with you to understand your specific
      needs and engineer tailored hardware support solutions`,
    },

    point4: {
      heading: "State-of-the-Art Technology",
      para: `Embracing the latest in technology, we leverage state-of-the-art tools and diagnostics to
      pinpoint hardware issues swiftly and accurately. Our commitment to staying ahead in the
      tech landscape ensures your hardware is in the hands of industry trailblazers`,
    },

    point5: {
      heading: "24/7 Support",
      para: `Your business operates around the clock, and so does our support. With 24/7 availability,
      TECHX ensures that whenever a hardware issue arises, our team is ready to provide swift
      resolution, keeping your operations uninterrupted`,
    },
  };

  const services = {
    service1: {
      heading: "Server Infrastructure Support",
      para: `From setup to ongoing maintenance, we ensure your server infrastructure operates at peak
      performance, guaranteeing a robust backbone for your digital operations`,
    },

    service2: {
      heading: "Network Hardware Solutions",
      para: `TECHX engineers cutting-edge solutions for your network hardware, optimizing connectivity
      and ensuring seamless data flow within your organization`,
    },

    service3: {
      heading: "Endpoint Device Support",
      para: `Whether it's desktops, laptops, or other endpoint devices, TECHX provides comprehensive
      support to keep your entire ecosystem functioning seamlessly`,
    },

    service4: {
      heading: "Hardware Security Integration",
      para: `Safeguard your hardware with TECHX's expertise in integrating advanced security measures,
      protecting your infrastructure from potential threats`,
    },

    service5: {
      heading: "Custom Hardware Solutions",
      para: `For businesses with unique hardware needs, TECHX offers bespoke solutions, engineered to
      perfection and designed to meet your exact specifications`,
    },

    service6: {
      heading: "Server Infrastructure Support",
      para: `From setup to ongoing maintenance, we ensure your server infrastructure operates at peak
      performance, guaranteeing a robust backbone for your digital operations`,
    },
  };

  return (
    <>
      <div className="hardware-heading" data-aos="fade-up">
        <div className="bg-image"></div>
        <div className="sub-hardware">
          <h1>
            Revolutionizing Hardware Support Solutions for Unparalleled
            Performance
          </h1>
          <p>
            Innovative Engineering Excellence Redefining Hardware Support in the
            Digital Age
          </p>
        </div>
      </div>

      <div className="hw-description textColor" data-aos="fade-up">
        <p>
          <b>Welcome to TECHX</b>, where cutting-edge engineering meets
          unparalleled hardware support solutions. At{" "}
          <span className="logo">TECHX</span>, we pride ourselves on being more
          than just an engineering company; we are pioneers in delivering
          hardware support services that transcend the ordinary. Our commitment
          goes beyond fixing issues – we engineer solutions that empower your
          technology infrastructure for optimal performance and longevity.
        </p>
      </div>

      <div className="container1 textColor">
        <div className="heading-container">
          <h1 className="container1-heading">
            Why Choose <span className="logo">TECHX</span> for Hardware Support
          </h1>
        </div>

        <div className="sub-container-1 sub-container-type-1">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            {standingPoint.point1.heading}
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000">
            {standingPoint.point1.para}
          </p>
        </div>

        <div className="sub-container-2 sub-container-type-2">
          <p data-aos="fade-right" data-aos-duration="2000">
            {standingPoint.point2.para}
          </p>

          <h1 data-aos="fade-left" data-aos-duration="2000">
            {standingPoint.point2.heading}
          </h1>
        </div>

        <div className="sub-container-3 sub-container-type-1">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            {standingPoint.point3.heading}
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000">
            {standingPoint.point3.para}
          </p>
        </div>

        <div className="sub-container-4 sub-container-type-2">
          <p data-aos="fade-right" data-aos-duration="2000">
            {standingPoint.point4.para}
          </p>

          <h1 data-aos="fade-left" data-aos-duration="2000">
            {standingPoint.point4.heading}
          </h1>
        </div>

        <div className="sub-container-5 sub-container-type-1">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            {standingPoint.point5.heading}
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000">
            {standingPoint.point5.para}
          </p>
        </div>
      </div>

      <div className="container2 textColor" >
        <h1 className="container2-heading textColor" id="hds-container2" data-aos="fade-up">
          Categories of Hardware Support Services
        </h1>
        <div
          className="sub-container2-1 sub-container2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>{services.service1.heading}</h1>
          <p>{services.service1.para}</p>
        </div>

        <div
          className="img-container"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img
            src="assets/images/pages/HardwareSupport/business-person-looking-finance-graphs.jpg"
            alt=""
          />
        </div>

        <div
          className="sub-container2-2 sub-container2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>{services.service2.heading}</h1>
          <p>{services.service2.para}</p>
        </div>

        <div
          className="sub-container2-3 sub-container2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>{services.service3.heading}</h1>
          <p>{services.service3.para}</p>
        </div>

        <div
          className="sub-container2-4 sub-container2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>{services.service4.heading}</h1>
          <p>{services.service4.para}</p>
        </div>

        <div
          className="sub-container2-5 sub-container2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>{services.service5.heading}</h1>
          <p>{services.service5.para}</p>
        </div>
      </div>

      <div className="conclusion" data-aos="fade-up" data-aos-duration="3000">
        <p className="textColor">
          TECHX stands as a beacon of innovation in the engineering landscape,
          transforming hardware support into a proactive, customized, and
          seamless experience. Join hands with TECHX, where hardware challenges
          are not just resolved but transformed into opportunities for
          advancement. Elevate your hardware support experience – choose TECHX,
          where engineering meets excellence
        </p>
      </div>

      <ThemeSetting />
    </>
  );
}

export default HardwareSupport;
