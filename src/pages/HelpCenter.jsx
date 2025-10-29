import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can I create a new document in Viadocs?",
      a: "Click 'Create Doc' on the homepage or Tools page. Select your document type and start editing instantly using Viadocs' smart editor.",
    },
    {
      q: "Can I edit my PDF files?",
      a: "Yes! Go to the 'Tools' page and open 'PDF Editor'. You can easily annotate, edit, and update your PDFs directly in the browser.",
    },
    {
      q: "How do I reset my password?",
      a: "From the Login page, click 'Forgot Password' and follow the email verification steps to reset your account securely.",
    },
    {
      q: "Is Viadocs free to use?",
      a: "Yes, Viadocs offers free access to major tools without watermarks. Some AI-powered features are available under premium plans.",
    },
    {
      q: "How do I contact Viadocs support?",
      a: "Visit the 'Contact' page or email us directly at official.viadocs@gmail.com. Our support team responds within 24–48 hours.",
    },
  ];

  const filteredFaqs = faqs.filter((f) =>
    f.q.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800">
      <Header />

      <main className="flex-1 px-4 py-10 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="flex justify-start mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-[#4066E0] to-[#1EC6D7] hover:opacity-90 hover:scale-[1.03]"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium sm:text-base">Back</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="mb-10 text-center">
            <div className="flex justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-[#4066E0]" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#4066E0] sm:text-4xl">
              Help <span className="text-[#1EC6D7]">Center</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-3 text-gray-600">
              Need assistance? Find quick answers to common questions or reach out to our support team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-lg">
              <Search
                className="absolute text-[#4066E0] left-3 top-3"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help, e.g. 'PDF Editor' or 'Account'"
                className="w-full py-3 pl-10 pr-4 bg-white border border-[#1EC6D7]/40 rounded-lg shadow-sm focus:ring-2 focus:ring-[#4066E0] focus:border-transparent"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="transition-all border border-[#1EC6D7]/30 shadow-md bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex justify-between w-full px-5 py-4 text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.q}
                    </h3>
                    {openIndex === i ? (
                      <ChevronUp className="text-[#4066E0]" />
                    ) : (
                      <ChevronDown className="text-[#4066E0]" />
                    )}
                  </button>

                  {openIndex === i && (
                    <div className="px-5 pb-4 text-gray-700 border-t border-[#1EC6D7]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No results found.</p>
            )}
          </div>

          {/* Contact Support */}
          <div className="p-8 mt-12 text-center border border-[#1EC6D7]/30 shadow-xl bg-white/80 rounded-2xl backdrop-blur-md hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-[#4066E0]">
              Still Need Help?
            </h2>
            <p className="mt-2 text-gray-600">
              Couldn’t find the answer you’re looking for? Our friendly team is here to help you 24/7.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 mt-5 font-medium text-white transition-transform rounded-full bg-gradient-to-r from-[#4066E0] to-[#1EC6D7] hover:scale-[1.05] hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Contact Support
            </button>
          </div>

          {/* Legal Transparency Section (AdSense-friendly) */}
          <div className="p-6 mt-10 text-center border border-[#1EC6D7]/20 rounded-xl bg-gradient-to-br from-[#EAF6FF]/50 to-[#EAE4FF]/50">
            <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-[#4066E0]" />
            <h3 className="text-lg font-semibold text-[#4066E0] mb-2">
              Transparency & Data Safety
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm">
              Viadocs prioritizes user privacy and complies with Google AdSense and GDPR standards.
              For more details on data protection, cookies, and analytics, please visit our{" "}
              <span
                className="text-[#4066E0] hover:underline cursor-pointer"
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
