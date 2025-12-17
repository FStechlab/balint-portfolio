/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = process.env.REPOSITORY_NAME || 'balint-portfolio';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a project repository (not username.github.io), uncomment these:
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}` : '',
};

export default nextConfig;

