/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // existing
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },

      // added domains for friend images
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "64.media.tumblr.com" },
      { protocol: "https", hostname: "ca-times.brightspotcdn.com" },
      { protocol: "https", hostname: "robbreport.com" },
    ],
  },
};

export default nextConfig;
