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
    {
      id: 'exam',
      title: 'New Patient Exam & Cleaning',
      desc: 'A complete dental exam and cleaning, including X-rays, oral cancer screening, iTero scan, at-home tips, a treatment plan & more.',
      icon: (
        <svg className="w-12 h-12 text-teal-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-teal-50'
    },
    {
      id: 'emergency',
      title: 'Dental Emergency',
      desc: 'Are you experiencing redness, swelling, or severe pain? Our dedicated team is here for you.',
      icon: (
        <svg className="w-12 h-12 text-red-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bg: 'bg-red-50'
    },
    {
      id: 'consultation',
      title: 'General Consultation',
      desc: 'Consult our experienced dental team today for help with all of your oral health needs.',
      icon: (
        <svg className="w-12 h-12 text-slate-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bg: 'bg-slate-100'
    },
    {
      id: 'invisalign',
      title: 'Invisalign Consultation',
      desc: 'Want a straighter smile, but don\'t want the hassle of braces? Invisalign could be right for you. Let us help you decide your next steps.',
      icon: (
        <svg className="w-12 h-12 text-blue-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-blue-50'
    },
    {
      id: 'dentures',
      title: 'Dentures Consultation',
      desc: 'Are you unhappy with the appearance of your smile? Find out if you are a good candidate for dentures.',
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-purple-50'
    }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['Morning (8am - 12pm)', 'Afternoon (12pm - 4pm)', 'Evening (4pm - 7pm)'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Intro Text & Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 text-left md:text-center">Schedule your Appointment</h1>
          
          {/* Progress Bar */}
          <div className="mb-12 max-w-3xl mx-auto relative mt-10">
            <div className="flex items-center justify-between relative px-4 md:px-12">
              <div className="absolute left-10 right-10 top-[15px] h-[2px] bg-slate-300 z-0"></div>
              
              {[ 
                { num: 1, label: 'Appointment Type' }, 
                { num: 2, label: 'Pick a Time' }, 
                { num: 3, label: 'Complete your booking!' } 
              ].map((item) => (
                <div key={item.num} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-3 shadow-sm transition-colors ${
                      step >= item.num ? 'bg-[#8a3324] text-white' : 'bg-slate-500 text-white'
                    }`}
                  >
                    {item.num}
                  </div>
                  <span className={`font-semibold text-xs md:text-sm text-center max-w-[120px] md:max-w-none transition-colors ${
                    step >= item.num ? 'text-slate-900' : 'text-slate-500'
                  }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed text-left md:text-center">
            Schedule your appointment at a time that's convenient for you! Just select an appointment option below
            and take a few minutes to provide us with information such as your name, date of birth, and phone number.
            You can fill out your paperwork ahead of time via the New Patients tab above or wait to complete it in-
            office. We can't wait to see you!
          </p>
        </div>

        {/* Multi-Step Form */}
        <div className="relative overflow-hidden min-h-[600px]">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Appointment Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  
                  {/* Toggle: New vs Returning */}
                  <div className="flex justify-center mb-16">
                    <fieldset className="border border-slate-300 rounded-xl p-2 pb-0 pt-6 relative inline-block bg-slate-50 shadow-sm">
                      <legend className="text-lg md:text-xl font-serif font-bold text-slate-800 px-4 text-center absolute -top-4 left-1/2 -translate-x-1/2 bg-white w-max">Are you a new or returning patient?</legend>
                      <div className="flex relative mt-4 md:mt-2 mb-2 p-1 bg-gray-200 rounded-lg overflow-hidden flex-col md:flex-row">
                        <div 
                          className="hidden md:block absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gray-300 rounded-md transition-transform duration-300 ease-in-out z-0"
                          style={{ transform: formData.patientType === 'returning' ? 'translateX(100%)' : 'translateX(0)' }}
                        ></div>
                        
                        <label className="flex-1 flex items-center justify-center py-4 px-6 md:px-10 cursor-pointer relative z-10 transition-colors">
                          <input type="radio" name="patientType" value="new" checked={formData.patientType === 'new'} onChange={handleChange} className="hidden" />
                          <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${formData.patientType === 'new' ? 'border-black bg-black' : 'border-gray-400 bg-white'}`}>
                          </div>
                          <div className={`text-left ${formData.patientType === 'new' ? 'text-black' : 'text-gray-500'}`}>
                            <span className="block text-xs md:text-sm">I am a</span>
                            <span className="block font-bold text-base md:text-lg">New Patient</span>
                          </div>
                        </label>
                        
                        <label className="flex-1 flex items-center justify-center py-4 px-6 md:px-10 cursor-pointer relative z-10 transition-colors">
                          <input type="radio" name="patientType" value="returning" checked={formData.patientType === 'returning'} onChange={handleChange} className="hidden" />
                          <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${formData.patientType === 'returning' ? 'border-black bg-black' : 'border-gray-400 bg-white'}`}>
                          </div>
                          <div className={`text-left ${formData.patientType === 'returning' ? 'text-black' : 'text-gray-500'}`}>
                            <span className="block text-xs md:text-sm">I am a</span>
                            <span className="block font-bold text-base md:text-lg">Returning Patient</span>
                          </div>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-8">Select your appointment type</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {appointmentTypes.map(type => (
                        <label 
                          key={type.id} 
                          className={`border rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-md ${
                            formData.appointmentType === type.id 
                              ? 'border-[#8a3324] ring-1 ring-[#8a3324] bg-red-50/30' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input type="radio" name="appointmentType" value={type.id} checked={formData.appointmentType === type.id} onChange={handleChange} className="hidden" />
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${type.bg}`}>
                            {type.icon}
                          </div>
                          <span className="font-bold text-slate-800 text-lg mb-2">{type.title}</span>
                          <span className="text-sm text-slate-500 leading-relaxed">{type.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNext}
                      disabled={!formData.appointmentType}
                      className="bg-[#dfb15b] text-white font-bold py-3 px-10 rounded-md hover:bg-[#cda049] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
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
                  className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-10"
                >
                  <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Preferred Date & Time</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Day of the Week</label>
                      <select 
                        name="preferredDay" 
                        value={formData.preferredDay} 
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-md p-4 focus:ring-2 focus:ring-[#dfb15b] focus:border-transparent outline-none bg-slate-50"
                      >
                        <option value="">Select a day...</option>
                        {days.map(day => <option key={day} value={day}>{day}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Time of Day</label>
                      <div className="grid grid-cols-1 gap-3">
                        {times.map(time => (
                          <label key={time} className={`border p-4 rounded-lg cursor-pointer transition-colors flex items-center gap-3 ${formData.preferredTime === time ? 'border-[#dfb15b] bg-[#dfb15b]/10' : 'border-slate-200 hover:border-slate-300'}`}>
                            <input type="radio" name="preferredTime" value={time} checked={formData.preferredTime === time} onChange={handleChange} className="accent-[#dfb15b] w-4 h-4" />
                            <span className="font-medium text-slate-800">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-between items-center">
                    <button type="button" onClick={handlePrev} className="text-slate-500 font-semibold hover:text-slate-800 transition-colors px-4 py-2">
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNext}
                      disabled={!formData.preferredDay || !formData.preferredTime}
                      className="bg-[#dfb15b] text-white font-bold py-3 px-8 rounded-md hover:bg-[#cda049] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
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
                  className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-10"
                >
                  <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Patient Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none bg-slate-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Birth</label>
                      <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none bg-slate-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none bg-slate-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none bg-slate-50" />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Do you have dental insurance?</label>
                    <div className="flex gap-6 mb-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasInsurance" value="yes" checked={formData.hasInsurance === 'yes'} onChange={handleChange} className="accent-[#dfb15b] w-4 h-4" />
                        <span className="font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasInsurance" value="no" checked={formData.hasInsurance === 'no'} onChange={handleChange} className="accent-[#dfb15b] w-4 h-4" />
                        <span className="font-medium">No</span>
                      </label>
                    </div>

                    {formData.hasInsurance === 'yes' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4">
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Insurance Provider Name</label>
                        <input type="text" name="insuranceName" value={formData.insuranceName} onChange={handleChange} className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-[#dfb15b] outline-none bg-white" placeholder="e.g. Delta Dental, Cigna..." />
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-8">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred Method of Contact</label>
                    <div className="flex flex-wrap gap-6">
                      {['text', 'phone', 'email'].map(method => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contactPreference" value={method} checked={formData.contactPreference === method} onChange={handleChange} className="accent-[#dfb15b] w-4 h-4" />
                          <span className="capitalize font-medium">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex justify-between items-center pt-8 border-t border-slate-100">
                    <button type="button" onClick={handlePrev} className="text-slate-500 font-semibold hover:text-slate-800 transition-colors px-4 py-2">
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="bg-slate-900 text-white font-bold py-4 px-10 rounded-md hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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

