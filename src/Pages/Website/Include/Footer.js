/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import MobileApp from "../MobileApp"
import Website from '../../Website/Website'
import CustomDropdown from '../../../Components/CustomDropdown';
const REACT_APP_NAME = process.env.REACT_APP_NAME;

export const Footer = (props) => {


    const handleNavigate = () => {

    }

    const [isFooterLinkOpen, setIsFooterLinkOpen] = useState('');
    const openFooterLink = (footerLink) => {
        if (isFooterLinkOpen === footerLink) {
            setIsFooterLinkOpen('');
        } else {
            setIsFooterLinkOpen(footerLink);
        }
    };
    const baseUrl = location.href.includes("trainingncr.info")
        ? `http://trainingncr.info/techx/assets/images`
        : `/assets/images`;


    const digitalserviceslink = [
        { url: '/UiDesigning', text: 'UI/UX Designing' },
        { url: '/ArtificialIntelligence', text: 'Artificial Intelligence' },
        { url: '/cyber-security', text: 'Cyber Security' },
        { url: '/DataAnalytics', text: 'Data Analytics Services' },
        { url: '/CloudService', text: 'Cloud Services' }
    ]

    const itandconsultancylink = [
        { url: '/ITConsultancy', text: 'IT Cunsultancy' },
        { url: '/ManagedIT', text: 'Managed IT' },
        { url: 'ItTraining', text: 'IT Training' },
        { url: '/VoIP', text: 'VoIP System' },
        { url: '/Projectmanagement', text: 'Project Management' },
        { url: '/BIanalytics', text: 'BI & Analytics' },
        { url: '/EmergingTechIntegration', text: 'Emerging Tech Integration' }
    ]

    const itManagementlink = [
        { url: '/NetworkManagement', text: 'Network Management' },
        { url: '/HardwareSupport', text: 'Hardware Support' },
        { url: '/ITOutsourcing', text: 'IT Outsourcing' },
        { url: '/MDM', text: 'MDM(Mobile Device Management)' },
        { url: '/ITCompliance', text: 'IT Compliance' },
        { url: '/RemoteSupport', text: 'Remote Support' },
    ]



    return (
        <>
            {/* <!-- Contact Bubble --> */}
            {/* <div className="contact-bubble">
                <a href="https://wa.me/447387788662" target='blank' className="live-chat-btn">
                    <img
                        src={baseUrl + "/icons/whatsapp.png"}
                        className="img-fluid" alt="Icon" />
                    <span className="text">Chat Now</span>
                </a>
            </div> */}

            {/* <!-- Theme Footer --> */}
            <footer className="theme-footer">
                {/* <!-- footer-top --> */}
                <div className="footer-top">
                    <div className="container-fluid">
                        {/* <!-- list-group --> */}
                        <div className="list-group">
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'About') ? 'open-list' : ''}`} onClick={() => openFooterLink('About')}>
                                <li className="list-title">About TechX</li>
                                <li className="list-link"><Link to="/about">About Us</Link></li>
                                {/* <li className="list-link"><a href="#">Newsroom</a></li> */}
                                {/* <li className="list-link"><a href="#">Investor Relations</a></li> */}
                                <li className="list-link"><a href="/investor">Investor </a></li>
                                <li className="list-link"><a href="/career">Career</a></li>
                                {/* <li className="list-link"><a href="#">Corporate Responsibility</a></li> */}
                                {/* <li className="list-link"><a href="#">Trust Center</a></li> */}
                                <li className="list-link"><a href="https://www.hostx.live/">HostX</a></li>
                                <li className="list-link"><a href="https://ukcyberx.com/">Cyberx</a></li>
                                {/* <li className="list-link"><Link to="/terms">Legal</Link></li> */}
                                {/* <li className="list-link"><a href="https://store.techx.live/legal-agreements" target="_blank">Legal</a></li> */}
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Help') ? 'open-list' : ''}`} onClick={() => openFooterLink('Help')}>
                                <li className="list-title">Help Center</li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Help Center</a></li> */}
                                {/* <li className="list-link"><a href="#">Community</a></li> */}
                                {/* <li className="list-link"><a href="#">TechX Blog</a></li> */}
                                <li className="list-link"><Link to="/contact">Contact Us</Link></li>
                                <li className="list-link"><Link to="/support">Report Abuse</Link></li>
                                <li className="list-link"><Link to="/support">FAQ</Link></li>
                                <li className="list-link"><Link to="/team">Team</Link></li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Resources</a></li> */}
                            </ul>
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Technology') ? 'open-list' : ''}`} onClick={() => openFooterLink('Technology')}>
                                <li className="list-title">Technology Solutions</li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Help Center</a></li> */}
                                {/* <li className="list-link"><a href="#">Community</a></li> */}
                                {/* <li className="list-link"><a href="#">TechX Blog</a></li> */}
                                <li className="list-link"><Link >Artificial Intelligence</Link></li>
                                <li className="list-link"><Link >Cyber Security</Link></li>
                                <li className="list-link"><Link >Data Analytics</Link></li>
                                <li className="list-link"><Link >Cloud Service</Link></li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Resources</a></li> */}
                            </ul>
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Information') ? 'open-list' : ''}`} onClick={() => openFooterLink('Information')}>
                                <li className="list-title">Information Technology</li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Help Center</a></li> */}
                                {/* <li className="list-link"><a href="#">Community</a></li> */}
                                {/* <li className="list-link"><a href="#">TechX Blog</a></li> */}
                                <li className="list-link"><Link >Managed IT</Link></li>
                                <li className="list-link"><Link >VoIP System</Link></li>
                                <li className="list-link"><Link >Network Management</Link></li>
                                <li className="list-link"><Link >Hardware Support</Link></li>
                                <li className="list-link"><Link >MDM</Link></li>
                                <li className="list-link"><Link >Remote Support</Link></li>
                                {/* <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Resources</a></li> */}
                            </ul>
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Information') ? 'open-list' : ''}`} onClick={() => openFooterLink('Information')}>
                                <li className="list-title">Consultancy & Management</li>
                                <li className="list-link"><Link >It Consultancy</Link></li>
                                <li className="list-link"><Link >It Training</Link></li>
                                <li className="list-link"><Link >Project Management</Link></li>
                                <li className="list-link"><Link >IT Outsourcing</Link></li>
                                <li className="list-link"><Link >It Compliance</Link></li>
                            </ul>
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Business') ? 'open-list' : ''}`} onClick={() => openFooterLink('Business')}>
                                <li className="list-title">Data and Business Integration</li>
                                <li className="list-link"><Link >UI/UX Designing</Link></li>
                                <li className="list-link"><Link >BI & Analytics</Link></li>
                                <li className="list-link"><Link >Emerging Tech Integration</Link></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            {/* <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Resources')? 'open-list' : ''}`} onClick={() => openFooterLink('Resources')}>
                                <li className="list-title">Resources</li>
                                <li className="list-link"><a href="https://store.techx.live/products/professional-email" target="_blank">Webmail</a></li>
                                <li className="list-link"><a href="https://www.secureserver.net/whois?plid=589497" target="_blank">WHOIS</a></li>
                                <li className="list-link"><Link to="/MobileApp">TechX Mobile App</Link></li>
                                <li className="list-link"><a href="https://www.icann.org/">ICANN Confirmation</a></li>
                                <li className="list-link"><Link to="/Website">Designers &amp; Developers</Link></li>
                                <li className="list-link"><a href="https://store.techx.live/products/domain-registration " target="_blank">Corporate Domains</a></li>
                                <li className="list-link"><a href="https://www.secureserver.net/redemption?plid=589497" target="_blank">Redeem Code</a></li>
                            </ul> */}
                            {/* <!-- footer-list --> */}
                            {/* <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Partner')? 'open-list' : ''}`} onClick={() => openFooterLink('Partner')}>
                                <li className="list-title">Partner Programs</li>
                                <li className="list-link"><a href="#">Affiliates</a></li>
                                <li className="list-link"><a href="#">Reseller Programs</a></li>
                                <li className="list-link"><a href="#">TechX Pro</a></li>
                            </ul> */}
                            {/* <!-- footer-list --> */}
                            {/* <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Account')? 'open-list' : ''}`} onClick={() => openFooterLink('Account')}>
                                <li className="list-title">Account</li>
                                <li className="list-link"><a href="https://account.secureserver.net/products?plid=589497" target="_blank">My Products</a></li>
                                <li className="list-link"><a href="https://account.secureserver.net/subscriptions?plid=589497 " target="_blank">Renewals & Billing</a></li>
                                <li className="list-link"><a href="https://sso.secureserver.net/account/create?plid=589497&prog_id=589497&realm=idp&path=%2Fproducts&app=account" target="_blank">Create Account</a></li>
                            </ul> */}
                            {/* <!-- footer-list --> */}
                            {/* <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Shopping')? 'open-list' : ''}`} onClick={() => openFooterLink('Shopping')}>
                                <li className="list-title">Services</li>
                                <li className="list-link" ><Link><CustomDropdown  title='Digital Services' links={digitalserviceslink}/></Link></li>
                                <li className="list-link"  ><Link><CustomDropdown title='IT Management and Consultancy' links={itandconsultancylink}/></Link></li>
                                <li className="list-link"  ><Link><CustomDropdown title='IT Infrastructure Management' links={itManagementlink}/></Link></li>
                                
                            </ul> */}

                        </div>
                    </div>
                </div>
                {/* <!-- footer-middle --> */}
                {/* <div className="footer-middle">
                    <div className="container-fluid">
                        <div className="reg-bar text-md-left text-center">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="text">
                                    <h4 className="title-4">Switch to Pro Plan today and<br/>save up to 30% off</h4>
                                    <p className="para-2">Check which version are available to upgrade to and validate wheter<br/>your current subscription is upgradeable.</p>
                                </div>
                                <div className="buttons mt-lg-0 mt-3">
                                    <a href="#" className="btn btn-fill-primary shadow-off text-uppercase font-500"><Link to="/contact">Upgrade my plan </Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- footer-bottom --> */}
                <div className="footer-bottom">
                    <div className="container-fluid">
                        {/* <!-- content --> */}
                        <div className="content d-flex align-items-start mb-1">
                            {/* <!-- logo --> */}
                            <div className="logo mb-lg-0 mb-1">
                                <Link to="/" className="d-flex justify-content-center " style={{ alignItems: "flex-end" }}>
                                    <img
                                        // src="/assets/images/templates/footer/logo-d.png"
                                        src={baseUrl + "/templates/footer/logo-d.png"}
                                        className="img-fluid" alt="TechX" />
                                    <p className='logo_p' style={{ fontSize: "18px" }} >Registered Co. No-14520353</p>
                                </Link>
                            </div>
                            {/* <!-- copyright --> */}
                            {/* <div className="copyright mr-lg-5">
                                <ul className="links list-unstyled d-flex align-items-center flex-wrap">
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/terms">Privacy Policy</Link></li>
                                    <li><a href="#">Trademarks</a></li>
                                    <li><a href="#">License Agreements</a></li>
                                </ul>
                                <p className="para-3">TechX All Rights Reserved &copy; {(new Date().getFullYear())}. </p>
                            </div> */}
                            {/* <!-- social-list --> */}
                            <ul className="social-list list-unstyled d-flex align-items-center justify-content-lg-end justify-content-center ml-lg-auto mt-lg-0 mt-2">
                                <li><a href="https://www.instagram.com/techxltd/" target="_blank"><img
                                    // src="/assets/images/templates/footer/instagram.png"
                                    src={baseUrl + "/templates/footer/instagram.png"}
                                    alt="Icon" /></a></li>
                                <li><a href="https://twitter.com/techxltd" target="_blank"><img
                                    // src="/assets/images/templates/footer/twitter.png"
                                    src={baseUrl + "/templates/footer/twitter.png"}
                                    alt="Icon" /></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100088283091972" target="_blank"><img
                                    // src="/assets/images/templates/footer/facebook.png"
                                    src={baseUrl + "/templates/footer/facebook.png"}
                                    alt="Icon" /></a></li>
                                <li><a href="https://www.tiktok.com/@techxltd?_t=8ZJjBgoCb70&_r=1" target="_blank"><img
                                    // src="/assets/images/templates/footer/tiktok.png" 
                                    src={baseUrl + "/templates/footer/tiktok.png"}
                                    alt="Icon" /></a></li>
                                <li><a href="https://www.youtube.com/@techx-" target="_blank"><img
                                    // src="/assets/images/templates/footer/youtube.png"
                                    src={baseUrl + "/templates/footer/youtube.png"}
                                    alt="Icon" /></a></li>
                            </ul>
                        </div>
                        {/* <!-- content --> */}
                        <hr />
                        <div className="content d-lg-flex align-items-end flex-wrap mt-1">
                            {/* <!-- para-3 --> */}
                            <p className="para-3">TechX All Rights Reserved &copy; {(new Date().getFullYear())}.</p>
                            {/* <!-- sign --> */}
                            <div className="signature ml-auto mt-lg-0 mt-1">
                                <p className="para-3">Developed and Powerd by <a href="https://techx.live/" target="_blank">TechX</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default withRouter(Footer);