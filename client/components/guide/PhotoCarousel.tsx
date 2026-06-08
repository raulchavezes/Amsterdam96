interface Photo {
  label: string;
  image?: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

/** Horizontal snap-scroll of apartment photos with a label overlay on each. */
export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  return (
    <div className="-mx-6 md:-mx-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      <div className="flex gap-3 px-6 md:px-8 pb-1">
        {photos.map((photo, i) => (
          <div
            key={`${photo.label}-${i}`}
            className="relative shrink-0 snap-start w-64 h-44 overflow-hidden rounded-xl shadow-sm"
          >
            {photo.image ? (
              <img
                src={photo.image}
                alt={photo.label}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF9F39 0%, rgba(178, 178, 245, 0.6) 100%)",
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <span
              className="absolute bottom-2 left-3 text-sm font-medium text-white"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {photo.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
