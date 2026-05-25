"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ImageGalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate
}: ImageGalleryLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && activeIndex > 0) {
        onNavigate(activeIndex - 1);
      }

      if (event.key === "ArrowRight" && activeIndex < images.length - 1) {
        onNavigate(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (activeIndex === null) {
    return null;
  }

  const currentImage = images[activeIndex];
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="group fixed inset-0 z-[90] overflow-y-auto bg-[rgba(8,12,24,0.72)] p-4 sm:p-6 lg:p-10"
      >
        <div className="flex min-h-full items-center justify-center py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative mx-auto my-6 w-full max-w-[1560px] overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(255,255,255,0.04)] shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
          >
            {canGoPrev ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate(activeIndex - 1);
                }}
                className="group/prev absolute left-0 top-0 z-10 h-full w-1/2 focus-visible:outline-none"
                aria-label="Previous image"
              >
                <span className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white opacity-0 transition hover:bg-[rgba(255,255,255,0.16)] group-hover/prev:opacity-100 focus-visible:opacity-100">
                  <ChevronLeft size={20} />
                </span>
              </button>
            ) : null}

            {canGoNext ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate(activeIndex + 1);
                }}
                className="group/next absolute right-0 top-0 z-10 h-full w-1/2 focus-visible:outline-none"
                aria-label="Next image"
              >
                <span className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white opacity-0 transition hover:bg-[rgba(255,255,255,0.16)] group-hover/next:opacity-100 focus-visible:opacity-100">
                  <ChevronRight size={20} />
                </span>
              </button>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white transition hover:bg-[rgba(255,255,255,0.16)]"
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
