import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import "./styles/BIanalytics.css";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import Aos from "aos";
import"aos/dist/aos.css";
 export const BIanalytics=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div className="container-fluid text-center bg-primary Itf-style-home">
            <h1>Unlocking Business Insights Elevate Your Strategy with TECHX BI & Analytics Solutions</h1>
            <img src="../assets/images/icons/bi1.png" height={200} width={200} style={{borderRadius:100}} alt=""/>
        </div>
        <div className="container text-center Itf-style2 ml-1">
            <h2>Revolutionize Decision-Making with Cutting-Edge Business Intelligence and Analytics Services</h2>
            <p data-aos="fade-down">At TECHX, we redefine the possibilities of data-driven decision-making through our
              unparalleled BI & Analytics solutions. In the ever-evolving landscape of technology, our
              engineering prowess sets us apart as innovators, providing services that transcend the
              conventional boundaries of what others in the industry offer.

            </p>
        </div>
        <div className="container-fluid  bi-style3 mt-4">
            <div className="row" style={{justifyContent:"center"}}>
                <div data-aos="fade-left" className="col-md-6 bi-mgt2">
                    <h2>Crafting Unique Insights</h2>
                    <p>Our BI & Analytics services go beyond routine data analysis. We specialize in extracting
                       actionable insights from your raw data, transforming it into a strategic asset. TECHX
                       empowers your business with the foresight needed to make informed decisions, enabling you
                       to stay ahead of the competition</p>
                </div>
                <div data-aos="fade-right" className="col-md-6">
                   <img src="../assets/images/icons/bi2.png" height={400} width={400} alt=""/>
                </div>
            </div>
        </div>
        <div className="container-fluid bi-style5  mt-4">
            <div className="row" style={{justifyContent:'center'}}>
               <div data-aos="fade-left" className="col-md-6">
                   <img src="../assets/images/icons/bi3.png" height={400} width={400} alt=""/>
                </div>
                <div data-aos="fade-right" className="col-md-6 bi-mgt2" style={{marginLeft:-30}}>
                    <h2>Unmatched Engineering Expertise</h2>
                    <p>What sets TECHX apart is our deep-rooted engineering excellence. We pride ourselves on our
                       ability to engineer solutions that others deem challenging or impossible. Leveraging
                       advanced technologies and methodologies, we bring a fresh perspective to BI & Analytics,
                       unraveling insights that propel your business forward.</p>
                </div>
                
            </div>
        </div>
        <div className="container mt-4 Itf-style3">
            <h2 className="text-center mb-2">Categories of BI & Analytics Services</h2>
            <div className="row  Itf-style4" style={{alignItems:'center', justifyContent:'center'}}>
                <div className="col-lg-4">
                    <h3 className="text-left">Predictive Analytics</h3>
                    <p data-aos="fade-down" className="text-left" >Forecast future trends and behaviors
                     with precision, enabling proactive decisionmaking</p>
                </div>
                <div className="col-lg-4">
                    <h3 className="text-left">Big Data Analytics</h3>
                    <p data-aos="fade-down" className="text-left">Harness the power of big data to extract 
                    valuable insights, turning data into a strategic asset.</p>
                </div>
                <div className="col-lg-4">
                    <h3 className="text-left">Business Intelligence Reporting</h3>
                    <p data-aos="fade-down" className="text-left">Create intuitive and visually compelling reports, 
                    providing a comprehensive view of your business metrics</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3 className="text-left">Real-time Analytics</h3>
                    <p data-aos="fade-down" className="text-left">Stay ahead in a fast-paced environment with real-time
                     analytics that offer instantaneous insights.</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3 className="text-left">Machine Learning Integration</h3>
                    <p data-aos="fade-down" className="text-left">Integrate machine learning algorithms for predictive 
                    modeling and pattern recognition.</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3 className="text-left">Data Visualization</h3>
                    <p data-aos="fade-down" className="text-left">Transform complex data into clear visualizations, 
                    making it easy to comprehend and act upon.</p>
                </div>
                <div className="col-lg-4 mt-1" >
                    <h3 className="text-left" >Custom Analytics Solutions</h3>
                    <p data-aos="fade-down" className="text-left">Tailor-made analytics solutions designed to 
                    address your unique business challenges and opportunities.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid bi-style5" >
            <div className="row" style={{justifyContent:"center"}}>
                <div data-aos="fade-left" className="col-md-6 bi-mgt2">
                    <h2>Tailored Solutions for Your Business Needs</h2>
                    <p>Understanding that every business is unique, TECHX crafts customized BI & Analytics
                       solutions aligned with your specific requirements. Whether you're a startup looking for
                       scalable analytics or an established enterprise seeking advanced BI capabilities, we have the
                       expertise to tailor our services to meet your goals.
                   </p>
                </div>
                <div data-aos="fade-right" className="col-md-6">
                   <img src="../assets/images/icons/bi4.png" height={400} width={400} alt=""/>
                </div>
            </div>
        </div>
        <div className="container Itf-style3 mt-4" data-aos="fade-down" style={{paddingBottom:50}}>
            <h2 className="text-center mb-2" data-aos="fade-down">Why Choose TECHX for BI & Analytics</h2>
            <div className="row   Itf-style4 Itf-style5" style={{alignItems:'center', justifyContent:'center'}}>
                <div className="col-md-2  Itf-style6">
                    <h3>Innovative Engineering Approach</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'11px'}}>Our engineering mindset enables us to tackle BI & Analytics
                     challenges creatively, delivering solutions that stand out in the industry</p>
                </div>
                <div className="col-md-2 Itf-style6">
                    <h3>Proven Track Record</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'11px', marginTop:'19px'}}>TECHX has a history of successful BI & Analytics implementations across 
                    diverse industries, showcasing our expertise and reliability</p>
                </div>
                <div className="col-md-2 Itf-style6 pb-2">
                    <h3>Scalability and Flexibility</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'11px', marginTop:'19px'}}>Our solutions are scalable, ensuring they grow with 
                    your business, and flexible enough to adapt to changing needs seamlessly</p>
                </div>
                <div className="col-md-2 Itf-style6">
                    <h3>Customer-Centric Focus</h3>
                    <p data-aos="fade-down" className="text-left" style={{marginLeft:'11px', marginTop:'19px'}}>TECHX is committed to understanding your business objectives
                     and delivering BI & Analytics solutions that align with your vision.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid bi-style5 mb-5">
            <div className="row" style={{justifyContent:"center"}}>
                <div data-aos="fade-left" className="col-md-6 bi-mgt2">
                    <h2>Closing Words</h2>
                    <p data-aos="fade-down">In the dynamic world of business, having a competitive edge is non-negotiable. TECHX is your
                        partner in unlocking the full potential of your data, providing BI & Analytics solutions that
                        empower your organization to thrive. Join us on the journey to transform raw data into
                        strategic insights, driving your business towards unparalleled success. With TECHX, your data
                        has never been more valuable.</p>
                </div>
                <div data-aos="fade-right" className="col-md-6">
                   <img src="../assets/images/icons/bi5.png" height={400} width={400} alt=""/>
                </div>
            </div>
        </div>
        
        
        <ThemeSetting />

      <Cookie />
        </>
    )
}
export default withRouter(BIanalytics);