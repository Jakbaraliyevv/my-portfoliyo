// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import PortfolioHeader from "../design";

// function Showcase() {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const myRef = useRef(null);

//   useEffect(() => {
//     const loadVanta = async () => {
//       const VANTA = await import("vanta/dist/vanta.net.min");

//       if (!vantaEffect) {
//         const effect = VANTA.default({
//           el: myRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           //   color: 0x151515,
//           color: 0x30fa8, // Och yashil/turkuaz rang - jozibali ko'rinish uchun
//           backgroundColor: 0x11071f, // Siz so'ragan to'q binafsha rang
//           points: 20, // Ko'proq nuqtalar
//           maxDistance: 18.0, // Qisqaroq chiziqlar
//           spacing: 15.0, // Zichroq joylashuv
//           showDots: true,
//           size: 0.5, // Maydaroq nuqtalar
//           speed: 0.8, // Sekinroq animatsiya
//           lineWidth: 0.3, // Nozik chiziqlar
//         });

//         setVantaEffect(effect);
//       }
//     };

//     loadVanta();

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   const containerStyle = {
//     width: "100%",
//     height: "90vh",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     padding: "0 10%",
//   };

//   const headingStyle = {
//     color: "#30f5a8", // Och yashil/turkuaz rang - backgroundga mos
//     fontFamily: "'Orbitron', sans-serif", // Texnologik shrift
//     margin: "10px 0",
//     zIndex: 2,
//     textShadow: "0 0 8px rgba(48, 245, 168, 0.6)", // Nur effekti
//   };

//   return (
//     <div ref={myRef} style={containerStyle}>
//       <PortfolioHeader />
//     </div>
//   );
// }

// export default Showcase;

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import PortfolioHeader from "../design";

function Showcase() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobil qurilmani aniqlash
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
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.net.min");

      if (!vantaEffect) {
        const effect = VANTA.default({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: isMobile ? 0.5 : 1.0, // Mobil uchun masshtabni kamaytiramiz
          scaleMobile: 0.5,
          color: 0x30fa8,
          backgroundColor: 0x11071f,
          points: isMobile ? 12 : 20, // Mobil uchun nuqtalar sonini kamaytiramiz
          maxDistance: isMobile ? 12.0 : 18.0,
          spacing: isMobile ? 20.0 : 15.0, // Mobil uchun oraliqni oshiramiz
          showDots: !isMobile, // Mobilda nuqtalarni o'chirib qo'yamiz
          size: isMobile ? 0.3 : 0.5,
          speed: isMobile ? 0.5 : 0.8,
          lineWidth: isMobile ? 0.2 : 0.3,
        });

        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  const containerStyle = {
    width: "100%",
    height: isMobile ? "100vh" : "90vh", // Mobil uchun balandlikni kamaytiramiz
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: isMobile ? "0 5%" : "0 10%", // Mobil uchun paddingni kamaytiramiz
    overflow: "hidden", // Chiqib ketishdan saqlaymiz
  };

  return (
    <div ref={myRef} style={containerStyle}>
      <PortfolioHeader />
    </div>
  );
}

export default Showcase;
