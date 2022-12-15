import dash from "../assets/dash.svg";
import house10 from "../assets/house-10.jpg";
import avatar8 from "../assets/avatar-8.jpg";
import house11 from "../assets/house-11.jpg";
import house12 from "../assets/house-12.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar1 from "../assets/avatar-1.jpg";
import { ReviewData } from "../utils/types";
import Review from "./Review";
import pagination from "../assets/pagination.svg";

const Reviews = () => {
  const reviews: ReviewData[] = [
    {
      img: house10,
      title: "My house sold out fast!",
      text: "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
      user: {
        img: avatar8,
        name: "Courtney Henry",
        jobTitle: "CEO Andarafish",
      },
      rating: 4.3,
    },
    {
      img: house11,
      title: "Best! I got the house I wanted through Hounter",
      text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      user: {
        img: avatar3,
        name: "Dianne Russell",
        jobTitle: "Manager Director",
      },
      rating: 4.6,
    },
    {
      img: house12,
      title: "Through the Hounter, I can get a house for my self",
      text: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
      user: {
        img: avatar1,
        name: "Esther Howard",
        jobTitle: "Head of Marketing",
      },
      rating: 4.6,
    },
  ];

  return (
    <section className="mb-[7.5rem]">
      <div className="mx-auto mb-10 text-center">
        <img src={dash} alt="Dash" className="mx-auto mb-2" />
        <h6 className="mb-3 text-sm leading-[1.125rem] text-[#f59e0b]">
          See Our Review
        </h6>
        <h2 className="mb-4 text-[2rem] font-semibold leading-10 text-[#1b1c57]">
          What Our User Say About Us
        </h2>
      </div>
      <div>
        <div className="relative -right-1/2 mb-8 flex w-[calc(46.25rem*3+3.5rem*2)] -translate-x-1/2 gap-x-14">
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
        <img src={pagination} alt="Pagination" className="mx-auto" />
      </div>
    </section>
  );
};

export default Reviews;
