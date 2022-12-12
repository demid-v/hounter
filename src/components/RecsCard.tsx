import { RecCardData } from "../utils/types";
import type { FC } from "react";

const RecsCard: FC<{ rec: RecCardData }> = ({ rec }) => {
  const costFormatted = (cost: number) =>
    cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="w-1/4 min-w-[21.25rem]">
      <div className="relative mb-6">
        <picture>
          <img
            src={rec.pic}
            alt="House"
            className="aspect-auto aspect-[9/10] min-h-[23.875rem] w-full rounded-3xl object-cover"
          />
        </picture>
        {rec.offer}
      </div>
      <dl>
        <dt className="sr-only">Property's name</dt>
        <dd className="mb-2 text-2xl font-medium text-[#0e1735]">{rec.name}</dd>
        <dt className="sr-only">Cost</dt>
        <dd className="mb-6 text-xl font-medium leading-8 text-[#3c4563]">
          <span>$ </span>
          <span>{costFormatted(rec.cost)}</span>
        </dd>
        <dt className="sr-only">Owner</dt>
        <dd>
          <dl className="flex gap-x-4">
            <div>
              <dt className="sr-only">Owner's avatar</dt>
              <dd>
                <img
                  src={rec.owner.pic}
                  alt={rec.owner.alt}
                  className="w-[3.5rem] w-10 rounded-full"
                />
              </dd>
            </div>
            <div>
              <dt className="sr-only">Owner's info</dt>
              <dd>
                <dl>
                  <dt className="sr-only">Owner's name</dt>
                  <dd className="mb-1 text-lg font-medium leading-6 text-[#0e1735]">
                    {rec.owner.name}
                  </dd>
                  <dt className="sr-only">Property's location</dt>
                  <dd className="text-sm font-medium leading-[1.375rem] text-[#888b97]">
                    {rec.owner.location}
                  </dd>
                </dl>
              </dd>
            </div>
          </dl>
        </dd>
      </dl>
    </div>
  );
};

export default RecsCard;
