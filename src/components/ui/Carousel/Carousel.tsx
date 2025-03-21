// import Slider from 'react-slick';
// import './Carousel.css';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

// export function Carousel({ children, setSlideIndex }) {
//   const settings = {
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 5,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     beforeChange: (_current, next) => setSlideIndex(next),
//     centerPadding: '265px',
//     centerMode: true,
//     className: 'center',
//     nextArrow: (
//       <SampleNextArrow onClick={(_current, next) => setSlideIndex(next)} />
//     ),
//     prevArrow: (
//       <SamplePrevArrow onClick={(_current, next) => setSlideIndex(next)} />
//     ),
//   };

//   return (
//     <div className="banner_slider">
//       <Slider {...settings}>{children}</Slider>
//     </div>
//   );
// }

import Slider from 'react-slick';
import './Carousel.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

export function Carousel({
  children,
  setSlideIndex = (next) => {}, // По умолчанию пустая функция
  customSettings = {}, // Кастомные настройки
  showArrows = true, // Показывать стрелки или нет
  nextArrow = (
    <SampleNextArrow onClick={(_current, next) => setSlideIndex(next)} />
  ), // Кастомная правая стрелка
  prevArrow = (
    <SamplePrevArrow onClick={(_current, next) => setSlideIndex(next)} />
  ), // Кастомная левая стрелка
}) {
  const defaultSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_current, next) => setSlideIndex(next),
    centerPadding: '265px',
    centerMode: true,
    className: 'center',
  };

  const settings = {
    ...defaultSettings,
    ...customSettings, // Позволяем переопределять настройки
    nextArrow: showArrows ? nextArrow : null, // Позволяем отключить стрелки
    prevArrow: showArrows ? prevArrow : null,
  };

  return (
    <div className="banner_slider">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
