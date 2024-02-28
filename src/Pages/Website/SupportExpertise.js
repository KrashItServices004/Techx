/* eslint-disable no-restricted-globals */
import React from "react";
import ThemeSetting from "./Include/ThemeSetting";
import { Link, withRouter, useHistory } from "react-router-dom";
// import "./styles/UiDesigning.css";
//import "./styles/DegitalMarketing.css";
import "./styles/SupportExpertise.css";
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line no-unused-vars
const DegitalMarketing = () => {
  const handleFAQClick = (e) => {
    const questions = document.querySelectorAll(".q");

    questions.forEach((question) => {
      if (question !== e.currentTarget) {
        question.classList.remove("open");
        question.querySelector(".q-b").style.display = "none";
      }
    });
    e.currentTarget.classList.toggle("open");
    const qb = e.currentTarget.querySelector(".q-b");
    if (qb) {
      qb.style.display = qb.style.display === "block" ? "none" : "block";
    }
  };

  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  return (
    <div
      className=" container support-expertise
    -section" id="Containers"
    >
      <h3 className="digital-section_subtitle">Support Expertise</h3>
      <h2 className="cs-section_title">
        Revolutionizing Tech Solutions with TECHX's Unmatched Remote Support
        Expertise
      </h2>

      <h4 className="support-sub-heading textColor" >
        Experience Unparalleled Technical Assistance Beyond Limits
      </h4>
      <p className="support-sub-p textColor" >
        At TECHX, we redefine the realms of innovation and engineering, offering
        a spectrum of services that extend far beyond the ordinary. In our
        pursuit of excellence, one facet that sets us apart is our extraordinary
        expertise in "Remote Support." While many claim proficiency, we take
        pride in delivering a level of service that transcends industry norms
      </p>






      <div className="container mt-5">
        <div className="row sup-mgt2" style={{justifyContent:"center"}}>
          <div className="col-md-6 ">
            <h2 >Introduction</h2>
            <p >At TECHX, we pride ourselves on being more than just an engineering firm; we are pioneers in
              crafting seamless and advanced VoIP Systems that elevate communication experiences to
              unparalleled heights. VoIP has become the cornerstone of modern business communication,
              and we lead the charge in harnessing its potential to revolutionize the way organizations
              connect and collaborate.</p>
          </div>
          <div className="col-md-6">
            <img src="/assets/images/remote/artificial-intelligence.jpg" height={400} width={400} alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="row sup-mgt2" style={{justifyContent:"center"}}>
          <div className="col-md-6 ">
            <img src="/assets/images/remote/call.jpg" height={400} width={400} alt="" />

          </div>
          <div className="col-md-6 ">



            <h2 >Training and Development for Remote Support Teams</h2>
            <p>Discuss the importance of training and developing remote support teams. Explore effective training methods, ongoing education, and the soft skills necessary for remote support professionals to excel in their roles Remote support teams play a crucial role in providing assistance and solutions to users or clients without being physically present. Training and developing these teams are essential to ensure they possess the necessary technical expertise, soft skills, and adaptability required for remote interactions.</p>
          </div>
        </div>
      </div>











      <div className="container mt-3">
        <div className="row dm-card-section" style={{justifyContent:'center', alignItems:'center'}}>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                Tailored Solutions for Every Industry
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                TECHX understands that each industry has its unique challenges.
                Our remote support services are meticulously tailored to cater
                to the specific needs of diverse sectors, ensuring optimal
                performance and swift issue resolution
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                {" "}
                Proactive Monitoring and Predictive Solutions
              </h3>
              <p className="dm-description text-left " style={{marginLeft:'10px'}}>
                Gone are the days of reactive problem-solving. TECHX employs
                cutting-edge technologies to proactively monitor systems,
                foresee potential issues, and implement preventive measures. Our
                remote support doesn't just fix problems; it prevents them.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                Real-Time Support Anytime, Anywhere
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                We redefine the concept of "remote" by providing real-time
                support irrespective of your location. Our team is ready to
                assist you around the clock, ensuring your systems remain
                operational when you need them the most.
              </p>
            </div>
          </div>

          {/* ----------------------- */}
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                Unrivaled Technical Expertise
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                At TECHX, we don't just resolve issues; we innovate solutions.
                Our team comprises seasoned engineers and technicians with a
                wealth of experience, offering a level of expertise that
                surpasses industry standards
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                {" "}
                Customizable Service Packages
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                Recognizing the diverse needs of our clients, we offer
                customizable service packages. Whether you're a small startup or
                a large enterprise, TECHX adapts its remote support solutions to
                align seamlessly with your goals and budget
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                Secure and Compliant Operations
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                Security is at the core of everything we do. Our remote support
                services adhere to the highest industry standards, ensuring that
                your systems are not only efficiently managed but also secure
                and compliant with regulatory requirements.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <h3 className="dm-iconbox_title">
                Future-Ready Technological Integration
              </h3>
              <p className="dm-description text-left" style={{marginLeft:'10px'}}>
                TECHX doesn't just address current challenges; we prepare your
                systems for the future. Our remote support integrates
                forward-thinking technologies, ensuring that your infrastructure
                evolves in tandem with technological advancements
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid mt-4 mb-3">
        <div className="row sup-mgt2" style={{justifyContent:"center"}}>
          <div className="col-md-6 ">
            <h2 >Comparative Analysis of Remote Support Solutions</h2>
            <p >Compare different remote support solutions in terms of features, scalability, and user-friendliness. 
              Provide insights to help businesses choose the right remote support platform based on their specific 
              needs and requirements. As the demand for remote support continues to rise, businesses have a plethora of
              remote support solutions to choose from. A comparative analysis helps in evaluating these solutions based on 
              various factors, allowing organizations to make informed decisions regarding the adoption of a specific remote
              support platform.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/assets/images/remote/audio.jpg" height={400} width={400} alt="" />
          </div>
        </div>
      </div>


      <ThemeSetting />
    </div>
  );
};
export default withRouter(DegitalMarketing);
