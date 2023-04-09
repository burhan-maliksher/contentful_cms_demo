/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    CONTENTFUL_SPACE_ID:"1x0s5hl0tnrp",
    CONTENTFUL_ENVIRONMENT:"master",
  }
}

module.exports = nextConfig
