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
  id: number;
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

type TipData = {
  isMain?: boolean;
  img: string;
  author: { img: string; name: string };
  title: string;
  readTime: number;
  publicationDate: string;
};

type SideTipData = TipData & { id: number; isMain?: false };

type MainTipData = TipData & { isMain: true; text: string };

export type {
  RecommendationsCardData,
  OfferData,
  ReviewData,
  SideTipData,
  MainTipData,
};
