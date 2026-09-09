import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Upload, X, FileCheck, Loader2, UserCheck, PhoneCall, MailCheck, Video, Building2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactPerson: string;
  contactMethod: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  contactPerson: 'lead-architect',
  contactMethod: 'email',
  projectType: 'Residential Extension',
  location: '',
  estimatedBudget: '£50,000 - £150,000',
  message: '',
};

const CONTACT_PERSON_OPTIONS = [
  {
    id: 'lead-architect',
    name: 'Lead Architect / Director',
    role: 'Principal Architectural Designer',
    desc: 'For bespoke design concepts, extensions, transformations & overall project vision.',
  },
  {
    id: 'planning-specialist',
    name: 'Planning & Conservation Specialist',
    role: 'Statutory Approvals & Heritage',
    desc: 'For local authority planning permissions, permitted development, green belt & appeals.',
  },
  {
    id: 'building-regulations',
    name: 'Technical & Building Regulations Officer',
    role: 'Technical Detailing & Building Control',
    desc: 'For building regulations drawings, structural coordination & construction packages.',
  },
  {
    id: 'studio-manager',
    name: 'Client Liaison & Studio Manager',
    role: 'Consultations & Fee Proposals',
    desc: 'For general practice enquiries, consultation bookings, timeframes & fee schedules.',
  },
];

