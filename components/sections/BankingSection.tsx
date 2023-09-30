"use client";

import { motion } from "framer-motion";

import {
  bankingColumn,
  bankingCubes,
  bankingHole,
  bankingMonster,
  bankingPhone,
  bankingRamp1,
  bankingRamp2,
  bankingStairs1,
  bankingStairs2,
  bankingTrack1,
  bankingTrack2,
  bankingTube,
} from "@/public/assets";
import { FeatureText, Image } from "@/components";
import { homePageContent } from "@/constants";
import { useReveal } from "@/utils";

const BankingSection = () => {
  const revealProps = useReveal();

  return (
    <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-cash-green md:h-[750px]">
      <FeatureText
        title={homePageContent.banking.title}
        description={homePageContent.banking.description}
      />

      <motion.div
        {...revealProps}
        className="absolute top-[33px] h-[865.92px] w-[1358px] translate-x-[-42%] md:left-[47%] md:top-0 md:translate-x-[-50%]"
      >
        <FeatureText
          title={homePageContent.banking.title}
          description={homePageContent.banking.description}
          position="top-[307px] left-[284px]"
        />

        <Image
          alt="decorative image"
          src={bankingCubes}
          className="absolute left-[912px] top-[516px] h-[139.12px] w-60 object-cover"
          width={60}
          height={139}
        />
        <Image
          alt="decorative image"
          src={bankingMonster}
          className="absolute left-[1237px] top-[606px] h-[79.66px] w-[120px] object-cover"
          width={120}
          height={80}
        />
        <Image
          alt="decorative image"
          src={bankingTrack1}
          className="absolute left-[413px] top-[164px] h-[166.38px] w-[270px] object-cover"
          width={270}
          height={166}
        />
        <Image
          alt="decorative image"
          src={bankingPhone}
          className="absolute left-[567px] top-[170px] h-[407.99px] w-[350px] object-cover"
          width={350}
          height={408}
        />
        <Image
          alt="decorative image"
          src={bankingRamp1}
          className="absolute left-[848px] top-[212px] h-[187.35px] w-[280px] object-cover"
          width={280}
          height={187}
        />
        <Image
          alt="decorative image"
          src={bankingRamp2}
          className="absolute left-[216px] top-[510px] h-[194.48px] w-[300px] object-cover"
          width={300}
          height={194}
        />
        <Image
          alt="decorative image"
          src={bankingStairs1}
          className="absolute left-[1212px] top-[282px] h-[247px] w-[90px] object-cover"
          width={90}
          height={247}
        />
        <Image
          alt="decorative image"
          src={bankingStairs2}
          className="absolute left-[116px] top-[413px] h-[222.78px] w-20 object-cover"
          width={20}
          height={223}
        />
        <Image
          alt="decorative image"
          src={bankingTrack2}
          className="absolute left-[998px] top-[15px] h-[160.42px] w-[250px] object-cover"
          width={250}
          height={160}
        />
        <Image
          alt="decorative image"
          src={bankingTube}
          className="absolute left-[548px] top-[627px] h-[156.92px] w-[150px] object-cover"
          width={150}
          height={157}
        />
        <Image
          alt="decorative image"
          src={bankingHole}
          className="absolute left-[-1px] top-[-1px] h-[159.92px] w-[380px] object-cover"
          width={380}
          height={160}
        />
        <Image
          alt="decorative image"
          src={bankingHole}
          className="absolute left-[787px] top-[705px] h-[159.92px] w-[380px] object-cover"
          width={380}
          height={160}
        />
        <Image
          alt="decorative image"
          src={bankingColumn}
          className="absolute left-[133px] top-[104px] h-[199.81px] w-[130px] object-cover"
          width={130}
          height={200}
        />
      </motion.div>
    </section>
  );
};

export default BankingSection;
