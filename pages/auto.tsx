import { bankingColumn, introPhone2, eye, dollarLogo } from "@/public/assets";
import {
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPlayStore,
  BiLogoApple,
} from "react-icons/bi";


const Auto = () => {
  return (
    <div className="w-[375px] h-[4710px] relative overflow-hidden bg-white">
      <div className="w-[375px] h-[777px] absolute left-0 top-0 overflow-hidden bg-black">
        <img
          src="./assets/images/intro-pillar-2.png"
          className="w-[256.23px] h-[301.88px] absolute left-[160.04px] top-[601.04px] object-cover"
          style={{
            boxShadow:
              "0px 3.6604807376861572px 3.6604807376861572px 0 rgba(0,0,0,0.25)",
          }}
        />

        <img
          src="./assets/images/intro-cubes-2.png"
          className="w-[72.56px] h-[68.11px] absolute left-[22.31px] top-[510.31px] object-cover"
        />

        <p className="w-[344px] absolute left-4 top-[678px] text-[10px] text-left text-white">
          <span className="w-[344px] text-[10px]  text-left">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          </span>
          <br />
          <span className="w-[344px] text-[10px]  text-left">
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </span>
        </p>
        <img
          src="./assets/images/intro-stairs-2.png"
          className="w-[76.24px] h-[99.46px] absolute left-[271.31px] top-[67.31px] object-cover"
        />
        <div className="w-[333px] h-[250px]">
          <p className="absolute left-[23px] top-[212px] text-[120px] font-black text-center uppercase text-white">
            CASh
          </p>
          <img
            src={introPhone2}
            className="w-[160.06px] h-[196px] absolute left-[108.78px] top-[198.78px] object-cover"
          />
          <p className="absolute left-[63px] top-[308px] text-[120px] font-black text-center uppercase text-white">
            APP
          </p>
        </div>

        <img src={dollarLogo} className="absolute top-4 left-4" />

        <div className="flex justify-start items-center w-[40.89px] h-[23px] absolute left-[322px] top-[13px] gap-[12.777776718139648px]">
          <img src={eye} />
        </div>
        <div className="w-[170px] h-[116px]">
          <div className="flex justify-between items-center w-[170px] h-[50px] absolute left-[107px] top-[449px] p-[25px] rounded-[7px] bg-black border border-white">
            <BiLogoApple className="text-[#00D54B] text-3xl" />
            <p className="flex-grow-0 flex-shrink-0 text-xs font-black text-center uppercase text-white">
              APP STORE
            </p>
          </div>
          <div className="flex justify-between items-center w-[170px] h-[50px] absolute left-[107px] top-[515px] p-3 rounded-[7px] bg-black border border-white">
            <BiLogoPlayStore className="text-[#00D54B] text-3xl" />
            <p className="flex-grow-0 flex-shrink-0 text-xs font-black text-center uppercase text-white">
              GOOGLE PLAY
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-4 top-[640px] gap-[30px]">
          <BiLogoTwitch className="text-3xl" />
          <BiLogoTwitter className="text-3xl" />
          <BiLogoInstagram className="text-3xl" />
        </div>
        <img
          src="./assets/images/intro-cube-2.png"
          className="w-[74px] h-[73.21px] absolute left-[39px] top-[67px] object-cover"
        />
      </div>
      <div className="w-[375px] h-[777px] absolute left-0 top-[777px] overflow-hidden bg-[#f8f6f6]">
        <svg
          width={375}
          height={296}
          viewBox="0 0 375 296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1366px] h-[295.55px] absolute left-[-495px] top-[463px]"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_9403_122)">
            <g opacity="0.3">
              <path
                d="M-495 0.5H871H-495ZM-495 21H871H-495ZM-495 55.58H871H-495ZM-495 98.6H871H-495ZM-495 177.33H871H-495ZM-495 295.05H871H-495Z"
                fill="white"
              />
              <path
                d="M-495 295.05H871M-495 0.5H871H-495ZM-495 21H871H-495ZM-495 55.58H871H-495ZM-495 98.6H871H-495ZM-495 177.33H871H-495Z"
                stroke="black"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_9403_122">
              <rect
                width={1366}
                height="295.55"
                fill="white"
                transform="translate(-495)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="w-[344px] h-[147px] absolute left-4 top-6">
          <p className="w-[336px] absolute left-[-4px] top-1.5 text-[40px] font-bold text-left text-[#00d54b]">
            Payments
          </p>
          <p className="w-[352px] h-[88px] absolute left-[-4px] top-[59px] text-base text-left text-black">
            <span className="w-[352px] h-[88px] text-base text-left text-black">
              Send and receive money with anyone, donate to an important cause,
              or tip professionals.{" "}
            </span>
            <br />
            <span className="w-[352px] h-[88px] text-base text-left text-black">
              Just enter a $cashtag, phone number, or{" "}
            </span>
            <br />
            <span className="w-[352px] h-[88px] text-base text-left text-black">
              scan their QR code to pay.
            </span>
          </p>
        </div>
        <div className="w-[2006px] h-[730.54px]">
          <img
            src="./assets/images/payments-phone-1.png"
            className="w-[750px] h-[431.54px] absolute left-[-257.5px] top-[195.5px] object-cover"
          />
          <img
            src="./assets/images/payments-column.png"
            className="w-[810px] h-[497.54px] absolute left-[9.5px] top-[284.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-large.png"
            className="w-[210px] h-[333.31px] absolute left-[74.5px] top-[411.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-small.png"
            className="w-[135px] h-[131.32px] absolute left-[-304.5px] top-[639.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-medium.png"
            className="w-[172px] h-[253.73px] absolute left-[-413.5px] top-[550.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-medium.png"
            className="w-[172px] h-[253.73px] absolute left-[-52.5px] top-[538.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-medium.png"
            className="w-[172px] h-[253.73px] absolute left-[94.5px] top-[645.5px] object-cover"
          />
          <img
            src="./assets/images/payments-pillar-medium.png"
            className="w-[172px] h-[253.73px] absolute left-[411.5px] top-[406.5px] object-cover"
          />
          <img
            src="./assets/images/payments-column.png"
            className="w-[810px] h-[497.54px] absolute left-[-1186.5px] top-[428.5px] object-cover"
          />
          <img
            src="./assets/images/payments-column.png"
            className="w-[810px] h-[497.54px] absolute left-[-268.5px] top-[406.5px] object-cover"
          />
        </div>
      </div>
      <div className="w-[375px] h-[777px] absolute left-0 top-[1554px] overflow-hidden bg-[#00d54b]">
        <div className="w-[344px] h-[147px] absolute left-4 top-6">
          <p className="absolute left-0 top-1.5 text-[40px] font-bold text-left text-white">
            Banking
          </p>
          <p className="w-[344px] h-[88px] absolute left-0 top-[58px] text-base text-left text-black">
            <span className="w-[344px] h-[88px] text-base text-left text-black">
              Receive your paycheck, tax returns, and other direct deposits up
              to two days early using your Cash App routing{" "}
            </span>
            <br />
            <span className="w-[344px] h-[88px] text-base text-left text-black">
              and account number.
            </span>
          </p>
        </div>
        <div className="w-[1358px] h-[865.92px]">
          <img
            src="./assets/images/banking-cubes.png"
            className="w-60 h-[139.12px] absolute left-[358.5px] top-[549.5px] object-cover"
          />
          <img
            src="./assets/images/banking-monster.png"
            className="w-[120px] h-[79.66px] absolute left-[683.5px] top-[639.5px] object-cover"
          />
          <img
            src="./assets/images/banking-track-1.png"
            className="w-[270px] h-[166.38px] absolute left-[-140.5px] top-[197.5px] object-cover"
          />
          <img
            src="./assets/images/banking-phone.png"
            className="w-[350px] h-[407.99px] absolute left-[13.5px] top-[203.5px] object-cover"
          />
          <img
            src="./assets/images/banking-ramp-1.png"
            className="w-[280px] h-[187.35px] absolute left-[294.5px] top-[245.5px] object-cover"
          />
          <img
            src="./assets/images/banking-ramp-2.png"
            className="w-[300px] h-[194.48px] absolute left-[-337.5px] top-[543.5px] object-cover"
          />
          <img
            src="./assets/images/banking-stairs-1.png"
            className="w-[90px] h-[247px] absolute left-[658.5px] top-[315.5px] object-cover"
          />
          <img
            src="./assets/images/banking-stairs-2.png"
            className="w-20 h-[222.78px] absolute left-[-437.5px] top-[446.5px] object-cover"
          />
          <img
            src="./assets/images/banking-track-2.png"
            className="w-[250px] h-[160.42px] absolute left-[444.5px] top-[48.5px] object-cover"
          />
          <img
            src="./assets/images/banking-tube.png"
            className="w-[150px] h-[156.92px] absolute left-[-5.5px] top-[660.5px] object-cover"
          />
          <img
            src="./assets/images/banking-hole.png"
            className="w-[380px] h-[159.92px] absolute left-[-554.5px] top-[32.5px] object-cover"
          />
          <img
            src="./assets/images/banking-hole.png"
            className="w-[380px] h-[159.92px] absolute left-[233.5px] top-[738.5px] object-cover"
          />
          <img
            // src="./assets/images/banking-column.png"
            src={bankingColumn}
            className="w-[130px] h-[199.81px] absolute left-[-420.5px] top-[137.5px] object-cover"
          />
        </div>
      </div>
      <div className="w-[375px] h-[777px] absolute left-0 top-[2331px] overflow-hidden bg-black">
        <div className="w-[344px] h-[204px] absolute left-4 top-6">
          <p className="absolute left-0 top-0 text-[40px] font-bold text-left text-[#00d54b]">
            <span className="text-[40px] font-bold text-left text-[#00d54b]">
              Cash Card
            </span>
            <br />
            <span className="text-[40px] font-bold text-left text-[#00d54b]">
              &amp; Boost
            </span>
          </p>
          <p className="w-[344px] absolute left-0 top-[94px] text-base text-left text-white">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <div className="w-[1658px] h-[897.83px]">
          <img
            src="./assets/images/boost-stairs-1.png"
            className="w-[1050px] h-[897.71px] absolute left-[-60.5px] top-[103.5px] object-cover"
          />
          <img
            src="./assets/images/boost-stairs-2.png"
            className="w-[550px] h-[725.83px] absolute left-[-668.5px] top-[275.5px] object-cover"
          />
          <img
            src="./assets/images/boost-card.png"
            className="w-20 h-[134.49px] absolute left-[478.5px] top-[325.5px] object-cover"
          />
          <img
            src="./assets/images/boost-coffee.png"
            className="w-20 h-[100.87px] absolute left-[480.5px] top-[647.5px] object-cover"
          />
          <img
            src="./assets/images/boost-hand.png"
            className="w-[75px] h-[93.46px] absolute left-[590.5px] top-[205.5px] object-cover"
          />
          <img
            src="./assets/images/boost-phone.png"
            className="w-[250px] h-[508.93px] absolute left-[60.5px] top-[262.5px] object-cover"
          />
          <img
            src="./assets/images/boost-shoe.png"
            className="w-[100px] h-[80.22px] absolute left-[748.5px] top-[515.5px] object-cover"
          />
          <img
            src="./assets/images/boost-burger.png"
            className="w-[70px] h-[92.62px] absolute left-[384.5px] top-[502.5px] object-cover"
          />
        </div>
      </div>
      <div className="w-[375px] h-[1602px] absolute left-0 top-[3108px] overflow-hidden bg-[#00d54b]">
        <svg
          width={375}
          height={1070}
          viewBox="0 0 375 1070"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1366px] h-[1362px] absolute left-[-495px] top-[-292px]"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_9408_73)">
            <g opacity="0.5">
              <path
                d="M-33.9311 129.471L-398.502 -291.644L-33.9311 129.471ZM27.6776 138.63L-31.0232 47.0566L27.6776 138.63ZM78.1749 106.375L-14.167 -156.809L78.1749 106.375ZM146.218 182.85L119.154 -8.90314L146.218 182.85ZM189.859 145.9L201.935 -12.9077L189.859 145.9ZM233.287 109.694L328.065 -291.151L233.287 109.694ZM278.735 148.595L487.46 -291.151L278.735 148.595ZM362.654 118.29L582.605 -172.603L362.654 118.29ZM512.618 76.2609L866.745 -230.124L512.618 76.2609ZM498.062 168.793L865.502 -56.7387L498.062 168.793ZM409.739 285.281L870.814 118.75L409.739 285.281ZM567.08 315.647L771.698 288.661L567.08 315.647ZM470.023 390.277L865.502 420.461L470.023 390.277ZM493.653 446.439L743.85 505.647L493.653 446.439ZM567.255 554.321L865.502 696.508L567.255 554.321ZM573.493 674.535L865.502 898.664L573.493 674.535ZM315.957 532.348L780.471 1069.64L315.957 532.348ZM326.132 617.89L609.051 1069.64L326.132 617.89ZM266.188 618.558L401.394 993.618L266.188 618.558ZM195.839 535.032L271.232 1069.64L195.839 535.032ZM159.657 582.704L127.462 1069.63L159.657 582.704ZM105.847 655.646L10.4053 1069.64L105.847 655.646ZM86.718 557.701L-94.7294 945.306L86.718 557.701ZM-61.9152 678.846L-355.556 1069.63L-61.9152 678.846ZM-78.3223 587.245L-356.531 830.072L-78.3223 587.245ZM-262.568 641.561L-407.685 732.116L-262.568 641.561ZM-212.23 509.904L-494.819 609.174L-212.23 509.904ZM-123.469 412.211L-410.506 452.071L-123.469 412.211ZM-203.588 342.868L-411.683 326.494L-203.588 342.868ZM-97.6318 308.542L-494.819 215.637L-97.6318 308.542ZM-221.386 185.611L-445.291 79.0493L-221.386 185.611ZM-203.741 87.4748L-374.198 -43.4432L-203.741 87.4748ZM141.952 278.039L105.502 180.39L141.952 278.039ZM158.058 273.788L156.273 261.068L158.058 273.788ZM182.039 272.446L182.521 265.39L182.039 272.446ZM184.301 227.941L187.806 190.185L184.301 227.941ZM200.286 251.07L213.988 192.278L200.286 251.07ZM228.938 254.757L258.303 192.081L228.938 254.757ZM269.907 240.716L334.33 157.366L269.907 240.716ZM290.542 268.529L344.735 223.153L290.542 268.529ZM380.228 191.062L476.589 107.717L380.228 191.062ZM249.332 304.302L254.442 299.919L249.332 304.302ZM274.211 308.076L458.008 195.176L274.211 308.076ZM269.376 336.075L312.995 320.271L269.376 336.075ZM366.088 343.454L471.206 330.214L366.088 343.454ZM316.976 379.265L422.209 386.836L316.976 379.265ZM273.877 395.24L392.631 422.916L273.877 395.24ZM267.251 414.852L269.677 415.997L267.251 414.852ZM362.928 459.85L473.539 511.728L362.928 459.85ZM255.778 433.949L259.721 438.37L255.778 433.949ZM227.137 459.543L236.605 474.657L227.137 459.543ZM366.893 519.6L465.478 594.312L366.893 519.6ZM267.371 523.999L296.133 568.049L267.371 523.999ZM210.976 467.311L245.329 564.286L210.976 467.311ZM186.174 473.096L186.803 477.528L186.174 473.096ZM167.713 479.642L163.562 525.588L167.713 479.642ZM149.203 470.116L145.95 488.818L149.203 470.116ZM128.809 562.495L116.252 610.955L128.809 562.495ZM111.279 450.312L12.7437 582.331L111.279 450.312ZM97.1833 435.959L21.1772 503.259L97.1833 435.959ZM7.60689 473.901L-151.667 572.711L7.60689 473.901ZM80.0259 404.41L-89.023 466.725L80.0259 404.41ZM75.5627 383.588L5.85994 394.413L75.5627 383.588ZM11.6046 358.322L-72.7583 352.22L11.6046 358.322ZM77.5068 350.543L2.21269 332.942L77.5068 350.543ZM84.9272 329.299L-120.271 231.814L84.9272 329.299ZM95.3104 312.289L85.0641 304.543L95.3104 312.289ZM29.8682 262.81L-121.613 149.351L29.8682 262.81ZM64.4786 243.335L33.0335 206.91L64.4786 243.335ZM105.765 265.439L68.6351 206.006Z"
                fill="black"
              />
              <path
                d="M105.765 265.439L68.6351 206.006M-33.9311 129.471L-398.502 -291.644L-33.9311 129.471ZM27.6776 138.63L-31.0232 47.0566L27.6776 138.63ZM78.1749 106.375L-14.167 -156.809L78.1749 106.375ZM146.218 182.85L119.154 -8.90314L146.218 182.85ZM189.859 145.9L201.935 -12.9077L189.859 145.9ZM233.287 109.694L328.065 -291.151L233.287 109.694ZM278.735 148.595L487.46 -291.151L278.735 148.595ZM362.654 118.29L582.605 -172.603L362.654 118.29ZM512.618 76.2609L866.745 -230.124L512.618 76.2609ZM498.062 168.793L865.502 -56.7387L498.062 168.793ZM409.739 285.281L870.814 118.75L409.739 285.281ZM567.08 315.647L771.698 288.661L567.08 315.647ZM470.023 390.277L865.502 420.461L470.023 390.277ZM493.653 446.439L743.85 505.647L493.653 446.439ZM567.255 554.321L865.502 696.508L567.255 554.321ZM573.493 674.535L865.502 898.664L573.493 674.535ZM315.957 532.348L780.471 1069.64L315.957 532.348ZM326.132 617.89L609.051 1069.64L326.132 617.89ZM266.188 618.558L401.394 993.618L266.188 618.558ZM195.839 535.032L271.232 1069.64L195.839 535.032ZM159.657 582.704L127.462 1069.63L159.657 582.704ZM105.847 655.646L10.4053 1069.64L105.847 655.646ZM86.718 557.701L-94.7294 945.306L86.718 557.701ZM-61.9152 678.846L-355.556 1069.63L-61.9152 678.846ZM-78.3223 587.245L-356.531 830.072L-78.3223 587.245ZM-262.568 641.561L-407.685 732.116L-262.568 641.561ZM-212.23 509.904L-494.819 609.174L-212.23 509.904ZM-123.469 412.211L-410.506 452.071L-123.469 412.211ZM-203.588 342.868L-411.683 326.494L-203.588 342.868ZM-97.6318 308.542L-494.819 215.637L-97.6318 308.542ZM-221.386 185.611L-445.291 79.0493L-221.386 185.611ZM-203.741 87.4748L-374.198 -43.4432L-203.741 87.4748ZM141.952 278.039L105.502 180.39L141.952 278.039ZM158.058 273.788L156.273 261.068L158.058 273.788ZM182.039 272.446L182.521 265.39L182.039 272.446ZM184.301 227.941L187.806 190.185L184.301 227.941ZM200.286 251.07L213.988 192.278L200.286 251.07ZM228.938 254.757L258.303 192.081L228.938 254.757ZM269.907 240.716L334.33 157.366L269.907 240.716ZM290.542 268.529L344.735 223.153L290.542 268.529ZM380.228 191.062L476.589 107.717L380.228 191.062ZM249.332 304.302L254.442 299.919L249.332 304.302ZM274.211 308.076L458.008 195.176L274.211 308.076ZM269.376 336.075L312.995 320.271L269.376 336.075ZM366.088 343.454L471.206 330.214L366.088 343.454ZM316.976 379.265L422.209 386.836L316.976 379.265ZM273.877 395.24L392.631 422.916L273.877 395.24ZM267.251 414.852L269.677 415.997L267.251 414.852ZM362.928 459.85L473.539 511.728L362.928 459.85ZM255.778 433.949L259.721 438.37L255.778 433.949ZM227.137 459.543L236.605 474.657L227.137 459.543ZM366.893 519.6L465.478 594.312L366.893 519.6ZM267.371 523.999L296.133 568.049L267.371 523.999ZM210.976 467.311L245.329 564.286L210.976 467.311ZM186.174 473.096L186.803 477.528L186.174 473.096ZM167.713 479.642L163.562 525.588L167.713 479.642ZM149.203 470.116L145.95 488.818L149.203 470.116ZM128.809 562.495L116.252 610.955L128.809 562.495ZM111.279 450.312L12.7437 582.331L111.279 450.312ZM97.1833 435.959L21.1772 503.259L97.1833 435.959ZM7.60689 473.901L-151.667 572.711L7.60689 473.901ZM80.0259 404.41L-89.023 466.725L80.0259 404.41ZM75.5627 383.588L5.85994 394.413L75.5627 383.588ZM11.6046 358.322L-72.7583 352.22L11.6046 358.322ZM77.5068 350.543L2.21269 332.942L77.5068 350.543ZM84.9272 329.299L-120.271 231.814L84.9272 329.299ZM95.3104 312.289L85.0641 304.543L95.3104 312.289ZM29.8682 262.81L-121.613 149.351L29.8682 262.81ZM64.4786 243.335L33.0335 206.91L64.4786 243.335Z"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width={2}
                stroke-miterlimit={10}
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_9408_73">
              <rect
                width={1366}
                height={1362}
                fill="white"
                transform="translate(-495 -292)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="w-[375px] h-[600px] absolute left-0 top-[1002px] overflow-hidden bg-white">
          <div className="w-[2336px] h-[496px] absolute left-[-980px] top-0 overflow-hidden bg-white">
            <svg
              width={375}
              height={496}
              viewBox="0 0 375 496"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2336.6px] h-[495.6px] opacity-30"
              preserveAspectRatio="none"
            >
              <g opacity="0.3">
                <path
                  opacity="0.3"
                  d="M1356.1 1.7998L1209.7 1.5998L1141.5 1.6998L938.4 2.2998C922.4 2.2998 853.7 2.0998 847.3 2.2998C840.9 2.4998 706.5 2.2998 689.1 2.2998C671.7 2.2998 372.6 2.6998 361.7 2.4998C350.8 2.2998 259.7 2.4998 246.9 2.4998C234.2 2.4998 53.4 2.8998 28.7 2.6998C3.99998 2.4998 -170.7 2.6998 -170.7 2.6998H-494.2L-565.1 2.9998C-684.4 3.3998 -749.8 3.5998 -761.3 3.4998C-778.5 3.2998 -908.4 3.4998 -919.6 3.4998L-980.1 3.2998V1.1998L-796.2 0.899805H-494.2L-369 1.1998L-89.3 0.899805C-82.4 0.899805 181.9 0.399805 188.1 0.699805C194.2 0.899805 397.9 0.699805 397.9 0.699805L674.4 0.499805L910 0.299805H1356.1V1.7998Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M-980.1 55.0998L-833.7 55.3998L-765.5 55.2998L-562.4 54.6998C-546.4 54.6998 -477.7 54.8998 -471.3 54.6998C-464.9 54.4998 -330.5 54.6998 -313.1 54.6998C-295.7 54.6998 3.29998 54.1998 14.2 54.4998C25.1 54.6998 116.2 54.4998 129 54.4998C141.7 54.4998 322.5 54.0998 347.2 54.2998C372 54.4998 546.6 54.2998 546.6 54.2998H870.1L941 53.8998C1060.3 53.4998 1125.7 53.2998 1137.2 53.3998C1154.4 53.5998 1284.3 53.3998 1295.5 53.3998L1356 53.5998V55.9998L1172.1 56.2998H870.1L744.9 55.9998L465.2 56.2998C458.3 56.2998 194 56.7998 187.8 56.5998C181.7 56.2998 -22 56.5998 -22 56.5998L-298.3 56.6998L-533.9 56.8998H-980L-980.1 55.0998ZM-979.1 21.6998L-832.8 21.8998L-764.6 21.7998L-561.6 21.2998H-312.3C-294.9 21.2998 3.99996 20.8998 14.8 21.0998C25.6 21.2998 116.8 21.0998 129.5 21.0998C142.2 21.0998 322.9 20.7998 347.6 20.8998C372.4 21.0998 546.9 20.8998 546.9 20.8998H870.3L941.2 20.5998C1060.5 20.2998 1125.8 20.0998 1137.3 20.1998H1295.5L1356 20.3998V22.1998L1172.2 22.4998H870.3L745.2 22.1998L465.6 22.4998C458.7 22.4998 194.5 22.8998 188.4 22.6998C182.3 22.4998 -21.3 22.6998 -21.3 22.6998L-297.7 22.8998L-533.2 23.0998H-979.2L-979.1 21.6998ZM-978.8 285.8L-832.5 286.5L-764.3 286.6H-561.2C-545.3 286.6 -476.6 287 -470.1 286.9C-463.6 286.8 -329.4 287.3 -312 287.4C-294.6 287.5 4.19995 287.8 15.0999 288.1C25.8999 288.4 117.1 288.4 129.8 288.4C268.934 288.407 408.068 288.74 547.2 289.4L870.5 290.3L941.4 290.1C1060.7 290 1126.1 290.1 1137.5 290.2C1154.6 290.4 1284.5 290.6 1295.7 290.7L1356.3 291.1V293.3L1172 293.2L870.2 292.3L745.2 291.6L465.7 291.1C458.8 291.1 194.6 290.8 188.5 290.5C182.4 290.2 -21.2 289.9 -21.2 289.9L-297.6 289.3L-533 288.8L-826.7 287.9L-978.8 287.5V285.8V285.8ZM-979.9 96.9998C-979.4 101.3 -448.5 96.9998 -360.4 96.9998L94.1999 97.3998C142.3 97.3998 262.1 96.9998 262.1 96.9998C262.1 96.9998 638.5 96.3998 680.3 96.6998C722.2 96.9998 1044.8 96.9998 1063 96.6998C1160.67 96.309 1258.33 96.409 1356 96.9998V94.3998C1285.9 94.1998 1226.3 94.2998 1186.8 94.5998C1127.6 94.8998 795.6 95.1998 770.2 95.1998L453.4 94.8998L365.6 95.1998L168.1 94.8998H31.2L-259.5 95.0998C-298 95.0998 -386.3 95.0998 -447.1 94.7998C-507.9 94.4998 -635 94.4998 -675.9 94.4998H-979.9V96.9998ZM1355.9 176.8L1223.1 176.2H1161.2L976.8 176.3C962.3 176.3 899.9 175.9 894.1 176.1C888.3 176.3 766.3 175.7 750.5 175.7C734.7 175.7 463.3 175.4 453.5 175.1C443.7 174.8 360.9 174.8 349.4 174.8C337.9 174.8 173.8 174.7 151.3 174.5C128.9 174.2 -29.7 174 -29.7 174L-323.3 173.2L-387.7 173.4C-494.967 173.66 -602.234 173.527 -709.5 173C-716.3 173 -950 172.9 -979.8 172.6L-979.5 170.3L-597.1 170.4L-323 171.2L-209.4 171.8L44.5 172.2C50.8 172.2 290.7 172.4 296.3 172.7C301.8 173 486.7 173.2 486.7 173.2C641.633 173.644 796.566 173.944 951.5 174.1L1218.3 174.8L1356.5 175.2C1355.9 176.3 1355.9 176.8 1355.9 176.8V176.8Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M600.5 1.7L630.3 36.3C636.2 43 659.2 70.2 660.8 72L675.7 89.3L702.3 119.8L725.7 146.7C727.9 149.2 764.4 191.7 768.8 196.6C794.674 225.995 820.275 255.63 845.6 285.5L884.7 330.9L920.7 372L970.5 429.5L1002.6 466.8L1026.1 493.9C1026.5 494.4 1028.2 494.7 1031.1 494.8L985.9 443C978.584 434.773 971.35 426.472 964.2 418.1L932.1 380.8L902.8 347.5C900.2 344.6 857.7 295.5 855.8 293.7C853.9 291.9 819 251.1 816.5 248.3C814.1 245.5 784 211.4 782.6 209.6C752.5 174.435 722.133 139.501 691.5 104.8L643.8 49.4L617.6 19L601.7 0.8L600.5 1.7V1.7ZM793.9 2.1L827.4 28.9C834 34.1 859.9 55.3 861.7 56.7L878.4 70.1C897.109 84.8647 915.842 99.5981 934.6 114.3C937.1 116.2 978.1 149.3 983.1 152.9C988 156.6 1027.4 187.8 1028.6 188.8L1069.4 221.8L1113.3 257L1153.7 288.7L1209.7 333.3L1245.8 362.2L1356 449.6V444.8L1226.8 342.4C1214.8 333.1 1206.7 326.7 1202.4 323.2C1190.41 313.482 1178.37 303.815 1166.3 294.2L1133.4 268.5C1130.5 266.2 1082.7 228.3 1080.7 227C1078.7 225.7 1039.3 194 1036.6 191.9C1033.9 189.8 1000.1 163.5 998.5 162.1C964.722 134.663 930.619 107.628 896.2 81L842.5 38L813 14.5L795.2 0.5L793.9 2.1ZM-328.1 3.1L-362 29.4L-396.7 56.6L-413.6 69.8L-443.8 93L-470.4 113.4L-519.3 151.4C-524.3 155.1 -564 185.7 -565.3 186.7C-566.5 187.7 -603.8 217 -606.6 219L-651 253.6L-691.7 284.8L-748.2 328.6L-784.7 357L-811.3 377.6C-811.8 378 -956.7 496.3 -959.6 495.8L-765.1 338L-740.5 319.1C-736.2 315.6 -724 306.2 -704 290.7L-670.9 265.4C-668 263.2 -619.7 225.8 -617.7 224.5C-615.7 223.2 -575.9 192.1 -573.1 190L-534.7 160.7C-500.415 133.909 -465.981 107.308 -431.4 80.9L-377.2 38.7C-361.321 26.3298 -345.388 14.0297 -329.4 1.8L-328.1 3.1ZM395.7 1.7L407.6 32.6L413.5 47L431.2 90C432.5 93.4 438 107.9 438.8 109.3C443.333 120.414 447.733 131.581 452 142.8C453.5 146.5 479 209.8 479.6 212C480.2 214.3 488.1 233.6 489.2 236.3C490.3 239 505.9 277.3 507.7 282.5C522.218 319.373 536.752 356.239 551.3 393.1L557.7 408.1C568.2 433.4 573.9 447.2 574.7 449.6C575.9 453.2 587 480.7 587.9 483.1L592.7 495.9L589.8 495.6L574 456.7L548.8 392.8L538.8 366.4L515 307.2C514.4 305.7 491.7 249.8 491.5 248.5C491.3 247.2 474 204.1 474 204.1L450.6 145.6L430.7 95.8L406.2 33.7L393.5 1.5L395.7 1.7V1.7ZM200.7 495.8L200.6 369.1L201 271.6C201 261.2 200.6 235.6 200.6 235.6C200.6 235.6 200 154.9 200.3 145.9C200.6 136.9 200.6 67.8 200.3 63.9C199.909 42.9672 200.009 22.0281 200.6 1.1L197.9 2.1C197.7 17.1 197.7 28.9 197.9 37.3C198.3 50 198.5 121.2 198.5 126.6L198.2 194.5L198.5 213.3L198.2 255.6V284.9L198.5 347.2C198.5 355.4 198.5 374.4 198.2 387.4C197.9 400.4 197.9 427.7 197.9 436.4V473.8L198 495.5C199 495.8 200.1 495.8 200.7 495.8V495.8ZM-222.1 495.8C-221 495.8 -166.1 382.2 -157.1 363.6L-110.3 268.2C-105.4 258.1 -93.5 232.6 -93.5 232.6C-93.5 232.6 -55.6 152.9 -51 144.3C-46.5 135.7 -13.5001 67.8 -11.9001 63.7C-2.34652 42.9849 7.7233 22.5119 18.3 2.3L15.7 1.4C8.29998 16 2.69999 27.5 -1.10001 36C-6.90001 48.7 -40.6 118.8 -43.2 124.2L-75.8 190.6L-84.5 209.3L-104.9 250.6L-118.9 279.4L-148.3 340.9C-154.636 354.031 -161.103 367.098 -167.7 380.1C-175.681 396.044 -183.548 412.044 -191.3 428.1L-209.1 464.8L-224.8 495.8H-222.1Z"
                  fill="black"
                />
              </g>
            </svg>
            <img
              src="./assets/images/investing-graph-3-1.png"
              className="w-[656px] h-[386.5px] absolute left-[1201px] top-[-119px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start absolute left-[103px] top-[269px] gap-5">
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[170px] h-[50px] relative p-[25px] rounded-[7px] bg-white border border-black">
              <svg
                width={20}
                height={24}
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.167 4.23985C13.998 3.25359 14.4149 2.18805 14.4149 1.04684V1.04683C14.4149 0.895463 14.4079 0.742891 14.391 0.590332C13.8121 0.620362 13.1965 0.795753 12.5458 1.1129C11.8936 1.43485 11.3559 1.83843 10.933 2.32382C10.0861 3.28247 9.60918 4.45493 9.60918 5.55049C9.60918 5.70191 9.6189 5.846 9.63566 5.98291C10.951 6.08982 12.1641 5.41231 13.167 4.23985ZM17.5912 20.579C18.0644 19.9043 18.4729 19.1705 18.818 18.3732C18.9603 18.0352 19.0941 17.6831 19.2208 17.3154C18.6363 17.0703 18.1109 16.7253 17.6405 16.2788C16.6024 15.3167 16.0743 14.1051 16.0588 12.6491C16.0419 10.7798 16.8911 9.32269 18.6081 8.28235C17.6489 6.91889 16.2066 6.16208 14.2867 6.00714C13.5782 5.94699 12.7134 6.09968 11.6887 6.46843C10.6051 6.86606 9.96595 7.06551 9.77735 7.06551C9.52509 7.06551 8.9497 6.89494 8.05359 6.55858C7.15494 6.22335 6.4318 6.05278 5.88036 6.05278C4.87255 6.06954 3.93672 6.33153 3.07061 6.84564C2.2045 7.35976 1.51249 8.06008 0.992309 8.94788C0.330442 10.0532 0 11.3721 0 12.9014C0 14.2364 0.245085 15.6153 0.733989 17.0394C1.1905 18.3578 1.77321 19.5142 2.48198 20.5114C3.14259 21.4453 3.69403 22.1045 4.1349 22.489C4.82565 23.1313 5.51766 23.4369 6.21193 23.4074C6.66844 23.3919 7.26551 23.2355 8.00669 22.9355C8.74673 22.6369 9.4386 22.489 10.0837 22.489C10.6988 22.489 11.3715 22.6369 12.1035 22.9355C12.8331 23.2355 13.4599 23.3834 13.9797 23.3834C14.7037 23.3665 15.3798 23.0693 16.0108 22.489C16.4179 22.1354 16.9461 21.4988 17.5912 20.579Z"
                  fill="#00D54B"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-black text-center uppercase text-black">
                APP STORE
              </p>
            </div>
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[170px] h-[50px] relative p-3 rounded-[7px] bg-white border border-black">
              <svg
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.504946 21.3147L9.8176 12.0285L13.1002 15.3013L2.0295 21.4393C1.60857 21.6728 1.09301 21.6693 0.674726 21.4296L0.504946 21.3147ZM8.87849 11.092L0 19.9449V2.2392L8.87849 11.092ZM14.4267 7.43364L18.7642 9.83807C19.1904 10.0751 19.4548 10.519 19.4548 11.0001C19.4548 11.4811 19.1904 11.925 18.7642 12.162L14.3082 14.6319L10.7576 11.092L14.4267 7.43364ZM0.406786 0.771236C0.486376 0.6943 0.575686 0.627093 0.674726 0.570497C1.09301 0.330849 1.60857 0.327311 2.0295 0.56077L13.2187 6.76421L9.8176 10.1555L0.406786 0.771236Z"
                  fill="#00D54B"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-black text-center uppercase text-black">
                GOOGLE PLAY
              </p>
            </div>
          </div>
          <p className="w-[344px] absolute left-4 top-[479px] text-[10px] font-bold text-left text-[#606060]">
            <span className="w-[344px] text-[10px] font-bold text-left text-[#606060]">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            </span>
            <br />
            <span className="w-[344px] text-[10px] font-bold text-left text-[#606060]">
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </span>
          </p>
          <div className="flex justify-start items-center absolute left-[122px] top-[435px] gap-[30px]">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_9408_104)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.14899 0L0.536987 4.119V20.955H6.26799V24H9.49199L12.537 20.955H17.194L23.463 14.686V0H2.14899V0ZM21.313 13.612L17.731 17.194H12L8.95499 20.239V17.194H4.11899V2.149H21.313V13.612V13.612ZM17.731 6.269V12.531H15.582V6.269H17.731V6.269ZM12 6.269V12.531H9.85099V6.269H12V6.269Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_9408_104">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width={21}
              height={18}
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[21px] h-[17px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_9408_106)">
                <path
                  d="M6.55646 17.4431C14.4241 17.4431 18.7262 10.9252 18.7262 5.27335C18.7262 5.08822 18.7225 4.90392 18.7142 4.72046C19.5493 4.1167 20.2753 3.36326 20.8477 2.50557C20.0814 2.84623 19.2566 3.07556 18.3914 3.17896C19.2746 2.64942 19.9525 1.81175 20.2723 0.813136C19.4459 1.30306 18.5307 1.65915 17.5563 1.85136C16.7757 1.01995 15.6645 0.5 14.4341 0.5C12.072 0.5 10.1565 2.41551 10.1565 4.77675C10.1565 5.1124 10.194 5.43888 10.2674 5.75201C6.71242 5.57314 3.56021 3.87111 1.45081 1.28305C1.08347 1.91516 0.871657 2.64942 0.871657 3.43289C0.871657 4.91685 1.62677 6.22693 2.77507 6.9933C2.07333 6.97162 1.41412 6.77898 0.837882 6.45834C0.837253 6.47629 0.837253 6.49378 0.837253 6.51296C0.837253 8.58442 2.31162 10.314 4.26883 10.7059C3.90941 10.8039 3.53122 10.8564 3.14095 10.8564C2.86576 10.8564 2.59765 10.8293 2.33705 10.7793C2.8816 12.4788 4.46063 13.7155 6.33277 13.7501C4.86883 14.8976 3.02462 15.581 1.0203 15.581C0.675473 15.581 0.334818 15.5614 0 15.5218C1.89299 16.7351 4.14082 17.4431 6.55668 17.4431"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_9408_106">
                  <rect
                    width={21}
                    height={17}
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width={21}
              height={22}
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[21px] h-[21px] relative"
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.4273 1.06331C7.49265 1.01579 7.83324 1.00391 10.5422 1.00391C13.2511 1.00391 13.5917 1.01579 14.661 1.05935C15.7263 1.10688 16.4511 1.27717 17.0847 1.52272C17.7382 1.78014 18.2966 2.12074 18.8511 2.67519C19.4055 3.22965 19.7501 3.7841 20.0035 4.44153C20.2491 5.07915 20.4194 5.80391 20.4669 6.86529C20.5144 7.93064 20.5263 8.26727 20.5263 10.9801C20.5263 13.693 20.5144 14.0296 20.4669 15.095C20.4194 16.1603 20.2491 16.8851 20.0035 17.5188C19.7461 18.1722 19.4055 18.7306 18.8511 19.2851C18.2966 19.8396 17.7422 20.1841 17.0847 20.4376C16.4471 20.6831 15.7224 20.8534 14.661 20.9009C13.5956 20.9485 13.259 20.9603 10.5461 20.9603C7.83324 20.9603 7.49661 20.9485 6.43126 20.9009C5.36592 20.8534 4.64117 20.6831 4.0075 20.4376C3.35404 20.1801 2.79562 19.8396 2.24117 19.2851C1.68671 18.7306 1.34216 18.1762 1.08869 17.5188C0.843146 16.8811 0.672849 16.1564 0.625324 15.095C0.577799 14.0296 0.565918 13.6891 0.565918 10.9801C0.565918 8.27123 0.577799 7.93064 0.625324 6.86925C0.672849 5.80391 0.843146 5.07915 1.08869 4.44549C1.34612 3.79203 1.68671 3.23361 2.24117 2.67915C2.79562 2.1247 3.35008 1.78014 4.0075 1.52668C4.64117 1.28113 5.36592 1.11084 6.4273 1.06331ZM14.5738 2.86133C13.5204 2.81381 13.2075 2.80193 10.5422 2.80193C7.87681 2.80193 7.56394 2.80985 6.51047 2.86133C5.53621 2.9049 5.00948 3.07123 4.65701 3.20589C4.18968 3.3841 3.85701 3.60193 3.50849 3.95044C3.15998 4.29896 2.94612 4.63163 2.76394 5.09896C2.62532 5.45143 2.46295 5.97816 2.41938 6.95242C2.37186 8.00589 2.35998 8.31876 2.35998 10.9841C2.35998 13.6495 2.37186 13.9623 2.41938 15.0158C2.46295 15.99 2.62928 16.5168 2.76394 16.8693C2.94216 17.3366 3.15998 17.6693 3.50849 18.0178C3.85701 18.3663 4.18968 18.5801 4.65701 18.7623C5.00948 18.9009 5.53621 19.0633 6.51047 19.1069C7.56394 19.1544 7.87681 19.1663 10.5422 19.1663C13.2075 19.1663 13.5204 19.1544 14.5738 19.1069C15.5481 19.0633 16.0748 18.897 16.4273 18.7623C16.8946 18.5841 17.2273 18.3663 17.5758 18.0178C17.9243 17.6693 18.1382 17.3366 18.3204 16.8693C18.459 16.5168 18.6214 15.99 18.6649 15.0158C18.7125 13.9623 18.7243 13.6495 18.7243 10.9841C18.7243 8.31876 18.7125 8.00589 18.6649 6.95242C18.6214 5.97816 18.455 5.45143 18.3204 5.09896C18.1422 4.63163 17.9243 4.29896 17.5758 3.95044C17.2273 3.60193 16.8946 3.38806 16.4273 3.20589C16.0748 3.06727 15.5481 2.9049 14.5738 2.86133Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.41736 10.9802C5.41736 8.14854 7.71439 5.85547 10.5421 5.85547C13.3699 5.85547 15.6669 8.1525 15.6669 10.9802C15.6669 13.8079 13.3699 16.105 10.5421 16.105C7.71439 16.105 5.41736 13.8119 5.41736 10.9802ZM7.21538 10.9802C7.21538 12.8178 8.70449 14.307 10.5421 14.307C12.3798 14.307 13.8689 12.8178 13.8689 10.9802C13.8689 9.1426 12.3798 7.65349 10.5421 7.65349C8.70449 7.65349 7.21538 9.1426 7.21538 10.9802Z"
                fill="black"
              />
              <path
                d="M15.8689 6.8496C16.5294 6.8496 17.0649 6.31411 17.0649 5.65356C17.0649 4.993 16.5294 4.45752 15.8689 4.45752C15.2083 4.45752 14.6729 4.993 14.6729 5.65356C14.6729 6.31411 15.2083 6.8496 15.8689 6.8496Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <p className="absolute left-[98px] top-[15px] text-[40px] font-bold text-left text-white">
          Investing
        </p>
        <div className="w-[344px] h-[136px] absolute left-4 top-[86px]">
          <p className="w-[336px] absolute left-0 top-0 text-[22px] font-bold text-left text-black">
            Stocks
          </p>
          <p className="w-[344px] absolute left-0 top-12 text-base text-left text-black">
            Whether you’re an expert or just getting started, Cash App is the
            fastest and most accessible way to invest in stocks. Start now with
            as little as $1.
          </p>
        </div>
        <img
          src="./assets/images/investing-stocks.png"
          className="w-40 h-[344px] absolute left-[107px] top-[244px] object-cover"
        />
        <div className="w-[344px] h-[136px] absolute left-4 top-[641px]">
          <p className="absolute left-0 top-0 text-[22px] font-bold text-left text-black">
            Bitcoin
          </p>
          <p className="w-[344px] h-[88px] absolute left-0 top-12 text-base text-left text-black">
            Cash App is the fastest way to convert dollars to bitcoin. From your
            home screen, six taps are all it takes to stack sats, buy an entire
            bitcoin, or just see what it’s all about.
          </p>
        </div>
        <img
          src="./assets/images/investing-bitcoin.png"
          className="w-40 h-[346.89px] absolute left-[107px] top-[801px] object-cover"
        />
      </div>
    </div>
  );
};

export default Auto;
