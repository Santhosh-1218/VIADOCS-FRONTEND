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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800">
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
          <div className="p-8 bg-white border border-gray-200 shadow-lg rounded-2xl">
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <img
                src={wwiLogo}
                alt="Work Wizards Innovations Logo"
                className="w-32 h-32 mb-4 rounded-lg shadow-md"
              />
              <h1 className="text-4xl font-extrabold text-purple-700">
                About Work Wizards Innovations
              </h1>
              <p className="max-w-2xl mt-3 text-lg text-gray-600">
                <strong>Work Wizards Innovations (WWI)</strong> is a growing
                startup focused on building smart, secure, and efficient
                technology solutions that simplify everyday work.
              </p>
              <a
                href="https://wwi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#4066E0] hover:underline text-base font-medium"
              >
                🌐 Visit our official website — www.wwi.org.in
              </a>
            </div>

            {/* Product Section */}
            <div className="p-6 text-center border border-gray-200 rounded-xl bg-gradient-to-br from-[#EAF6FF]/40 to-[#EAE4FF]/40 hover:shadow-md">
              <Briefcase className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Viadocs — Our Debut Product
              </h2>
              <p className="max-w-2xl mx-auto mt-2 text-gray-600">
                <strong>Viadocs</strong> is an AI-powered document creation
                platform under <strong>Viadocs</strong>. It combines modern UI
                design, PDF tools, and AI features for document generation and
                smart file management — making it perfect for creators,
                professionals, and students.
              </p>
              <p className="mt-2 text-gray-600">
                With Viadocs, we’re redefining how people interact with digital
                documents — blending simplicity, automation, and innovation.
              </p>
            </div>

            {/* Mission, Vision, and Core Values */}
            <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
              {/* Mission */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-gray-200 rounded-xl hover:shadow-lg hover:bg-purple-50">
                <Target className="w-10 h-10 mb-4 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h2>
                <p className="mt-2 text-gray-600">
                  To revolutionize document creation with artificial intelligence
                  and empower users through intuitive, accessible, and secure
                  productivity tools.
                </p>
              </div>

              {/* Team */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-gray-200 rounded-xl hover:shadow-lg hover:bg-purple-50">
                <Users className="w-10 h-10 mb-4 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Who We Are
                </h2>
                <p className="mt-2 text-gray-600">
                  A passionate team of developers, designers, and innovators
                  focused on AI, automation, and web technologies that make
                  document management simple and smart.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-gray-200 rounded-xl hover:shadow-lg hover:bg-purple-50">
                <Globe className="w-10 h-10 mb-4 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Global Vision
                </h2>
                <p className="mt-2 text-gray-600">
                  We aim to make Work Wizards Innovations a recognized leader in
                  AI-driven digital solutions — empowering global users to create
                  and collaborate effortlessly.
                </p>
              </div>

              {/* Why Choose */}
              <div className="flex flex-col items-center p-6 text-center transition-all border border-gray-200 rounded-xl hover:shadow-lg hover:bg-purple-50">
                <Info className="w-10 h-10 mb-4 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Why Choose Viadocs?
                </h2>
                <p className="mt-2 text-gray-600">
                  Viadocs offers next-level productivity — combining secure cloud
                  document management, collaboration, and AI-powered automation in
                  one elegant platform.
                </p>
              </div>
            </div>

            {/* Compliance & Transparency */}
            <div className="p-6 mt-12 border border-gray-200 rounded-xl bg-gradient-to-br from-[#EAF6FF]/40 to-[#EAE4FF]/40 hover:shadow-md">
              <ShieldCheck className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <h2 className="text-2xl font-semibold text-center text-gray-800">
                Transparency, Privacy & Google AdSense
              </h2>
              <p className="max-w-3xl mx-auto mt-3 text-gray-600 text-center">
                We maintain complete transparency in our data practices. Viadocs
                uses <strong>Google Analytics 4</strong> for anonymous traffic
                tracking and may display ads using <strong>Google AdSense</strong>.
                These services help us enhance user experience and fund further
                product innovation.
              </p>
              <p className="mt-2 text-center text-gray-600">
                Learn more about how we protect your data in our{" "}
                <span
                  className="text-[#4066E0] hover:underline cursor-pointer"
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* Commitment */}
            <div className="p-6 mt-10 text-center border border-gray-200 rounded-xl hover:shadow-md">
              <LineChart className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Commitment to Innovation
              </h2>
              <p className="max-w-3xl mx-auto mt-2 text-gray-600">
                Every line of code, every design choice, and every tool we build
                reflects our dedication to user-first innovation.  
                We’re constantly evolving — ensuring Viadocs grows with you and
                adapts to new technologies responsibly.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-purple-700">
              “Building Smarter Workflows — Powered by Work Wizards Innovations.”
            </h2>
            <p className="mt-2 text-gray-600">
              Join us in transforming digital documentation into intelligent
              creation. Together, we make work effortless.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
