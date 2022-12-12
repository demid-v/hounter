import dash from "../assets/dash.svg";
import house3 from "../assets/house-3.svg";
import villa from "../assets/villa.svg";
import apartment from "../assets/apartment.svg";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right-2.svg";
import house4 from "../assets/house-4.jpg";
import fire from "../assets/fire.svg";
import avatar3 from "../assets/avatar-3.jpg";

const Recommendations = () => (
  <section>
    <div className="mb-10 flex items-end justify-between">
      <div>
        <h6 className="mb-3 text-sm leading-[1.125rem]">
          <img src={dash} alt="Dash" className="mr-2 inline-block" />
          <span className="text-[#f59e0b]">Our Recommendation</span>
        </h6>
        <h2 className="ml-10 text-[2rem] font-semibold leading-10 text-[#1b1c57]">
          Featured House
        </h2>
      </div>
      <div className="flex gap-x-8">
        <button className="flex h-min gap-x-2 rounded-[2rem] bg-[#d1fae5] px-6 py-3">
          <img src={house3} alt="House" />
          <div className="w-[3.438rem] text-lg font-medium text-[#10b981]">
            House
          </div>
        </button>
        <button className="flex h-min gap-x-2 rounded-[2rem] border border-[#e0e3eb] bg-white px-6 py-3">
          <img src={villa} alt="Villa" />
          <span className="text-lg font-medium text-[#888b97]">Villa</span>
        </button>
        <button className="flex h-min gap-x-2 rounded-[2rem] border border-[#e0e3eb] bg-white px-6 py-3">
          <img src={apartment} alt="Apartment" />
          <span className="text-lg font-medium text-[#888b97]">Apartment</span>
        </button>
      </div>
      <div className="flex gap-x-4">
        <img src={leftArrow} alt="Scroll left" />
        <img src={rightArrow} alt="Scroll right" />
      </div>
    </div>
    <div className="ml-10 flex">
      <div>
        <div className="relative mb-6">
          <picture>
            <img
              src={house4}
              alt="House"
              className="h-[23.875rem] w-[21.25rem] rounded-3xl object-cover"
            />
          </picture>
          <div className="absolute bottom-4 left-4 flex w-fit rounded-[2rem] bg-[#fee2e2] py-2 px-4">
            <img src={fire} alt="Fire" />
            <div className="text-sm font-medium leading-[1.125rem] text-[#ef4444]">
              Popular
            </div>
          </div>
        </div>
        <dl>
          <dt className="sr-only">Property's name</dt>
          <dd className="mb-2 text-2xl font-medium text-[#0e1735]">
            Roselands House
          </dd>
          <dt className="sr-only">Cost</dt>
          <dd className="mb-6 text-xl font-medium leading-8 text-[#3c4563]">
            $ 35.000.000
          </dd>
          <dt className="sr-only">Landlord</dt>
          <dd>
            <dl className="flex gap-x-4">
              <div>
                <dt className="sr-only">Landlord's avatar</dt>
                <dd>
                  <img
                    src={avatar3}
                    alt="Woman"
                    className="w-[3.5rem] w-10 rounded-full"
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Landlord's info</dt>
                <dd>
                  <dl>
                    <dt className="sr-only">Landlord's name</dt>
                    <dd className="mb-1 text-lg font-medium leading-6 text-[#0e1735]">
                      Dianne Russell
                    </dd>
                    <dt className="sr-only">Property's location</dt>
                    <dd className="text-sm font-medium leading-[1.375rem] text-[#888b97]">
                      Manchester, Kentucky
                    </dd>
                  </dl>
                </dd>
              </div>
            </dl>
          </dd>
        </dl>
      </div>
    </div>
  </section>
);

export default Recommendations;
