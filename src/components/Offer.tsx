import type { FC } from "react";
import { OfferData } from "../utils/types";
import fire from "../assets/fire.svg";
import house8 from "../assets/house-8.svg";
import wallet from "../assets/wallet.svg";

const Offer: FC<{ data: OfferData }> = ({
  data: { bgColor, pic, alt, textColor, text },
}) => (
  <div
    className={`absolute bottom-4 left-4 flex w-fit rounded-[2rem] py-2 px-4 ${bgColor}`}
  >
    <span className="sr-only">Offer</span>
    <img src={pic} alt={alt} className="mr-2.5" />
    <div className={`text-sm font-medium leading-[1.125rem] ${textColor}`}>
      {text}
    </div>
  </div>
);

const PopularOffer = () => (
  <Offer
    data={{
      bgColor: "bg-[#fee2e2]",
      pic: fire,
      alt: "Fire",
      textColor: "text-[#ef4444]",
      text: "Popular",
    }}
  />
);

const NewHouseOffer = () => (
  <Offer
    data={{
      bgColor: "bg-[#dbeafe]",
      pic: house8,
      alt: "House",
      text: "New House",
      textColor: "text-[#1d4ed8]",
    }}
  />
);

const BestDealsOffer = () => (
  <Offer
    data={{
      bgColor: "bg-[#d1fae5]",
      pic: wallet,
      alt: "Wallet",
      text: "Best Deals",
      textColor: "text-[#047857]",
    }}
  />
);

export { PopularOffer, NewHouseOffer, BestDealsOffer };
