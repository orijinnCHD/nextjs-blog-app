/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pour le chargement de l'image
  // images:{
  //   loader:"akamai",
  //   path:"",
  //   domains: ['localhost'],
  // }

  // images:{
  //   remotePatterns:[
  //     {
  //       protocol:'http',
  //       hostname:'localhost',
  //       port:'3000',
  //       // pathname:"img/",
  //     }
      
  //   ]
  // }
  images:{
      // loader:"akamai",
      // path:"",
      domains: ['localhost'],
    }
}

module.exports = nextConfig
