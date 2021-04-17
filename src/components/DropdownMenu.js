import React, { useState } from "react";
import "../styles/DropdownMenu.scss";
import classNames from "classnames";
import icon from "../../src/arrow-icon.svg";
import PropTypes from "prop-types";

const DropdownMenu = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-header"
        onClick={() => {
          setOpen(open ? false : true);
        }}
      >
        <img
          src={icon}
          alt="icon"
          className={classNames("icon", { "icon-open": open })}
        />
        <p className="dropdown-title">{title}</p>
      </div>
      {open && children}
    </div>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default DropdownMenu;
