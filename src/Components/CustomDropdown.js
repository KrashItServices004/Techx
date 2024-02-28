import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './CustomDropdown.css'; // Import the CSS file
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CustomDropdown = ({ title, links }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleShow = (event, index) => {
    if (index !== openItemIndex) {
      setShowPopover(!showPopover);
      setTarget(event.target);
      setOpenItemIndex(index);
    }
  };

  const handleLinkClick = () => {
    setShowPopover(false);
    setOpenItemIndex(null);
  };

  const renderPopover = (props) => (
    <Popover id={`popover-positioned-left`} {...props}>
      <Popover.Body>
        <ul className='custom-style1'>
          {links.map((link, index) => (
            <li key={index} style={{ background: openItemIndex === index ? 'black' : 'transparent' }}>
              <Link to={link.url}  onClick={handleLinkClick} className="custom-link">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={['click', 'focus', 'hover']}
      placement="bottom"
      overlay={renderPopover}
      rootClose // This will close the popover when clicking outside
    >
      <span onMouseEnter={(event) => handleShow(event, null)}>
        {title}
      </span>
    </OverlayTrigger>
  );
};

export default CustomDropdown;
