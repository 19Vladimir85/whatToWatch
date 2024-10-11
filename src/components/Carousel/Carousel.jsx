// import { useState } from "react";
// import Slider from "react-slick";
// import "./Carousel.css";

// import img_1 from "../../carousel_img/img_1.jpg";
// import img_2 from "../../carousel_img/img_2.jpg";
// import img_3 from "../../carousel_img/img_3.jpg";
// import img_4 from "../../carousel_img/img_4.jpg";
// import img_5 from "../../carousel_img/img_5.jpg";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const images = [img_1, img_2, img_3, img_4, img_5];

// function SampleNextArrow({ onClick }) {
//   return (
//     <div className="banner_arrow banner_arrow-right" onClick={onClick}>
//       <IoIosArrowForward />
//     </div>
//   );
// }

// function SamplePrevArrow({ onClick }) {
//   return (
//     <div className="banner_arrow banner_arrow-left" onClick={onClick}>
//       <IoIosArrowBack />
//     </div>
//   );
// }

// export function Carousel() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 5,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     beforeChange: (current, next) => setSlideIndex(next),
//     centerPadding: "265px",
//     centerMode: true,
//     className: "center",
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };
//   return (
//     <div className="banner_slider">
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div
//             className={
//               index === slideIndex
//                 ? "banner_slide banner_slide-acttive"
//                 : "banner_slide"
//             }
//             key={index}
//           >
//             <img src={img} alt="" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

import Slider from "react-slick";
import "./Carousel.css"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div className="banner_arrow banner_arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="banner_arrow banner_arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

export function Carousel({ children, setSlideIndex }) {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_current, next) => setSlideIndex(next),
    centerPadding: "265px",
    centerMode: true,
    className: "center",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="banner_slider">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}