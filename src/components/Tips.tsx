import { SideTipData } from "../utils/types";
import apartment2 from "../assets/apartment-2.jpg";
import house13 from "../assets/house-13.jpg";
import house14 from "../assets/house-14.jpg";
import house15 from "../assets/house-15.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar9 from "../assets/avatar-9.jpg";
import avatar10 from "../assets/avatar-10.jpg";
import avatar11 from "../assets/avatar-11.jpg";
import { MainTip, SideTip } from "./SideTip";
import dash from "../assets/dash.svg";
import cloud from "../assets/cloud-4.png";

const Tips = () => {
  const sideTips: SideTipData[] = [
    {
      id: 1,
      img: apartment2,
      author: { img: avatar3, name: "Dianne Russell" },
      title: "The things we need to check when we want to buy a house",
      readTime: 4,
      publicationDate: "25 Apr 2021",
    },
    {
      id: 2,
      img: house13,
      author: { img: avatar9, name: "Courtney Henry" },
      title: "7 Ways to distinguish the quality of the house we want to buy",
      readTime: 6,
      publicationDate: "24 Apr 2021",
    },
    {
      id: 3,
      img: house14,
      author: { img: avatar10, name: "Darlene Robertson" },
      title: "The best way to know the quality of the house we want to buy",
      readTime: 2,
      publicationDate: "24 Apr 2021",
    },
  ];

  return (
    <section className="mb-[7.5rem]">
      <div className="relative -left-[7.5rem] w-[calc(100%+7.5rem)] pl-[7.5rem]">
        <img
          src={cloud}
          alt="Blue cloud"
          className="absolute -top-[12rem] left-0 -z-10"
        />
        <div className="mx-auto mb-10 text-center">
          <img src={dash} alt="Dash" className="mx-auto mb-2" />
          <h6 className="mb-3 text-sm capitalize leading-[1.125rem] text-[#f59e0b]">
            See tips and trick from our partnership
          </h6>
          <h2 className="mb-6 text-[2rem] font-semibold capitalize leading-10 text-[#1b1c57]">
            Find out more about <br />
            selling and buying homes
          </h2>
          <button className="gap-4 rounded-[2rem] bg-[#10b981] py-3 px-4">
            <div className="text-sm font-semibold leading-[1.375rem] text-white">
              More Articles
            </div>
          </button>
        </div>
        <div className="flex gap-[4.25rem]">
          <div className="aspect-[572/524] w-[calc(100%*(572/1200))]">
            {sideTips.map((tip) => (
              <SideTip key={tip.id} data={tip} />
            ))}
          </div>
          <MainTip
            data={{
              isMain: true,
              img: house15,
              author: { img: avatar11, name: "Cameron Williamson" },
              title: "12 Things to know before buying a house",
              text: "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
              readTime: 8,
              publicationDate: "25 Apr 2021",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Tips;
