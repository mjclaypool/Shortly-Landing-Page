/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Shortly-Landing-Page/",
  output: 'export', // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/shorten-link',
        destination: 'https://cleanuri.com/api/v1/shorten',
      },
    ]
  },
}

export default nextConfig