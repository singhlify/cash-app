"use client";

import { motion } from "framer-motion";

import {
  paymentsColumn,
  paymentsPhone,
  paymentsPillarLarge,
  paymentsPillarMedium,
  paymentsPillarSmall,
} from "@/public/assets";
import { FeatureText, Image } from "@/components";
import { homePageContent } from "@/constants";
import { useReveal } from "@/utils";

const PaymentsSection = () => {
  const revealProps = useReveal();

  return (
    <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-payments-white lg:h-[750px]">
      <FeatureText
        title={homePageContent.payments.title}
        description={homePageContent.payments.description}
      />

      <motion.div
        {...revealProps}
        className="absolute h-[730px] w-[2006px] translate-x-[-57%] md:left-[33%] md:top-[116px] md:translate-x-[-49%]"
      >
        <FeatureText
          title={homePageContent.payments.title}
          description={homePageContent.payments.description}
          position="top-[115px] left-[859px]"
        />

        <Image
          alt="decorative image"
          src={paymentsPhone}
          className="absolute left-[928px] top-[-1px] h-[431px] w-[750px] object-cover"
          width={750}
          height={431}
        />
        <Image
          alt="decorative image"
          src={paymentsColumn}
          className="absolute left-[1195px] top-[88px] h-[497px] w-[810px] object-cover"
          width={810}
          height={497}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarLarge}
          className="absolute left-[1260px] top-[215px] h-[333px] w-[210px] object-cover"
          width={210}
          height={333}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarSmall}
          className="absolute left-[881px] top-[443px] h-[131px] w-[135px] object-cover"
          width={135}
          height={131}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarMedium}
          className="absolute left-[772px] top-[354px] h-[253px] w-[172px] object-cover"
          width={172}
          height={253}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarMedium}
          className="absolute left-[1133px] top-[342px] h-[253px] w-[172px] object-cover"
          width={172}
          height={253}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarMedium}
          className="absolute left-[1280px] top-[449px] h-[253px] w-[172px] object-cover"
          width={172}
          height={253}
        />
        <Image
          alt="decorative image"
          src={paymentsPillarMedium}
          className="absolute left-[1597px] top-[210px] h-[253px] w-[172px] object-cover"
          width={172}
          height={253}
        />
        <Image
          alt="decorative image"
          src={paymentsColumn}
          className="absolute left-[-1px] top-[232px] h-[497px] w-[810px] object-cover"
          width={810}
          height={497}
        />
        <Image
          alt="decorative image"
          src={paymentsColumn}
          className="absolute left-[917px] top-[210px] h-[497px] w-[810px] object-cover"
          width={810}
          height={497}
        />
      </motion.div>
    </section>
  );
};

export default PaymentsSection;
