import logo from "../assets/logo.svg";
import downArrow from "../assets/arrow-down.svg";

const Header = () => (
  <header className="absolute top-10 z-10 w-[calc(100%-15rem)] ">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="Logo" />
        <div className="w-[4.188rem] font-bold text-[#1b1c57]">Hounter</div>
      </div>
      <div className="flex items-center gap-x-14">
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <a
                href="/about"
                className="block rounded-[32px] border border-white/30 bg-white/10 px-4 text-sm font-semibold leading-[2rem] text-[#f0f3fd]"
              >
                <div className="w-16">About Us</div>
              </a>
            </li>
            <li>
              <a
                href="/article"
                className="block rounded-[32px] border border-white/30 bg-white/10 px-4 text-sm font-semibold leading-[2rem] text-[#f0f3fd]"
              >
                <div className="w-[2.8755rem]">Article</div>
              </a>
            </li>
            <li>
              <button className="block rounded-[32px] border border-white/30 bg-white/10 px-4 text-sm font-semibold leading-[2rem] text-[#f0f3fd]">
                <span className="mr-2.5 inline-block w-[3.875rem]">
                  Property
                </span>
                <img src={downArrow} alt="Show more" className="inline-block" />
              </button>
            </li>
          </ul>
        </nav>
        <a href="/sign-up" className="block">
          <span className="block rounded-[32px] border border-[#d1fae5] bg-[#d1fae5] px-6 text-sm font-semibold leading-[2.875rem] text-[#047857]">
            Sign Up!
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
