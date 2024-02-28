import React,{useEffect} from "react";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/Networkmanagement.css";
import Aos from "aos";
import"aos/dist/aos.css";
import { Link, withRouter } from "react-router-dom";
   const Networkmanagement=()=> {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
  // eslint-disable-next-line no-restricted-globals
  const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;

  return (
    <>
<div className="website-all-section">
        <div className="overlay-website-banner"></div>
        <div
          className="website-banner-img"
          style={{
            backgroundImage: `url("../assets/images/icons/It17.jpg")`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cyber-banner-text-area ">
                
                <h2 className="Website-text-title-1 nt-mmain"  >
                  Revolutionizing Network Management with TECHX Unleashing Unparalleled Engineering Excellence 
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
        
      </div>

      <div className="card-website-section ">
        <h2 className="Website-text-title-one-nm text-center white-theme-text-Website mt-3 textColor" data-aos="fade-right">
        Elevate Your Connectivity Experience to Uncharted Heights with TECHX's Cutting-Edge Network Management Solutions
        </h2>
        <p className="Website-text-title-three text-center media-text-tile-three mt-2 width-para-text-website" data-aos="fade-left">
        At TECHX, we redefine the norms of Network Management, setting the stage for a new era of
        connectivity solutions that go beyond the ordinary. Our commitment to engineering
        excellence propels us to explore the uncharted territories of innovation, delivering services
        that surpass industry standards. </p>
        <div className="container mt-4 nm-style3 ">
            <h2 className="text-center mb-2 textColor">Categories of Network Management Services</h2>
            <div className="row nm-style4">
                <div className="col-lg-4">
                    <h3 className="textColor">Network Design</h3>
                    <p data-aos="fade-rown">
                       <li> Customized network architecture</li>
                       <li>Performance optimization strategies</li>
                    </p>
                </div>
                <div className="col-lg-4">
                    <h3  className="textColor">Proactive Maintenance</h3>
                    <p data-aos="fade-rown">
                   <li> Real-time monitoring</li>
                   <li> Predictive issue resolution</li>
                    </p>
                </div>
                <div className="col-lg-4">
                    <h3  className="textColor">Security Integration</h3>
                    <p data-aos="fade-rown">
                    <li>Advanced cybersecurity protocols</li>
                    <li>Threat detection and prevention</li>
                    </p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3  className="textColor">Custom Solutions</h3>
                    <p data-aos="fade-rown">
                   <li> Tailored network management plans</li>
                   <li>Scalable solutions for businesses sizes</li>
                    </p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3  className="textColor">24/7 Support</h3>
                    <p data-aos="fade-rown">
                   <li> Dedicated support team</li>
                   <li> Rapid response to network issue</li>
                    </p>
                </div>
            </div>
        </div>
        </div>

      <div className="container about-website-section mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <div className="website-about-section">
              <img src=
                "../assets/images/icons/It12.jpg"
                height={400} width={400}
                alt="" className="nm-imgit12"
              />
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-left">
            <div className="website-about-text-section" id="nm-cnd">
              <h2 className="Website-text-title-one white-theme-text-AI">
              Customized Network Design
              </h2>
              <p className="Website-text-title-three mt-2 pb-2 media-text-tile-three">
              At TECHX, we don't believe in one-size-fits-all solutions. Our network architects work closely
             with clients to design customized network infrastructures that align with their specific needs.
             Whether you're a small startup or a large enterprise, our solutions scale to meet your
             demands. </p>
            </div>
          </div>
        </div>
      </div>  

      <div className="banner-card-web-section" style= {{
        backgroundImage : `url(${baseUrl}/icons/exclusive_service_bg.png)`
      }}>
        <div className="container">
      <div className="row justify-content-center mt-5 card-style-main" style={{gap:40}}>
      
            <div className="col-md-3 card-style1" data-aos="fade-left">
               <div className="text-center">
              <img src="../assets/images/icons/It13.jpg" className="img-card-nm mx-auto" alt=""/>
              </div>
              <div className="nm-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>               
                {/* <!-- box-title --> */}
                <h3 className="textColor"> Unmatched Expertise</h3>
                {/* <!-- box-para --> */}
                <p className="text-left" style={{marginLeft:'12px'}}>
                In the realm of Network Management, TECHX stands as a beacon of expertise. Our seasoned
                engineers bring a wealth of experience, allowing us to craft bespoke solutions tailored to your
                unique requirements. We understand that every network is distinct, and our approach
                reflects this understanding.

                </p>
                
              </div>          
            </div>
            <div className="col-md-3 card-style1" >
              <div className="text-center">
              <img src="../assets/images/icons/It14.jpg" className="img-card-nm mx-auto" alt=""/>
              </div>  
              <div className="nm-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>                
                {/* <!-- box-title --> */}
                <h3 className="textColor">Innovative Solutions</h3>
                {/* <!-- box-para --> */}
                <p  className="text-left" style={{marginLeft:'12px'}}>
                What sets TECHX apart is our relentless pursuit of innovation. We don't just manage
                networks we engineer solutions that anticipate future challenges. From advanced
                troubleshooting to proactive maintenance, our services are designed to keep your network
                operating at peak efficiency.</p>              
              </div>         
            </div>
            <div className="col-md-3 card-style1" data-aos="fade-right">
              <div className="text-center">
                <img src="../assets/images/icons/It16.jpg" className="img-card-nm mx-auto" alt=""/>
              </div> 
              <div className="nm-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>                
                {/* <!-- box-title --> */}
                <h3 className="textColor">Security Beyond Standards</h3>
                {/* <!-- box-para --> */}
                <p  className="text-left" style={{marginLeft:'12px'}}>
                In an age where cyber threats loom large, TECHX integrates robust security protocols into
                every aspect of our Network Management services. We go beyond industry standards to
                safeguard your data, ensuring a network environment fortified against evolving cyber risks.
                </p>                
              </div>          
            </div>
          </div>
          </div>
      </div>
      <div className="se-head mt-2">
        <h3 className="textColor">Conclusion</h3>
        <p className="mt-1" data-aos="fade-down">In a world where connectivity is the lifeblood of businesses, TECHX emerges as the avantgarde force in Network Management, leading the charge towards a future where networks are
         not just managed but meticulously engineered for success. Partner with TECHX and
         experience a network transformation like never before.
        </p>
      </div>
      <ThemeSetting/>
    </>
  );
}
export default withRouter(Networkmanagement);
