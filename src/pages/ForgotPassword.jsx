import React, { useState, useEffect } from "react";
import {
  Mail,
  KeyRound,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  // ✅ Use environment variable correctly for Create React App
  const BASE_URL =
    process.env.REACT_APP_API_URL
      ? `${process.env.REACT_APP_API_URL}/api/auth`
      : "https://viadocs-backend-production.up.railway.app/api/auth";

  // ⏳ OTP resend countdown
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // ✅ Step 1 — Check Email Availability
  const checkEmailAvailability = async () => {
    if (!email.trim()) return;
    setEmailStatus("checking");

    try {
      const res = await fetch(`${BASE_URL}/check-email?email=${email}`);
      const data = await res.json();

      if (res.ok && data.available === false) {
        setEmailStatus("exists"); // Email registered
      } else {
        setEmailStatus("notfound");
      }
    } catch (err) {
      console.error("checkEmail error:", err);
      setEmailStatus("error");
      toast.error("Unable to verify email. Try again later.");
    }
  };

  // ✅ Step 1 — Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (emailStatus !== "exists") {
      toast.warning("Enter a registered email first!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP sent successfully to your email!");
        setStep(2);
        setTimer(60);
      } else {
        toast.error(data.message || "Failed to send OTP. Try again later.");
      }
    } catch (err) {
      console.error("send-otp error:", err);
      toast.error("Server not responding. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2 — Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      toast.warning("Please enter the OTP!");
      return;
    }

    setLoading(true);
    setOtpStatus("checking");

    try {
      const res = await fetch(`${BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP verified successfully!");
        setOtpStatus("valid");
        setTimeout(() => setStep(3), 800);
      } else {
        setOtpStatus("invalid");
        toast.error(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("verify-otp error:", err);
      toast.error("Could not verify OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 3 — Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.warning("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error("reset-password error:", err);
      toast.error("Server not responding!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#E8EAF6] p-6">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl transition-all duration-300">
          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-[#3F51B5] mb-6 hover:text-[#1E88E5]"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <h2 className="text-2xl font-bold text-center text-[#1E88E5] mb-4">
            Forgot Password
          </h2>

          {/* ✅ STEP 1 - Email */}
          {step === 1 && (
            <form onSubmit={handleSendOtp}>
              <div className="flex items-center border-b border-gray-300 mb-4 focus-within:border-[#3F51B5]">
                <Mail className="mr-3 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailStatus(null);
                  }}
                  onBlur={checkEmailAvailability}
                  required
                  className="w-full py-3 outline-none"
                />
                {emailStatus === "checking" && (
                  <span className="text-xs text-gray-500">⏳</span>
                )}
                {emailStatus === "exists" && (
                  <CheckCircle className="text-green-500" size={18} />
                )}
                {emailStatus === "notfound" && (
                  <XCircle className="text-red-500" size={18} />
                )}
              </div>

              {emailStatus === "notfound" && (
                <p className="text-xs text-red-500 mb-3">
                  No account found with this email.
                </p>
              )}

              {emailStatus === "exists" && (
                <p className="text-xs text-green-600 mb-3">
                  Account found! You can reset your password.
                </p>
              )}

              <button
                type="submit"
                disabled={loading || emailStatus !== "exists"}
                className={`w-full py-3 text-white rounded-full transition-all ${
                  emailStatus === "exists"
                    ? "bg-gradient-to-r from-[#3F51B5] to-[#1E88E5] hover:opacity-90"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          )}

          {/* ✅ STEP 2 - OTP */}
          {step === 2 && (
            <form onSubmit={handleVerifyOtp}>
              <div className="flex items-center border-b border-gray-300 mb-4 focus-within:border-[#3F51B5]">
                <KeyRound className="mr-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter 4-digit OTP"
                  maxLength={4}
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setOtpStatus(null);
                  }}
                  required
                  className="w-full py-3 text-center outline-none tracking-widest"
                />
                {otpStatus === "checking" && (
                  <span className="text-xs text-gray-500">⏳</span>
                )}
                {otpStatus === "valid" && (
                  <CheckCircle className="text-green-500" size={18} />
                )}
                {otpStatus === "invalid" && (
                  <XCircle className="text-red-500" size={18} />
                )}
              </div>

              {timer > 0 ? (
                <p className="text-xs text-center text-gray-600 mb-3">
                  Resend available in{" "}
                  <span className="text-[#1E88E5] font-semibold">{timer}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="block mx-auto text-sm text-[#3F51B5] hover:text-[#1E88E5] mb-3"
                >
                  Resend OTP
                </button>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#3F51B5] to-[#1E88E5] hover:opacity-90"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}

          {/* ✅ STEP 3 - Reset Password */}
          {step === 3 && (
            <form onSubmit={handleResetPassword}>
              <div className="flex items-center border-b border-gray-300 mb-4 focus-within:border-[#3F51B5]">
                <Lock className="mr-3 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full py-3 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <div className="flex items-center border-b border-gray-300 mb-6 focus-within:border-[#3F51B5]">
                <Lock className="mr-3 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#3F51B5] to-[#1E88E5] hover:opacity-90"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
