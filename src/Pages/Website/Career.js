
import '../Website/styles/Support.css'
import ThemeSetting from './Include/ThemeSetting'


const Career = () => {
    return (
        <>
            <div className="se-i-support py-120">
                <div className="container">
                    <div className="content">
                        <h1 className="title-1 text-center">Join the TechX Team: Where Your Career Takes Flight</h1>
                        <p className="para-1" style={{ fontSize: "18px" }}>Welcome to TechX, where innovation, collaboration, and excellence converge. At TechX, we're not just building cutting-edge technology solutions; we're cultivating a community of passionate professionals who thrive on challenges and are committed to driving the future of technology.</p>
                    </div>
                    <div className="content">
                        <h1 className="title-1 text-center">Why Choose a Career at TechX?</h1>
                        {/* <div className="faqs mb-2" id="faqs">
                            <div className="category" id="faqs-category">
                                <div class="item w-100" data-category="features">
                                    <div class="text"><h5 class="item-title"> Innovative Culture : <br /> <span style={{ color: "#9193a8" }}>At TechX, we foster a culture of innovation. We believe in pushing boundaries and exploring the uncharted territories of technology. Join us if you're passionate about shaping the future.</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="faqs mb-2" id="faqs">
                            <div className="category" id="faqs-category">
                                <div class="item w-100 d-block" data-category="features">
                                    <div class="text mb-2"><h5 class="item-title"> Innovative Culture : <br /> <span style={{ color: "#9193a8" }}>At TechX, we foster a culture of innovation. We believe in pushing boundaries and exploring the uncharted territories of technology. Join us if you're passionate about shaping the future.</span></h5>
                                    </div>
                                    <div class="text mb-2"><h5 class="item-title"> Talented Team : <br />
                                        <span style={{ color: "#9193a8" }}>Our team is our strength. At TechX, you'll be working alongside some of the brightest minds in the industry. Collaborate with experts, share your ideas, and contribute to projects that make a real impact.
                                        </span></h5>
                                    </div>

                                    <div class="text mb-2"><h5 class="item-title"> Endless Opportunities : <br />
                                        <span style={{ color: "#9193a8" }}>TechX is not just a workplace; it's a platform for personal and professional growth. We provide endless opportunities for skill development, career advancement, and the chance to be a pioneer in your field.
                                        </span></h5></div>
                                    <div class="text mb-2"><h5 class="item-title"> Global Impact : <br />
                                        <span style={{ color: "#9193a8" }}>Be part of a company that makes a global impact. TechX solutions are transforming industries worldwide. Join us in creating technologies that redefine the future and leave a lasting legacy.
                                        </span></h5></div>
                                    <div class="text mb-2"><h5 class="item-title"> Inclusive Environment : <br />
                                        <span style={{ color: "#9193a8" }}>Diversity is our strength. TechX is committed to fostering an inclusive and diverse workplace where every individual is valued, respected, and has the opportunity to thrive.

                                        </span></h5></div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="content">
                        <h1 className="title-1 text-center">Current Job Openings:</h1>
                        <div className='row'>

                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text"><h5 class="item-title text-center">Software Engineer<br /> <span style={{ color: "#9193a8" }} >Join our software development team and work on cutting-edge projects that challenge your skills.</span></h5></div></div>
                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text"><h5 class="item-title text-center">Data Scientist<br /> <span style={{ color: "#9193a8" }} >Be at the forefront of data analytics and contribute to creating actionable insights.</span></h5></div></div>
                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text"><h5 class="item-title text-center">Cybersecurity Specialist<br /> <span style={{ color: "#9193a8" }} >Protect our digital infrastructure and stay one step ahead of cyber threats.</span></h5></div></div>
                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text"><h5 class="item-title text-center">UX/UI Designer<br /> <span style={{ color: "#9193a8" }} >Shape the user experience of our products and bring creativity to the forefront.
                                    </span></h5></div></div>
                                </div>
                            </div>
                            <div className="faqs mb-2 col-lg-6 col-12 " id="faqs">
                                <div className="category" id="faqs-category">
                                    <div class="item" data-category="features"><div class="text"><h5 class="item-title text-center">Project Manager<br /> <span style={{ color: "#9193a8" }} >Lead our teams, drive project success, and be a key player in our growth.

                                    </span></h5></div></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="content">
                        <h1 className="title-1 text-center">How to Apply:</h1>
                        <p className="para-1" style={{ fontSize: "18px" }}>Ready to take your career to new heights? Explore our current job openings and apply directly through our Careers Portal. Don't see a perfect match for your skills? Submit your resume for future consideration, and we'll keep you in mind for upcoming opportunities.</p>

                    </div>
                    <div className="content">
                        <h1 className="title-1 text-center">Contact Us</h1>
                        <p className="para-1" style={{ fontSize: "18px" }}>Have questions about working at TechX? Reach out to our HR team at <a><b>careers@techx.live</b></a> or give us a call at 0330 - 043 - 8480 .</p>

                    </div>
                    <h1 className="title-1 text-center"> TechX - Where Your Career Elevates. Apply Today! </h1>
                </div>
            </div>
            <ThemeSetting />

        </>

    )
}

export default Career