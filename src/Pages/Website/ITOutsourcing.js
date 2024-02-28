/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/ITOutsourcing.css";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiRelationshipBounds } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Link, withRouter, useHistory } from "react-router-dom";

function ArtificialIntelligence() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "myCustomCarousel",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;

  return (
    <>
      <div className="container webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h2 className="AI-text-title-one">
                <span className="heading-text-AI-banner">
                  Revolutionizing IT Outsourcing
                </span>{" "}
                Unleashing Unmatched Engineering Excellence at TECHX
              </h2>
              <h3 className="sub-heading">
                Transform Your Business Landscape with TECHX's Unique Approach
                to IT Outsourcing
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-aboutus-section" id="itout-img1">
              <img
                // src="/assets/images/icons/AI_Bannner_robot.png"
                src="assets/images/pages/ITOutsourcing/standard-quality-control-concept-m.jpg"
                className="banner-AI-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="AI-card-section">
        <h2 className="AI-text-title-one text-center mt-5 white-theme-text-AI">
          <span className="heading-text-AI-banner">TechX </span>
        </h2>
        <p className="AI-text-title-three text-center width-text-tile-three mt-2">
          At TECHX, we don't just meet your outsourcing needs; we engineer
          success. Our commitment to excellence sets us apart, and here's why:
        </p>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3" id="ai-card-box">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Unmatched Engineering Expertise
                </h3>
                <p className="AI-text-title-three mt-1">
                  Embark on a journey with TECHX, where our team of seasoned
                  engineers transforms challenges into opportunities. Our unique
                  blend of technical proficiency and innovative thinking allows
                  us to engineer solutions that others deem impossible. We don't
                  just follow industry standards; we set them.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3" id="ai-card-box">
                <div className="AI-circle-box">
                  <GrTechnology className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Tailored Solutions for Every Business
                </h3>
                <p className="AI-text-title-three mt-1">
                  TECHX understands that one size doesn't fit all. That's why
                  our IT Outsourcing services are not just services – they are
                  customized solutions designed to meet the specific needs of
                  your business. Whether you're a startup or an established
                  enterprise, our engineering prowess ensures a tailor-made
                  approach that aligns with your objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <GiRelationshipBounds className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Cutting-Edge Technologies
                </h3>
                <p className="AI-text-title-three mt-1">
                  In a digital landscape constantly evolving, TECHX keeps you
                  ahead of the curve. We harness the power of cutting-edge
                  technologies, from AI and machine learning to advanced
                  cybersecurity measures, ensuring that your outsourcing
                  experience is not only seamless but also future-proof
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Strategic IT Outsourcing
                </h3>
                <p className="AI-text-title-three mt-1">
                  TECHX doesn't just offer outsourcing; we provide strategic
                  partnerships. Our approach is rooted in understanding your
                  business goals, challenges, and aspirations. We become an
                  extension of your team, working collaboratively to drive
                  efficiency, reduce costs, and propel your business toward
                  unprecedented success.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Proactive Risk Management
                </h3>
                <p className="AI-text-title-three mt-1">
                  We recognize the importance of safeguarding your business
                  against potential risks. TECHX takes a proactive stance on
                  risk management, implementing robust measures to secure your
                  data, systems, and operations. Your trust is our top priority,
                  and we go the extra mile to ensure the utmost security
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Unrivaled Customer Support
                </h3>
                <p className="AI-text-title-three mt-1">
                  TECHX takes pride in our unwavering commitment to customer
                  satisfaction. Our dedicated support team is available around
                  the clock, ensuring that your concerns are addressed promptly
                  and effectively. We don't just provide services; we build
                  lasting partnerships based on trust and reliability.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Continuous Innovation
                </h3>
                <p className="AI-text-title-three mt-1">
                  Innovation is the heartbeat of TECHX. Our engineers are driven
                  by a passion for creating solutions that redefine industry
                  standards. We stay ahead of the curve, constantly exploring
                  new technologies and methodologies to elevate your business to
                  new heights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="AI-slider-section mt-5">
            <h1 className="slider-heading">
              Categories of IT Outsourcing Services at{" "}
              <span className="slider-logo">TECHX</span>
            </h1>
            <Slider {...settings}>
              <div>
                <div className="AI-slider-box Aislider1">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Strategic IT Planning and Consulting:
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider2">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Software Development and Engineering
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider3">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Cybersecurity and Risk Management
                  </h3>
                  <div className="quotes-slider-AI ">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider4">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    AI and Emerging Technologies Integration:
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider5">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    24/7 Technical Support and Monitoring:
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider6">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Customized IT Solutions for Industry-specific Needs
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider6">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Efficient Data Management and Backup Solutions
                  </h3>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          ----------------------------------------------------------------------
          <div style={{justifyContent:"center"}} id="itout-last">
            <p className="AI-text-title-three mt-1 text-center width-text-tile-three bottom-txt">
              Embrace a new era of IT Outsourcing with TECHX – where engineering
              brilliance meets unmatched dedication to your success. Let us
              engineer solutions that propel your business beyond limits
            </p>
          </div>
        </div>
      </div>
      <ThemeSetting />
    </>
  );
}

export default ArtificialIntelligence;
