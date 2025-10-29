// src/components/Footer/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  FileText,
  Wrench,
  Bot,
  ShieldCheck,
  MessageCircleQuestion,
  Mail,
  Scale,
} from "lucide-react";

export default function Footer({ sticky = false }) {
  const navigate = useNavigate();
  const stickyClasses = sticky ? "fixed bottom-0 left-0 w-full z-40 shadow-inner" : "";

  return (
    <footer
      className={`${stickyClasses} bg-gradient-to-r from-[#1EC6D7] via-[#4066E0] to-[#6A3FD7] text-white`}
    >
      <div className="max-w-7xl px-6 py-10 mx-auto">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 gap-8 text-center sm:text-left sm:grid-cols-3">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold tracking-wide">Pro Doc</h2>
            <p className="mt-2 text-sm text-gray-100">
              Built with passion by{" "}
              <span className="font-semibold text-white">Work Wizards Innovations</span>.
              Empowering creators and teams with smarter document tools.
            </p>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white uppercase">Main Pages</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li
                onClick={() => navigate("/home")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <Home size={14} /> Home
              </li>
              <li
                onClick={() => navigate("/create-doc")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <FileText size={14} /> Create Doc
              </li>
              <li
                onClick={() => navigate("/tools")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <Wrench size={14} /> Tools
              </li>
              <li
                onClick={() => navigate("/DocAI")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <Bot size={14} /> Docxy (AI)
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white uppercase">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li
                onClick={() => navigate("/privacy-policy")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <ShieldCheck size={14} /> Privacy Policy
              </li>
              <li
                onClick={() => navigate("/terms")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <Scale size={14} /> Terms & Conditions
              </li>
              <li
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <Mail size={14} /> Contact Us
              </li>
              <li
                onClick={() => navigate("/help")}
                className="flex items-center gap-2 transition cursor-pointer hover:text-yellow-300"
              >
                <MessageCircleQuestion size={14} /> Help Center
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="mt-10 text-center border-t border-white/20 pt-4">
          <p className="text-sm text-gray-200">
            © 2025 <span className="font-semibold text-white">Pro Doc</span>. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-300">
            Designed & Developed by{" "}
            <span className="font-semibold text-white">Work Wizards Innovations</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
