/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

// This will automatically set the repo to '/Portfolio' during GitHub Actions deployment
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`;
}

const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;