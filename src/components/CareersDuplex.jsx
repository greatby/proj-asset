"use client";

export default function CareersDuplex() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/careers.png" // replace with your actual image path
            alt="Two people in a Palantir office"
            className="rounded-md w-full max-w-[500px] object-cover"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 bg-white rounded-md p-10 text-center">
          <h3 className="text-[2rem] font-title md:text-[3rem] font-normal text-[#111] mb-6">
            There is so much left to build
          </h3>
          <p className="text-[#333] text-[26px] leading-relaxed mb-8">
            Palantirians deliver mission-critical outcomes for the West's most
            important institutions.
          </p>
          <a
            href="#"
            className="inline-block text-sm uppercase tracking-wider border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
