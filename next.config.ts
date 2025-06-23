import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
        protocol:'https',
        hostname: 'https://deploy-pos-nestjs-xi6a.onrender.com/products',
      },
      {
        protocol:'https',
        hostname:'res.cloudinary.com'
      }
    ]
  }
  
};

export default nextConfig;
