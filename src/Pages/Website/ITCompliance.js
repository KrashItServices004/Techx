import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import "./styles/ITCompliance.css";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import Aos from "aos";
import"aos/dist/aos.css";
 export const ITCS = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div id="itc-Containers">
        <div className="container-fluid text-center   bg-primary mb-3 mt-5 Itc-style-home" >
            <h1>Innovation IT Compliance Solutions for Unmatched Security</h1>
            <div>
            <img src="../assets/images/icons/itc1.jpg" height={250} width={250} style={{borderRadius:150}} alt=""/>
            </div>
        </div>
        <div className="container text-center Itc-style2 ml-1" >
            <h2>Elevate Your Security Standards with TECHX's Exclusive IT Compliance Expertise</h2>
            <p data-aos="fade-down">At TECHX, we redefine the landscape of IT Compliance, setting new benchmarks with our
                cutting-edge engineering solutions. Our commitment goes beyond industry standards we
                innovate where others follow. In a digital age where security is paramount, TECHX stands as
                the beacon of unparalleled IT Compliance services.
            </p>
        </div>
        <div className="container mt-4 Itf-style3">
            <h2 className="text-center mb-2">Categories of Expertise</h2>
            <div className="row ml-2 Itf-style4" style={{alignItems:'center', justifyContent:'center'}}>
                <div className="col-lg-4">
                    <h3>Tailored Compliance Solutions</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'20px'}}>Our engineering prowess enables us to create bespoke IT Compliance solutions, tailored to
                       the unique
                       needs of your business. Unlike one-size-fits-all approaches, we meticulously design and
                       implement strategies that align with your industry, ensuring comprehensive compliance
                       across the board.</p>
                </div>
                <div className="col-lg-4">
                    <h3>Automated Compliance Protocols</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'20px'}}>Embrace efficiency with TECHX's automated compliance protocols. We engineer seamless,
                       automated processes that not only ensure adherence to regulations but also streamline your
                       operations. Experience a level of efficiency that only TECHX can provide</p>
                </div>
                <div className="col-lg-4 ">
                    <h3>Proactive Risk Mitigation</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'20px'}}>TECHX goes beyond reactive measures. With our engineering-driven approach, we
                       proactively identify and mitigate risks before they become threats. Our focus is on
                       preemptive measures, ensuring a robust security posture for your organization</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3>Continuous Monitoring and Updating</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'20px'}}>At TECHX, we understand that compliance is an ongoing commitment. Our engineering team
                      ensures continuous monitoring and swift updates to keep your systems in line with the latest
                      regulatory requirements. Stay ahead in the compliance game with TECHX by your side</p>
                </div>
            </div>
        </div>
        <div className="container Itf-style3 mt-4" data-aos="fade-down">
            <h2 className="text-center mb-2" data-aos="fade-down">Why Choose TECHX for IT Compliance</h2>
            <div className="row ml-1 Itf-style4 Itf-style5" style={{gap:75}}>
                <div className="col-lg-3 ml-1 Itf-style6">
                <img src="../assets/images/icons/itc4.jpg" className="itc-img" alt=""/>
                    <h3>Engineering Excellence</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'18px'}}>TECHX is not just an IT compliance service; we are engineers of security. Our team
                       comprises experts with a deep understanding of technology and compliance, providing
                       you with solutions that are not only secure but also technologically advanced.</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                <img src="../assets/images/icons/itc5.jpg" className="itc-img" alt=""/>
                    <h3>Innovation at the Core</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'18px'}}>TECHX thrives on innovation. We go beyond conventional compliance approaches,
                       infusing innovation into every solution we provide. Expect groundbreaking strategies that
                       set you apart in the realm of IT compliance.</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                <img src="../assets/images/icons/itc6.jpg" className="itc-img" alt=""/>
                    <h3>Responsive Support</h3>
                    <p data-aos="fade-down" className="text-left">Our commitment to your security extends to our responsive support. TECHX ensures that
                       you are not alone in your compliance journey. Our support team is always ready to
                       address your concerns and provide timely assistance</p>
                </div>
               
            </div>
        </div>
        <div className="container-fluid itc-img2 mt-4">
            <div className="row mt-1" style={{justifyContent:"center"}}>
                <div data-aos="fade-left" className="col-md-6 itc-mgt2">
                    <h2>Continuous Improvement</h2>
                    <p>In the dynamic landscape of compliance, stagnation is not an option. TECHX is dedicated
                       to continuous improvement, adapting our strategies to evolving regulations and
                       emerging threats. Stay ahead with TECHX's commitment to staying current</p>
                </div>
                <div data-aos="fade-right" className="col-md-6">
                   <img src="../assets/images/icons/itc2.jpg" height={400} width={400} alt=""/>
                </div>
            </div>
        </div>
        <div className="container-fluid itc-img3 mt-3">
            <div className="row " style={{justifyContent:"center"}}>
               <div data-aos="fade-left" className="col-md-6">
                   <img src="../assets/images/icons/itc3.jpg" height={400} width={400} alt=""/>
                </div>
                <div data-aos="fade-right" className="col-md-6 itc-mgt2">
                    <h2>Tailored Solutions for Every Industry</h2>
                    <p>We recognize that every industry has unique compliance requirements. Our engineering
                       solutions are versatile, catering to the specific needs of various sectors, be it healthcare,
                       finance, or manufacturing.</p>
                </div>
                
            </div>
        </div>
        <div className="container Itf-style2 mt-5 mb-4" id="itc-conclu">
            <h2 className="text-center">Conclusion</h2>
            <p data-aos="fade-down">TECHX is not just an IT compliance service; we are architects of security, crafting solutions
               that transcend the ordinary. Elevate your security standards with TECHX's engineering
                excellence, tailored solutions, and unwavering commitment to innovation. Join us in
              redefining what IT compliance means for your organization choose TECHX, where
              engineering meets security, and where excellence is the only standard.</p>
        </div>
        </div>
        <ThemeSetting />

      <Cookie />
        </>
    )
}
export default withRouter(ITCS);