"use client";

import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    company: "FUJITSU",
    quote:
      "We've combined Foundry's data integration capabilities and Fujitsu's machine learning AI to transform our operations … creating alert systems, demand forecasting, inventory control systems, and so on. This transformation resulted in an impressive annual cost reduction of $9M within just 3 months.",
    author: "Kazuki Hiraiso",
    role: "Fujitsu, Data Scientist",
  },
  {
    company: "LOWE'S",
    quote:
      "In less than four months, we created something from POC all the way to production. Palantir has made us faster and smarter.",
    author: "Operations Lead",
    role: "Lowe’s",
  },
  {
    company: "PANASONIC ENERGY",
    quote:
      "Ask Atom [powered by Palantir AIP] serves as a vital training tool for our new and veteran technicians – cutting that 3–6 month learning curve down to just a few weeks.",
    author: "Michael Tanaka",
    role: "VP Operations, Panasonic Energy",
  },
  {
    company: "UNITED AIRLINES",
    quote:
      "We deployed Chime late last year... we've already saved almost 300 delays, 20 cancellations... this represents millions of dollars of cost avoidance.",
    author: "Lisa Cooper",
    role: "United Airlines, Operations Director",
  },
  {
    company: "HEINEKEN",
    quote:
      "We had a great chassis of the car, but our engine was underpowered. We went to Palantir because we wanted the best engine out there.",
    author: "Laurens van de Rotte",
    role: "COO, Heineken USA",
  },
];

export default function PartnerTestimonials() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const offsetRef = useRef(0);
  const [halfWidth, setHalfWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const quoteRefs = useRef([]);
  const authorRefs = useRef([]);

  const baseCards = TESTIMONIALS;
  const cards = [...baseCards, ...baseCards];

  // Infinite scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const computeWidths = () => setHalfWidth(track.scrollWidth / 2);
    computeWidths();
    window.addEventListener("resize", computeWidths);

    const speed = 0.04;
    const step = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (halfWidth > 0) {
        offsetRef.current += speed * dt;
        if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", computeWidths);
      lastTimeRef.current = null;
    };
  }, [halfWidth]);

  const originalIndex = (i) => i % baseCards.length;

  // compute dynamic movement so description stops just below title
  const getMoveUpValue = (i) => {
    const quote = quoteRefs.current[i];
    const author = authorRefs.current[i];
    if (!quote || !author) return 0;

    const cardHeight = 400; // known height
    const titleHeight = 60; // rough space for title section
    const quoteHeight = quote.offsetHeight;
    const authorHeight = author.offsetHeight;

    // bottom padding: cardHeight - (titleHeight + quoteHeight + authorHeight + margin)
    // we want quote to end ~8px below title, so move up by the distance from current to that
    const currentBottomSpace =
      cardHeight - (titleHeight + quoteHeight + authorHeight + 40);
    return -(currentBottomSpace - 8); // stop ~8px below title
  };

  return (
    <>
      <div className="w-full md:w-[96%] mx-auto ">
        <div className="mt-16 border-[#1e2124] border-t mb-6"></div>
        <h1 className="text-[2.8rem] w-full md:w-[40%] leading-10">What our partners say about us</h1>
      </div>
      <section className="relative w-full md:w-[96%] mx-auto bg-white overflow-hidden py-20">
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-8 items-stretch will-change-transform"
          >
            {cards.map((t, i) => {
              const orig = originalIndex(i);
              const isHovered = hoveredIndex === orig;

              const moveY = getMoveUpValue(orig);

              return (
                <article
                  key={i}
                  className="group relative w-[360px] h-[400px] sm:w-[300px] md:w-[320px] bg-[#f3f3f3] text-black p-6 shrink-0 overflow-hidden flex flex-col justify-between"
                >
                  {/* angled corner */}
                  <div
                    className="absolute top-0 right-0"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "2.5em solid #f3f3f3",
                      borderTop: "2.5em solid #ffffff",
                    }}
                  />

                  {/* Title */}
                  <div className="uppercase text-[21px] font-semibold tracking-widest text-gray-700">
                    {t.company}
                  </div>

                  {/* Bottom section */}
                  <div className="relative flex flex-col justify-end h-full mt-auto">
                    <div
                      className="transition-all duration-500 ease-out cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(orig)}
                      onMouseLeave={() =>
                        setHoveredIndex((cur) => (cur === orig ? null : cur))
                      }
                      onTouchStart={() => setHoveredIndex(orig)}
                      onTouchEnd={() => setHoveredIndex(null)}
                    >
                      <p
                        ref={(el) => (quoteRefs.current[orig] = el)}
                        className="text-gray-800 text-[1.1rem] font-semibold leading-snug transition-transform duration-500"
                        style={{
                          transform: isHovered
                            ? `translateY(${moveY}px)`
                            : "translateY(0)",
                        }}
                      >
                        “{t.quote}”
                      </p>

                      <div
                        ref={(el) => (authorRefs.current[orig] = el)}
                        className={`transition-all duration-500 ease-out ${
                          isHovered
                            ? "opacity-100 -translate-y-2"
                            : "opacity-0 translate-y-6"
                        }`}
                      >
                        <div className="text-sm font-semibold text-gray-900 mt-3">
                          {t.author}
                        </div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* edge fades */}
        {/* <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-36 bg-gradient-to-l from-white to-transparent" /> */}
      </section>
    </>
  );
}
