import { FC } from "react";
import star from "../assets/star.svg";
import { ReviewData } from "../utils/types";

const Review: FC<{ review: ReviewData }> = ({
  review: {
    img,
    title,
    text,
    user: { img: userImg, name, jobTitle },
  },
}) => (
  <div className="relative h-[31.563rem] w-[46.25rem]">
    <div className="mb-[6.563rem]">
      <img
        src={img}
        alt="House"
        className="aspect-[740/400] w-full rounded-lg bg-[#c4c4c4] object-cover opacity-70"
      />
    </div>
    <div className="absolute bottom-0 mx-16 rounded-2xl bg-white p-8">
      <h2 className="mb-4 text-[2rem] text-xl font-semibold leading-[1.563rem] text-[#1b1c57]">
        {title}
      </h2>
      <p className="mb-6 text-sm leading-6 text-[#626687]">{text}</p>
      <dl className="flex items-center justify-between">
        <div>
          <dt className="sr-only">User's info</dt>
          <dd className="flex gap-x-6">
            <dt className="sr-only">User's avatar</dt>
            <dd>
              <img src={userImg} alt="Woman" className="w-10 rounded-full" />
            </dd>
            <div>
              <dt className="sr-only">User's details</dt>
              <dd>
                <dl>
                  <dt className="sr-only">User's name</dt>
                  <dd className="mb-1 text-sm font-medium leading-[1.375rem] text-[#0e1735]">
                    {name}
                  </dd>
                  <dt className="sr-only">User's title</dt>
                  <dd className="text-sm font-medium leading-[1.375rem] text-[#888b97]">
                    {jobTitle}
                  </dd>
                </dl>
              </dd>
            </div>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Rating</dt>
          <dd className="flex gap-x-4">
            <img src={star} alt="Star" />
            <div className="text-xl font-semibold text-[#3c4563]">4.6</div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Review;
