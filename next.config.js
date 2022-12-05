/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env : {
    monggodb_username: 'brunosong',
    monggodb_password: '1234'
  }
}

module.exports = nextConfig
