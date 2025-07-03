
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Etornam",
    text: "This place is amazing! The doctors were kind, patient, and explained everything clearly. I felt comfortable and confident in the care I received.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Debbie",
    text: "From the moment I walked in, the staff made me feel at ease. The environment is clean and peaceful, and the nurses are very professional.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dorothy",
    text: "I appreciate the attention to detail. The service was quick, and the team made sure I understood my diagnosis and next steps.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Miguel",
    text: "The care I received was exceptional. They truly listen to their patients and go above and beyond to make you feel supported.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Anni",
    text: "This clinic stands out for its friendly staff and organized service. I felt like I was in good hands throughout the entire process.",
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
