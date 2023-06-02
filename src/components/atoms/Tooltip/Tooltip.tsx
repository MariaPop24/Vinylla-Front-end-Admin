import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ text, children }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip--container "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <div className="tooltip--text animate">{text}</div>}
    </div>
  );
};

type Props = {
  text: JSX.Element;
  children: JSX.Element;
};

export default Tooltip;
