import React, { useEffect } from "react";

const PerfitOptin = ({ button, formId }) => {
  useEffect(() => {
    const linkId = `perfit-optin-css-${formId}`;
    const scriptId = `perfit-optin-js-${formId}`;

    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `https://optin.myperfit.com/res/css/democraciaenred/${formId}.css`;
      document.head.appendChild(link);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = `https://optin.myperfit.com/res/js/democraciaenred/${formId}.js`;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, [formId]);

  const handleClick = () => {
    const perfitButton = document.getElementById("p-open");
    if (perfitButton) perfitButton.click();
  };

  return (
    <>
      <div id={`optin-${formId}`} data-type="button" style={{ display: "none" }}></div>
      <button
        type="button"
        className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block"
        onClick={handleClick}
      >
        {button}
      </button>
    </>
  );
};

export default PerfitOptin;
