import dash from "../assets/dash.svg";
import house3 from "../assets/house-3.svg";
import villa from "../assets/villa.svg";
import apartment from "../assets/apartment.svg";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right-2.svg";
import RecommendationsCard from "./RecommendationsCard";
import { RecommendationsCardData } from "../utils/types";
import house4 from "../assets/house-4.jpg";
import house5 from "../assets/house-5.jpg";
import house6 from "../assets/house-6.jpg";
import house7 from "../assets/house-7.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar5 from "../assets/avatar-5.jpg";
import avatar6 from "../assets/avatar-6.jpg";
import avatar7 from "../assets/avatar-7.jpg";
import { PopularOffer, BestDealsOffer, NewHouseOffer } from "./Offer";

const Recommendations = () => {
  const cards: RecommendationsCardData[] = [
    {
      id: "1",
      pic: house4,
      offer: <PopularOffer />,
      name: "Roselands House",
      cost: 35e6,
      owner: {
        pic: avatar3,
        alt: "Woman",
        name: "Dianne Russell",
        location: "Manchester, Kentucky",
      },
    },
    {
      id: "2",
      pic: house5,
      offer: <NewHouseOffer />,
      name: "Woodlandside",
      cost: 20e6,
      owner: {
        pic: avatar5,
        alt: "Man",
        name: "Robert Fox",
        location: "Dr. San Jose, South Dakota",
      },
    },
    {
      id: "3",
      pic: house6,
      offer: <BestDealsOffer />,
      name: "The Old Lighthouse",
      cost: 44e6,
      owner: {
        pic: avatar6,
        alt: "Man",
        name: "Ronald Richards",
        location: "Santa Ana, Illinois",
      },
    },
    {
      id: "4",
      pic: house7,
      offer: <PopularOffer />,
      name: "Cosmo's House",
      cost: 22e6,
      owner: {
        pic: avatar7,
        alt: "Woman",
        name: "Jenny Wilson",
        location: "Preston Rd. Inglewood, Maine 98380",
      },
    },
  ];

  return (
    <section className="mb-[7.5rem] ">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h6 className="mb-3 text-sm leading-[1.125rem]">
            <img src={dash} alt="Dash" className="mr-2 inline-block" />
            <span className="text-[#f59e0b]">Our Recommendation</span>
          </h6>
          <h2 className="pl-10 text-[2rem] font-semibold leading-10 text-[#1b1c57]">
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
            <span className="text-lg font-medium text-[#888b97]">
              Apartment
            </span>
          </button>
        </div>
        <div className="flex gap-x-4">
          <button className="rounded-[2rem] bg-[#e0e3eb] py-3 px-4">
            <img src={leftArrow} alt="Scroll left" />
          </button>
          <button className="rounded-[2rem] bg-[#10b981] py-3 px-4">
            <img src={rightArrow} alt="Scroll right" />
          </button>
        </div>
      </div>
      <div className="relative flex w-[calc(100%+7.5rem)] gap-x-10 overflow-hidden pl-10  pr-[7.5rem]">
        {cards.map((rec) => (
          <RecommendationsCard key={rec.id} rec={rec} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
