import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ThemeSetting from "./Include/ThemeSetting"
import { useEffect } from "react";


const Team = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className="se-i-support py-120">
                <div className="container">
                    <div className="content">
                        <h1 className="title-1 text-center">Meet the TechX Leadership Team</h1>
                    </div>

                    <div className="content">
                        {/* <h1 className="title-1 text-left">Current Job Openings:</h1> */}
                        <div className='row'>

                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Johnathan Archer <br />( Founder & CEO )<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >With a vision that drives innovation, Mr. Haji Haji founded TechX to redefine the technological landscape. With years of experience in the tech industry, he leads the company towards new horizons.</span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Emily Rodriguez <br />( Chief Technology Officer (CTO) )<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Emily Rodriguez is the driving force behind TechX's technological prowess. As the CTO, she spearheads the development of cutting-edge solutions, ensuring TechX stays at the forefront of technological advancements.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Rebecca Morrison <br />( Chief Operating Officer (COO) )<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Rebecca Morrison brings operational excellence to TechX. As the COO, she is instrumental in aligning the company's strategies with its operational execution, driving efficiency and success.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Michael Chang <br />( Chief Financial Officer (CFO) )<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Michael Chang is the financial backbone of TechX. As the CFO, he oversees financial strategies and ensures the company's fiscal health, contributing to sustainable growth and profitability.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Elena Martinez <br />( Chief Marketing Officer (CMO))<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Elena Martinez is the creative force behind TechX's brand. As the CMO, she leads the marketing team in crafting compelling narratives and strategies that resonate with TechX's audience.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Robert Turner <br />( Chief Security Officer (CSO))<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Robert Turner safeguards TechX from cyber threats. As the CSO, he leads the cybersecurity initiatives, ensuring that the company's data and operations are secure.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Amanda Reynolds <br />( Head of Research and Development)<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Amanda Reynolds is the driving force behind TechX's research and development endeavors. Her leadership ensures that TechX remains at the forefront of technological innovation.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Daniel Lee <br />( Director of Emerging Technologies)<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Daniel Lee oversees the integration of emerging technologies at TechX. With a passion for staying ahead of trends, he guides the company in adopting and leveraging the latest tech advancements.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Sophie Mitchell <br />( Director of Human Resources)<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Sophie Mitchell focuses on building and nurturing the TechX team. As the Director of Human Resources, she ensures a dynamic and inclusive work environment, attracting and retaining top talent.
                                        </span></h5></div></div>

                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text">
                                        <h5 class="item-title text-center">Richard Garcia <br />( Director of Customer Experience)<br /> <span style={{ color: "#9193a8", display: "flex", textAlign: "justify" }}  >Richard Garcia is dedicated to delivering exceptional customer experiences at TechX. As the Director of Customer Experience, he ensures that clients receive the highest level of satisfaction and support.
                                        </span></h5></div></div>

                                </div>
                            </div>



                        </div>
                    </div>

                 
                </div>
            </div>
            <ThemeSetting />
        </>
    )
}
export default Team