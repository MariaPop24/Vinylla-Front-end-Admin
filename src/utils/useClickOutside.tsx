import { useEffect } from "react";

const useClickOutside = (ref: any, callback: any, isEnabled = true) => {
  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, isEnabled]);
};

export default useClickOutside;
