import Image from "next/image";

const offerings = [
  {
    id: 1,
    title: "Cloud hosting and data integration",
    icon: "/images/Group_14035.png",
  },
  {
    id: 2,
    title: "Flexible analytics and visualization",
    icon: "/images/Control_panel.png",
  },
  {
    id: 3,
    title: "Access to state-of-the-art LLMs OOTB",
    icon: "/images/Group_14028.png",
  },
  {
    id: 4,
    title: "Agent building and application deployment",
    icon: "/images/Group_14034.png",
  },
  {
    id: 5,
    title: "Operational decision-making and capture",
    icon: "/images/Group_14037.png",
  },
];

export default function AIOfferings() {
  return (
    <section className="w-full bg-white text-[#1a1a1a] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-normal mb-12 leading-snug">
          Palantir offers a continuously updated, fully managed AI infrastructure spanning:
        </h2>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item) => (
            <div
              key={item.id}
              className="flex flex-col min-h-[280px] items-start justify-start  p-6 bg-[#f9f9f9]"
            >
              {/* Icon */}
              <div className="w-[32px] h-[32px] mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[1rem] md:text-[2rem] leading-snug font-normal text-[#1f1f1f]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
