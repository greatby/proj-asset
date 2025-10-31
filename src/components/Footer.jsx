"use client";

import { useState } from "react";

export default function PalantirFooter() {
  const [region, setRegion] = useState("US");

  const columns = [
    {
      title: "Offerings",
      links: [
        "AIP",
        "Foundry",
        "Gotham",
        "Apollo",
        "MetaConstellation",
        "Edge AI",
      ],
    },
    {
      title: "Impact Studies",
      links: [
        "AI-Enabled Manufacturing",
        "Defense Operations",
        "Supply Chain Optimization",
        "Energy Transition",
        "Healthcare Delivery",
      ],
    },
    {
      title: "Capabilities",
      links: [
        "Ontology",
        "Operational AI",
        "Data Integration",
        "Digital Twin",
        "Security",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Leadership",
        "Careers",
        "Investors",
        "Newsroom",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-black text-white w-full border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="uppercase tracking-wider text-sm font-semibold text-gray-300 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#222] pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          {/* Region Selector */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 uppercase tracking-wide text-xs">
              Region:
            </span>
            <div className="flex gap-3">
              {["US", "UK", "JP", "KR"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`uppercase text-xs tracking-wide ${
                    region === r ? "text-white" : "text-gray-500"
                  } hover:text-white transition`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Cookie Button */}
          <button className="bg-transparent text-gray-400 border border-gray-700 px-4 py-2 rounded-full hover:text-white hover:border-white transition">
            Cookie Settings
          </button>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-[#222] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Palantir Technologies Inc. All Rights
            Reserved.
          </p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
