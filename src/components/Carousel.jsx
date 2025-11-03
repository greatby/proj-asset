"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    title: "Defense Reformation",
    subtitle: "18 Theses",
    description: "Resurrecting the American Industrial Base",
    image: "/images/AIPCon_8_45__1_.jpg",
    link: "https://www.18theses.com/",
  },
  {
    title: "Warp Speed",
    subtitle: "Warp Speed",
    description: "The Manufacturing OS for American Re-Industrialization",
    image: "/images/DevCon_cover_image.png",
    link: "https://www.palantir.com/warpspeed/",
  },
  {
    title: "Working Intelligence",
    subtitle: "Working Intelligence",
    description: "The AI Optimism Project",
    image: "/images/ED-KIMLIN-homepage.png",
    link: "https://workingintelligence.ai/",
  },
  {
    title: "DevCon 3",
    subtitle: "18 Theses",
    description: "Resurrecting the American Industrial Base",
    image: "/images/Frame_1__1_.png",
    link: "https://www.18theses.com/",
  },
  {
    title: "AIPCon 8",
    subtitle: "AIPCon 8",
    description: "The Manufacturing OS for American Re-Industrialization",
    image: "/images/maven-smart.jpeg",
    link: "https://www.palantir.com/warpspeed/",
  },
  {
    title: "Interoperability",
    subtitle: "Interoperability",
    description: "The AI Optimism Project",
    image: "/images/MMDP_cover_image.png",
    link: "https://workingintelligence.ai/",
  },
];

// export default function HeroCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const duration = 6000;

//   const goNext = () => setActiveIndex((p) => (p + 1) % slides.length);
//   const goPrev = () =>
//     setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const timer = setTimeout(() => goNext(), duration);
//     return () => clearTimeout(timer);
//   }, [activeIndex]);

//   return (
//     <section className="relative w-screen h-screen overflow-hidden bg-[#efefef] text-white flex flex-col">
//       <div className="flex flex-col w-full h-full px-10 py-22">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-start gap-4 md:gap-8 mb-6">
//           {slides.map((slide, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className="relative overflow-hidden font-normal bg-white h-[33px] text-[20px]"
//             >
//               <motion.span
//                 key={`${i}-${activeIndex}`}
//                 initial={{ width: 0 }}
//                 animate={{
//                   width: i === activeIndex ? "100%" : 0,
//                 }}
//                 transition={{
//                   duration: i === activeIndex ? duration / 1000 : 0,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-0 bg-[#dbdbdb]"
//               />
//               <span
//                 className={`relative z-10 px-4 py-2 transition-colors duration-300 ${
//                   i === activeIndex
//                     ? "text-black"
//                     : "text-[#aaa] hover:text-black"
//                 }`}
//               >
//                 {slide.title}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Slides */}
//         <div className="relative flex-1 rounded-2xl overflow-hidden group">
//           <AnimatePresence mode="wait">
//             <motion.a
//               key={activeIndex}
//               href={slides[activeIndex].link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.2, ease: "easeInOut" }}
//               className="absolute inset-0 flex items-start justify-start bg-center bg-cover"
//               style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
//             >
//               {/* Top-left text box */}
//               <div className="m-10 bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-lg">
//                 <p className="text-gray-300 uppercase tracking-wide mb-2 text-sm">
//                   {slides[activeIndex].subtitle}
//                 </p>
//                 <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
//                   {slides[activeIndex].description}
//                 </h2>
//               </div>
//             </motion.a>
//           </AnimatePresence>

//           {/* Navigation Buttons (rectangular + spaced) */}
//           <button
//             onClick={goPrev}
//             className="absolute cursor-pointer left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-[70px] h-[60px] bg-white/90 text-black hover:bg-[#ffffff36] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md z-20 shadow-md"
//             aria-label="Previous Slide"
//           >
//             <FiChevronLeft className="text-3xl" />
//           </button>

//           <button
//             onClick={goNext}
//             className="absolute cursor-pointer right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-[70px] h-[60px] bg-white/90 text-black hover:bg-[#ffffff36] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md z-20 shadow-md"
//             aria-label="Next Slide"
//           >
//             <FiChevronRight className="text-3xl" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 6000;

  const goNext = () => setActiveIndex((p) => (p + 1) % slides.length);
  const goPrev = () =>
    setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(() => goNext(), duration);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative w-screen h-auto md:h-screen overflow-hidden bg-[#efefef] text-white flex flex-col">
      <div className="flex flex-col w-full h-full px-10 py-22">
        {/* ---- DESKTOP VIEW (unchanged) ---- */}
        <div className="hidden md:flex flex-wrap justify-start gap-4 md:gap-8 mb-6">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative overflow-hidden font-normal bg-white h-[33px] text-[20px]"
            >
              <motion.span
                key={`${i}-${activeIndex}`}
                initial={{ width: 0 }}
                animate={{
                  width: i === activeIndex ? "100%" : 0,
                }}
                transition={{
                  duration: i === activeIndex ? duration / 1000 : 0,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-[#dbdbdb]"
              />
              <span
                className={`relative z-10 px-4 py-2 transition-colors duration-300 ${
                  i === activeIndex
                    ? "text-black"
                    : "text-[#aaa] hover:text-black"
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>

        <div className="relative flex-1 hidden md:flex rounded-2xl overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.a
              key={activeIndex}
              href={slides[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-start justify-start bg-center bg-cover"
              style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
            >
              {/* Original Desktop Box */}
              <div className="hidden md:block m-10 bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-lg">
                <p className="text-gray-300 uppercase tracking-wide mb-2 text-sm">
                  {slides[activeIndex].subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
                  {slides[activeIndex].description}
                </h2>
              </div>
            </motion.a>
          </AnimatePresence>

          {/* Desktop navigation buttons */}
          <button
            onClick={goPrev}
            className="hidden md:flex absolute cursor-pointer left-6 top-1/2 -translate-y-1/2 items-center justify-center w-[70px] h-[60px] bg-white/90 text-black hover:bg-[#ffffff36] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md z-20 shadow-md"
          >
            <FiChevronLeft className="text-3xl" />
          </button>

          <button
            onClick={goNext}
            className="hidden md:flex absolute cursor-pointer right-6 top-1/2 -translate-y-1/2 items-center justify-center w-[70px] h-[60px] bg-white/90 text-black hover:bg-[#ffffff36] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md z-20 shadow-md"
          >
            <FiChevronRight className="text-3xl" />
          </button>
        </div>

        {/* ---- MOBILE VIEW ---- */}
        {/* ---- MOBILE VIEW ---- */}
        <div className="block md:hidden flex flex-col items-center text-center mt-6 overflow-hidden select-none">
          {/* Title above image */}
          <h3 className="text-[#3b3b3b] text-[18px] mb-3">
            {slides[activeIndex].title}
          </h3>

          {/* Swipeable + Animated image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) goNext(); // swipe left → next
                else if (info.offset.x > 60) goPrev(); // swipe right → prev
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[90%] aspect-video rounded-2xl overflow-hidden shadow-sm cursor-grab active:cursor-grabbing"
            >
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Info below image */}
          <p className="mt-4 text-[12px] text-gray-400 uppercase tracking-[1px]">
            {slides[activeIndex].subtitle}
          </p>
          <a
            href={slides[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[#2f2f2f] mt-1 font-normal hover:underline"
          >
            {slides[activeIndex].description}
          </a>
        </div>
      </div>
    </section>
  );
}
