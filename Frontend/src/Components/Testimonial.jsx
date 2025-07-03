import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Etornam",
    text: "This place is great! The atmosphere is chill and cool. The staffs are really friendly. They know what they are doing and what they are talking about.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Debbie",
    text: "This place is great! The atmosphere is chill and cool. The staffs are really friendly. They know what they are doing and what they are talking about.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dorothy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis quod maxime magnam.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Miguel",
    text: "This place is great! The atmosphere is chill and cool. The staffs are really friendly. They know what they are doing and what they are talking about.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Anni",
    text: "This place is great! The atmosphere is chill and cool. The staffs are really friendly. They know what they are doing and what they are talking about.",
    img: "https://picsum.photos/102/102",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-xs text-[#00695f]">Testimonials</p>
        <h3 className="md:text-xl font-medium text-center">
          What Our Customers Say
        </h3>

        {/* Slider */}
        <Slider {...settings}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="bg-[#80cbc4] p-8 rounded-xl shadow-md flex flex-col items-center text-center space-y-4">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p className="text-gray-100 text-sm">{data.text}</p>
                <h4 className="text-lg font-semibold text-brown-800">
                  {data.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
