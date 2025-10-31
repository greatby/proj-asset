// "use client";

// import { FiSearch, FiMenu } from "react-icons/fi";

// export default function Navbar() {
//   return (
//     <header
//       className="sticky top-4 left-[calc(var(--h-contain)-20px)] right-[calc(var(--h-contain)-20px)]
//       h-[70px] z-50 rounded-[10px] bg-[hsla(0,0%,67%,0.1)]
//       backdrop-blur-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]
//       opacity-90 flex items-center justify-between px-6 mx-auto max-w-[calc(100%-var(--h-contain)*2)]"
//       style={{
//         "--h-contain": "max(calc((100% - 80rem) / 2), 1.6666666667rem)",
//       }}
//     >
//       {/* Left section */}
//       <div className="flex items-center gap-2 text-[#4a4a4a] opacity-80">
//         <span className="font-normal text-xl text-white">Palantir</span>
//       </div>

//       {/* Right section */}
//       <div className="flex items-center gap-4">
//         <button
//           className=" w-[193px] h-11 px-4 py-2 text-[1rem] font-medium text-[#1e2124] cursor-pointer bg-white
//           hover:bg-black hover:text-white transition-colors duration-200"
//         >
//           Get Started
//         </button>

//         <div className="flex overflow-hidden border border-white/30">
//           <button
//             className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200"
//           >
//             <FiSearch className="text-[18px]" />
//           </button>
//           <button
//             className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300"
//           >
//             <FiMenu className="text-[20px]" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { FiMenu, FiSearch } from "react-icons/fi";

// export default function Navbar() {
//   const [showAnnouncement, setShowAnnouncement] = useState(true);

//   useEffect(() => {
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
//   }, []);

//   return (
//     <div className="fixed w-full z-50">
//       {/* Announcement Bar */}

//       <div
//         className={`w-full bg-black flex justify-between px-4 text-white text-sm text-center py-3 transition-all duration-500 ${
//           showAnnouncement
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-full pointer-events-none"
//         }`}
//       >
//         <p className="text-[15px]">
//           Read CEO Alex Karp’s{" "}
//           <a
//             href="/q2-2025-letter"
//             className="underline underline-offset-2 hover:text-[#003d3d] transition"
//           >
//             Letter to Shareholders
//           </a>
//         </p>
//         <button>X</button>
//       </div>

//       {/* Navbar */}
//       <header
//         className={`absolute left-[calc(var(--h-contain)-20px)] right-[calc(var(--h-contain)-20px)] z-50
//       rounded-[10px] bg-[hsla(0,0%,67%,0.1)] backdrop-blur-[10px]
//       shadow-[0_2px_10px_rgba(0,0,0,0.1)] opacity-90
//       flex items-center justify-between px-6 mx-auto
//       max-w-[calc(100%-var(--h-contain)*2)] transition-all duration-500
//       ${showAnnouncement ? "top-12" : "top-4"}`}
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

"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [dismissed, setDismissed] = useState(false); // track manual close

  useEffect(() => {
    if (dismissed) return; // stop scroll logic if manually closed

    let lastScrollY = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY + 10)
        setShowAnnouncement(false); // scroll down → hide
      else if (current < lastScrollY - 10) setShowAnnouncement(true); // scroll up → show
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
          className={`w-full bg-black flex justify-between items-center pl-6 text-white text-sm  transition-all duration-500 ${
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
            className="text-lg text-white/70 p-3 hover:bg-white hover:text-black  transition-colors duration-200"
            aria-label="Close announcement"
          >
           <FaXmark className="size-6"/>
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
      ${showAnnouncement && !dismissed ? "top-12" : "top-4"}`}
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
        <div className="flex items-center gap-4">
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
            <button className="p-2 bg-white text-black hover:bg-black hover:text-white transition duration-200 border-l border-gray-300">
              <FiMenu className="text-[20px]" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
