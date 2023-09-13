import { useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

export const useReveal = () => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return {
    ref: ref,
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    initial: "hidden",
    animate: mainControls,
    transition: { duration: 0.5, delay: 0.5 },
  };
};
