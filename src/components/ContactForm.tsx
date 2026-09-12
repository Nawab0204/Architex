import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  FileCheck,
  Loader2,
  ShieldCheck,
  Clock,
  Check,
  RotateCw
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  timeline: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Extension',
  location: '',
  estimatedBudget: '£50,000 - £150,000',
  timeline: 'Within 3–6 months',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'recaptcha', string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Google reCAPTCHA interactive state
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);

  const handleRecaptchaClick = () => {
    if (recaptchaVerified || recaptchaLoading) return;
    setRecaptchaLoading(true);
    setTimeout(() => {
      setRecaptchaLoading(false);
      setRecaptchaVerified(true);
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    }, 600);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData | 'recaptcha', string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description of your project (min 10 characters).';
    }

    if (!recaptchaVerified) {
      newErrors.recaptcha = 'Please verify that you are not a robot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFiles([]);
    }, 800);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const dropped = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...dropped]);
    }
  };

  return (
    <div className="bg-white border border-[#e5e2d9] p-6 sm:p-8 lg:p-10 shadow-sm rounded-sm">
      {isSuccess ? (
        <div id="contact-success-message" className="py-12 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#111111]">
            Enquiry Received
          </h3>
          <p className="text-sm text-[#5c5850] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Realise Architecture. An architect will review your project requirements and respond within 1–2 business days.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData(INITIAL_FORM);
                setRecaptchaVerified(false);
              }}
              className="px-6 py-2.5 bg-[#111111] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D01020] transition-colors rounded-sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-mono font-medium text-[#111111] block">
                Full Name <span className="text-[#D01020]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full px-4 py-3 bg-[#fbfaf7] border text-sm text-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm ${
                  errors.name ? 'border-[#D01020]' : 'border-[#e5e2d9] focus:border-[#111111]'
                }`}
                aria-invalid={!!errors.name}
                required
              />
              {errors.name && (
                <p className="text-xs text-[#D01020] flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-mono font-medium text-[#111111] block">
                Email Address <span className="text-[#D01020]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="e.g. sarah@example.com"
                className={`w-full px-4 py-3 bg-[#fbfaf7] border text-sm text-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm ${
                  errors.email ? 'border-[#D01020]' : 'border-[#e5e2d9] focus:border-[#111111]'
                }`}
                aria-invalid={!!errors.email}
                required
              />
              {errors.email && (
                <p className="text-xs text-[#D01020] flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-xs font-mono font-medium text-[#111111] block">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 07700 900123"
                className="w-full px-4 py-3 bg-[#fbfaf7] border border-[#e5e2d9] text-sm text-[#111111] focus:border-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-1.5">
              <label htmlFor="contact-project-type" className="text-xs font-mono font-medium text-[#111111] block">
                Project Type
              </label>
              <select
                id="contact-project-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-[#fbfaf7] border border-[#e5e2d9] text-sm text-[#111111] focus:border-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm"
              >
                <option value="Extension">Single / Double Storey Extension</option>
                <option value="Loft Conversion">Loft Conversion / Dormer</option>
                <option value="New Build">Bespoke New Build Home</option>
                <option value="Renovation">Whole House Renovation</option>
                <option value="Planning Only">Planning Advice &amp; Permissions Only</option>
                <option value="Building Regulations">Building Regulations &amp; Tech Drawings</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label htmlFor="contact-location" className="text-xs font-mono font-medium text-[#111111] block">
                Property Location / Postcode
              </label>
              <input
                id="contact-location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Solihull, B91 or Harborne, B17"
                className="w-full px-4 py-3 bg-[#fbfaf7] border border-[#e5e2d9] text-sm text-[#111111] focus:border-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm"
              />
            </div>

            {/* Budget Range */}
            <div className="space-y-1.5">
              <label htmlFor="contact-budget" className="text-xs font-mono font-medium text-[#111111] block">
                Estimated Budget Range
              </label>
              <select
                id="contact-budget"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className="w-full px-4 py-3 bg-[#fbfaf7] border border-[#e5e2d9] text-sm text-[#111111] focus:border-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm"
              >
                <option value="Under £50,000">Under £50,000</option>
                <option value="£50,000 - £100,000">£50,000 - £100,000</option>
                <option value="£100,000 - £200,000">£100,000 - £200,000</option>
                <option value="£200,000 - £400,000">£200,000 - £400,000</option>
                <option value="£400,000+">£400,000+</option>
                <option value="Still exploring / Not sure yet">Still exploring / Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-mono font-medium text-[#111111] block">
              Tell us about your project <span className="text-[#D01020]">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="What are your main goals? (e.g. open plan kitchen diner with sliding doors, extra bedroom in loft, modern garden room, or planning queries)..."
              className={`w-full px-4 py-3 bg-[#fbfaf7] border text-sm text-[#111111] focus:bg-white focus:outline-none transition-colors rounded-sm ${
                errors.message ? 'border-[#D01020]' : 'border-[#e5e2d9] focus:border-[#111111]'
              }`}
              aria-invalid={!!errors.message}
              required
            />
            {errors.message && (
              <p className="text-xs text-[#D01020] flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
              </p>
            )}
          </div>

          {/* File Upload Area */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-medium text-[#111111] block">
              Attach Photos, Sketches or Estate Agent Floorplans (Optional)
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('contact-file-input')?.click()}
              className={`border border-dashed p-4 text-center cursor-pointer transition-colors rounded-sm ${
                isDragging ? 'border-[#D01020] bg-[#fbfaf7]' : 'border-[#dcd8cc] bg-[#fbfaf7] hover:border-[#111111]'
              }`}
            >
              <input
                id="contact-file-input"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-4 h-4 text-[#706c64] mx-auto mb-1" />
              <p className="text-xs text-[#111111]">
                Drop files here, or <span className="text-[#D01020] font-semibold underline">browse files</span>
              </p>
              <p className="text-[11px] font-mono text-[#8c887f] mt-0.5">
                PDF, JPG, PNG up to 25MB
              </p>
            </div>

            {files.length > 0 && (
              <div className="space-y-1.5 pt-1">
                {files.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-[#f4f1ea] border border-[#e5e2d9] text-xs">
                    <span className="flex items-center gap-2 truncate text-[#111111]">
                      <FileCheck className="w-3.5 h-3.5 text-[#D01020]" />
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="text-[#8c887f] hover:text-[#D01020] p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GOOGLE RECAPTCHA V2 COMPONENT */}
          <div className="pt-2">
            <div
              id="google-recaptcha-box"
              className="inline-block bg-[#f9f9f9] border border-[#d3d3d3] rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] p-3 select-none"
            >
              <div className="flex items-center gap-4">
                {/* Checkbox / Spinner / Checkmark */}
                <button
                  type="button"
                  id="recaptcha-anchor"
                  onClick={handleRecaptchaClick}
                  disabled={recaptchaVerified || recaptchaLoading}
                  className={`w-7 h-7 rounded-[2px] border flex items-center justify-center transition-all ${
                    recaptchaVerified
                      ? 'bg-white border-emerald-500 text-emerald-600'
                      : recaptchaLoading
                      ? 'bg-white border-blue-400'
                      : 'bg-white border-[#c1c1c1] hover:border-[#999999]'
                  }`}
                  aria-label="Google reCAPTCHA checkbox: I'm not a robot"
                >
                  {recaptchaLoading ? (
                    <RotateCw className="w-4 h-4 text-blue-500 animate-spin" />
                  ) : recaptchaVerified ? (
                    <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                  ) : null}
                </button>

                <label
                  htmlFor="recaptcha-anchor"
                  onClick={handleRecaptchaClick}
                  className="text-xs sm:text-sm font-sans text-[#222222] font-medium cursor-pointer"
                >
                  I'm not a robot
                </label>

                {/* Official Google reCAPTCHA Badge */}
                <div className="flex flex-col items-center ml-4 pl-4 border-l border-[#e0e0e0] shrink-0 text-center">
                  <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z"
                      fill="#1A73E8"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M34 24C34 18.48 29.52 14 24 14C19.8 14 16.2 16.6 14.8 20.3L18.4 21.8C19.3 19.3 21.4 17.6 24 17.6C27.5 17.6 30.4 20.5 30.4 24C30.4 27.5 27.5 30.4 24 30.4C22.2 30.4 20.6 29.6 19.5 28.3L16.9 30.9C18.7 32.8 21.2 34 24 34C29.52 34 34 29.52 34 24Z"
                      fill="#1A73E8"
                    />
                    <path
                      d="M24 10V18L30 14L24 10Z"
                      fill="#4285F4"
                    />
                  </svg>
                  <span className="text-[9px] font-sans text-[#555555] font-semibold leading-tight mt-0.5">
                    reCAPTCHA
                  </span>
                  <div className="flex items-center gap-1 text-[8px] text-[#777777] mt-0.5">
                    <a
                      href="https://www.google.com/intl/en/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Privacy
                    </a>
                    <span>&bull;</span>
                    <a
                      href="https://www.google.com/intl/en/policies/terms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {errors.recaptcha && (
              <p className="text-xs text-[#D01020] flex items-center gap-1 mt-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.recaptcha}
              </p>
            )}
          </div>

          {/* Submit Button & Assurance */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#e5e2d9]">
            <button
              id="contact-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-[#D01020] hover:bg-[#b00d1b] text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow hover:shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center gap-4 text-xs text-[#706c64]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#D01020]" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D01020]" />
                <span>1-2 day response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D01020]" />
                <span>No spam</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
