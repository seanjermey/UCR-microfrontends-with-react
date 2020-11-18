import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname }) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
        }
      },
      onSignIn,
    });

    if (typeof onContainerNavigate === "function") {
      history.listen(onContainerNavigate);
    }
  }, []);

  return <div ref={ref} />;
};
