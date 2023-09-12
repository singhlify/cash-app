import { isMobile, useGetScreenSize } from "@/utils";
import Image from "./Image";
import {
  eye,
  dollarLogo,
  introStairs,
  introCubes,
  introPillar,
  eyeLg,
  dollarLogoLg,
  introStairsLg,
  introCubesLg,
  introPillarLg,
} from "@/public/assets";

export const HeroBgImages = () => {
  const screenSize = useGetScreenSize();

  if (isMobile(screenSize)) {
    return (
      <div className="lg:hidden">
        <Image
          alt="decorative image"
          className="absolute top-4 left-4 md:top-[18px] md:left-[60px]"
          src={dollarLogo}
          width={20}
          height={28}
        />

        <Image
          alt="decorative image"
          className="absolute top-[13px] right-[12px] md:top-6 md:right-16"
          src={eye}
          width={40}
          height={23}
        />

        <Image
          alt="decorative image"
          className="absolute top-[68px] right-[26px] md:top-[50px] md:right-[144px]"
          src={introStairs}
          width={76}
          height={99}
        />

        <Image
          alt="decorative image"
          className="absolute left-4 bottom-[190px] md:bottom-[66px] md:left-[208px]"
          src={introCubes}
          width={73}
          height={68}
        />

        <Image
          alt="decorative image"
          className="absolute bottom-[-120px] right-[-42px] md:bottom-[-87px] md:right-[258px]"
          src={introPillar}
          width={256}
          height={302}
        />
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <Image
        className="absolute top-4 left-4 md:top-[18px] md:left-[60px]"
        alt="decorative image"
        src={dollarLogoLg}
        width={30}
        height={44}
      />

      <Image
        className="absolute top-[13px] right-[12px] md:top-6 md:right-16"
        alt="decorative image"
        src={eyeLg}
        width={64}
        height={36}
      />

      <Image
        alt="decorative image"
        className="absolute top-[68px] right-[26px] md:top-[50px] md:right-[144px]"
        src={introStairsLg}
        width={200}
        height={260}
      />

      <Image
        className="absolute left-4 bottom-[190px] md:bottom-[66px] md:left-[208px]"
        alt="decorative image"
        src={introCubesLg}
        width={188}
        height={176}
      />

      <Image
        alt="decorative image"
        className="absolute bottom-[-120px] right-[-42px] md:bottom-[-87px] md:right-[258px]"
        src={introPillarLg}
        width={280}
        height={330}
      />
    </div>
  );
};
