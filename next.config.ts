import nextra from 'nextra'

const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      throwOnError: false,
      output: 'mathml',
    }
  },
  defaultShowCopyCode: true
})

const nextConfig = withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
});

export default nextConfig;
