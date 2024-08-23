/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
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