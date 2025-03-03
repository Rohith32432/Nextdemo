import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
},
  images:{
   remotePatterns:[
    {
      hostname:'picsum.photos',
      protocol:'https'
    }
   ]
  } 
};

export default nextConfig;
