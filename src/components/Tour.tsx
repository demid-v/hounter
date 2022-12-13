import dash from "../assets/dash.svg";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import carGarage from "../assets/car-garage.svg";
import stairsWithHandrail from "../assets/stairs-with-handrail.svg";
import house9 from "../assets/house-9.png";
import couch from "../assets/couch.jpg";
import vase from "../assets/vase.jpg";
import furniture from "../assets/furniture.jpg";
import line from "../assets/line.svg";
import avatar3 from "../assets/avatar-3.jpg";
import phone from "../assets/phone.png";

const Tour = () => (
  <section className="mb-[7.5rem] flex justify-between">
    <div className="mr-[9.25rem] mt-7 min-w-[32.75rem]">
      <h6 className="mb-3 text-sm leading-[1.125rem]">
        <img src={dash} alt="Dash" className="mr-2 inline-block" />
        <span className="text-[#f59e0b]">Ready to Sell!</span>
      </h6>
      <div className="mb-4 pl-10">
        <div className="mb-4">
          <h2 className="mb-4 text-[2rem] font-semibold leading-10 text-[#1b1c57]">
            Let's tour and see our house!
          </h2>
          <p className="leading-7 text-[#626687] opacity-75">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 font-semibold leading-7 text-[#1b1c57] opacity-75">
            House Detail
          </h4>
          <div className="grid max-w-[27.5rem] grid-cols-2 gap-y-4 gap-x-[3.313rem]">
            <div className="flex items-center">
              <img src={bed} alt="Bed" className="mr-4 h-8 w-8" />
              <div className="font-medium leading-5 text-[#3c4563]">
                4 Bedrooms
              </div>
            </div>
            <div className="flex items-center">
              <img src={bath} alt="Bath" className="mr-4 h-8 w-8" />
              <div className="font-medium leading-5 text-[#3c4563]">
                2 Bathrooms
              </div>
            </div>
            <div className="flex items-center">
              <img src={carGarage} alt="Car garage" className="mr-4 h-8 w-8" />
              <div className="font-medium leading-5 text-[#3c4563]">
                1 Carport
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={stairsWithHandrail}
                alt="Stairs with handrail"
                className="mr-4 h-8 w-8"
              />
              <div className="font-medium leading-5 text-[#3c4563]">
                2 Floors
              </div>
            </div>
          </div>
        </div>
        <img src={line} alt="Line" className="mb-8" />

        <div className="flex gap-x-[3.563rem]">
          <dl className="flex items-center gap-x-6">
            <div>
              <dt className="sr-only">Owner's avatar</dt>
              <dd>
                <img src={avatar3} alt="Woman" className="w-14 rounded-full" />
              </dd>
            </div>
            <div>
              <dt className="sr-only">Owner's info</dt>
              <dd>
                <dl>
                  <dt className="sr-only">Owner's name</dt>
                  <dd className="mb-1 text-lg font-medium leading-6 text-[#0e1735]">
                    Dianne Russell
                  </dd>
                  <dt className="sr-only">Owner's title</dt>
                  <dd className="font-medium text-[#888b97]">
                    Manager Director
                  </dd>
                </dl>
              </dd>
            </div>
          </dl>
          <button className="flex items-center gap-4 rounded-[2rem] bg-[#10b981] py-3 px-4">
            <img src={phone} alt="Phone" />
            <div className="w-[5.688rem] text-sm font-semibold leading-[1.375rem] text-white">
              Contact Now
            </div>
          </button>
        </div>
      </div>
    </div>

    <div className="relative pb-[2.688rem] pl-10">
      <img
        src={house9}
        alt="House"
        width={1050}
        height={700}
        className="aspect-[488/416] object-cover"
      />
      <div className="absolute bottom-0 left-0 mr-5 flex items-end">
        <img
          src={couch}
          alt="Couch"
          width={592}
          height={395}
          className="mr-3 min-w-[18.5rem] object-cover"
        />
        <img
          src={vase}
          alt="Vase"
          width={320}
          height={480}
          className="mr-2 aspect-[96/80] min-w-[6rem] object-cover"
        />
        <img
          src={furniture}
          alt="Furniture"
          width={480}
          height={320}
          className="aspect-[96/80] min-w-[6rem] object-cover"
        />
      </div>
    </div>
  </section>
);

export default Tour;
