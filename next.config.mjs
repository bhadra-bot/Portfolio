/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`;
}
// For manual configuration, set repo to '/your-repo-name'
//repo = '/Bhadra_Portfolio';

const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
