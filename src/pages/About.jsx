import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Info,
  Globe,
  Users,
  Target,
  Briefcase,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import wwiLogo from "../assets/wwi-logo.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#EAF6FF] via-[#F3F8FF] to-[#E4E1FF] text-gray-800">
      <Header />

      <main className="flex-1 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="flex justify-start mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-[#4066E0] to-[#1EC6D7] hover:opacity-90 hover:scale-[1.03] active:scale-[0.97]"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium sm:text-base">Back</span>
            </button>
          </div>

          {/* Company Intro */}
          <div className="p-8 bg-white border border-[#1EC6D7]/30 shadow-lg rounded-2xl">
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <img
                src={wwiLogo}
                alt="Work Wizards Innovations Logo"
                className="w-32 h-32 mb-4 rounded-xl shadow-lg border border-[#1EC6D7]/20"
              />
              <h1 className="text-4xl font-extrabold text-[#4066E0]">
                About Work Wizards Innovations
              </h1>
              <p className="max-w-2xl mt-3 text-lg text-gray-600">
                <strong className="text-[#1EC6D7]">Work Wizards Innovations (WWI)</strong> is a
                fast-growing startup dedicated to building <span className="text-[#4066E0] font-semibold">smart</span>,{" "}
                <span className="text-[#6A3FD7] font-semibold">secure</span>, and efficient
                technology solutions that simplify your work.
              </p>
              <a
                href="https://wwi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#4066E0] hover:text-[#1EC6D7] hover:underline text-base font-medium"
              >
                🌐 Visit our official website — www.wwi.org.in
              </a>
            </div>

            {/* Product Section */}
            <div className="p-6 text-center border border-[#1EC6D7]/30 rounded-xl bg-gradient-to-br from-[#EAF6FF]/70 to-[#E4E1FF]/70 shadow-sm hover:shadow-md transition-all">
              <Briefcase className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Viadocs — Our Debut Product
              </h2>
              <p className="max-w-2xl mx-auto mt-2 text-gray-600">
                <strong className="text-[#4066E0]">Viadocs</strong> is an AI-powered document creation
                platform under WWI. It merges modern UI design, PDF tools, and smart automation
                for seamless document generation and file management — perfect for creators,
                professionals, and students alike.
              </p>
              <p className="mt-2 text-gray-600">
                We’re redefining how people work with documents — blending simplicity,
                automation, and intelligent innovation.
              </p>
            </div>

            {/* Mission, Vision, and Core Values */}
            <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
              {/* Mission */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Target className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Our Mission
                </h2>
                <p className="mt-2 text-gray-600">
                  To revolutionize document creation with AI — empowering users through
                  intuitive, accessible, and secure productivity tools.
                </p>
              </div>

              {/* Team */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Users className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Who We Are
                </h2>
                <p className="mt-2 text-gray-600">
                  A passionate team of developers, designers, and innovators specializing in
                  AI, automation, and modern web technologies — building smarter solutions for
                  everyone.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Globe className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Global Vision
                </h2>
                <p className="mt-2 text-gray-600">
                  We aim to make Work Wizards Innovations a global leader in AI-driven solutions —
                  empowering users to create, collaborate, and automate effortlessly across
                  platforms.
                </p>
              </div>

              {/* Why Choose */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Info className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Why Choose Viadocs?
                </h2>
                <p className="mt-2 text-gray-600">
                  Viadocs combines secure cloud storage, collaboration tools, and AI-powered
                  automation in one elegant, easy-to-use workspace — designed for the future of
                  productivity.
                </p>
              </div>
            </div>

            {/* Compliance & Transparency */}
            <div className="p-6 mt-12 border border-[#1EC6D7]/30 rounded-xl bg-gradient-to-br from-[#EAF6FF]/70 to-[#E4E1FF]/70 shadow-sm hover:shadow-md">
              <ShieldCheck className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-center text-[#4066E0]">
                Transparency, Privacy & Google AdSense
              </h2>
              <p className="max-w-3xl mx-auto mt-3 text-gray-600 text-center">
                We uphold full transparency in our data practices. Viadocs uses{" "}
                <strong className="text-[#1EC6D7]">Google Analytics 4</strong> for anonymous traffic
                tracking and <strong className="text-[#1EC6D7]">Google AdSense</strong> for non-invasive ads —
                ensuring user experience and privacy remain top priorities.
              </p>
              <p className="mt-2 text-center text-gray-600">
                Learn more in our{" "}
                <span
                  className="text-[#4066E0] hover:text-[#1EC6D7] hover:underline cursor-pointer font-medium"
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* Commitment */}
            <div className="p-6 mt-10 text-center border border-[#1EC6D7]/30 rounded-xl bg-white hover:shadow-md hover:bg-gradient-to-br hover:from-[#EAF6FF] hover:to-[#E4E1FF] transition-all">
              <LineChart className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-[#4066E0]">
                Our Commitment to Innovation
              </h2>
              <p className="max-w-3xl mx-auto mt-2 text-gray-600">
                Every tool, design, and innovation reflects our dedication to
                user-first development. Viadocs evolves continuously — bringing the
                latest AI and automation advancements responsibly to every creator.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#4066E0]">
              “Building Smarter Workflows — Powered by Work Wizards Innovations.”
            </h2>
            <p className="mt-2 text-gray-600">
              Join us in transforming documentation into intelligent, effortless
              creation — the future is Viadocs.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
