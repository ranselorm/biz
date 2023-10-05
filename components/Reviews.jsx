import React from "react";

import Button from "./Button";

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam innulla libero quia et repudiandae facilis similique quam blanditiis pariatur aliquam ad, sapiente voluptatum reiciendis",
    name: "John Doe",
    client: "Hair Jem",
    position: "CEO",
    image: "/t2.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam innulla libero quia et repudiandae facilis similique quam blanditiis pariatur aliquam ad, sapiente voluptatum reiciendis",
    name: "Kylian",
    client: "SG Afrika Farms",
    position: "CEO",
    image: "/t3.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam innulla libero quia et repudiandae facilis similique quam blanditiis pariatur aliquam ad, sapiente voluptatum reiciendis",
    name: "Kafui",
    client: "Kafiv Contruction",
    position: "Manager",
    image: "/t1.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="bg-banner bg-contain bg-center text-white py-[100px] lg:px-[100px] pb-[200px] w-full relative">
      <div class="absolute inset-0 opacity-[95%] bg-black"></div>
      <main>
        <div className="flex items-center flex-col justify-center lg:flex-row relative z-10">
          <div className="lg:w-2/4 px-5 lg:px-0 flex flex-col items-center justify-center lg:items-start">
            <Button text="CLIENT REVIEWS" />
            <h2 className="text-4xl font-semibold w-full mt-[30px] text-center lg:text-left">
              <span className="mr-2 text-[#ff4f30] font-bold">Reviews</span>
              Of Clients
            </h2>
          </div>
          <div className="lg:w-2/4 text-center lg:text-left mt-6 lg:mt-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in
            nulla libero quia et repudiandae facilis similique quam blanditiis
            pariatur aliquam ad, sapiente voluptatum reiciendis cupiditate
            cumque provident dolor recusandae?
          </div>
        </div>
        <div className="mt-[150px] text-white relative z-10 flex flex-col lg:flex-row items-center justify-center  gap-10 px-2 lg:px-0">
          {reviews.map((review, index) => (
            <div className="bg-black/50 w-full lg:w-[320px] h-[250px] rounded-2xl flex flex-col items-center justify-center text-center px-4 pt-10 relative">
              <p className="text-xs">{review.text}</p>
              <div className="h-[1px] w-[200px] bg-white/80 opacity-25 my-[10px]" />
              <div>
                <h2>{review.name}</h2>
                <span className="text-xs text-[#ff4f30]">
                  {review.position}
                </span>
                <p className="text-xs">({review.client})</p>
              </div>
              <div className="w-[70px] h-[70px] bg-white rounded-full absolute top-0 left-8 border-4 border-gray-800 -mt-[35px] overflow-hidden">
                <img
                  src={review.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Reviews;
