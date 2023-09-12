import { useState, useEffect } from "react";

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const getScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("sm");
      } else if (width < 768) {
        setScreenSize("md");
      } else if (width < 1024) {
        setScreenSize("lg");
      } else if (width < 1280) {
        setScreenSize("xl");
      } else if (width < 1536) {
        setScreenSize("2xl");
      } else {
        setScreenSize("3xl");
      }
    };

    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return screenSize;
};
