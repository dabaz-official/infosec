import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true
})

const nextConfig = withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
});

export default nextConfig;
