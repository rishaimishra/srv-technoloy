import React, { useState } from 'react';
import { X, Smartphone, Monitor, Calendar, Users, Check, Star, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from './constants';
import demoImage from '../../assets/landing/hotel-interior.webp';

interface DirectBookingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectBookingDemoModal: React.FC<DirectBookingDemoModalProps> = ({ isOpen, onClose }) => {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');
  const dates = 'Oct 14 - Oct 16 (2 Nights)';
  const guests = '2 Adults';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 text-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col h-[90vh]">
        <div className="bg-slate-950 p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm sm:text-base text-white">Direct Booking Engine Demo</span>
            <span className="hidden sm:inline-block text-xs bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded border border-blue-400/30">
              Illustrative Preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-800 p-1 rounded-lg flex items-center gap-1 border border-slate-700">
              <button
                onClick={() => setDevice('mobile')}
                className={`px-2.5 py-1 text-xs font-semibold rounded flex items-center gap-1.5 transition-all ${device === 'mobile' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setDevice('desktop')}
                className={`px-2.5 py-1 text-xs font-semibold rounded flex items-center gap-1.5 transition-all ${device === 'desktop' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
            </div>

            <button onClick={onClose} className="p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex items-center justify-center">
          <div
            className={`transition-all duration-300 bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col ${
              device === 'mobile' ? 'w-[360px] h-[580px]' : 'w-full max-w-3xl h-[580px]'
            }`}
          >
            <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-white px-3 py-0.5 rounded border border-slate-300 text-slate-700 font-semibold truncate max-w-[220px]">
                🔒 pineviewheritage.com (example)
              </div>
              <div className="text-emerald-600 font-bold text-[10px]">DIRECT BOOKING</div>
            </div>

            <div className="bg-slate-900 text-white p-3 flex items-center justify-between text-xs">
              <div>
                <span className="font-extrabold text-sm tracking-tight text-amber-200">Pineview Heritage</span>
                <span className="text-[10px] text-slate-300 block -mt-0.5">Darjeeling, West Bengal</span>
              </div>
              <div className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-1 rounded text-[10px] font-bold">
                <ShieldCheck className="w-3 h-3" />
                <span>Best Rate Guaranteed</span>
              </div>
            </div>

            <div className="relative h-36 bg-slate-800 shrink-0">
              <img src={demoImage} alt="Example direct-booking site hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-bold text-sm">Mountain View Suite</h4>
                  <p className="text-[10px] text-amber-300 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    4.9 (128 Direct Reviews)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs line-through text-slate-300">₹4,800</span>
                  <span className="text-base font-extrabold text-emerald-400 block -mt-1">₹3,800</span>
                </div>
              </div>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div>
                  <label className="text-[10px] text-slate-500 font-bold uppercase block">Dates</label>
                  <div className="font-semibold text-slate-800 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{dates}</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold uppercase block">Guests</label>
                  <div className="font-semibold text-slate-800 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{guests}</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200 text-emerald-900 text-[11px] space-y-1">
                <div className="font-bold text-emerald-800 uppercase tracking-wider text-[10px]">Direct Booking Advantages:</div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Morning Darjeeling Tea &amp; Breakfast included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero OTA convenience fee + Instant WhatsApp Confirmation</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="w-full bg-slate-200 text-slate-500 font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-center cursor-default">
                  <span>Reserve Direct for ₹3,800 (example)</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-slate-950 font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>Ask Rate on WhatsApp Immediately</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>SRV Technology installs this high-converting engine on your domain with custom branding.</span>
          <a
            href={WHATSAPP_URL}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs px-4 py-2 rounded-lg uppercase tracking-wider"
          >
            Get This Engine For My Property
          </a>
        </div>
      </div>
    </div>
  );
};
