// src/pages/HomeExtraSections.jsx
import React from "react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/images2.webp";
import image3 from "../assets/image3.webp";
import Footer from "../components/Footer/Footer";

export default function HomeExtraSections() {
  return (
    <>
      {/* ===== Viadocs Features Section ===== */}
      <section className="mt-0 py-16 bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-white text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          Work Smarter with <span className="text-[#4066E0]">Viadocs</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-10 px-4">
          Whether you’re a student preparing reports or an employee managing PDFs, 
          Viadocs brings everything together in one seamless, powerful workspace.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[image1, image2, image3].map((img, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl bg-[#EAF6FF] shadow-inner">
                  <img
                    src={img}
                    alt={`Feature ${i + 1}`}
                    width="80"
                    height="80"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {i === 0 && "Create Documents Instantly"}
                {i === 1 && "All-in-One PDF Tools"}
                {i === 2 && "AI-Powered Assistance"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {i === 0 &&
                  "Generate professional projects and resumes in seconds with Viadocs’ AI document builder."}
                {i === 1 &&
                  "Merge, split, compress, or convert PDFs instantly—securely and anywhere."}
                {i === 2 &&
                  "Let AI summarize, rewrite, or extract key data to boost your productivity."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Premium Section (simplified) ===== */}
      <section className="py-16 bg-gradient-to-r from-[#4066E0]/10 via-[#1EC6D7]/10 to-[#6A3FD7]/10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Unlock More with <span className="text-[#4066E0]">Viadocs Premium</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-8 px-4">
          Upgrade for unlimited AI usage, faster tools, and advanced document features.
        </p>
        <button
          disabled
          className="px-6 py-3 font-semibold rounded-full bg-gradient-to-r from-[#4066E0] to-[#1EC6D7] text-white shadow-md opacity-90 cursor-not-allowed"
        >
          Go Premium 🚀
        </button>
      </section>

      <Footer />
    </>
  );
}
