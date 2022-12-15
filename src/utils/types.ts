import { type } from "os";
import { ReactNode } from "react";

type RecommendationsCardData = {
  id: string;
  img: string;
  offer: ReactNode;
  name: string;
  cost: number;
  owner: {
    img: string;
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

type ReviewData = {
  img: string;
  title: string;
  text: string;
  user: {
    img: string;
    alt?: string;
    name: string;
    jobTitle: string;
  };
  rating: number;
};

export type { RecommendationsCardData, OfferData, ReviewData };
