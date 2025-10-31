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
import wwiLogo from "../assets/wwi-logo.webp";

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

          {/* Company Info */}
          <div className="p-8 bg-white border border-[#1EC6D7]/30 shadow-lg rounded-2xl">
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <img
                src={wwiLogo}
                alt="Work Wizards Innovations Logo"
                className="w-32 h-32 mb-4 rounded-xl shadow-lg border border-[#1EC6D7]/20"
              />
              <h1 className="text-4xl font-extrabold text-[#4066E0]">
                About Work Wizards Innovations (WWI)
              </h1>
              <p className="max-w-2xl mt-3 text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#1EC6D7]">Work Wizards Innovations</strong> is an emerging
                tech startup focused on developing AI-powered platforms and digital productivity
                solutions. Our mission is to simplify workflows, enhance collaboration, and create
                a smarter, more efficient way to work in the digital era.
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

            {/* Viadocs Product */}
            <div className="p-6 text-center border border-[#1EC6D7]/30 rounded-xl bg-gradient-to-br from-[#EAF6FF]/70 to-[#E4E1FF]/70 shadow-sm hover:shadow-md transition-all">
              <Briefcase className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Viadocs — Our Flagship AI Document Platform
              </h2>
              <p className="max-w-2xl mx-auto mt-2 text-gray-600 leading-relaxed">
                <strong className="text-[#4066E0]">Viadocs</strong> is an AI-powered document and
                PDF management platform by WWI. It provides tools for PDF conversion, editing,
                compression, and intelligent content generation — designed for professionals,
                students, and organizations seeking smart documentation solutions.
              </p>
              <p className="mt-2 text-gray-600">
                Our technology integrates automation, AI, and cloud storage to make document
                management effortless and secure.
              </p>
            </div>

            {/* Mission, Team, Vision, Why Choose */}
            <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
              {/* Mission */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Target className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Our Mission
                </h2>
                <p className="mt-2 text-gray-600">
                  To empower individuals and businesses with AI-driven tools that make document
                  creation, sharing, and automation easier than ever.
                </p>
              </div>

              {/* Team */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Users className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Who We Are
                </h2>
                <p className="mt-2 text-gray-600">
                  A passionate group of innovators, designers, and developers working together to
                  craft intelligent solutions that merge creativity with technology.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Globe className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Our Global Vision
                </h2>
                <p className="mt-2 text-gray-600">
                  To become a leading force in AI-powered business solutions worldwide — helping
                  organizations boost efficiency, security, and collaboration through digital
                  innovation.
                </p>
              </div>

              {/* Why Choose */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-[#1EC6D7]/30 rounded-xl hover:shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#EAF6FF] hover:to-[#E4E1FF]">
                <Info className="w-10 h-10 mb-4 text-[#4066E0]" />
                <h2 className="text-xl font-semibold text-[#4066E0]">
                  Why Choose Viadocs?
                </h2>
                <p className="mt-2 text-gray-600">
                  Viadocs combines AI automation, secure cloud storage, and a user-friendly
                  interface, making document creation faster, smarter, and safer — all in one
                  integrated workspace.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="p-6 mt-12 border border-[#1EC6D7]/30 rounded-xl bg-gradient-to-br from-[#EAF6FF]/70 to-[#E4E1FF]/70 shadow-sm hover:shadow-md">
              <ShieldCheck className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-center text-[#4066E0]">
                Transparency, Privacy & Google AdSense Policy
              </h2>
              <p className="max-w-3xl mx-auto mt-3 text-gray-600 text-center">
                We respect user privacy and follow full transparency in our data handling
                practices. Our platform uses <strong>Google Analytics 4</strong> to track anonymous
                site metrics and integrates <strong>Google AdSense</strong> responsibly for ad
                monetization without disrupting user experience.
              </p>
              <p className="mt-2 text-center text-gray-600">
                For details, read our{" "}
                <span
                  className="text-[#4066E0] hover:text-[#1EC6D7] hover:underline cursor-pointer font-medium"
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </span>.
              </p>
            </div>

            {/* Innovation Commitment */}
            <div className="p-6 mt-10 text-center border border-[#1EC6D7]/30 rounded-xl bg-white hover:shadow-md hover:bg-gradient-to-br hover:from-[#EAF6FF] hover:to-[#E4E1FF] transition-all">
              <LineChart className="w-10 h-10 mx-auto mb-3 text-[#4066E0]" />
              <h2 className="text-2xl font-semibold text-[#4066E0]">
                Our Commitment to AI Innovation
              </h2>
              <p className="max-w-3xl mx-auto mt-2 text-gray-600">
                Work Wizards Innovations continuously explores emerging AI technologies to bring
                advanced automation into document workflows — responsibly and ethically.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#4066E0]">
              “Empowering Productivity Through AI — The Future is Viadocs.”
            </h2>
            <p className="mt-2 text-gray-600">
              Join us in transforming the way people create, collaborate, and innovate.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
