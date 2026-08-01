import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle2 } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('2026-08-05');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [brand, setBrand] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'booked' | 'error'>('idle');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!brand.trim()) errs.brand = 'Tea brand name is required';
    if (!phone.trim() || phone.length < 8) errs.phone = 'Valid phone/WhatsApp number required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/landing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'tea',
          name,
          businessName: brand,
          phone,
          detail: 'Consultation call request',
          note: `Requested slot: ${selectedDate} at ${selectedTime}`,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('booked');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {status === 'booked' ? (
          <div className="text-center space-y-5 py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Consultation Requested!</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We've received your request for <span className="font-semibold text-slate-900 font-mono">{selectedDate}</span> at{' '}
                <span className="font-semibold text-slate-900 font-mono">{selectedTime}</span> for <span className="font-semibold text-slate-900">{brand}</span>.
                Our team will confirm this slot with you shortly.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left space-y-1.5 text-slate-600">
              <div className="font-bold text-slate-900">What to expect:</div>
              <div>• We'll confirm your slot via WhatsApp/phone within a few hours</div>
              <div>• Format: Google Meet or phone call to {phone}</div>
              <div>• Agenda: Shopify storefront review, Meta ad audit &amp; WhatsApp replenishment demo</div>
            </div>

            <button onClick={onClose} className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full hover:from-blue-700 hover:to-indigo-700">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">1-on-1 Tea Brand Strategy Call</span>
              <h3 className="text-2xl font-bold text-slate-900">Schedule Your D2C Growth Call</h3>
              <p className="text-xs text-slate-600">Pick a convenient time to speak directly with our tea brand growth strategists.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" /> Select Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 font-medium cursor-pointer"
                >
                  <option value="10:00 AM">10:00 AM IST</option>
                  <option value="11:30 AM">11:30 AM IST</option>
                  <option value="02:30 PM">02:30 PM IST</option>
                  <option value="04:00 PM">04:00 PM IST</option>
                  <option value="06:00 PM">06:00 PM IST</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full text-xs py-2.5 px-3 bg-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:border-blue-600`}
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tea Brand Name (e.g. Vedic Leaf, Chai Craft)"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className={`w-full text-xs py-2.5 px-3 bg-white border ${errors.brand ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:border-blue-600`}
                />
                {errors.brand && <p className="text-[11px] text-red-500 mt-1">{errors.brand}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number (+91...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full text-xs py-2.5 px-3 bg-white border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:border-blue-600`}
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-60"
            >
              {status === 'submitting' ? 'SENDING REQUEST...' : 'CONFIRM BRAND STRATEGY CALL'}
            </button>
            {status === 'error' && <p className="text-xs text-red-600 text-center">Something went wrong. Please try WhatsApp instead.</p>}
          </form>
        )}
      </div>
    </div>
  );
};
