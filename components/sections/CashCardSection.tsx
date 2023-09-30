"use client";

import { motion } from "framer-motion";

import {
  boostBurger,
  boostCard,
  boostCoffee,
  boostHand,
  boostPhone,
  boostShoe,
  boostStairs1,
  boostStairs2,
} from "@/public/assets";
import { FeatureText, Image } from "@/components";
import { homePageContent } from "@/constants";
import { useReveal } from "@/utils";

const CashCardSection = () => {
  const revealProps = useReveal();

  return (
    <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-black md:h-[750px]">
      <FeatureText
        title={homePageContent.cashCard.title}
        description={homePageContent.cashCard.description}
      />

      <motion.div
        {...revealProps}
        className="absolute top-[104px] h-[897.83px] w-[1658px] translate-x-[-40%] md:left-[50%] md:top-0 md:translate-x-[-50%]"
      >
        <FeatureText
          title={homePageContent.cashCard.title}
          description={homePageContent.cashCard.description}
          position="top-[236px] left-[382px]"
        />

        <Image
          alt="decorative image"
          src={boostStairs1}
          className="absolute left-[607px] top-[-1px]"
          width={1050}
          height={898}
        />
        <Image
          alt="decorative image"
          src={boostStairs2}
          className="absolute left-[-1px] top-[171px]"
          width={550}
          height={726}
        />
        <Image
          alt="decorative image"
          src={boostCard}
          className="absolute left-[1146px] top-[221px]"
          width={80}
          height={134}
        />
        <Image
          alt="decorative image"
          src={boostCoffee}
          className="absolute left-[1148px] top-[543px]"
          width={20}
          height={101}
        />
        <Image
          alt="decorative image"
          src={boostHand}
          className="absolute left-[1258px] top-[101px]"
          width={75}
          height={93}
        />
        <Image
          alt="decorative image"
          src={boostPhone}
          className="absolute left-[728px] top-[158px]"
          width={250}
          height={509}
        />
        <Image
          alt="decorative image"
          src={boostShoe}
          className="absolute left-[1416px] top-[411px]"
          width={100}
          height={80}
        />
        <Image
          alt="decorative image"
          src={boostBurger}
          className="absolute left-[1052px] top-[398px]"
          width={70}
          height={93}
        />
      </motion.div>
    </section>
  );
};

export default CashCardSection;
