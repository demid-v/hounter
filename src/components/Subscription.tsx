import background from "../assets/subscription-background.png";
import envelope from "../assets/envelope.svg";

const Subscription = () => (
  <section className="mb-[7.5rem]">
    <div className="relative aspect-[1200/312]">
      <img
        src={background}
        alt="Blue background"
        className="absolute top-0 -z-10 w-full"
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
