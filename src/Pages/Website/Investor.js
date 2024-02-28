import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ThemeSetting from "./Include/ThemeSetting"
import { useEffect } from "react";


const Investor = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className="se-i-support py-120">
                <div className="container">
                    <div className="content">
                        <h1 className="title-1 text-center">Welcome to TechX – Where Innovation Meets Investment</h1>
                        <p className="para-1 text-center" style={{ fontSize: "18px" }}>At TechX, we are not just building a company; we are shaping the future of technology. As an investor, you have the opportunity to join us on this thrilling journey towards innovation, growth, and success.</p>
                    </div>
                    <div className="content">
                        <h1 className="title-1 text-center">Why Invest in TechX?</h1>

                        <div className="faqs mb-2" id="faqs">
                            <div className="category" id="faqs-category">
                                <div class="item w-100 d-block" data-category="features">
                                    <div class="text mb-2"><h5 class="item-title"> Pioneering Technology Solutions : <br /> <span style={{ color: "#9193a8" }}> At TechX, we are at the forefront of technological advancements. From Artificial Intelligence to Cloud Services, our portfolio is a testament to our commitment to pioneering solutions that drive industries forward.</span></h5>
                                    </div>
                                    <div class="text mb-2"><h5 class="item-title"> Exceptional Team of Experts : <br />
                                        <span style={{ color: "#9193a8" }}>Our success is driven by our dedicated team of experts. We have assembled a group of visionaries, technologists, and business leaders who are passionate about pushing boundaries and setting new standards in the tech industry.
                                        </span></h5>
                                    </div>

                                    <div class="text mb-2"><h5 class="item-title"> Sustainable Growth and Market Potential : <br />
                                        <span style={{ color: "#9193a8" }}>TechX is not just a company; it's a growth engine. Our commitment to sustainable growth is backed by a thorough understanding of market trends, ensuring that our investors are part of an enterprise with vast potential and long-term viability.
                                        </span></h5></div>
                                    <div class="text mb-2"><h5 class="item-title"> Industry Impact : <br />
                                        <span style={{ color: "#9193a8" }}>Join us in making a real impact on industries globally. From transforming businesses through data analytics to enhancing cybersecurity measures, TechX is actively contributing to shaping a smarter and more connected world.
                                        </span></h5></div>
                                    <div class="text mb-2"><h5 class="item-title"> Transparent and Investor-Friendly Approach : <br />
                                        <span style={{ color: "#9193a8" }}>We believe in transparency and fostering a strong relationship with our investors. Our investor-friendly approach ensures that you are well-informed, engaged, and confident in your decision to be part of the TechX family.

                                        </span></h5></div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="content">
                        <h1 className="title-1 text-center">How to Invest?</h1>
                        <p className="para-1" style={{ fontSize: "18px" }}>Investing in TechX is a straightforward process. Visit our website techx.live to explore more about our vision, mission, and the exciting projects we have in the pipeline. Navigate to our Investor Relations section for detailed information on investment opportunities, financial reports, and how to get started.</p>

                    </div>
                    <div className="content">
                        <h1 className="title-1 text-center">Contact Us</h1>
                        <p className="para-1" style={{ fontSize: "18px" }}>Invest in the future with TechX. For inquiries and more information, reach out to our Investor Relations team at <a><b>invest@techx.live</b></a> or give us a call at [Your Contact Number].</p>

                    </div>
                    <h1 className="title-1 text-center" style={{ fontSize: "20px" }}>Join us in revolutionizing the tech landscape. Your investment fuels our innovation, and together, we'll shape a future powered by TechX. </h1>
                    <h1 className="title-1 text-center">Be Part of the TechX Revolution. Invest Today! </h1>
                </div>
            </div>
            <ThemeSetting />
        </>
    )
}
export default Investor