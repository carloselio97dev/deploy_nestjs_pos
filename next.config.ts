import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
        protocol:'https',
        hostname: 'deploy-pos-nestjs-xi6a.onrender.com',
      },
      {
        protocol:'https',
        hostname:'res.cloudinary.com'
      },
       {
        protocol: 'http', // Agrega esta configuración 👇
        hostname: 'localhost',
        port: '3000',     // Si estás sirviendo imágenes en ese puerto
        pathname: '/img/**', // Ajusta según la ruta
      },
    ]
  }
  
};

export default nextConfig;
