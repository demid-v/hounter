import cloud1 from "../assets/cloud-1.png";
import location from "../assets/location.svg";
import rightArrow from "../assets/arrow-right-1.svg";
import traveloka from "../assets/traveloka.png";
import tiketDotCom from "../assets/tiket-dot-com.png";
import airbnb from "../assets/airbnb.png";
import tripadvisor from "../assets/tripadvisor.png";
import house1 from "../assets/house-1.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import house2 from "../assets/house-2.png";
import avatar4 from "../assets/avatar-4.jpg";

const Hero = () => (
  <section className="mb-[7.5rem] flex w-[calc(100%+7.5rem)] items-start gap-x-[6.5rem]">
    <img
      src={cloud1}
      alt="Blue cloud"
      className="absolute top-0 left-0 -z-10"
    />
    <div className="flex-1 pt-[11.375rem]">
      <h1
        className="mb-6 text-[2.5rem] font-semibold leading-[3.125rem] text-[#1b1c57]"
        style={{
          textShadow: `1px 0 #1b1c57, -1px 0 #1b1c57, 0 1px #1b1c57, 0 -1px #1b1c57, 1px 1px #1b1c57, 
            -1px -1px #1b1c57, 1px -1px #1b1c57, -1px 1px #1b1c57`,
        }}
      >
        Find The Place To <br />
        Live <span className="text-white">Your Dreams</span>
        <br />
        Easily Here
      </h1>
      <p className="mb-8 leading-7 text-[#626687] opacity-75">
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
      <div className="mb-8 h-14 w-full rounded-[2rem] border border-[#e0e3eb] py-1 pr-1 pl-6">
        <div className="flex h-full items-center gap-x-4 text-sm">
          <img src={location} alt="Location" />
          <input
            type="search"
            name="location"
            placeholder="Search for the location you want!"
            className="h-full flex-auto text-sm font-medium text-[#888b97]"
          />
          <button className="flex h-full items-center rounded-[2rem] bg-[#10b981] px-4 text-white">
            <div className="mr-1 w-[3.0625rem] font-semibold">Search</div>
            <img src={rightArrow} alt="Search" />
          </button>
        </div>
      </div>
      <p className="leading-8 text-[#888b97]">Our Partnership</p>
      <div className="mr-[4.3125rem] flex h-16 items-center gap-x-8">
        <div className="flex h-full w-1/4 items-center">
          <img
            src={traveloka}
            alt="Traveloka logo"
            className="max-h-full flex-auto object-contain"
          />
        </div>
        <div className="flex h-full w-1/4 items-center">
          <img
            src={tiketDotCom}
            alt="tiket.com logo"
            className="max-h-full flex-auto object-contain"
          />
        </div>
        <div className="flex h-full w-1/4 items-center">
          <img
            src={airbnb}
            alt="Airbnb logo"
            className="max-h-full flex-auto object-contain"
          />
        </div>
        <div className="flex h-full w-1/4 items-center">
          <img
            src={tripadvisor}
            alt="Tripadvisor logo"
            className="max-h-full flex-auto object-contain"
          />
        </div>
      </div>
    </div>

    <div className="relative aspect-square w-[calc(50%+3.75rem)] overflow-x-hidden">
      <img src={house1} alt="House" className="w-full" />
      <div className="absolute bottom-12 left-12 flex w-full items-start gap-x-4">
        <div className="flex items-center gap-x-4 rounded-[2rem] bg-white p-6">
          <div className="flex">
            <img
              src={avatar1}
              alt="Woman"
              width="56"
              height="56"
              className="max-w-[3.5rem] rounded-full border-[0.188rem] border-white"
            />
            <img
              src={avatar2}
              alt="Man"
              width="56"
              height="56"
              className="-ml-[28px] max-w-[3.5rem] rounded-full border-[0.188rem] border-white"
            />
            <img
              src={avatar3}
              alt="Woman"
              width="56"
              height="56"
              className="-ml-[28px] max-w-[3.5rem] rounded-full border-[0.188rem] border-white"
            />
          </div>
          <div className="w-[9.75rem]">
            <h3 className="mb-[0.125rem] font-semibold text-[#1b1c57]">
              1K+ People
            </h3>
            <p className="text-xs leading-5 text-[#68799f]">
              Successfully Getting Home
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 rounded-[2rem] bg-white p-6">
          <img
            src={house2}
            alt="House"
            width="56"
            height="56"
            className="h-14 w-14 max-w-[3.5rem] rounded-3xl object-cover"
          />
          <div className="w-[5.125rem]">
            <h3 className="mb-[0.125rem] font-semibold text-[#1b1c57]">
              56 Houses
            </h3>
            <p className="text-xs leading-5 text-[#68799f]">Sold Monthly</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 rounded-[2rem] bg-white p-6">
          <img
            src={avatar4}
            alt="House"
            width="56"
            height="56"
            className="h-14 w-14 max-w-[3.5rem] rounded-full border-[0.188rem] border-white object-cover"
          />
          <div className="w-[11.438rem]">
            <h3 className="mb-[0.125rem] font-semibold text-[#1b1c57]">4K+</h3>
            <p className="text-xs leading-5 text-[#68799f]">
              People Looking for New Homes
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
