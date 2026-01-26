import { X } from "lucide-react";

interface VehicleAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleAccessModal({ isOpen, onClose }: VehicleAccessModalProps) {
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
              Acceso en carro
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
            <p
              className="text-sm tracking-[-0.02em] text-left"
              style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
            >
              ¿Si accedes en carro estas son las instrucciones de llegada:
            </p>

            <div className="border-t border-gray-200" />

            <div className="space-y-3 text-xs tracking-[-0.02em] text-left"
              style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}>
              <p>
                El edificio cuenta con estacionamiento de visitas fuera del edificio. Tendrás que estacionar primeramente en el estacionamiento de visitas para acceder al departamento.
              </p>
              <p>
                Una vez en el departamento podrás encontrar el control de acceso vehicular, éste control abre el portón de acceso de los carros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
