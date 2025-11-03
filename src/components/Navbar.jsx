"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

// export default function Navbar() {
//   const [showAnnouncement, setShowAnnouncement] = useState(true);
//   const [dismissed, setDismissed] = useState(false); // track manual close

//   useEffect(() => {
//     if (dismissed) return; // stop scroll logic if manually closed

//     let lastScrollY = 0;
//     const handleScroll = () => {
//       const current = window.scrollY;
//       if (current > lastScrollY + 10)
//         setShowAnnouncement(false); // scroll down → hide
//       else if (current < lastScrollY - 10) setShowAnnouncement(true); // scroll up → show
//       lastScrollY = current;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [dismissed]);

//   const handleClose = () => {
//     setDismissed(true);
//     setShowAnnouncement(false);
//   };

//   return (
//     <div className="fixed w-full z-50">
//       {/* Announcement Bar */}
//       {!dismissed && (
//         <div
//           className={`w-full bg-black flex justify-between items-center pl-6 text-white text-sm  transition-all duration-500 ${
//             showAnnouncement
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 -translate-y-full pointer-events-none"
//           }`}
//         >
//           <p className="text-[15px]">
//             Read CEO Alex Karp’s{" "}
//             <a
//               href="/q2-2025-letter"
//               className="underline underline-offset-2 hover:text-[#003d3d] transition"
//             >
//               Letter to Shareholders
//             </a>
//           </p>
//           <button
//             onClick={handleClose}
//             className="text-lg text-white/70 p-3 hover:bg-white hover:text-black  transition-colors duration-200"
//             aria-label="Close announcement"
//           >
//            <FaXmark className="size-6"/>
//           </button>
//         </div>
//       )}

//       {/* Navbar */}
//       <header
//         className={`absolute left-[calc(var(--h-contain)-20px)] right-[calc(var(--h-contain)-20px)] z-50
//       rounded-[10px] bg-[hsla(0,0%,67%,0.1)] backdrop-blur-[10px]
//       shadow-[0_2px_10px_rgba(0,0,0,0.1)] opacity-90
//       flex items-center justify-between px-6 mx-auto
//       max-w-[calc(100%-var(--h-contain)*2)] transition-all duration-500
//       ${showAnnouncement && !dismissed ? "top-16" : "top-4"}`}
//         style={{
//           "--h-contain": "max(calc((100% - 80rem) / 2), 1.6666666667rem)",
//           height: "70px",
//         }}
//       >
//         {/* Left */}
//         <div className="flex items-center gap-2 text-[#4a4a4a] opacity-80">
//           <span className="font-normal text-xl text-white">Palantir</span>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-4">
//           <button
//             className="w-[193px] h-11 px-4 py-2 text-[1rem] font-medium text-[#1e2124] cursor-pointer bg-white
//         hover:bg-black hover:text-white transition-colors duration-200"
//           >
//             Get Started
//           </button>

//           <div className="flex overflow-hidden border border-white/30 rounded-sm">
//             <button className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200">
//               <FiSearch className="text-[18px]" />
//             </button>
//             <button className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300">
//               <FiMenu className="text-[20px]" />
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

