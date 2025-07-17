import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: { //fetch 요청 URL을 로그에 출력
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true, // 타입 오류 무시하고 build 강제 통과
  },
};

export default nextConfig;
