import { X } from "lucide-react";
import { wifi } from "@/data/guide";

interface WiFiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WiFiModal({ isOpen, onClose }: WiFiModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center md:items-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm mx-4 mt-12 md:mb-4 bg-white rounded-xl shadow-2xl animate-in slide-in-from-top md:slide-in-from-bottom duration-300">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h2 
              className="text-[28px] font-bold leading-tight tracking-[-0.02em]"
              style={{ fontFamily: 'Merriweather, serif', color: '#212530' }}
            >
              Wi Fi Network
            </h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-4" />

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span
                className="text-base tracking-[-0.02em]"
                style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
              >
                Wi Fi
              </span>
              <span
                className="text-sm font-bold tracking-[-0.02em]"
                style={{ fontFamily: 'Noto Sans, sans-serif', color: '#212530' }}
              >
                {wifi.primary.name}
              </span>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex items-center justify-between">
              <span 
                className="text-base tracking-[-0.02em]"
                style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
              >
                Password
              </span>
              <span 
                className="text-sm font-bold tracking-[-0.02em]"
                style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
              >
                {wifi.primary.password}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
