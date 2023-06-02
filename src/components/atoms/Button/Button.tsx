import React, { MutableRefObject } from "react";
import "./Button.scss";
import { ButtonType } from "../../../enums/ButtonType";

const Button = ({
  ref,
  className,
  iconClassName,
  onClick,
  onSubmit,
  name,
  id,
  hasIconLeft = false,
  hasIconRight = false,
  iconLeft,
  iconRight,
  type,
  hasIconOnly = false,
  icon,
  onMouseEnter,
  onMouseLeave,
  onClickCapture,
  disabled,
  style,
}: Props) => {
  return (
    <button
      style={style}
      ref={ref}
      disabled={disabled}
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
      id={id}
      type={type}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClickCapture={onClickCapture}
    >
      {hasIconOnly && icon ? (
        <img src={icon} className={iconClassName} />
      ) : (
        <>
          {hasIconLeft && iconLeft && (
            <img src={iconLeft} className={iconClassName} />
          )}
          {name}
          {hasIconRight && iconRight && (
            <img src={iconRight} className={iconClassName} />
          )}
        </>
      )}
    </button>
  );
};

type Props = {
  ref?: MutableRefObject<null>;
  className?: string;
  iconClassName?: string;
  onClick?: any;
  onSubmit?: () => void;
  name?: string | number | JSX.Element;
  id?: string;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  type?: ButtonType;
  hasIconOnly?: boolean;
  icon?: string;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onClickCapture?: any;
  disabled?: boolean;
  style?: any;
};

export default Button;
