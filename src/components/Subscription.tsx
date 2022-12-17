import background from "../assets/subscription-background.png";
import envelope from "../assets/envelope.svg";
import chair1 from "../assets/chair-1.jpg";
import avatar6 from "../assets/avatar-6.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import house16 from "../assets/house-16.jpg";
import house17 from "../assets/house-17.jpg";
import avatar12 from "../assets/avatar-12.jpg";
import avatar9 from "../assets/avatar-9.jpg";
import chair2 from "../assets/chair-2.jpg";

const Subscription = () => (
  <section className="mb-[7.5rem]">
    <div className="relative aspect-[1200/312]">
      <img
        src={background}
        alt="Blue background"
        className="absolute top-0 -z-10 w-full"
      />
      <img
        src={chair1}
        alt="Chair"
        className="absolute top-[2.375rem] left-[2.75rem] box-content h-[5.063rem] w-[5.063rem] rounded-3xl border-2 border-white object-cover"
      />
      <img
        src={avatar6}
        alt="Man"
        className="absolute top-[4.438rem] left-[12.75rem] box-content w-9 rounded-full border-2 border-white"
      />
      <img
        src={avatar3}
        alt="Woman"
        className="absolute bottom-[6.438rem] left-[4.188rem] box-content w-9 rounded-full border-2 border-white"
      />
      <img
        src={house16}
        alt="House"
        className="absolute bottom-[5rem] left-[12.188rem] box-content h-[3.375rem] w-[3.375rem] rounded-3xl border-2 border-white object-cover"
      />
      <img
        src={house17}
        alt="House"
        className="absolute top-[2.75rem] right-[12.5rem] box-content h-[4.375rem] w-[4.375rem] rounded-3xl border-2 border-white object-cover"
      />
      <img
        src={avatar12}
        alt="Woman"
        className="absolute top-[6.688rem] right-[5.125rem] box-content w-9 rounded-full border-2 border-white"
      />
      <img
        src={avatar9}
        alt="Man"
        className="absolute bottom-[8.313rem] right-[12.5rem] box-content w-9 rounded-full border-2 border-white"
      />
      <img
        src={chair2}
        alt="Chair"
        className="absolute bottom-[3.75rem] right-[4.563rem] box-content h-[3.438rem] w-[3.438rem] rounded-3xl border-2 border-white object-cover"
      />
      <div className="flex h-full items-center justify-center">
        <div className="w-[31rem]">
          <h2 className="mb-8 text-center text-[2rem] font-semibold capitalize leading-[3rem] text-[#1b1c57]">
            Subscribe For More Info <br />
            and update from Hounter
          </h2>
          <div className="mb-8 h-14 rounded-[2rem] border border-[#e0e3eb] bg-white py-1 pr-1 pl-6">
            <div className="flex h-full items-center gap-x-4 text-sm">
              <img src={envelope} alt="Envelope" />
              <input
                type="search"
                name="location"
                placeholder="Your email here"
                className="h-full flex-auto text-sm font-medium text-[#888b97]"
              />
              <button className="flex h-full items-center rounded-[2rem] bg-[#10b981] px-4 text-white">
                <div className="mr-1 font-semibold">Subsribe Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Subscription;
