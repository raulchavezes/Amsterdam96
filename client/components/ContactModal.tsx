import { X } from "lucide-react";
import { contact } from "@/data/guide";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center md:items-end">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      <div className="relative w-full max-w-sm mx-4 mt-12 md:mb-4 bg-white rounded-xl shadow-2xl animate-in slide-in-from-top md:slide-in-from-bottom duration-300">
        <div className="p-4">
          <div className="flex items-start justify-between mb-4">
            <h2
              className="text-[28px] font-bold leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
            >
              Any question?
            </h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t border-gray-200 mb-4" />

          <p
            className="text-base tracking-[-0.02em] mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            Don’t hesitate to message me if you have any doubt.
          </p>

          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-black text-white py-3 font-medium hover:opacity-90 transition-opacity"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Message {contact.name} on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