const CONTACT_METHOD_OPTIONS = [
  { id: 'email', label: 'Email Consultation', icon: MailCheck },
  { id: 'phone', label: 'Phone Discussion', icon: PhoneCall },
  { id: 'video', label: 'Video Call (Teams/Zoom)', icon: Video },
  { id: 'in-person', label: 'Studio Meeting (Birmingham)', icon: Building2 },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief outline of your project (min 10 characters).';
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

    // Clean simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFiles([]);
    }, 900);
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

  const selectedPersonObj = CONTACT_PERSON_OPTIONS.find((p) => p.id === formData.contactPerson);

  return (
    <div id="ra-contact-form-container" className="bg-[#ffffff] border border-[#dcd8cc] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.04)] w-full">
      {isSuccess ? (
        <div id="contact-form-success-state" className="text-center py-12 space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-[#f4f1ea] border border-[#C51B18] flex items-center justify-center mx-auto text-[#C51B18]">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
            Thank you for contacting Real Life Architecture.
          </h3>
          <p className="text-sm text-[#5c5850] max-w-md mx-auto leading-relaxed font-light">
            Your enquiry has been routed directly to our <strong className="text-[#1a1a1a] font-semibold">{selectedPersonObj?.name}</strong>. A dedicated specialist will review your project brief and reach out via your preferred method ({formData.contactMethod}) within 1 business day.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData(INITIAL_FORM);
              }}
              className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all cursor-pointer"
            >
              Submit Another Project Brief
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-8" id="project-enquiry-form">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C51B18]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65]">
                RA ARCHITECTS • DIRECT CONSULTATION
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight">
              Start Your Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#5c5850] font-light">
              Select the specialist team member you would like to connect with and share your requirements.
            </p>
          </div>

          {/* RADIO BUTTONS: Selective Option for Contacting a Person */}
          <div className="space-y-3 bg-[#faf8f4] p-5 sm:p-6 border border-[#e5e0d3]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#dcd8cc] pb-3">
              <label className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#C51B18]" />
                Select Who You Wish to Contact <span className="text-[#C51B18]">*</span>
              </label>
              <span className="text-[10px] font-mono text-[#736e65] uppercase tracking-wider">
                Direct Team Routing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {CONTACT_PERSON_OPTIONS.map((person) => {
                const isChecked = formData.contactPerson === person.id;
                return (
                  <label
                    key={person.id}
                    id={`contact-person-option-${person.id}`}
                    htmlFor={`radio-person-${person.id}`}
                    className={`relative flex items-start gap-3.5 p-3.5 border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-white border-[#1a1a1a] shadow-sm ring-1 ring-[#1a1a1a]'
                        : 'bg-white/70 border-[#dcd8cc] hover:border-[#1a1a1a] hover:bg-white'
                    }`}
                  >
                    <div className="pt-0.5 shrink-0">
                      <input
                        type="radio"
                        id={`radio-person-${person.id}`}
                        name="contactPerson"
                        value={person.id}
                        checked={isChecked}
                        onChange={() => setFormData({ ...formData, contactPerson: person.id })}
                        className="w-4 h-4 accent-[#1a1a1a] cursor-pointer"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-semibold text-[#1a1a1a] block leading-tight">
                        {person.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#C51B18] uppercase tracking-wider block">
                        {person.role}
                      </span>
                      <p className="text-[11px] text-[#5c5850] font-light leading-snug mt-1">
                        {person.desc}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* RADIO BUTTONS: Preferred Contact Method */}
          <div className="space-y-3">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
              Preferred Contact Channel
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CONTACT_METHOD_OPTIONS.map((opt) => {
                const isSelected = formData.contactMethod === opt.id;
                const IconComponent = opt.icon;
                return (
                  <label
                    key={opt.id}
                    id={`contact-method-${opt.id}`}
                    htmlFor={`radio-method-${opt.id}`}
                    className={`flex flex-col items-center justify-center text-center p-3 border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#1a1a1a] text-[#f4f1ea] border-[#1a1a1a]'
                        : 'bg-[#f4f1ea] text-[#5c5850] border-[#dcd8cc] hover:border-[#1a1a1a]'
                    }`}
                  >
                    <input
                      type="radio"
                      id={`radio-method-${opt.id}`}
                      name="contactMethod"
                      value={opt.id}
                      checked={isSelected}
                      onChange={() => setFormData({ ...formData, contactMethod: opt.id })}
                      className="sr-only"
                    />
                    <IconComponent className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-[#f4f1ea]' : 'text-[#1a1a1a]'}`} />
                    <span className="text-[11px] font-mono uppercase tracking-wider leading-tight">
                      {opt.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Your Full Name <span className="text-[#C51B18]">*</span>
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
                className={`w-full px-4 py-3 bg-[#f4f1ea] border text-sm text-[#1a1a1a] focus:outline-none focus:bg-white transition-colors ${
                  errors.name ? 'border-red-500' : 'border-[#dcd8cc] focus:border-[#1a1a1a]'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Email Address <span className="text-[#C51B18]">*</span>
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
                className={`w-full px-4 py-3 bg-[#f4f1ea] border text-sm text-[#1a1a1a] focus:outline-none focus:bg-white transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#dcd8cc] focus:border-[#1a1a1a]'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 07123 456789"
                className="w-full px-4 py-3 bg-[#f4f1ea] border border-[#dcd8cc] text-sm text-[#1a1a1a] focus:border-[#1a1a1a] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-1.5">
              <label htmlFor="contact-project-type" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Project Category
              </label>
              <select
                id="contact-project-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-[#f4f1ea] border border-[#dcd8cc] text-sm text-[#1a1a1a] focus:border-[#1a1a1a] focus:bg-white focus:outline-none transition-colors"
              >
                <option value="Residential Extension">Residential Extension</option>
                <option value="Bespoke New Build">Bespoke New Build</option>
                <option value="Heritage / Conservation Renovation">Heritage / Conservation Renovation</option>
                <option value="Planning Permission & Appeals">Planning Permission & Appeals</option>
                <option value="Building Regulations Package">Building Regulations Package</option>
                <option value="3D Architectural Visualisation & BIM">3D Architectural Visualisation & BIM</option>
                <option value="Commercial / Development Feasibility">Commercial / Development Feasibility</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label htmlFor="contact-location" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Site Location / Postcode
              </label>
              <input
                id="contact-location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Harborne, Birmingham / B17"
                className="w-full px-4 py-3 bg-[#f4f1ea] border border-[#dcd8cc] text-sm text-[#1a1a1a] focus:border-[#1a1a1a] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Budget Range */}
            <div className="space-y-1.5">
              <label htmlFor="contact-budget" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
                Estimated Project Budget
              </label>
              <select
                id="contact-budget"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className="w-full px-4 py-3 bg-[#f4f1ea] border border-[#dcd8cc] text-sm text-[#1a1a1a] focus:border-[#1a1a1a] focus:bg-white focus:outline-none transition-colors"
              >
                <option value="Under £50,000">Under £50,000</option>
                <option value="£50,000 - £150,000">£50,000 - £150,000</option>
                <option value="£150,000 - £350,000">£150,000 - £350,000</option>
                <option value="£350,000 - £750,000">£350,000 - £750,000</option>
                <option value="£750,000+">£750,000+</option>
                <option value="To be determined / Feasibility">To be determined / Feasibility</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
              Project Overview / Brief <span className="text-[#C51B18]">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Tell us about the property, your timeline, key spatial goals, or any planning constraints..."
              className={`w-full px-4 py-3 bg-[#f4f1ea] border text-sm text-[#1a1a1a] focus:outline-none focus:bg-white transition-colors ${
                errors.message ? 'border-red-500' : 'border-[#dcd8cc] focus:border-[#1a1a1a]'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
              </p>
            )}
          </div>

          {/* File Upload Simulator (supports drag-and-drop and click) */}
          <div className="space-y-2">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#1a1a1a] block">
              Attach Site Plans, Sketches, or Photos (Optional)
            </label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed p-6 text-center transition-colors cursor-pointer ${
                isDragging ? 'border-[#1a1a1a] bg-[#edeae1]' : 'border-[#dcd8cc] bg-[#f4f1ea] hover:border-[#1a1a1a]'
              }`}
              onClick={() => document.getElementById('file-upload-input')?.click()}
            >
              <input
                id="file-upload-input"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.dwg"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-6 h-6 text-[#736e65] mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-[#1a1a1a] font-medium">
                Drag and drop files here, or <span className="underline underline-offset-4">browse files</span>
              </p>
              <p className="text-[11px] font-mono text-[#736e65] mt-1">
                Supports PDF, JPG, PNG, CAD files (Max 25MB per file)
              </p>
            </div>

            {/* Attached file chips */}
            {files.length > 0 && (
              <div className="space-y-1.5 pt-2">
                {files.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-[#f4f1ea] border border-[#dcd8cc] text-xs">
                    <span className="flex items-center gap-2 text-[#1a1a1a] truncate max-w-[280px]">
                      <FileCheck className="w-3.5 h-3.5 text-[#1a1a1a] shrink-0" />
                      {f.name} ({(f.size / (1024 * 1024)).toFixed(2)} MB)
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="p-1 text-[#736e65] hover:text-red-600 transition-colors cursor-pointer"
                      aria-label={`Remove file ${f.name}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              id="submit-enquiry-form-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Consultation Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
