import { Work_Sans } from "next/font/google";
import Image from "@/components/Image";

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
} from "react-icons/bi";
import { FeatureText, HeroBgImages } from "@/components";
import { homePageContent } from "@/constants";
import { isMobile, useGetScreenSize } from "@/utils";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  const screenSize = useGetScreenSize();

  return (
    <main className={`${workSans.className}`}>
      <section className="min-h-[777px] mx-auto mt-auto relative overflow-hidden w-full px-4 bg-black flex justify-center">
        <Image
          className="absolute !top-[-200px] z-[0] select-none object-cover"
          src={rays}
          alt="decorative image"
          fill
        />

        <div className="w-[1366px] h-screen mx-auto relative flex flex-col justify-center z-[2]">
          <div className="relative flex flex-col w-full mx-auto font-black text-center uppercase text-white text-[120px] z-[2] lg:text-[193px]">
            <p className="leading-none">CASH</p>
            {isMobile(screenSize) ? (
              <Image
                alt="decorative image"
                className="lg:hidden absolute top-0 left-0 right-0 m-auto lg:top-[-40px]"
                src={introPhone}
                width={160}
                height={196}
              />
            ) : (
              <Image
                alt="decorative image"
                className="hidden lg:block absolute top-0 left-0 right-0 m-auto lg:top-[-40px]"
                src={introPhoneLg}
                width={370}
                height={454}
              />
            )}
            <p className="leading-[0.75] z-[1]">APP</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-4 z-[2] md:absolute md:left-16 md:bottom-6 md:flex-row">
            <button className="flex items-center justify-center gap-[25px] min-w-[170px] h-fit py-[13px] px-3 rounded-[7px] bg-black border border-white">
              <BiLogoApple className="text-cash-green text-3xl" />
              <span className="text-xs font-black text-center uppercase text-white">
                App Store
              </span>
            </button>

            <button className="flex items-center justify-center gap-[25px] min-w-[170px] h-fit py-[13px] px-3 rounded-[7px] bg-black border border-white">
              <BiLogoPlayStore className="text-cash-green text-3xl" />
              <span className="text-xs font-black text-center uppercase text-white">
                Google Play
              </span>
            </button>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 mt-4 absolute bottom-5 z-[1] md:flex-row-reverse md:items-center md:right-16 md:bottom-5">
            <div className="flex justify-start items-center gap-[30px]">
              <BiLogoTwitch className="text-3xl" />
              <BiLogoTwitter className="text-3xl" />
              <BiLogoInstagram className="text-3xl" />
            </div>

            <p className="w-full text-[10px] text-left text-white md:max-w-[363px] ">
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
            className="absolute top-[68px] left-[40px] md:top-[50px] md:left-[228px]"
            src={introCube}
            width={73}
            height={68}
          />
          <Image
            alt="decorative image"
            className="hidden absolute bottom-9 right-0 left-0 mx-auto animate-bounce lg:block"
            src={downArrow}
            width={18}
            height={30}
          />
        </div>
      </section>

      <section className="min-h-[777px] mx-auto mt-auto relative overflow-hidden w-full bg-payments-white lg:h-[750px]">
        <FeatureText
          title={homePageContent.payments.title}
          description={homePageContent.payments.description}
        />

        <div className="w-[2006px] h-[730px] absolute translate-x-[-57%] md:top-[116px] md:translate-x-[-50%] md:left-[33%]">
          <FeatureText
            title={homePageContent.payments.title}
            description={homePageContent.payments.description}
            position="top-[115px] left-[859px]"
          />

          <Image
            alt="decorative image"
            src={paymentsPhone}
            className="w-[750px] h-[431px] absolute left-[928px] top-[-1px] object-cover"
            width={750}
            height={431}
          />
          <Image
            alt="decorative image"
            src={paymentsColumn}
            className="w-[810px] h-[497px] absolute left-[1195px] top-[88px] object-cover"
            width={810}
            height={497}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarLarge}
            className="w-[210px] h-[333px] absolute left-[1260px] top-[215px] object-cover"
            width={210}
            height={333}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarSmall}
            className="w-[135px] h-[131px] absolute left-[881px] top-[443px] object-cover"
            width={135}
            height={131}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarMedium}
            className="w-[172px] h-[253px] absolute left-[772px] top-[354px] object-cover"
            width={172}
            height={253}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarMedium}
            className="w-[172px] h-[253px] absolute left-[1133px] top-[342px] object-cover"
            width={172}
            height={253}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarMedium}
            className="w-[172px] h-[253px] absolute left-[1280px] top-[449px] object-cover"
            width={172}
            height={253}
          />
          <Image
            alt="decorative image"
            src={paymentsPillarMedium}
            className="w-[172px] h-[253px] absolute left-[1597px] top-[210px] object-cover"
            width={172}
            height={253}
          />
          <Image
            alt="decorative image"
            src={paymentsColumn}
            className="w-[810px] h-[497px] absolute left-[-1px] top-[232px] object-cover"
            width={810}
            height={497}
          />
          <Image
            alt="decorative image"
            src={paymentsColumn}
            className="w-[810px] h-[497px] absolute left-[917px] top-[210px] object-cover"
            width={810}
            height={497}
          />
        </div>
      </section>

      <section className="min-h-[777px] mx-auto mt-auto relative overflow-hidden w-full bg-cash-green md:h-[750px]">
        <FeatureText
          title={homePageContent.banking.title}
          description={homePageContent.banking.description}
        />

        <div className="w-[1358px] h-[865.92px] absolute top-[33px] translate-x-[-42%] md:top-0 md:translate-x-[-50%] md:left-[47%]">
          <FeatureText
            title={homePageContent.banking.title}
            description={homePageContent.banking.description}
            position="top-[307px] left-[284px]"
          />

          <Image
            alt="decorative image"
            src={bankingCubes}
            className="w-60 h-[139.12px] absolute left-[912px] top-[516px] object-cover"
            width={60}
            height={139}
          />
          <Image
            alt="decorative image"
            src={bankingMonster}
            className="w-[120px] h-[79.66px] absolute left-[1237px] top-[606px] object-cover"
            width={120}
            height={80}
          />
          <Image
            alt="decorative image"
            src={bankingTrack1}
            className="w-[270px] h-[166.38px] absolute left-[413px] top-[164px] object-cover"
            width={270}
            height={166}
          />
          <Image
            alt="decorative image"
            src={bankingPhone}
            className="w-[350px] h-[407.99px] absolute left-[567px] top-[170px] object-cover"
            width={350}
            height={408}
          />
          <Image
            alt="decorative image"
            src={bankingRamp1}
            className="w-[280px] h-[187.35px] absolute left-[848px] top-[212px] object-cover"
            width={280}
            height={187}
          />
          <Image
            alt="decorative image"
            src={bankingRamp2}
            className="w-[300px] h-[194.48px] absolute left-[216px] top-[510px] object-cover"
            width={300}
            height={194}
          />
          <Image
            alt="decorative image"
            src={bankingStairs1}
            className="w-[90px] h-[247px] absolute left-[1212px] top-[282px] object-cover"
            width={90}
            height={247}
          />
          <Image
            alt="decorative image"
            src={bankingStairs2}
            className="w-20 h-[222.78px] absolute left-[116px] top-[413px] object-cover"
            width={20}
            height={223}
          />
          <Image
            alt="decorative image"
            src={bankingTrack2}
            className="w-[250px] h-[160.42px] absolute left-[998px] top-[15px] object-cover"
            width={250}
            height={160}
          />
          <Image
            alt="decorative image"
            src={bankingTube}
            className="w-[150px] h-[156.92px] absolute left-[548px] top-[627px] object-cover"
            width={150}
            height={157}
          />
          <Image
            alt="decorative image"
            src={bankingHole}
            className="w-[380px] h-[159.92px] absolute left-[-1px] top-[-1px] object-cover"
            width={380}
            height={160}
          />
          <Image
            alt="decorative image"
            src={bankingHole}
            className="w-[380px] h-[159.92px] absolute left-[787px] top-[705px] object-cover"
            width={380}
            height={160}
          />
          <Image
            alt="decorative image"
            src={bankingColumn}
            className="w-[130px] h-[199.81px] absolute left-[133px] top-[104px] object-cover"
            width={130}
            height={200}
          />
        </div>
      </section>

      <section className="min-h-[777px] mx-auto mt-auto relative overflow-hidden w-full bg-black md:h-[750px]">
        <FeatureText
          title={homePageContent.cashCard.title}
          description={homePageContent.cashCard.description}
        />

        <div className="w-[1658px] h-[897.83px] absolute top-[104px] translate-x-[-40%] md:top-0 md:translate-x-[-50%] md:left-[50%]">
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

      <section className="min-h-[777px] mx-auto mt-auto relative overflow-hidden w-full bg-cash-green lg:min-h-[750px]">
        <h2 className="text-[40px] text-center font-black text-white mt-4 lg:mt-[131px]">
          Investing
        </h2>

        <Image
          className="absolute !top-[-40%] z-0"
          src={rays}
          alt="decorative image object-cover"
          fill
        />

        <div className="flex flex-col gap-12 relative z-[5] p-4 lg:p-0 lg:flex-row lg:max-w-[1184px] lg:mx-auto">
          <div className="flex flex-col justify-center items-center gap-6  lg:flex-row lg:items-start lg:mt-9">
            <div className="leading-normal flex flex-col z-[1] justify-center">
              <h2 className={`font-bold text-left text-black text-[40px]`}>
                {homePageContent.investing[0].title.text}
              </h2>
              <p className={`text-base text-left text-black`}>
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

          <div className="flex flex-col justify-center items-center gap-6 lg:flex-row-reverse lg:items-start lg:mt-9">
            <div className="leading-normal flex flex-col z-[1] justify-center">
              <h2 className={`font-bold text-left text-black text-[40px]`}>
                {homePageContent.investing[1].title.text}
              </h2>
              <p className={`text-base text-left text-black`}>
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

        <div className="bg-white h-[600px] flex flex-col items-end relative lg:h-[294px]">
          <div className="bg-white w-full absolute h-[600px] -translate-y-36 lg:-translate-y-26"></div>

          <div className="flex flex-col items-center justify-center gap-5 w-full mt-auto mb-11 p-4 z-[5] lg:max-w-[80%] lg:flex-row lg:justify-between lg:items-end lg:py-0 lg:mb-4 lg:mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 mt-4 mb-12 z-[2] lg:m-0 lg:flex-row">
              <button className="flex items-center justify-center gap-[25px] min-w-[170px] h-fit py-[13px] px-3 rounded-[7px] bg-white border border-black">
                <BiLogoApple className="text-cash-green text-3xl" />
                <span className="text-xs font-black text-center uppercase text-black">
                  App Store
                </span>
              </button>

              <button className="flex items-center justify-center gap-[25px] min-w-[170px] h-fit py-[13px] px-3 rounded-[7px] bg-white border border-black">
                <BiLogoPlayStore className="text-cash-green text-3xl" />
                <span className="text-xs font-black text-center uppercase text-black">
                  Google Play
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row-reverse">
              <div className="flex justify-start items-center gap-[30px] text-black">
                <BiLogoTwitch className="text-3xl" />
                <BiLogoTwitter className="text-3xl" />
                <BiLogoInstagram className="text-3xl" />
              </div>

              <p className="w-full text-[10px] text-left text-black lg:w-[363px]">
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
            className="absolute mx-auto -translate-y-36 lg:-translate-y-26"
            src={investingFloor}
            alt="decorative image object-cover"
            fill
          />
        </div>

        <Image
          alt="decorative image"
          src={investingGraph1}
          className="absolute left-0 bottom-[31px] hidden lg:block"
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
          className="absolute right-0 bottom-[29px] hidden lg:block"
          width={656}
          height={386}
        />
      </section>
    </main>
  );
}
