import React, { Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import useClickOutside from "../../../utils/useClickOutside";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = ({
  children,
  setIsModalDisplayed,
  isImagesModal = false,
}: {
  children?: any;
  setIsModalDisplayed?: any;
  isImagesModal?: boolean;
}) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setIsModalDisplayed(false);
  });
  return (
    <div
      ref={menuRef}
      className={`${
        isImagesModal ? "images-overlay" : "modal-overlay"
      } fadeIn-animate`}
    >
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({
  children,
  setIsModalDisplayed,
  isImagesModal,
}: {
  children?: any;
  setIsModalDisplayed?: any;
  isImagesModal?: boolean;
}) => {
  return (
    <Fragment>
      {portalElement &&
        (ReactDOM.createPortal(<Backdrop />, portalElement) as React.ReactNode)}
      {portalElement &&
        (ReactDOM.createPortal(
          <ModalOverlay
            isImagesModal={isImagesModal}
            setIsModalDisplayed={setIsModalDisplayed}
          >
            {children}
          </ModalOverlay>,
          portalElement
        ) as React.ReactNode)}
    </Fragment>
  );
};

export default Modal;
