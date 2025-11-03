"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offerings = [
  {
    id: "tyson",
    title: "Tyson",
    subtitle: "01 — TYSON",
    content: `The system was used to optimize product distribution, shipping operations, and inventory management, as well as to predict the impact of the pandemic on the workforce.`,
    details: `Tyson Foods achieved an impressive $200 million in cost savings across 20 use cases within two years, demonstrating the significant value and speed of the platform.`,
    link: "#",
    linkText: "Read: AIPCon US Sep 24 | Tyson Foods",
  },
  {
    id: "gmi",
    title: "GMI",
    subtitle: "02 — GMI",
    content: `Palantir is currently engaged with General Mills to enhance their supply chain efficiency and innovate intelligent execution capabilities.`,
    details: `We are leveraging Foundry and AIP for logistics optimization, waste reduction, and supply chain risk management.`,
    link: "#",
    linkText: "Read: AIPCon US Sep 24 | GMI",
  },
  {
    id: "aramark",
    title: "Aramark",
    subtitle: "03 — ARAMARK",
    content: `Aramark applies Foundry AIP to match point-of-sale products with similar names, drastically reducing manual intervention.`,
    details: `Through the Ontology, Aramark linked products from buy to sell side, enabling atomic-level financial and consumer analysis.`,
    link: "#",
    linkText: "Read: AIPCon Sep 24 | Aramark",
  },
  {
    id: "wendys",
    title: "Wendys",
    subtitle: "04 — WENDYS",
    content: `Wendy’s QSCC uses AIP to identify and address product shortages proactively.`,
    details: `The system integrates unstructured email data with suppliers, improving inventory and decision-making efficiency.`,
    link: "#",
    linkText: "Read: AIPCon Sep 24 | Wendy’s",
  },
  {
    id: "beyond",
    title: "Beyond Meat",
    subtitle: "05 — BEYOND MEAT",
    content: `Beyond Meat's supply chain runs on Palantir AIP — from inventory to production planning and order fulfillment.`,
    details: `AIP drives $20MM+ yearly savings by connecting data across 35+ sources, automating 50% of orders and improving decisions.`,
    link: "#",
    linkText: "Read: AIPCon US Mar 24 | Beyond Meat",
  },
];

export default function OfferingsSection() {
  const [active, setActive] = useState(offerings[4]);

  return (
    <section className="w-full py-20 px-6 md:px-16">
      {/* Left Tabs */}
      <h2 className="text-4xl font-title md:text-5xl font-normal mb-10">
        Our Offerings
      </h2>
      <div className=" flex flex-col md:flex-row justify-between gap-20 md:gap-80 bg-white text-[#1e1e1e]">
        <div className="w-full md:w-[30%] flex flex-col border-b md:border-b-0 border-gray-200 pb-6 md:pb-0">
          <div className="space-y-4">
            {offerings.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(item)}
                className={`flex justify-between items-center w-full border-b border-gray-300 pb-2 text-left transition-colors ${
                  active.id === item.id
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                <span>
                  {item.title}
                  <sup className="ml-1 text-[10px] text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </sup>
                </span>
                {active.id === item.id && (
                  <motion.span
                    layoutId="dot"
                    className="h-2 w-2 bg-black rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] mt-10 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="uppercase text-sm text-gray-400 mb-2">
                {active.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl font-medium mb-4 leading-snug">
                {active.content}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {active.details}
              </p>
              <a
                href={active.link}
                className="inline-block border-b border-black text-black hover:opacity-70 transition"
              >
                {active.linkText} →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
