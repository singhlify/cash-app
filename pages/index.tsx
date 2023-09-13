import { Work_Sans } from "next/font/google";
import Image from "@/components/Image";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import {
  introCube,
  introPhone,
  rays,
  introPhoneLg,
  paymentsColumn,
  paymentsPhone,
  paymentsPillarLarge,
  paymentsPillarMedium,
  paymentsPillarSmall,
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
  boostBurger,
  boostCard,
  boostCoffee,
  boostHand,
  boostPhone,
  boostShoe,
  boostStairs1,
  boostStairs2,
  investingBitcoin,
  investingStocks,
  investingFloor,
  investingGraph1,
  investingGraph2,
  investingGraph3,
  downArrow,
} from "@/public/assets";
import {
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPlayStore,
  BiLogoApple,
  BiXCircle,
} from "react-icons/bi";
import { FeatureText, HeroBgImages } from "@/components";
import { homePageContent } from "@/constants";
import { isMobile, useGetScreenSize } from "@/utils";
import Link from "next/link";
const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  const screenSize = useGetScreenSize();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <main className={`${workSans.className}`}>
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

      <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-payments-white lg:h-[750px]">
        <FeatureText
          title={homePageContent.payments.title}
          description={homePageContent.payments.description}
        />

        <div className="absolute h-[730px] w-[2006px] translate-x-[-57%] md:left-[33%] md:top-[116px] md:translate-x-[-49%]">
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
        </div>
      </section>

      <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-cash-green md:h-[750px]">
        <FeatureText
          title={homePageContent.banking.title}
          description={homePageContent.banking.description}
        />

        <div className="absolute top-[33px] h-[865.92px] w-[1358px] translate-x-[-42%] md:left-[47%] md:top-0 md:translate-x-[-50%]">
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
        </div>
      </section>

      <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-black md:h-[750px]">
        <FeatureText
          title={homePageContent.cashCard.title}
          description={homePageContent.cashCard.description}
        />

        <div className="absolute top-[104px] h-[897.83px] w-[1658px] translate-x-[-40%] md:left-[50%] md:top-0 md:translate-x-[-50%]">
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
        </div>
      </section>

      <section className="relative mx-auto mt-auto min-h-[777px] w-full overflow-hidden bg-cash-green lg:min-h-[750px]">
        <h2 className="mt-4 text-center text-[40px] font-black text-white lg:mt-[131px]">
          Investing
        </h2>

        <Image
          className="absolute !top-[-40%] z-0"
          src={rays}
          alt="decorative image object-cover"
          fill
        />

        <div className="relative z-[5] flex flex-col gap-12 p-4 lg:mx-auto lg:max-w-[1184px] lg:flex-row lg:p-0">
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
        </div>

        <div className="relative flex h-[600px] flex-col items-end bg-white lg:h-[294px]">
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
                  does not trade bitcoin and Cash App is not a member of FINRA
                  or SIPC. Cash App facilitates banking services through Sutton
                  Bank and Lincoln Savings Bank, Members FDIC.
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
        </div>

        <Image
          alt="decorative image"
          src={investingGraph1}
          className="absolute bottom-[31px] left-0 hidden lg:block"
          width={1024}
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
          width={656}
          height={386}
        />
      </section>
    </main>
  );
}
