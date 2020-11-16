import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
        }
      },
    });

    if (typeof onContainerNavigate === "function") {
      history.listen(onContainerNavigate);
    }
  }, []);

  return <div ref={ref} />;
};
