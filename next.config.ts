import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Garante que o Turbopack use a raiz correta do projeto
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
