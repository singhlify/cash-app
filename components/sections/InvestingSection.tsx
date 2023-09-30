"use client";

import { motion } from "framer-motion";

import {
  rays,
  investingBitcoin,
  investingStocks,
  investingFloor,
  investingGraph1,
  investingGraph2,
  investingGraph3,
} from "@/public/assets";
import {
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPlayStore,
  BiLogoApple,
} from "react-icons/bi";
import { Image } from "@/components";
import { homePageContent } from "@/constants";
import Link from "next/link";
import { useReveal } from "@/utils";

const InvestingSection = () => {
  const { ref, ...revealProps } = useReveal();

  return (
    <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-cash-green lg:min-h-[750px]">
      <motion.h2
        ref={ref}
        {...revealProps}
        className="mt-4 text-center text-[40px] font-black text-white lg:mt-[131px]"
      >
        Investing
      </motion.h2>

      <Image
        className="absolute !top-[-40%] z-0"
        src={rays}
        alt="decorative image object-cover"
        fill
      />

      <motion.div
        {...revealProps}
        className="relative z-[5] flex flex-col gap-12 p-4 lg:mx-auto lg:max-w-[1184px] lg:flex-row lg:p-0"
      >
        <div className="flex flex-col items-center justify-center gap-6  lg:mt-9 lg:flex-row lg:items-start">
          <div className="z-[1] flex flex-col justify-center leading-normal">
            <h2 className={`text-left text-[40px] font-bold text-black`}>
              {homePageContent.investing[0].title.text}
            </h2>
            <p className={`text-left text-base text-black`}>
              {homePageContent.investing[0].description.text}
            </p>
          </div>

          <Image
            alt="Investing in Stocks"
            src={investingStocks}
            width={160}
            height={344}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 lg:mt-9 lg:flex-row-reverse lg:items-start">
          <div className="z-[1] flex flex-col justify-center leading-normal">
            <h2 className={`text-left text-[40px] font-bold text-black`}>
              {homePageContent.investing[1].title.text}
            </h2>
            <p className={`text-left text-base text-black`}>
              {homePageContent.investing[1].description.text}
            </p>
          </div>

          <Image
            alt="Investing in Bitcoin"
            src={investingBitcoin}
            width={160}
            height={347}
          />
        </div>
      </motion.div>

      <motion.div
        {...revealProps}
        className="relative flex h-[600px] flex-col items-end bg-white lg:h-[294px]"
      >
        <div className="lg:-translate-y-26 absolute h-[600px] w-full -translate-y-36 bg-white"></div>

        <div className="z-[5] mb-11 mt-auto flex w-full flex-col items-center justify-center gap-5 p-4 lg:mx-auto lg:mb-4 lg:max-w-[80%] lg:flex-row lg:items-end lg:justify-between lg:py-0">
          <div className="z-[2] mb-12 mt-4 flex flex-col items-center justify-center gap-4 lg:m-0 lg:flex-row">
            <button className="flex h-fit min-w-[170px] items-center justify-center gap-[25px] rounded-[7px] border border-black bg-white px-3 py-[13px] hover:cursor-pointer">
              <BiLogoApple className="text-3xl text-cash-green" />
              <span className="text-center text-xs font-black uppercase text-black">
                App Store
              </span>
            </button>

            <button className="flex h-fit min-w-[170px] items-center justify-center gap-[25px] rounded-[7px] border border-black bg-white px-3 py-[13px] hover:cursor-pointer">
              <BiLogoPlayStore className="text-3xl text-cash-green" />
              <span className="text-center text-xs font-black uppercase text-black">
                Google Play
              </span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row-reverse">
            <div className="flex items-center justify-start gap-[30px] text-black">
              <Link href="#">
                <BiLogoTwitch className="text-3xl" />
              </Link>
              <Link href="#">
                <BiLogoTwitter className="text-3xl" />
              </Link>
              <Link href="#">
                <BiLogoInstagram className="text-3xl" />
              </Link>
            </div>

            <p className="w-full text-left text-[10px] text-black lg:w-[363px]">
              <span>
                Brokerage services by Cash App Investing LLC, member FINRA /
                SIPC.
              </span>
              <br />
              <span>
                See our BrokerCheck. Investing involves risk; you may lose
                money. Bitcoin trading offered by Cash App. Cash App Investing
                does not trade bitcoin and Cash App is not a member of FINRA or
                SIPC. Cash App facilitates banking services through Sutton Bank
                and Lincoln Savings Bank, Members FDIC.
              </span>
            </p>
          </div>
        </div>

        <Image
          className="lg:-translate-y-26 absolute mx-auto -translate-y-36"
          src={investingFloor}
          alt="decorative image object-cover"
          fill
        />
      </motion.div>

      <Image
        alt="decorative image"
        src={investingGraph1}
        className="absolute bottom-[31px] left-0 hidden lg:block"
        width={644}
        height={283}
      />
      <Image
        alt="decorative image"
        src={investingGraph2}
        className="absolute right-0 top-[123px] hidden lg:block"
        width={255}
        height={411}
      />
      <Image
        alt="decorative image"
        src={investingGraph3}
        className="absolute bottom-[29px] right-0 hidden lg:block"
        width={408}
        height={386}
      />
    </section>
  );
};

export default InvestingSection;
