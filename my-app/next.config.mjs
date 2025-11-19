/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents:true,
  images:{
    remotePatterns: [new URL('https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120')],

  }
};

export default nextConfig;
