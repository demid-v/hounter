import { ReactNode } from "react";

type RecCardData = {
  id: string;
  pic: string;
  offer: ReactNode;
  name: string;
  cost: number;
  owner: {
    pic: string;
    alt?: string;
    name: string;
    location: string;
  };
};

type OfferData = {
  bgColor: string;
  pic: string;
  alt?: string;
  text: string;
  textColor: string;
};

export type { RecCardData, OfferData };
