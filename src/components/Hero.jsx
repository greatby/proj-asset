"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/first_frame.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight space-x-2">
          <span className="inline-block">AI-Powered</span>{" "}
          <span className="inline-block">Automation</span> <br />
          <span className="inline-block">for</span>{" "}
          <span className="inline-block">Every</span>{" "}
          <span className="inline-block">Decision</span>
        </h1>

        {/* Arrow + Text */}
        {/* <div className="mt-10 flex flex-col items-center text-sm tracking-wider opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 242.07 238.58"
            fill="#ffffff"
            className="mb-2 animate-bounce"
          >
            <path d="M135.85,0v187.55l106.22-93.17v38.53l-121.31,105.67L0,132.91v-38.53l105.67,93.17V0"></path>
          </svg>
          <p>Scroll to Explore</p>
        </div> */}
      </div>
    </section>
  );
}
