import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookNow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientType: 'new',
    appointmentType: '',
    preferredDay: '',
    preferredTime: '',
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    hasInsurance: 'no',
    insuranceName: '',
    contactPreference: 'email'
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const appointmentTypes = [
    'Dental Implants',
    'Navigated Surgery',
    'Preventive Care',
    'Veneer',
    'Root Canal',
    'Extraction'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['Morning (8am - 12pm)', 'Afternoon (12pm - 4pm)', 'Evening (4pm - 7pm)'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Intro Text */}
        <div className="text-center mb-10">
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Your journey to a healthy, confident smile begins with scheduling an appointment. You can easily get started by calling our office or completing the brief form below. We accept most major PPO dental insurance plans and are happy to assist patients with many common out-of-network plans. To save time during your visit, please complete our patient forms in advance after booking with us. If you have any questions, our team is here to help–we look forward to seeing you soon!
          </p>
        </div>

        {/* Multi-Step Form */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-10 relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex mb-8 items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#dfb15b] z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                  step >= num ? 'bg-[#dfb15b] text-white' : 'bg-slate-200 text-slate-400'
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Appointment Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Step 1: Appointment Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Are you a new or returning patient?</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="patientType" value="new" checked={formData.patientType === 'new'} onChange={handleChange} className="accent-[#dfb15b]" />
                          <span>New Patient</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="patientType" value="returning" checked={formData.patientType === 'returning'} onChange={handleChange} className="accent-[#dfb15b]" />
                          <span>Returning Patient</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Reason for Visit (Appointment Type)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {appointmentTypes.map(type => (
                          <label key={type} className={`border p-3 rounded-lg cursor-pointer transition-colors ${formData.appointmentType === type ? 'border-[#dfb15b] bg-[#dfb15b]/10' : 'border-slate-200 hover:border-slate-300'}`}>
                            <input type="radio" name="appointmentType" value={type} checked={formData.appointmentType === type} onChange={handleChange} className="hidden" />
                            <span className="font-medium text-slate-800">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNext}
                      disabled={!formData.appointmentType}
                      className="bg-[#dfb15b] text-black font-bold py-3 px-8 rounded-md hover:bg-[#cda049] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Step 2: Preferred Date & Time</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Day of the Week</label>
                      <select 
                        name="preferredDay" 
                        value={formData.preferredDay} 
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] focus:border-transparent outline-none"
                      >
                        <option value="">Select a day...</option>
                        {days.map(day => <option key={day} value={day}>{day}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Time of Day</label>
                      <div className="grid grid-cols-1 gap-3">
                        {times.map(time => (
                          <label key={time} className={`border p-4 rounded-lg cursor-pointer transition-colors ${formData.preferredTime === time ? 'border-[#dfb15b] bg-[#dfb15b]/10' : 'border-slate-200 hover:border-slate-300'}`}>
                            <input type="radio" name="preferredTime" value={time} checked={formData.preferredTime === time} onChange={handleChange} className="hidden" />
                            <span className="font-medium text-slate-800">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button type="button" onClick={handlePrev} className="text-slate-500 font-semibold hover:text-slate-800 transition-colors">
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNext}
                      disabled={!formData.preferredDay || !formData.preferredTime}
                      className="bg-[#dfb15b] text-black font-bold py-3 px-8 rounded-md hover:bg-[#cda049] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Patient Information */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Step 3: Patient Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Birth</label>
                      <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Do you have dental insurance?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasInsurance" value="yes" checked={formData.hasInsurance === 'yes'} onChange={handleChange} className="accent-[#dfb15b]" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasInsurance" value="no" checked={formData.hasInsurance === 'no'} onChange={handleChange} className="accent-[#dfb15b]" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {formData.hasInsurance === 'yes' && (
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Insurance Provider Name</label>
                      <input type="text" name="insuranceName" value={formData.insuranceName} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none" placeholder="e.g. Delta Dental, Cigna..." />
                    </div>
                  )}

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Method of Contact</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactPreference" value="text" checked={formData.contactPreference === 'text'} onChange={handleChange} className="accent-[#dfb15b]" />
                        <span>Text</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactPreference" value="phone" checked={formData.contactPreference === 'phone'} onChange={handleChange} className="accent-[#dfb15b]" />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactPreference" value="email" checked={formData.contactPreference === 'email'} onChange={handleChange} className="accent-[#dfb15b]" />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-100">
                    <button type="button" onClick={handlePrev} className="text-slate-500 font-semibold hover:text-slate-800 transition-colors">
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="bg-black text-[#dfb15b] font-bold py-4 px-10 rounded-md hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Submit Booking Request
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </form>
        </div>
      </div>
    </main>
  );
}