export default function Navbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-hide logic for announcement
  useEffect(() => {
    if (dismissed) return;

    let lastScrollY = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY + 10) setShowAnnouncement(false);
      else if (current < lastScrollY - 10) setShowAnnouncement(true);
      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleClose = () => {
    setDismissed(true);
    setShowAnnouncement(false);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Announcement Bar */}
      {!dismissed && (
        <div
          className={`w-full bg-black flex justify-between items-center pl-6 text-white text-sm transition-all duration-500 ${
            showAnnouncement
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <p className="text-[15px]">
            Read CEO Alex Karp’s{" "}
            <a
              href="/q2-2025-letter"
              className="underline underline-offset-2 hover:text-[#003d3d] transition"
            >
              Letter to Shareholders
            </a>
          </p>
          <button
            onClick={handleClose}
            className="text-lg text-white/70 p-3 hover:bg-white hover:text-black transition-colors duration-200"
            aria-label="Close announcement"
          >
            <FaXmark className="size-6" />
          </button>
        </div>
      )}

      {/* Navbar */}
      <header
        className={`absolute left-[calc(var(--h-contain)-20px)] right-[calc(var(--h-contain)-20px)] z-50 
      rounded-[10px] bg-[hsla(0,0%,67%,0.1)] backdrop-blur-[10px] 
      shadow-[0_2px_10px_rgba(0,0,0,0.1)] opacity-90 
      flex items-center justify-between px-6 mx-auto 
      max-w-[calc(100%-var(--h-contain)*2)] transition-all duration-500
      ${showAnnouncement && !dismissed ? "top-16" : "top-4"}`}
        style={{
          "--h-contain": "max(calc((100% - 80rem) / 2), 1.6666666667rem)",
          height: "70px",
        }}
      >
        {/* Left */}
        <div className="flex items-center gap-2 text-[#4a4a4a] opacity-80">
          <span className="font-normal text-xl text-white">Palantir</span>
        </div>

        {/* Right */}
        {/* <div className="flex items-center gap-4">
          <button
            className="w-[193px] h-11 px-4 py-2 text-[1rem] font-medium text-[#1e2124] cursor-pointer bg-white 
        hover:bg-black hover:text-white transition-colors duration-200"
          >
            Get Started
          </button>

         
          <div className="flex overflow-hidden border border-white/30 rounded-sm">
            <button className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200">
              <FiSearch className="text-[18px]" />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300"
            >
              <FiMenu className="text-[20px]" />
            </button>
          </div>
        </div> */}
        {/* Right section for desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="w-[193px] h-11 px-4 py-2 text-[1rem] font-medium text-[#1e2124] cursor-pointer bg-white 
hover:bg-black hover:text-white transition-colors duration-200"
          >
            Get Started
          </button>

          <div className="flex overflow-hidden border border-white/30 rounded-sm">
            <button className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200">
              <FiSearch className="text-[18px]" />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300"
            >
              <FiMenu className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Fixed bottom buttons for mobile */}
      </header>
        <div className="md:hidden fixed bottom-5 left-5 right-5 flex justify-between items-center z-60">
          {/* Left Buttons */}
          <div className="flex overflow-hidden border border-white/30 rounded-sm bg-white shadow-lg">
            <button className="p-3 text-black hover:bg-black hover:text-white transition duration-200">
              <FiSearch className="text-[18px]" />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-3 text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300"
            >
              <FiMenu className="text-[20px]" />
            </button>
          </div>

          {/* Get Started Button */}
          <button
            className="px-5 py-3 text-[1rem] font-medium bg-white text-black border border-white/30 
hover:bg-black hover:text-white transition-colors duration-200 rounded-sm shadow-lg"
          >
            Get Started
          </button>
        </div>

      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md text-white transition-transform duration-500 ease-in-out z-60
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <span className="text-xl font-semibold">Palantir</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/70 hover:text-white transition"
          >
            <FiX size={26} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <nav className="space-y-4 text-lg">
            <p className="uppercase text-sm tracking-wide text-white/60">
              Navigation
            </p>
            <a href="#" className="block hover:text-[#00ffff]">
              Generate Alpha
            </a>
            <a href="#" className="block hover:text-[#00ffff]">
              Our Platforms
            </a>
            <div className="ml-4 space-y-1 text-white/80">
              <a href="#" className="block hover:text-white">
                ↳ AIP
              </a>
              <a href="#" className="block hover:text-white">
                ↳ Foundry
              </a>
              <a href="#" className="block hover:text-white">
                ↳ Gotham
              </a>
              <a href="#" className="block hover:text-white">
                ↳ Apollo
              </a>
            </div>
            <a href="#" className="block hover:text-[#00ffff]">
              Offerings
            </a>
          </nav>

          <div className="pt-6 border-t border-white/20">
            <p className="uppercase text-sm tracking-wide text-white/60 mb-2">
              Latest News
            </p>
            <div className="space-y-4">
              <a href="#" className="block">
                <p className="text-sm text-white/70">CNBC, FEBRUARY 19, 2025</p>
                <p>Alex Karp talks US software dominance</p>
              </a>
              <a href="#" className="block">
                <p className="text-sm text-white/70">AXIOS, MARCH 12, 2025</p>
                <p>Palantir’s AI-fueled TITAN trucks roll into Army hands</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
