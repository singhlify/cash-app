import {
  introCube,
  introPhone,
  rays,
  introPhoneLg,
  downArrow,
} from "@/public/assets";
import {
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPlayStore,
  BiLogoApple,
} from "react-icons/bi";
import { HeroBgImages, Image } from "@/components";
import { isMobile, useGetScreenSize } from "@/utils";
import Link from "next/link";

export const HeroSection = () => {
  const screenSize = useGetScreenSize();

  return (
    <section className="relative mx-auto mt-auto flex min-h-[777px] w-full justify-center overflow-hidden bg-black px-4">
      <Image
        className="absolute !top-[-200px] z-[0] select-none object-cover"
        src={rays}
        alt="decorative image"
        fill
      />

      <div className="relative z-[2] mx-auto flex w-[1366px] flex-col justify-center">
        <div className="relative z-[2] mx-auto flex w-full flex-col text-center text-[120px] font-black uppercase text-white lg:text-[193px]">
          <p className="leading-none">CASH</p>
          {isMobile(screenSize) ? (
            <Image
              alt="decorative image"
              className="absolute left-0 right-0 top-0 m-auto lg:top-[-40px] lg:hidden"
              src={introPhone}
              width={160}
              height={196}
            />
          ) : (
            <Image
              alt="decorative image"
              className="absolute left-0 right-0 top-0 m-auto hidden lg:top-[-40px] lg:block"
              src={introPhoneLg}
              width={370}
              height={454}
            />
          )}
          <p className="z-[1] leading-[0.75]">APP</p>
        </div>

        <div className="z-[2] mt-4 flex flex-col items-center justify-center gap-4 md:absolute md:bottom-6 md:left-16 md:flex-row">
          <button className="flex h-fit min-w-[170px] items-center justify-center gap-[25px] rounded-[7px] border border-white bg-black px-3 py-[13px] hover:cursor-pointer">
            <BiLogoApple className="text-3xl text-cash-green" />
            <span className="text-center text-xs font-black uppercase text-white">
              App Store
            </span>
          </button>

          <button className="flex h-fit min-w-[170px] items-center justify-center gap-[25px] rounded-[7px] border border-white bg-black px-3 py-[13px] hover:cursor-pointer">
            <BiLogoPlayStore className="text-3xl text-cash-green" />
            <span className="text-center text-xs font-black uppercase text-white">
              Google Play
            </span>
          </button>
        </div>

        <div className="absolute bottom-5 z-[1] mt-4 flex flex-col items-start justify-center gap-4 md:bottom-5 md:right-16 md:flex-row-reverse md:items-center">
          <div className="flex items-center justify-start gap-[30px]">
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

          <p className="w-full text-left text-[10px] text-white md:max-w-[363px] ">
            <span>
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            </span>
            <br />
            <span>
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </span>
          </p>
        </div>

        <HeroBgImages />
        <Image
          alt="decorative image"
          className="absolute left-[40px] top-[68px] md:left-[228px] md:top-[50px]"
          src={introCube}
          width={73}
          height={68}
        />
        <Image
          alt="decorative image"
          className="absolute bottom-9 left-0 right-0 mx-auto hidden animate-bounce lg:block"
          src={downArrow}
          width={18}
          height={30}
        />
      </div>
    </section>
  );
};
