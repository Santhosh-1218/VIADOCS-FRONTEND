import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800">
      <Header />

      <main className="flex-1 px-4 py-10 sm:px-6">
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

          {/* Title */}
          <div className="mb-10 text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-[#4066E0]" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#4066E0] sm:text-4xl">
              Privacy <span className="text-[#1EC6D7]">Policy</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Last Updated:{" "}
              <span className="font-semibold text-[#4066E0]">
                October 2025
              </span>
            </p>
          </div>

          {/* Policy Card */}
          <div className="p-8 bg-white border border-[#1EC6D7]/30 shadow-xl rounded-2xl backdrop-blur-sm">
            <section className="space-y-10 leading-relaxed text-gray-700 text-sm sm:text-base">
              {/* 1. Intro */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  1. Introduction
                </h2>
                <p>
                  Welcome to <strong>Viadocs</strong>, a product of{" "}
                  <strong>Work Wizards Innovations</strong>.  
                  We value your privacy and are committed to protecting your
                  personal data. This policy outlines what information we collect,
                  how we use it, and the rights you have regarding your data.
                </p>
              </div>

              {/* 2. Data We Collect */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  2. Information We Collect
                </h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-[#1EC6D7]">Personal Information:</strong>{" "}
                    name, email address, date of birth, and profile details when
                    creating an account.
                  </li>
                  <li>
                    <strong className="text-[#1EC6D7]">Usage Data:</strong>{" "}
                    pages visited, tool usage, browser type, IP address, and
                    time spent on the site.
                  </li>
                  <li>
                    <strong className="text-[#1EC6D7]">Documents & Uploads:</strong>{" "}
                    files you create, edit, or store within Viadocs tools.  
                    These are securely stored and never shared without consent.
                  </li>
                </ul>
              </div>

              {/* 3. Use of Data */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide, maintain, and improve our services and tools.</li>
                  <li>To personalize user experience and recommend relevant features.</li>
                  <li>To monitor site security and prevent unauthorized access.</li>
                  <li>To send account updates, newsletters, or promotional messages (optional).</li>
                </ul>
              </div>

              {/* 4. Data Sharing */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  4. Data Sharing & Disclosure
                </h2>
                <p>
                  We do not sell, rent, or trade your personal data. We may share
                  limited information only with trusted partners (e.g., analytics,
                  cloud storage, AdSense) solely to operate our services, and only
                  under strict confidentiality agreements.
                </p>
              </div>

              {/* 5. Cookies */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  5. Cookies & Tracking Technologies
                </h2>
                <p>
                  Viadocs uses cookies and similar technologies to analyze traffic
                  and improve usability. You can disable cookies in your browser
                  settings, but some features may not function correctly.  
                  By using our site, you consent to our cookie usage as described
                  here.
                </p>
              </div>

              {/* 6. Google AdSense & Analytics */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  6. Google AdSense and Analytics
                </h2>
                <p>
                  We use <strong>Google AdSense</strong> to display relevant ads and{" "}
                  <strong>Google Analytics 4</strong> to understand user behavior.
                  Google may use cookies or web beacons to serve ads based on your
                  prior visits to this and other websites.  
                  You can learn more about how Google uses data at {" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1EC6D7] hover:underline"
                  >
                    policies.google.com/technologies/ads
                  </a>.
                </p>
              </div>

              {/* 7. Data Security */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  7. Data Security
                </h2>
                <p>
                  We implement SSL encryption, secure servers, and access control
                  to protect your data.  
                  Despite our efforts, no system can be 100% secure; use the service
                  at your own discretion.
                </p>
              </div>

              {/* 8. User Rights */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  8. Your Rights & Choices
                </h2>
                <p>
                  You can access, update, or delete your personal information by
                  contacting us at 
                  <a
                    href="mailto:official.viadocs@gmail.com"
                    className="text-[#1EC6D7] hover:underline"
                  >
                    official.viadocs@gmail.com
                  </a>. You may also opt out of marketing emails at any time.
                </p>
              </div>

              {/* 9. Policy Updates */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  9. Updates to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy occasionally to reflect changes in
                  our practices or legal requirements.  
                  The latest version will always be available on this page with the
                  revised date shown above.
                </p>
              </div>

              {/* 10. Contact */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[#4066E0]">
                  10. Contact Us
                </h2>
                <p>
                  For questions or concerns about this Privacy Policy or our data usage,
                  reach out to us at: <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:official.viadocs@gmail.com"
                    className="text-[#1EC6D7] hover:underline"
                  >
                    official.viadocs@gmail.com
                  </a>
                  <br />
                  <strong>Organization:</strong> Work Wizards Innovations
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
