"use client";

type ClientAutoplayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function ClientAutoplayVideo({
  src,
  poster,
  className
}: ClientAutoplayVideoProps) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
