"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Handle client-side mounting for Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open, and reset states
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        consent: false,
      });
      setSubmitStatus("idle");
      setErrorMessage("");
      setPhoneError("");
      setEmailError("");

      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, phone: digits });
    setPhoneError(
      digits.length === 0 || digits.length === 10
        ? ""
        : "Phone number must be exactly 10 digits."
    );
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
    if (!value) {
      setEmailError("");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Enquiry Modal",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitStatus("success");
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div key="enquire-modal-root" className="relative z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-y-auto sm:overflow-hidden max-h-[90vh] sm:max-h-none pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                  Enquire Now
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Form */}
              {submitStatus === "success" ? (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-[#D4F757]/10 rounded-full flex items-center justify-center text-[#D4F757] animate-pulse">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-black tracking-tight">Enquiry Received!</h4>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. We will get in touch with you shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-8 py-3 bg-black text-white rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 pb-6 sm:p-6 space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name</label>
                    <input
                      type="text"
                      id="modal-name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-gray-200 py-2 sm:py-3 text-black bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-sm sm:text-base disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                    <input
                      type="email"
                      id="modal-email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      className="w-full border-b border-gray-200 py-2 sm:py-3 text-black bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-sm sm:text-base disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                    {emailError && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      required
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full border-b border-gray-200 py-2 sm:py-3 text-black bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-sm sm:text-base disabled:opacity-50"
                      placeholder="0000000000"
                    />
                    {phoneError && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{phoneError}</p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      required
                      disabled={isSubmitting}
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-black border-gray-300 rounded focus:ring-black disabled:opacity-50"
                    />
                    <label htmlFor="modal-consent" className="text-xs sm:text-sm text-gray-600 leading-normal sm:leading-tight cursor-pointer hover:text-black transition-colors">
                      I agree to be contacted by 4Pillars Developers and accept the <a href="/privacy-policy" className="underline hover:text-black">Privacy Policy</a> and <a href="/terms-of-service" className="underline hover:text-black">Terms of Service</a>.
                    </label>
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-xs sm:text-sm text-red-500 font-medium text-center">
                      {errorMessage}
                    </p>
                  )}

                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 cursor-pointer sm:py-4 bg-black text-white rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}