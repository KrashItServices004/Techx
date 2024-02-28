import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Pages/Website/styles/DropDown.css";

const ServicesDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const location = useLocation();

  const [previousLocation, setPreviousLocation] = useState("");
  useEffect(() => {
    if (previousLocation !== location.pathname) {
      setIsOpen(false);
    }
    setPreviousLocation(location.pathname);
  }, [location, previousLocation]);

  const handleCloseLinks = () => {
    setLinksOpen(false);
    props.dataAlert(linksOpen);
  };
  return (
    <div
      className={`link has-dropdown-menu ${isOpen ? "open-dropdown-menu" : ""}`}
    >
      <a href="#" onClick={toggleDropdown}>
        Services
      </a>

      {/* ------------------------------------- */}

      <div className={`dropdown-menu list-unstyled ${isOpen ? "open" : ""}`} style={{ height: '65vh' }}>
        {/* coloumn 1 */}
        <ul className="design">
          <h1>Technology Solutions</h1>
          {/* <li>
            <Link
              to="/UiDesigning"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/ui-ux.png"
                alt="AI-icon"
              />
              UI/UX Designing
            </Link>
          </li> */}

          <li>
            <Link
              to="/ArtificialIntelligence"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/artifical-intelligence.png"
                alt="AI-icon"
              />
              Artificial Intelligence
            </Link>
          </li>

          <li>
            <Link
              to="/cyber-security"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/cyber-security.png"
                alt="AI-icon"
              />
              Cyber Security
            </Link>
          </li>

          <li>
            <Link
              to="/DataAnalytics"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/cloud-service.png"
                alt="AI-icon"
              />
              Data Analytics Services
            </Link>
          </li>

          <li>
            <Link
              to="/CloudService"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/cloud-hosting.png"
                alt="AI-icon"
              />
              Cloud Service
            </Link>
          </li>
        </ul>

        {/* Coloumn 2 */}
        <ul className="design">
          <h1>Information Technology</h1>
          {/* <li>
            <Link
              to="/ITConsultancy"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/service.png"
                alt="AI-icon"
              />
              IT Consultancy
            </Link>
          </li> */}

          <li>
            <Link
              to="/ManagedIT"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/technical-support.png"
                alt="AI-icon"
              />
              Managed IT
            </Link>
          </li>

          {/* <li>
            <Link
              to="/ItTraining"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/software-development.png"
                alt="AI-icon"
              />
              Software Development
            </Link>
          </li> */}

          {/* <li>
            <Link
              to="/ItTraining"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/training.png"
                alt="AI-icon"
              />
              It Training
            </Link>
          </li> */}

          <li>
            <Link to="/VoIP" className="dm-link" onClick={handleCloseLinks}>
              <img
                src="../../assets/images/icons/NavbarIcons/system.png"
                alt="AI-icon"
              />
              VoIP System
            </Link>
          </li>
          <li>
            <Link
              to="/NetworkManagement"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/network.png"
                alt="AI-icon"
              />
              Network Management
            </Link>
          </li>
          <li>
            <Link
              to="/HardwareSupport"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/tools.png"
                alt="AI-icon"
              />
              Hardware Support
            </Link>
          </li>
          <li>
            <Link to="/MDM" className="dm-link" onClick={handleCloseLinks}>
              <img
                src="../../assets/images/icons/NavbarIcons/application.png"
                alt="AI-icon"
              />
              MDM (Mobile Device Management)
            </Link>
          </li>
          <li>
            <Link
              to="/RemoteSupport"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/teleworking.png"
                alt="AI-icon"
              />
              Remote Support
            </Link>
          </li>
          {/* <li>
            <Link
              to="/Projectmanagement"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/project.png"
                alt="AI-icon"
              />
              Project Management
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/BIanalytics"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/business.png"
                alt="AI-icon"
              />
              BI & Analytics
            </Link>
          </li>

          <li>
            <Link
              to="/EmergingTechIntegration"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/emergency-call.png"
                alt="AI-icon"
              />
              Emerging Tech Integration
            </Link>
          </li> */}
        </ul>

        {/* Coloumn 3 */}

        <ul className="design">
          <h1>Consultancy & Management</h1>
          <li>
            <Link
              to="/ITConsultancy"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/service.png"
                alt="AI-icon"
              />
              IT Consultancy
            </Link>
          </li>
          <li>
            <Link to="/ItTraining" className="dm-link" onClick={handleCloseLinks}>
              <img
                src="../../assets/images/icons/NavbarIcons/technical-support.png"
                alt="AI-icon"
              />
              IT Training
            </Link>
          </li>
          <li>
            <Link
              to="/Projectmanagement"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/project.png"
                alt="AI-icon"
              />
              Project Management
            </Link>
          </li>
          {/* <li>
            <Link
              to="/NetworkManagement"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/network.png"
                alt="AI-icon"
              />
              Network Management
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/HardwareSupport"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/tools.png"
                alt="AI-icon"
              />
              Hardware Support
            </Link>
          </li> */}

          <li>
            <Link
              to="/ITOutsourcing"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/thin.png"
                alt="AI-icon"
              />
              IT Outsourcing
            </Link>
          </li>

          {/* <li>
            <Link to="/MDM" className="dm-link" onClick={handleCloseLinks}>
              <img
                src="../../assets/images/icons/NavbarIcons/application.png"
                alt="AI-icon"
              />
              MDM (Mobile Device Management)
            </Link>
          </li> */}

          <li>
            <Link
              to="/ITCompliance"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/compliant.png"
                alt="AI-icon"
              />
              IT Compliance
            </Link>
          </li>

          {/* <li>
            <Link to="/domains" className="dm-link" onClick={handleCloseLinks}>
              Domains
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/WebHosting"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              Hosting
            </Link>
          </li> */}
          {/* <li>
            <Link to="/Website" className="dm-link" onClick={handleCloseLinks}>
              Website
            </Link>
          </li> */}

          {/* <li>
            <Link
              to="/DatabaseService"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              Database Service
            </Link>
          </li> */}

          {/* <li>
            <Link
              to="/MobileApp"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              Mobile App
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/DegitalMarketing"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              Digital Marketing
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/RemoteSupport"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/teleworking.png"
                alt="AI-icon"
              />
              Remote Support
            </Link>
          </li> */}
        </ul>
        <ul className="design">
          <h1>Data and Business Integration</h1>
          <li>
            <Link
              to="/UiDesigning"
              className="dm-link"
              onClick={handleCloseLinks}
            >
            <img
                src="../../assets/images/icons/NavbarIcons/ui-ux.png"
                alt="AI-icon"
              />
              UI/UX Designing
            </Link>
          </li>
          <li>
            <Link
              to="/BIanalytics"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/business.png"
                alt="AI-icon"
              />
              BI & Analytics
            </Link>
          </li>

          <li>
            <Link
              to="/EmergingTechIntegration"
              className="dm-link"
              onClick={handleCloseLinks}
            >
              <img
                src="../../assets/images/icons/NavbarIcons/emergency-call.png"
                alt="AI-icon"
              />
              Emerging Tech Integration
            </Link>
          </li> 
        </ul>
      </div>

      {/* ------------------------------------- */}
      {/* <ul className={`dropdown-menu list-unstyled ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/domains" className="dm-link" onClick={handleCloseLinks}>
            Domains
          </Link>
        </li>
        <li>
          <Link to="/WebHosting" className="dm-link" onClick={handleCloseLinks}>
            Hosting
          </Link>
        </li>
        <li>
          <Link to="/Website" className="dm-link" onClick={handleCloseLinks}>
            Website
          </Link>
        </li>
        <li>
          <Link
            to="/cyber-security"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Cyber Security
          </Link>
        </li>
        <li>
          <Link
            to="/DatabaseService"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Database Service
          </Link>
        </li>
        <li>
          <Link
            to="/CloudService"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Cloud Service
          </Link>
        </li>
        <li>
          <Link to="/MobileApp" className="dm-link" onClick={handleCloseLinks}>
            Mobile App
          </Link>
        </li>
        <li>
          <Link
            to="/DegitalMarketing"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Digital Marketing
          </Link>
        </li>

        <li>
          <Link
            to="/UiDesigning"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            UI/UX Designing
          </Link>
        </li>
        <li>
          <Link
            to="/ArtificialIntelligence"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Artificial Intelligence
          </Link>
        </li>
        <li>
          <Link to="/ItTraining" className="dm-link" onClick={handleCloseLinks}>
            It Training
          </Link>
        </li>
        <li>
          <Link
            to="/EmergingTechIntegration"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Emerging Tech Integration
          </Link>
        </li>
        <li>
          <Link
            to="/HardwareSupport"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            Hardware Support
          </Link>
        </li>

        <li>
          <Link
            to="/ITOutsourcing"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            IT Outsourcing
          </Link>
        </li>

        <li>
          <Link to="/MDM" className="dm-link" onClick={handleCloseLinks}>
            MDM (Mobile Device Management)
          </Link>
        </li>
        <li>
          <Link
            to="/ITCompliance"
            className="dm-link"
            onClick={handleCloseLinks}
          >
            IT Compliance
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default ServicesDropdown;
