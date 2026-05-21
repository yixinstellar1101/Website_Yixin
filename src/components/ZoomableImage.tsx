"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function ZoomableImage({
  src,
  alt,
  className = "",
  imgClassName = ""
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
        aria-label={`Open ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`${imgClassName} transition duration-500 group-hover:scale-[1.01]`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] overflow-y-auto bg-[rgba(8,12,24,0.72)] p-4 sm:p-6 lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="relative mx-auto my-6 w-full max-w-[1560px] overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(255,255,255,0.05)] shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white transition hover:bg-[rgba(255,255,255,0.16)]"
                aria-label="Close image"
              >
                <X size={20} />
              </button>

              <img
                src={src}
                alt={alt}
                className="block h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
