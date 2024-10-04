/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**/*",
      },
    ],
  },
  // basePath:"/home", // <- basePath untuk mengubah url halaman utama
};

export default nextConfig;

/**
 * file next.config.js dibuat otomatis oleh nextjs di root folder untuk ngatur konfigurasi nextjs
 * lebih detailnya bisa baca dokumentasinya di https://nextjs.org/docs/pages/api-reference/next-config-js
 */
