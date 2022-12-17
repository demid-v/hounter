import { FC } from "react";
import timeSvg from "../assets/time.svg";
import { SideTipData, MainTipData } from "../utils/types";

const Tip: FC<{ data: SideTipData | MainTipData }> = ({ data }) => {
  const {
    isMain,
    img,
    author: { img: authorImg, name: authorName },
    title,
    readTime,
    publicationDate,
  } = data;

  return (
    <div className={isMain ? "flex-1" : "mb-10 flex gap-x-8 last:mb-0"}>
      <img
        src={img}
        alt="House"
        className={
          "rounded-2xl object-cover" +
          (isMain
            ? " mb-6"
            : " my-auto aspect-[200/144] w-[calc(100%*200/572)]")
        }
      />
      <dl>
        <div className="mb-3 flex items-center gap-x-4">
          <dt>
            <span className="sr-only">Author</span>
            <img src={authorImg} alt="Woman" className="w-8 rounded-full" />
          </dt>
          <dd className="text-sm leading-[1.375rem] text-[#3c4563]">
            {authorName}
          </dd>
        </div>
        <dt className="sr-only">Articles title</dt>
        <dd
          className={
            "mb-4 font-medium capitalize leading-8 text-[#1b1c57]" +
            (isMain ? " text-2xl" : " text-lg")
          }
        >
          {title}
        </dd>
        {isMain && (
          <>
            <dt className="sr-only">Articles text</dt>
            <dd className="mb-4 text-sm leading-6 text-[#626687]">
              {data.text}
            </dd>
          </>
        )}
        <div className="flex gap-3">
          <dt>
            <span className="sr-only">Time</span>
            <img src={timeSvg} alt="Time" />
          </dt>
          <div className="flex text-sm leading-6 text-[#888b97]">
            <dd>{readTime} min read</dd>
            <pre> | </pre>
            <dt className="sr-only">Date</dt>
            <dd>{publicationDate}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

const SideTip: FC<{ data: SideTipData }> = ({ data }) => <Tip data={data} />;

const MainTip: FC<{ data: MainTipData }> = ({ data }) => <Tip data={data} />;

export { SideTip, MainTip };
