import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";

const TURNSTILE_SITE_KEY = "0x4AAAAAAEmF0Eo-BGDPkPxY";
// Email ofuscado (reversed + base64) para que no aparezca en texto plano
// en el HTML/JS servido. Solo se decodifica en el navegador, luego de
// pasar el captcha, para dificultarle el trabajo a los bots que scrapean.
const ENCODED_EMAIL = "Z3JvLmRlcm5lYWljYXJjb21lZEBvdGNhdG5vYw==";

const decodeEmail = () =>
  typeof window === "undefined"
    ? ""
    : window.atob(ENCODED_EMAIL).split("").reverse().join("");

let turnstileScriptPromise = null;
const loadTurnstileScript = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
  return turnstileScriptPromise;
};

const ContactPopup = ({ button, className, style }) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!isOpen || verified) return;
    let cancelled = false;
    setError(false);

    loadTurnstileScript().then(() => {
      if (cancelled || !window.turnstile || !widgetRef.current) return;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: () => setVerified(true),
        "error-callback": () => setError(true),
      });
    });

    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isOpen, verified]);

  const openPopup = () => {
    setVerified(false);
    setCopied(false);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(decodeEmail());
    setCopied(true);
  };

  return (
    <>
      <button type="button" className={className} style={style} onClick={openPopup}>
        {button}
      </button>

      <div className={`modal contact-popup-modal${isOpen ? " is-active" : ""}`}>
        <div className="modal-background" onClick={closePopup}></div>
        <div className="modal-content">
          <div className="box has-text-centered">
            {!verified ? (
              <>
                <p className="title is-5 mb-4">
                  {intl.formatMessage({ id: "contactPopup.verify" })}
                </p>
                <div className="is-flex is-justify-content-center">
                  <div ref={widgetRef}></div>
                </div>
                {error && (
                  <p className="help is-danger mt-2">
                    {intl.formatMessage({ id: "contactPopup.error" })}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="title is-5 mb-4">
                  {intl.formatMessage({ id: "contact" })}
                </p>
                <a href={`mailto:${decodeEmail()}`} className="is-size-5 has-text-weight-semibold">
                  {decodeEmail()}
                </a>
                <div className="mt-4">
                  <button type="button" className="button is-small is-rounded" onClick={handleCopy}>
                    {copied
                      ? intl.formatMessage({ id: "contactPopup.copied" })
                      : intl.formatMessage({ id: "contactPopup.copy" })}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label={intl.formatMessage({ id: "contactPopup.close" })}
          onClick={closePopup}
        ></button>
      </div>
    </>
  );
};

export default ContactPopup;
