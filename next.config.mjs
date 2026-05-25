/** @type {import("next").NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  // Keep a separate cache directory for local dev when requested, but always
  // emit the production build to Next.js' default `.next` for Vercel.
  distDir: isDevelopment ? process.env.NEXT_DIST_DIR || ".next" : ".next",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
