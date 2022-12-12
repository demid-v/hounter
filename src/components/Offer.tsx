import type { FC } from "react";
import { OfferData } from "../utils/types";
import fire from "../assets/fire.svg";
import house8 from "../assets/house-8.svg";
import wallet from "../assets/wallet.svg";

const Offer: FC<{ data: OfferData }> = ({ data }) => (
  <div
    className={`absolute bottom-4 left-4 flex w-fit rounded-[2rem] bg-[#${data.bg}] py-2 px-4`}
  >
    <span className="sr-only">Offer</span>
    <img src={data.pic} alt={data.alt} className="mr-2.5" />
    <div
      className={`text-sm font-medium leading-[1.125rem] text-[#${data.textColor}]`}
    >
      {data.text}
    </div>
  </div>
);

const PopularOffer = () => (
  <Offer
    data={{
      bg: "fee2e2",
      pic: fire,
      alt: "Fire",
      text: "Popular",
      textColor: "ef4444",
    }}
  />
);

const NewHouseOffer = () => (
  <Offer
    data={{
      bg: "dbeafe",
      pic: house8,
      alt: "House",
      text: "New House",
      textColor: "1d4ed8",
    }}
  />
);

const BestDealsOffer = () => (
  <Offer
    data={{
      bg: "d1fae5",
      pic: wallet,
      alt: "Wallet",
      text: "Best Deals",
      textColor: "047857",
    }}
  />
);

export { PopularOffer, NewHouseOffer, BestDealsOffer };
