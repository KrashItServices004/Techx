import React ,{useEffect} from "react";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/ProjectManagement.css";
//import { GrBusinessService } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";
import { GiGhostAlly } from "react-icons/gi";
import { BsServer } from "react-icons/bs";
import { BiSupport, BiMoneyWithdraw } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import FAQ from '../../Components/FAQ';
import { Link, withRouter } from "react-router-dom";
import Aos from "aos";
import"aos/dist/aos.css";
   const Projectmanagement=()=> {
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
            backgroundImage: `url("../assets/images/icons/pm3.jpg")`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cyber-banner-text-area ">
                <h3
                  className="website-text-title-two mt-1 white-theme-color web-title"
                  
                >
                  Project Management 
                </h3>
                <h2 className="Website-text-title-one">
                Unlocking Engineering Excellence Seamlessly Managed Projects by TECHX 
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
        
      </div>

      <div className="card-website-section">
        <h2 className="Website-text-title-one text-center white-theme-text-Website mt-3">
          Elevate Your Projects Redefine Success Unparalleled Project Management Expertise
        </h2>
        <p className="Website-text-title-three text-center media-text-tile-three mt-2 width-para-text-website" data-aos="fade-down">
        At TECHX, we transcend conventional boundaries in the engineering realm, pioneering a new
        era of project management excellence. With a steadfast commitment to innovation and a
        resolute focus on client success, we stand as a beacon of distinction in the industry. </p>
        <div className="container mt-3">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <BsServer className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Innovative Approach
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three" data-aos="fade-down">
                At the heart of TECHX lies an innovative approach to project management. We don't just
               execute we revolutionize. Our dynamic strategies ensure that every project is not merely
               completed but stands as a testament to ingenuity.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <MdOndemandVideo className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Tailored Solutions
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three" data-aos="fade-down">
                No two projects are identical, and neither are our solutions. We meticulously tailor our
                project management services to align with your unique objectives, ensuring that each
                 venture receives the attention and expertise it deserves.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <GiGhostAlly className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                  Unmatched Expertise
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three" data-aos="fade-down">
                Our team comprises seasoned professionals with extensive experience in engineering project
                management. Their collective expertise forms the backbone of TECHX, ensuring that your
                projects are in the hands of industry leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container about-website-section mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="website-about-section">
              <img src=
                "../assets/images/icons/pm4.jpg"
                height={400} width={400}
                alt="" className="pr-imgpm4"
              />
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="website-about-text-section" id="pm-collab">
              <h2 className="Website-text-title-one white-theme-text-AI">
              Collaborative Partnership
              </h2>
              <p className="Website-text-title-three mt-2 pb-2 media-text-tile-three" data-aos="fade-down">
              TECHX doesn't just manage projects; we cultivate partnerships. Through open
              communication and collaboration, we forge relationships that go beyond the completion of a
              project, fostering long-term success for our clients. </p>
            </div>
          </div>
        </div>
      </div>  

      <div className="banner-card-web-section" style= {{
        backgroundImage : `url(${baseUrl}/icons/exclusive_service_bg.png)`
      }}>
        <div className="container"style={{padding:30}}>
      <div className="row justify-content-center mt-5 card-style-main" style={{gap:40}}>
      
            <div className="col-md-3 card-style1">
              <img src="../assets/images/icons/pm1.jpg" className="img-pm" alt=""/>
              <div className="da-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>               
                {/* <!-- box-title --> */}
                <h3> Engineering Project Planning</h3>
                {/* <!-- box-para --> */}
                <p data-aos="fade-down" >
                Our meticulous planning process lays the foundation for success. From defining project
                scopes to resource allocation, we ensure that every detail is meticulously mapped out

                </p>
                
              </div>          
            </div>
            <div className="col-md-3 card-style1">
              <img src="../assets/images/icons/pm2.jpg" className="img-pm" alt=""/>  
              <div className="da-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>                
                {/* <!-- box-title --> */}
                <h3>Real-Time Project Tracking</h3>
                {/* <!-- box-para --> */}
                <p data-aos="fade-down">
                Our state-of-the-art tracking systems provide real-time insights into project progress. Clients
                stay informed at every stage, fostering transparency and allowing for informed decision making</p>              
              </div>         
            </div>
            <div className="col-md-3 card-style1">
              <img src="../assets/images/icons/pm5.jpg" className="img-pm" alt=""/> 
              <div className="da-card">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>                
                {/* <!-- box-title --> */}
                <h3>Resource Optimization</h3>
                {/* <!-- box-para --> */}
                <p data-aos="fade-down">
                We go beyond the basics of resource management. TECHX optimizes resources with
                precision, ensuring that every asset is utilized to its fullest potential, driving efficiency and
                cost-effectiveness </p>                
              </div>          
            </div>
          </div>
          </div>
      </div>
      <div className="se-head mt-2">
                        <h3 className="se-title-1">FAQS</h3>
                        <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
                        <Link to="/support"
                
                className="AI-text-title-one-btn" style = {{ margin:'auto' }}
              >
                Support
              </Link >
                    </div>
      {/* <FAQ/> */}
      <ThemeSetting/>
    </>
  );
}
export default withRouter(Projectmanagement);
