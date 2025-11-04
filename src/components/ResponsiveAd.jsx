// src/components/ResponsiveAd.jsx
import React, { useEffect } from "react";

export default function ResponsiveAd({
  adId = "container-c152ce441ed68e2ebb08bdbddefa4fac", // Adsterra container ID
  scriptSrc = "//pl27986002.effectivegatecpm.com/c152ce441ed68e2ebb08bdbddefa4fac/invoke.js", // Adsterra script
  minHeightDesktop = "160px",
  minHeightMobile = "120px",
  className = "",
}) {
  useEffect(() => {
    // Prevent adding the same script multiple times
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.dataset.cfasync = "false";
      s.src = scriptSrc;
      document.body.appendChild(s);
      // cleanup when this component unmounts
      return () => {
        try {
          s.remove();
        } catch (e) {
          // ignore if already removed
        }
      };
    }
    return undefined;
  }, [scriptSrc]);

  // Check safely for mobile width
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

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
      {/* Adsterra ad will load here */}
    </div>
  );
}