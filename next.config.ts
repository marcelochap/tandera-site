import type { NextConfig } from "next";

const securityHeaders = [
  // Impede que a página seja embutida em iframes externos (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Impede sniffing de MIME type pelo navegador
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controla quais informações são enviadas no cabeçalho Referer
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desativa recursos de hardware desnecessários para este site
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
