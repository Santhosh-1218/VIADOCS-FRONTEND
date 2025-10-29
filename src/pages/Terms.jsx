import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
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

          {/* Main Content Card */}
          <div className="p-8 bg-white border border-gray-200 shadow-lg rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-purple-600" />
              <h1 className="ml-3 text-3xl font-extrabold text-gray-800">
                Terms & Conditions
              </h1>
            </div>

            <p className="mb-6 text-gray-600 text-center text-sm sm:text-base">
              These Terms and Conditions govern your use of the{" "}
              <strong>Pro Doc (Viadocs)</strong> website and its services,
              operated by{" "}
              <strong>Work Wizards Innovations</strong>.
              By accessing or using our platform, you agree to comply with and be bound by these terms.
            </p>

            {/* Sections */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By using Pro Doc, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and all
                  applicable laws and regulations. If you do not agree with any
                  of these terms, you are prohibited from using or accessing this
                  site.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  2. Use of Our Services
                </h2>
                <p>
                  You agree to use the website for lawful purposes only and in a
                  way that does not infringe on the rights of, restrict, or inhibit
                  anyone else's use of the site. Uploading harmful, offensive, or
                  copyrighted material without permission is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  3. User Accounts
                </h2>
                <p>
                  When you create an account on Pro Doc, you must provide accurate,
                  complete, and current information. You are responsible for
                  safeguarding your account credentials and for all activities
                  under your account.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  4. Intellectual Property Rights
                </h2>
                <p>
                  All content, logos, and materials available on this site are the
                  property of <strong>Work Wizards Innovations</strong> and are
                  protected by applicable intellectual property laws. You may not
                  reproduce, distribute, or modify any part of the website without
                  prior written consent.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  5. Limitation of Liability
                </h2>
                <p>
                  In no event shall Work Wizards Innovations or its developers be
                  held liable for any damages arising from the use or inability to
                  use the materials on this site. All tools and services are
                  provided “as is” without warranties of any kind.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  6. Third-Party Links
                </h2>
                <p>
                  Our site may contain links to third-party websites that are not
                  owned or controlled by us. We are not responsible for the content
                  or practices of any third-party sites or services.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  7. Privacy Policy
                </h2>
                <p>
                  Your privacy is important to us. Please read our{" "}
                  <span
                    className="text-[#4066E0] hover:underline cursor-pointer"
                    onClick={() => navigate("/privacy-policy")}
                  >
                    Privacy Policy
                  </span>{" "}
                  to understand how we collect and use your data.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  8. Updates to Terms
                </h2>
                <p>
                  We may revise these Terms from time to time without prior notice.
                  By continuing to use the website, you agree to be bound by the
                  updated version.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-xl font-semibold text-[#4066E0]">
                  9. Contact Us
                </h2>
                <p>
                  For questions about these Terms, please contact us at: <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:boppudisanthosh44@gmail.com"
                    className="text-[#4066E0] hover:underline"
                  >
                    boppudisanthosh44@gmail.com
                  </a>
                  <br />
                  <strong>Organization:</strong> Work Wizards Innovations
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
