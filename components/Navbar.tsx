"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import { BiXCircle } from "react-icons/bi";

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <button
        className="absolute left-0 right-0 top-9 z-10 mx-auto w-fit border border-white px-3 py-1 md:hidden"
        type="button"
        onClick={() => toggleOpen()}
      >
        Menu
      </button>

      <nav className="absolute left-0 right-0 top-9 z-10 mx-auto hidden w-fit items-center justify-start gap-5 md:flex ">
        {[
          "Sign In",
          "Legal",
          "Licenses",
          "Security",
          "Careers",
          "Press",
          "Support",
          "Status",
          "Codeblog",
        ].map((item) => (
          <Link
            key={item}
            href="#"
            className="flex-shrink-0 flex-grow-0 text-left text-sm font-black uppercase text-white hover:underline"
          >
            {item}
          </Link>
        ))}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              width: "0",
              opacity: 0,
            }}
            animate={{
              width: "100vw",
              opacity: 1,
            }}
            exit={{
              width: "0",
              opacity: 0,
            }}
            className={`{mobileNavbarPosition} fixed z-10 h-screen w-screen overflow-hidden overflow-y-auto bg-black ease-in-out md:hidden`}
          >
            <nav className="flex flex-col gap-5 p-[30px] text-left text-[32px] font-black uppercase text-white">
              <button
                className="ml-auto"
                type="button"
                onClick={() => toggleOpen()}
              >
                <BiXCircle />
              </button>
              {[
                "Sign In",
                "Legal",
                "Licenses",
                "Security",
                "Careers",
                "Press",
                "Support",
                "Status",
                "Codeblog",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="flex-shrink-0 flex-grow-0 hover:underline"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
