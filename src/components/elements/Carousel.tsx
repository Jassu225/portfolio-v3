"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2 h-2 rounded-full border border-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              idx === selectedIndex ? "bg-blue-500 border-blue-500" : "bg-gray-200"
            }`}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="embla__slide basis-4/5 md:basis-1/2 lg:basis-1/3 flex-shrink-0 flex-grow-0">
      {children}
    </div>
  );
}; 