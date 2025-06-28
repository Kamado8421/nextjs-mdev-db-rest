import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },

  eslint: {
    // ⚠️ Permite continuar o build mesmo com erros de lint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
