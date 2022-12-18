import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import cloud5 from "../assets/cloud-5.png";
import cloud6 from "../assets/cloud-6.png";

const Footer = () => (
  <footer className="mb-[7.5rem]">
    <div className="relative flex w-[calc(100%+7.5rem)] justify-between pr-[7.5rem]">
      <div className="max-w-xs">
        <div className="mb-4 flex items-center gap-x-3">
          <img src={logo} alt="Logo" />
          <div className="w-[4.188rem] font-bold text-[#1b1c57]">Hounter</div>
        </div>
        <p className="mb-6 text-sm leading-6 text-[#626687]">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <div className="flex gap-x-6">
          <img src={facebook} alt="Facebook logo" />
          <img src={twitter} alt="Twitter logo" />
          <img src={instagram} alt="Instagram logo" />
        </div>
      </div>
      <div className="flex gap-x-[5.5rem]">
        <div>
          <h3 className="mb-6 text-lg leading-[1.438rem] text-[#0e1735]">
            Properties
          </h3>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            Houses
          </p>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            Apartments
          </p>
          <p className="text-sm leading-[1.125rem] text-[#888b97]">Villas</p>
        </div>
        <div>
          <h3 className="mb-6 text-lg leading-[1.438rem] text-[#0e1735]">
            Articles
          </h3>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            New Articles
          </p>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            Popular Articles
          </p>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            Most Read
          </p>
          <p className="text-sm leading-[1.125rem] text-[#888b97]">
            Tips & Tricks
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-lg leading-[1.438rem] text-[#0e1735]">
            Contacts
          </h3>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            2464 Royal Ln. Mesa, New Jersey 45463
          </p>
          <p className="mb-[1.125rem] text-sm leading-[1.125rem] text-[#888b97]">
            (671) 555-0110
          </p>
          <p className="text-sm leading-[1.125rem] text-[#888b97]">
            info@hounter.com
          </p>
        </div>
      </div>

      <img
        src={cloud5}
        alt="Green cloud"
        className="absolute -bottom-60 -right-12 -z-10"
      />
      <img
        src={cloud6}
        alt="Blue cloud"
        className="absolute -bottom-60 -right-72 -z-20"
      />
    </div>
  </footer>
);

export default Footer;
