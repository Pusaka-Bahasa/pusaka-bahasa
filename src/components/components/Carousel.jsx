import React, { useEffect, useRef } from "react";
import "../../asset/styles/global.css";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;

    const scrollCarousel = () => {
      carousel.scrollLeft += 1;

      // Jika scroll mencapai item terakhir (lebih dari setengah), reset scroll ke awal
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scrollCarousel);
    };

    animationId = requestAnimationFrame(scrollCarousel);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const items = [
    { alt: "Universitas Indonesia", src: "https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Makara_of_Universitas_Indonesia.svg/1024px-Makara_of_Universitas_Indonesia.svg.png" },
    { alt: "Institut Teknologi Bandung", src: "https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" },
    { alt: "Universitas Gadjah Mada", src: "https://upload.wikimedia.org/wikipedia/id/thumb/9/9f/Emblem_of_Universitas_Gadjah_Mada.svg/1024px-Emblem_of_Universitas_Gadjah_Mada.svg.png" },
    { alt: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" },
    {
      alt: "Ministry of Education and Culture",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/1024px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png",
    },
    { alt: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
    { alt: "Gojek", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gojek_logo_2019.svg/119px-Gojek_logo_2019.svg.png" },
    { alt: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" },
  ];

  // Duplicate items to create the infinite effect
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="bg-background py-8 overflow-hidden">
      <h2 className="text-muted-foreground font-bold mb-10 mt-10 lg:text-xl text-md text-primary text-center">Dipercaya oleh tim paling inovatif di Indonesia</h2>
      <div className="mx-auto text-center carousel-width">
        <div className="carousel-track flex space-x-8 justify-center gap-4 overflow-hidden relative" ref={carouselRef}>
          {duplicatedItems.map((item, index) => (
            <div key={index} className="carousel-item flex flex-col items-center justify-center">
              <img aria-hidden="true" alt={item.alt} src={item.src} className={`w-auto grayscale hover:grayscale-0 transition-all duration-300 ${item.alt === "Microsoft" || item.alt === "Gojek" || item.alt === "IBM" ? "h-12" : "h-20"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
