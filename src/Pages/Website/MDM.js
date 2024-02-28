import ThemeSetting from "./Include/ThemeSetting";
import "./styles/MDM.css";

import React, { useState, useEffect } from "react";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiRelationshipBounds } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Link, withRouter, useHistory } from "react-router-dom";

function MDM() {
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
  //   const baseUrl = location.href.includes("trainingncr.info")
  //     ? `http://trainingncr.info/techx/assets/images`
  //     : `/assets/images`;
  return (
    <>
      <div className="banner">
        <div className="banner-image"></div>
        <div className="banner-container">
          <h1 className="banner-heading">
            Revolutionizing Mobile Device Management with{" "}
            <span className="logo">TECHX</span>: Unmatched Solutions for
            Seamless Control and Security
          </h1>
          <p className="banner-para">
            Empower Your Business Mobility with TECHX's Cutting-Edge MDM
            Expertise
          </p>
        </div>
      </div>
      <div className="dec-container textColor ">
        <h3>
          In the ever-evolving landscape of technology,{" "}
          <span className="logo">TECHX</span> stands as a pioneering engineering
          company, setting new benchmarks in Mobile Device Management (MDM). Our
          commitment goes beyond conventional boundaries, providing unparalleled
          solutions that redefine how businesses manage and secure their mobile
          ecosystems.
        </h3>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="AI-card-section">
        <h2 className="AI-text-title-one text-center mt-5 white-theme-text-AI">
          Why Choose
          <span className="heading-text-AI-banner">TECHX</span> for MDM
        </h2>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Innovative Engineering Excellence
                </h3>
                <p className="AI-text-title-three mt-1">
                  At TECHX, we bring a unique blend of innovation and
                  engineering prowess to MDM. Our solutions are not just about
                  managing devices; they're about enhancing your business
                  efficiency, productivity, and security through innovative
                  engineering.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <GrTechnology className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Tailored MDM Solutions
                </h3>
                <p className="AI-text-title-three mt-1">
                  One size doesn't fit all, especially in the dynamic world of
                  MDM. TECHX crafts bespoke solutions tailored to your business
                  needs, ensuring that your mobile devices are not just managed
                  but optimized for peak performance.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <GiRelationshipBounds className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Seamless Integration
                </h3>
                <p className="AI-text-title-three mt-1">
                  Our MDM solutions seamlessly integrate into your existing IT
                  infrastructure. Whether it's iOS, Android, or other platforms,
                  TECHX ensures a smooth and harmonious integration, minimizing
                  disruptions and maximizing control
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Unmatched Security Protocols
                </h3>
                <p className="AI-text-title-three mt-1">
                  In the digital age, security is paramount. TECHX's MDM
                  solutions are fortified with state-ofthe-art security
                  protocols. From device authentication to data encryption, we
                  employ robust measures to safeguard your business information.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Remote Management Capabilities
                </h3>
                <p className="AI-text-title-three mt-1">
                  In a world where remote work is becoming the norm, TECHX's MDM
                  solutions empower you to manage and secure devices from
                  anywhere. Maintain control, enforce policies, and troubleshoot
                  issues – all remotely
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Enhanced User Experience
                </h3>
                <p className="AI-text-title-three mt-1">
                  We understand that a seamless user experience is
                  non-negotiable. TECHX focuses on not just managing devices but
                  ensuring that your team can work efficiently and intuitively,
                  fostering productivity and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="AI-slider-section mt-5">
            <h1 className="slider-heading textColor">
              Categories of MDM Services by{" "}
              <span className="slider-logo">TECHX</span>
            </h1>
            <Slider {...settings}>
              <div>
                <div className="AI-slider-box Aislider1">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Comprehensive Device Monitoring:
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Real-time monitoring of device health, usage, and
                      performance
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider2">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Security Enforcement
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Robust security protocols to safeguard against data
                      breaches and unauthorized access
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider3">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Application Management
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Control over the installation, updates, and usage of
                      applications on mobile devices
                    </li>
                  </ul>
                  <div className="quotes-slider-AI ">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider4">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Policy Compliance:
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Enforcement of company policies to ensure compliance and
                      mitigate risks
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider5">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Remote Troubleshooting:
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Swift identification and resolution of device issues,
                      minimizing downtime
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider6">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Data Backup and Recovery
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Regular backups and efficient recovery mechanisms to
                      prevent data loss
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider6">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Location Tracking
                  </h3>
                  <ul className="white-theme-color slider-para">
                    <li>
                      Geo-tracking capabilities for enhanced device security and
                      asset management
                    </li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          ----------------------------------------------------------------------
          <div id="mdm-last">
            <p className="AI-text-title-three mt-1 text-center width-text-tile-three bottom-txt">
              At TECHX, we don't just manage devices; we engineer solutions that
              elevate your business to new heights. Our MDM services redefine
              what is possible, offering a unique blend of innovation, security,
              and efficiency. Choose TECHX, and let your mobile devices become a
              strategic asset rather than a management challenge. Experience the
              TECHX difference – where engineering meets excellence
            </p>
          </div>
        </div>
      </div>
      ----------------------------------------------------------------------
      <ThemeSetting />
    </>
  );
}

export default MDM;
