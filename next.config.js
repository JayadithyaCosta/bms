module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/store',
        basePath: false,
        permanent: false
      }
    ]
  }
}
