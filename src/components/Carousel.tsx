import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemsPerPage?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  autoPlay?: boolean;
  autoPlayInterval?: number;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  headerAction?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = false,
  autoPlayInterval = 5000,
  title,
  subtitle,
  badge,
  headerAction,
  className = '',
  id,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage.desktop || 3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive Items Per View Listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(itemsPerPage.mobile || 1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerPage.tablet || 2);
      } else {
        setItemsToShow(itemsPerPage.desktop || 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  const maxIndex = Math.max(0, items.length - itemsToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay || isHovered || maxIndex === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isHovered, maxIndex, currentIndex]);

  return (
    <div
      id={id}
      className={`w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional Header Row with Navigation Controls */}
      {(title || subtitle || badge || headerAction) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            {badge && <div className="mb-3">{badge}</div>}
            {title && (
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {headerAction}
            {/* Carousel Navigation Buttons */}
            {items.length > itemsToShow && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Carousel Track Window */}
      <div className="overflow-hidden relative py-2" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 transition-all duration-300"
              style={{
                width: `calc(${100 / itemsToShow}% - ${(6 * (itemsToShow - 1)) / itemsToShow}px)`,
              }}
            >
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Controls */}
      {items.length > itemsToShow && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-8 bg-blue-600'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
