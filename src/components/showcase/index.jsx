import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import PortfolioHeader from "../design";

function Showcase({ til }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    let effect = null;

    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.net.min");

      if (myRef.current) {
        if (vantaEffect) vantaEffect.destroy();

        effect = VANTA.default({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: isMobile ? 0.5 : 1.2, // Desktopda masshtabni oshirdim
          scaleMobile: 0.5,
          color: 0x30fa8,
          backgroundColor: 0x11071f,
          points: isMobile ? 12 : 24, // Desktopda ko'proq nuqtalar
          maxDistance: isMobile ? 12.0 : 24.0, // Desktopda kengroq
          spacing: isMobile ? 20.0 : 25.0, // Desktopda oraliqni oshirdim
          showDots: !isMobile,
          size: isMobile ? 0.3 : 0.6, // Desktopda kattaroq
          speed: isMobile ? 0.5 : 1.0, // Desktopda tezroq
          lineWidth: isMobile ? 0.2 : 0.4, // Desktopda qalinroq
        });

        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, [isMobile]); // Faqat isMobile o'zgarganda qayta yuklash

  const containerStyle = {
    width: "100%",
    height: isMobile ? "100vh" : "95vh", // Desktopda balandlikni bir oz oshirdim
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: isMobile ? "0 5%" : "0 15%", // Desktopda paddingni oshirdim
    overflow: "hidden",
  };

  return (
    <div ref={myRef} style={containerStyle}>
      <PortfolioHeader til={til} />
    </div>
  );
}

export default Showcase;
