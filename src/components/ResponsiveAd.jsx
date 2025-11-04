// src/components/ResponsiveAd.jsx
import React, { useEffect } from "react";

export default function ResponsiveAd({
  adId = "container-c152ce441ed68e2ebb08bdbddefa4fac", // your Adsterra container ID
  scriptSrc = "//pl27986002.effectivegatecpm.com/c152ce441ed68e2ebb08bdbddefa4fac/invoke.js", // your Adsterra script
  minHeightDesktop = "160px",
  minHeightMobile = "120px",
  className = "",
}) {
  useEffect(() => {
    // Prevent adding the same script multiple times
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }, [scriptSrc]);

  const isMobile = window.innerWidth < 768;

  const style = {
    minHeight: isMobile ? minHeightMobile : minHeightDesktop,
    width: "100%",
    overflow: "hidden",
  };

  return (
    <div
      id={adId}
      style={style}
      className={`flex justify-center items-center bg-transparent my-6 ${className}`}
    >
      {/* Adsterra ad loads here */}
    </div>
  );
}